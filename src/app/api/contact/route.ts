import { NextRequest, NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

// Contact form -> operator inbox. Same plumbing as the chatbot inbox:
// Discord webhook for real-time phone pickup, local JSONL as the backstop.
// Works with zero configured services and no public email address.
export async function POST(request: NextRequest) {
  let email = "";
  let message = "";
  let topic = "";
  let locale = "en";
  try {
    const body = await request.json();
    email = typeof body.email === "string" ? body.email.trim().slice(0, 200) : "";
    message = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "";
    topic = typeof body.topic === "string" ? body.topic.trim().slice(0, 60) : "";
    locale = typeof body.locale === "string" ? body.locale : "en";
  } catch {
    return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || message.length < 5) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  try {
    const dir = path.join(process.cwd(), ".chatlog");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "contact.jsonl"),
      JSON.stringify({ ts: new Date().toISOString(), email, topic, message, locale }) + "\n",
      "utf8",
    );
  } catch {
    /* best-effort */
  }
  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `**[contact${topic ? ` · ${topic}` : ""}]** ${email} (${locale})\n${message.slice(0, 1500)}`,
        }),
      });
    } catch {
      /* best-effort */
    }
  }
  return NextResponse.json({ ok: true });
}
