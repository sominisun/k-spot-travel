import { NextRequest, NextResponse } from "next/server";
import { allRestaurants, allRoutes, allShows, buildSearchIndex } from "@/lib/data";
import { FAQ } from "@/data/faq";
import { logChat } from "@/lib/chat-log";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

interface IncomingMessage {
  role: "user" | "assistant";
  text: string;
}

const MAX_TURNS = 10;

export async function POST(request: NextRequest) {
  let messages: IncomingMessage[];
  let locale = "en";
  try {
    const body = await request.json();
    locale = typeof body.locale === "string" ? body.locale : "en";
    messages = (Array.isArray(body.messages) ? body.messages : [])
      .filter(
        (m: IncomingMessage) =>
          (m?.role === "user" || m?.role === "assistant") && typeof m?.text === "string",
      )
      .slice(-MAX_TURNS);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser) {
    return NextResponse.json({ error: "No user message" }, { status: 400 });
  }
  const q = lastUser.text;

  // 1) FAQ fast path — operator-curated answers win.
  const faqHit = matchFaq(q);
  if (faqHit) {
    void logChat({ ts: new Date().toISOString(), kind: "question", locale, question: q, answer: faqHit.answer, matched: "faq" });
    return NextResponse.json({ reply: faqHit.answer, links: faqHit.links });
  }

  // 2) Claude concierge when a key is configured.
  if (process.env.ANTHROPIC_API_KEY) {
    try {
      const out = await claudeReply(messages, locale);
      void logChat({ ts: new Date().toISOString(), kind: "question", locale, question: q, answer: out.reply, matched: "claude" });
      return NextResponse.json(out);
    } catch {
      /* fall through */
    }
  }

  // 3) Keyword search over the site catalog.
  const out = localReply(q);
  void logChat({
    ts: new Date().toISOString(),
    kind: "question",
    locale,
    question: q,
    answer: out.reply,
    matched: out.links.length ? "search" : "none",
  });
  return NextResponse.json(out);
}

const CJK = /[぀-ヿ㐀-鿿가-힣]/;

function matchFaq(query: string) {
  const ql = query.toLowerCase();
  let best: { score: number; entry: (typeof FAQ)[number] } | null = null;
  for (const entry of FAQ) {
    let score = 0;
    for (const k of entry.keywords) {
      if (!ql.includes(k)) continue;
      // Distinctive keywords count double so one specific token can trigger
      // a match on its own: CJK tokens of 4+ chars (show titles like
      // 오징어게임; spaces excluded so "가는 법" stays generic) and long
      // Latin phrases (10+ chars, e.g. "cambio de divisas") are strong
      // evidence; short generic tokens still need a pair.
      const cjkLen = k.replace(/\s+/g, "").length;
      score += (CJK.test(k) && cjkLen >= 4) || k.length >= 10 ? 2 : 1;
    }
    if (score >= 2 && (!best || score > best.score)) best = { score, entry };
  }
  return best?.entry ?? null;
}

async function claudeReply(messages: IncomingMessage[], locale: string) {
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  const client = new Anthropic();

  const digest = [
    "SHOWS (title | url | status):",
    ...allShows.map((s) => `- ${s.title} | /shows/${s.slug} | ${s.status}`),
    "ROUTES (title | url | days | city):",
    ...allRoutes.map((r) => `- ${r.title} | /routes/${r.slug} | ${r.days}d | ${r.city}`),
    "RESTAURANTS (name | url | booking):",
    ...allRestaurants.map((r) => `- ${r.name} | /food/${r.slug} | ${r.bookingMethod.slice(0, 80)}`),
    "PAGES: /planner (AI trip planner; Route Pass $4.90 adds timed PDF), /beauty, /guide, /map, /quiz, /stamps, /community (Discord).",
  ].join("\n");

  const system = `You are the Editor of ${SITE.name} (${SITE.slogan}) — a warm, precise travel editor, never a salesy bot. Answer questions about Korea travel around K-content: filming locations, itineraries, food (incl. Culinary Class Wars bookings), K-beauty, logistics. RULES: reply in the language of the user's last message (site locale hint: ${locale}); under 130 words; ground every recommendation in the catalog below and never invent locations; if outside Korea travel, redirect gently. End with at most 3 links formatted EXACTLY as: LINKS: label1|href1; label2|href2\n\n${digest}`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 500,
    system,
    messages: messages.map((m) => ({ role: m.role, content: m.text })),
  });

  const raw = response.content
    .filter((b) => b.type === "text")
    .map((b) => (b.type === "text" ? b.text : ""))
    .join("");

  const linkMatch = raw.match(/LINKS:\s*(.+)$/m);
  const reply = raw.replace(/LINKS:\s*.+$/m, "").trim();
  const links = linkMatch
    ? linkMatch[1]
        .split(";")
        .map((pair) => {
          const [label, href] = pair.split("|").map((s) => s.trim());
          return label && href?.startsWith("/") ? { label, href } : null;
        })
        .filter((x): x is { label: string; href: string } => x !== null)
        .slice(0, 3)
    : [];
  return { reply, links };
}

function localReply(query: string) {
  const docs = buildSearchIndex();
  const terms = (query ?? "")
    .toLowerCase()
    .split(/[^a-z0-9가-힣ぁ-んァ-ン一-龯]+/)
    .filter((t) => t.length > 2);

  const scored = docs
    .map((doc) => {
      const hay = `${doc.title} ${doc.text}`.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (doc.title.toLowerCase().includes(t)) score += 3;
        else if (hay.includes(t)) score += 1;
      }
      return { doc, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (scored.length === 0) {
    return {
      reply:
        "I couldn't find a direct match in our guides. The Travel Guide covers transport, money and bookings — and the Planner turns your watchlist into a day-by-day route. For anything niche, the community answers fast.",
      links: [
        { label: "Travel Guide", href: "/guide" },
        { label: "Trip Planner", href: "/planner" },
        { label: "Ask the community", href: "/community" },
      ],
    };
  }

  return {
    reply:
      "Here's where our guides cover that:\n" +
      scored.map((s) => `• ${s.doc.title}`).join("\n") +
      "\n\nOpen any of these for the verified details — and the Planner can weave them into an itinerary.",
    links: scored.map((s) => ({ label: s.doc.title, href: s.doc.href })),
  };
}
