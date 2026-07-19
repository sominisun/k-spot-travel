import { NextRequest, NextResponse } from "next/server";
import { paymentsConfigured, verifyPassToken } from "@/lib/pass-token";

export const runtime = "nodejs";

// @react-pdf/renderer AND React are loaded at runtime through a dynamic
// import the bundler cannot see (new Function). Why: Turbopack externalizes
// react-pdf by default and its junction step fails on this exFAT dev drive;
// bundling it breaks its reconciler; and even createRequire gets intercepted.
// Loading BOTH react and react-pdf from node_modules keeps the element tree
// and the reconciler on one React copy. Vercel ships the dependency closure
// via outputFileTracingIncludes (next.config).
const importRT = new Function("m", "return import(m)") as (m: string) => Promise<unknown>;
type RP = typeof import("@react-pdf/renderer");
let RPm: RP;
let h: typeof import("react").createElement;
let enginePromise: Promise<void> | null = null;
function ensureEngine(): Promise<void> {
  if (!enginePromise) {
    enginePromise = (async () => {
      RPm = (await importRT("@react-pdf/renderer")) as RP;
      const ReactRT = (await importRT("react")) as typeof import("react");
      h = ReactRT.createElement;
    })();
  }
  return enginePromise;
}
// Lazy component accessors (RPm is set by ensureEngine before any render).
const C = {
  get Document() { return RPm.Document; },
  get Page() { return RPm.Page; },
  get Text() { return RPm.Text; },
  get View() { return RPm.View; },
};

interface PdfStop {
  time: string;
  label: string;
  note: string;
  kind?: "spot" | "meal" | "evening";
  address?: string;
  howToGet?: string;
  koreanName?: string;
}
interface PdfDay { day: number; theme: string; stops: PdfStop[] }
interface PdfPayload {
  title?: string;
  days?: PdfDay[];
  deadlines?: { name: string; booking: string }[];
  email?: string;
  passToken?: string;
  startDate?: string; // yyyy-mm-dd
  shows?: string[];
  pace?: string;
}

// Obangsaek (오방색) — Korea's five cardinal colors — as the design signature.
const OB = {
  blue: "#1E3A6E", // 청
  red: "#C8102E", // 적
  yellow: "#D9A022", // 황
  white: "#FFFFFF", // 백
  black: "#16181D", // 흑
};
const CELADON = "#4A7A6D";
const SOFT = "#52565F";
const FAINT = "#94989E";
const LINE = "#E5E7EB";
const BAND = "#F7F8FA";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseStart(sd?: string): Date {
  if (sd && /^\d{4}-\d{2}-\d{2}$/.test(sd)) {
    const d = new Date(`${sd}T09:00:00Z`);
    if (!Number.isNaN(d.getTime())) return d;
  }
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + 14);
  return d;
}
function addDays(d: Date, n: number): Date {
  const x = new Date(d);
  x.setUTCDate(x.getUTCDate() + n);
  return x;
}
function fmt(d: Date): string {
  return `${WEEKDAYS[d.getUTCDay()]}, ${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`;
}
function season(d: Date): "spring" | "summer" | "autumn" | "winter" {
  const m = d.getUTCMonth() + 1;
  return m >= 3 && m <= 5 ? "spring" : m >= 6 && m <= 8 ? "summer" : m >= 9 && m <= 11 ? "autumn" : "winter";
}
const PACK: Record<string, string[]> = {
  spring: ["Light layers + one warm jacket (mornings dip)", "Fine-dust mask for hazy days", "Comfortable walking shoes (10k+ steps a day)"],
  summer: ["Breathable clothes + compact umbrella (monsoon bursts)", "Sunscreen and a hat - queues are outdoors", "A cooling towel; cafes are your 2pm refuge"],
  autumn: ["Layers: warm days, cold evenings", "Camera space - this is Korea's cinematic season", "Comfortable walking shoes (10k+ steps a day)"],
  winter: ["Real winter coat, gloves, heat packs (any CVS)", "Slip-resistant shoes for icy mornings", "Lip balm and moisturizer - the air is dry"],
};

// Fonts: build-time-subset Noto Sans KR (scripts/subset-fonts.mjs).
let fontsRegistered = false;
function registerFonts(origin: string) {
  if (fontsRegistered) return;
  RPm.Font.register({
    family: "NotoKR",
    fonts: [
      { src: `${origin}/fonts/NotoSansKR-Regular.ttf`, fontWeight: 400 },
      { src: `${origin}/fonts/NotoSansKR-Bold.ttf`, fontWeight: 700 },
    ],
  });
  RPm.Font.registerHyphenationCallback((word: string) => [word]);
  fontsRegistered = true;
}

// react-pdf accepts plain style objects; no StyleSheet.create needed.
const s = {
  page: { fontFamily: "NotoKR", fontSize: 9.5, color: OB.black, paddingTop: 42, paddingBottom: 64, paddingHorizontal: 48 },
  stripeRow: { flexDirection: "row", height: 5, borderWidth: 0.6, borderColor: OB.black },
  seg: { flex: 1 },
  footer: { position: "absolute", bottom: 28, left: 48, right: 48, flexDirection: "row", alignItems: "center" },
  footStripe: { flexDirection: "row", height: 4, width: 60, borderWidth: 0.5, borderColor: OB.black, marginRight: 10 },
  footText: { fontSize: 7.5, color: FAINT },
  brandRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginTop: 10 },
  brand: { fontSize: 11, fontWeight: 700, letterSpacing: 3 },
  est: { fontSize: 8.5, color: FAINT },
  h1: { fontSize: 38, fontWeight: 700, marginTop: 44, letterSpacing: 0.5 },
  coverSub: { fontSize: 14, color: SOFT, marginTop: 4 },
  factCard: { backgroundColor: BAND, borderLeftWidth: 4, borderLeftColor: OB.blue, padding: 14, marginTop: 26 },
  factRow: { flexDirection: "row", marginBottom: 7 },
  factKey: { width: 86, fontSize: 8.5, fontWeight: 700, color: OB.blue, paddingTop: 1.5 },
  factVal: { flex: 1, fontSize: 10.5 },
  insideTitle: { fontSize: 10, fontWeight: 700, marginTop: 28, marginBottom: 10 },
  bulletRow: { flexDirection: "row", marginBottom: 7, alignItems: "flex-start" },
  bulletSq: { width: 6, height: 6, backgroundColor: OB.yellow, marginTop: 3.5, marginRight: 9 },
  bulletTx: { flex: 1, fontSize: 10, color: SOFT, lineHeight: 1.45 },
  coverBottom: { position: "absolute", left: 48, right: 48, bottom: 84, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  slogan: { fontSize: 10, fontWeight: 700, color: OB.blue },
  preparedBy: { fontSize: 8.5, color: FAINT, marginTop: 4 },
  seal: { width: 40, height: 40, backgroundColor: OB.red, alignItems: "center", justifyContent: "center" },
  sealTx: { color: OB.white, fontSize: 13, fontWeight: 700, lineHeight: 1.15 },
  dayBand: { backgroundColor: OB.blue, flexDirection: "row", alignItems: "center", paddingHorizontal: 13, paddingVertical: 9 },
  dayNum: { color: OB.white, fontSize: 14, fontWeight: 700, marginRight: 14 },
  dayTheme: { color: "#C7D2E4", fontSize: 10, fontWeight: 700, flex: 1 },
  dayDate: { color: OB.white, fontSize: 9.5 },
  stopRow: { flexDirection: "row" },
  timeCol: { width: 40, paddingTop: 1 },
  timeTx: { fontSize: 9.5, fontWeight: 700, color: OB.blue },
  railCol: { width: 18, alignItems: "center" },
  rail: { position: "absolute", top: 4, bottom: -4, width: 1, backgroundColor: LINE },
  dot: { width: 9, height: 9, borderRadius: 4.5, marginTop: 2 },
  stopBody: { flex: 1, paddingBottom: 15 },
  stopHead: { flexDirection: "row", alignItems: "baseline", flexWrap: "wrap" },
  stopLabel: { fontSize: 12, fontWeight: 700 },
  stopKo: { fontSize: 10.5, color: FAINT, marginLeft: 8 },
  stopNote: { fontSize: 9, color: SOFT, marginTop: 2.5, lineHeight: 1.4 },
  metaRow: { flexDirection: "row", marginTop: 3 },
  metaKey: { width: 30, fontSize: 6.8, fontWeight: 700, color: FAINT, paddingTop: 1.6 },
  metaVal: { flex: 1, fontSize: 8.5, color: SOFT, lineHeight: 1.35 },
  mapLink: { fontSize: 7.5, color: OB.blue, marginTop: 3 },
  secHeadRow: { flexDirection: "row", alignItems: "center", marginBottom: 4, marginTop: 4 },
  secSq: { width: 8, height: 8, backgroundColor: OB.yellow, marginRight: 8 },
  secTitle: { fontSize: 11.5, fontWeight: 700 },
  secRule: { height: 1, backgroundColor: OB.black, marginBottom: 12 },
  lead: { fontSize: 9.5, color: SOFT, lineHeight: 1.45, marginBottom: 12 },
  opRow: { flexDirection: "row", marginBottom: 11 },
  opDate: { width: 78, borderWidth: 0.8, borderColor: OB.blue, backgroundColor: BAND, paddingVertical: 3, alignItems: "center", alignSelf: "flex-start" },
  opDateTx: { fontSize: 8.5, fontWeight: 700, color: OB.blue },
  opBody: { flex: 1, paddingLeft: 12 },
  opWhat: { fontSize: 10, fontWeight: 700 },
  opDetail: { fontSize: 8.5, color: SOFT, marginTop: 2, lineHeight: 1.35 },
  bRow: { flexDirection: "row", paddingVertical: 5, paddingHorizontal: 8, alignItems: "center" },
  bRowAlt: { backgroundColor: BAND },
  bKey: { flex: 1, fontSize: 9.5 },
  bVal: { fontSize: 9.5, fontWeight: 700, color: OB.blue },
  bTotalRule: { height: 1, backgroundColor: OB.black, marginTop: 2 },
  bTotalRow: { flexDirection: "row", paddingVertical: 6, paddingHorizontal: 8 },
  bTotalKey: { flex: 1, fontSize: 9.5, fontWeight: 700 },
  bTotalVal: { fontSize: 10, fontWeight: 700 },
  fine: { fontSize: 8.5, color: SOFT, lineHeight: 1.4, marginTop: 6 },
  ckRow: { flexDirection: "row", marginBottom: 8, alignItems: "flex-start" },
  ckBox: { width: 9, height: 9, borderWidth: 0.9, borderColor: OB.black, marginTop: 2, marginRight: 9 },
  ckTx: { flex: 1, fontSize: 9.5, lineHeight: 1.4 },
} as const;

const OB_SEQ = [OB.blue, OB.red, OB.yellow, OB.white, OB.black];

const stripe = (hh: number, full = false) =>
  h(
    C.View,
    { style: [s.stripeRow, { height: hh }, ...(full ? [{ marginHorizontal: -48 }] : [])] },
    ...OB_SEQ.map((c, i) => h(C.View, { key: i, style: [s.seg, { backgroundColor: c }] })),
  );

const footer = () =>
  h(
    C.View,
    { style: s.footer, fixed: true },
    h(C.View, { style: s.footStripe }, ...OB_SEQ.map((c, i) => h(C.View, { key: i, style: [s.seg, { backgroundColor: c }] }))),
    h(C.Text, { style: s.footText }, "K-SPOT TRAVEL  ·  kspottravel.com"),
    h(C.Text, {
      style: [s.footText, { marginLeft: "auto" }],
      render: ({ pageNumber, totalPages }: { pageNumber: number; totalPages: number }) => `${pageNumber} / ${totalPages}`,
    }),
  );

const sectionHead = (title: string) =>
  h(
    C.View,
    { wrap: false },
    h(C.View, { style: s.secHeadRow }, h(C.View, { style: s.secSq }), h(C.Text, { style: s.secTitle }, title)),
    h(C.View, { style: s.secRule }),
  );

function buildDoc(payload: PdfPayload) {
  const start = parseStart(payload.startDate);
  const nDays = payload.days?.length ?? 0;
  const lo = 70 * nDays;
  const hi = 115 * nDays;

  const ops = [
    ...(payload.deadlines ?? []).map((d) => ({
      when: addDays(start, -30),
      what: `Booking window opens: ${d.name}`,
      detail: d.booking,
    })),
    { when: addDays(start, -14), what: "Book intercity trains & day tours", detail: "KTX weekend seats and popular day tours sell out about two weeks ahead." },
    { when: addDays(start, -7), what: "Reconfirm everything", detail: "Reconfirm restaurant reservations, re-check spot hours, watch the forecast." },
    { when: addDays(start, -2), what: "Download offline essentials", detail: "Naver Map offline areas, this PDF, tickets and vouchers to your phone." },
  ];

  const checklist = [
    ...PACK[season(start)],
    "eSIM installed before departure (activates on landing)",
    "T-money card at any convenience store; keep KRW 10k notes for top-ups",
    "Apps: Naver Map, Kakao T, Papago, CatchTable Global",
    "Passport in your day bag - instant tax refund needs it at the register",
    "Power adapter: Korea uses 220V Type C/F (round two-pin)",
    "Stuck? The Korean names beside each stop work with any taxi driver",
  ];

  const cover = h(
    C.Page,
    { size: "A4", style: [s.page, { paddingTop: 0 }] },
    stripe(10, true),
    h(C.View, { style: s.brandRow }, h(C.Text, { style: s.brand }, "K · SPOT  TRAVEL"), h(C.Text, { style: s.est }, "EST. SEOUL")),
    h(C.Text, { style: s.h1 }, "ROUTE PASS"),
    h(C.Text, { style: s.coverSub }, payload.title ?? "My K-SPOT Route"),
    h(
      C.View,
      { style: s.factCard },
      h(
        C.View,
        { style: s.factRow },
        h(C.Text, { style: s.factKey }, "TRIP"),
        h(C.Text, { style: s.factVal }, `${fmt(start)}  -  ${fmt(addDays(start, Math.max(nDays - 1, 0)))}   (${nDays} day${nDays === 1 ? "" : "s"})`),
      ),
      payload.shows?.length
        ? h(C.View, { style: s.factRow }, h(C.Text, { style: s.factKey }, "BASED ON"), h(C.Text, { style: s.factVal }, payload.shows.join("  ·  ")))
        : null,
      payload.pace
        ? h(
            C.View,
            { style: [s.factRow, { marginBottom: 0 }] },
            h(C.Text, { style: s.factKey }, "PACE"),
            h(C.Text, { style: s.factVal }, payload.pace.charAt(0).toUpperCase() + payload.pace.slice(1)),
          )
        : null,
    ),
    h(C.Text, { style: s.insideTitle }, "WHAT'S INSIDE"),
    ...[
      "Minute-level running sheets for every day, with transit directions and a map link for each stop",
      "Korean place names in large type - show them to any taxi driver",
      "Booking operations calendar computed from your dates (alarms are in your .ics too)",
      "Budget sheet and a season-matched packing checklist",
    ].map((t, i) => h(C.View, { key: i, style: s.bulletRow }, h(C.View, { style: s.bulletSq }), h(C.Text, { style: s.bulletTx }, t))),
    h(
      C.View,
      { style: s.coverBottom },
      h(
        C.View,
        null,
        h(C.Text, { style: s.slogan }, "Your K-content is your Korea travel map"),
        h(C.Text, { style: s.preparedBy }, "Prepared by the K-SPOT editors  ·  kspottravel.com"),
      ),
      h(C.View, { style: s.seal }, h(C.Text, { style: s.sealTx }, "K"), h(C.Text, { style: s.sealTx }, "S")),
    ),
    footer(),
  );

  const dayPages = (payload.days ?? []).map((day) =>
    h(
      C.Page,
      { key: day.day, size: "A4", style: s.page },
      h(
        C.View,
        { wrap: false },
        h(
          C.View,
          { style: s.dayBand },
          h(C.Text, { style: s.dayNum }, `DAY ${day.day}`),
          h(C.Text, { style: s.dayTheme }, day.theme),
          h(C.Text, { style: s.dayDate }, fmt(addDays(start, day.day - 1))),
        ),
        stripe(3),
      ),
      h(
        C.View,
        { style: { marginTop: 18 } },
        ...day.stops.map((stop, i) =>
          h(
            C.View,
            { key: i, style: s.stopRow, wrap: false },
            h(C.View, { style: s.timeCol }, h(C.Text, { style: s.timeTx }, stop.time)),
            h(
              C.View,
              { style: s.railCol },
              i < day.stops.length - 1 ? h(C.View, { style: s.rail }) : null,
              h(C.View, {
                style: [s.dot, { backgroundColor: stop.kind === "meal" ? OB.yellow : stop.kind === "evening" ? CELADON : OB.blue }],
              }),
            ),
            h(
              C.View,
              { style: s.stopBody },
              h(
                C.View,
                { style: s.stopHead },
                h(C.Text, { style: s.stopLabel }, stop.label),
                stop.koreanName ? h(C.Text, { style: s.stopKo }, stop.koreanName) : null,
              ),
              h(C.Text, { style: s.stopNote }, stop.note),
              stop.address
                ? h(C.View, { style: s.metaRow }, h(C.Text, { style: s.metaKey }, "ADDR"), h(C.Text, { style: s.metaVal }, stop.address))
                : null,
              stop.howToGet
                ? h(C.View, { style: s.metaRow }, h(C.Text, { style: s.metaKey }, "GO"), h(C.Text, { style: s.metaVal }, stop.howToGet))
                : null,
              stop.kind === "spot"
                ? h(C.Text, { style: s.mapLink }, `maps: google.com/maps?q=${stop.label.replace(/ /g, "+")}`)
                : null,
            ),
          ),
        ),
      ),
      footer(),
    ),
  );

  const opsPage = h(
    C.Page,
    { size: "A4", style: s.page },
    sectionHead("BOOKING OPERATIONS CALENDAR"),
    h(
      C.Text,
      { style: s.lead },
      "Korea's hot tables release seats ~30 days out and vanish in minutes. These dates are computed from your trip start - the same alarms live in your .ics calendar file.",
    ),
    ...ops.map((op, i) =>
      h(
        C.View,
        { key: i, style: s.opRow, wrap: false },
        h(C.View, { style: s.opDate }, h(C.Text, { style: s.opDateTx }, fmt(op.when).replace(/^[A-Za-z]+, /, ""))),
        h(C.View, { style: s.opBody }, h(C.Text, { style: s.opWhat }, op.what), h(C.Text, { style: s.opDetail }, op.detail)),
      ),
    ),
    h(
      C.View,
      { style: { marginTop: 16 } },
      sectionHead("BUDGET SHEET  ·  PER PERSON, EXCL. FLIGHTS & HOTEL"),
      ...([
        ["Transit (T-money: subway, bus)", "KRW 10,000 / day"],
        ["Meals (street food to one nice table)", "KRW 40,000 - 70,000 / day"],
        ["Admissions (most filming spots are free)", "KRW 0 - 15,000 / day"],
        ["Buffer (photo booths, cafes, souvenirs)", "KRW 20,000 / day"],
      ] as const).map(([k, v], i) =>
        h(
          C.View,
          { key: k, style: [s.bRow, ...(i % 2 === 0 ? [s.bRowAlt] : [])] },
          h(C.Text, { style: s.bKey }, k),
          h(C.Text, { style: s.bVal }, v),
        ),
      ),
      h(C.View, { style: s.bTotalRule }),
      h(
        C.View,
        { style: s.bTotalRow },
        h(C.Text, { style: s.bTotalKey }, "ESTIMATED TOTAL"),
        h(
          C.Text,
          { style: s.bTotalVal },
          `KRW ${(lo * 1000).toLocaleString("en-US")} - ${(hi * 1000).toLocaleString("en-US")}   (~USD ${Math.round(lo / 1.4)} - ${Math.round(hi / 1.4)})`,
        ),
      ),
      h(
        C.Text,
        { style: s.fine },
        "Rate basis ~KRW 1,400/USD. One Culinary Class Wars tasting menu adds KRW 100,000-250,000 - budget it as an event, not a meal.",
      ),
    ),
    h(
      C.View,
      { style: { marginTop: 18 } },
      sectionHead(`CHECKLIST  ·  ${season(start).toUpperCase()} TRIP`),
      ...checklist.map((item) =>
        h(C.View, { key: item, style: s.ckRow, wrap: false }, h(C.View, { style: s.ckBox }), h(C.Text, { style: s.ckTx }, item)),
      ),
    ),
    footer(),
  );

  return h(C.Document, { title: "K-SPOT Route Pass", author: "K-SPOT Travel" }, cover, ...dayPages, opsPage);
}

// ---------------------------------------------------------------- route --
export async function POST(request: NextRequest) {
  let payload: PdfPayload;
  try {
    payload = (await request.json()) as PdfPayload;
    if (!payload.days?.length) throw new Error("no days");
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Paid gate: once payments are configured, a valid signed pass token is
  // required. In demo mode (no keys) the gate is open so the flow is testable.
  if (paymentsConfigured() && !verifyPassToken(payload.passToken)) {
    return NextResponse.json({ error: "Route Pass required" }, { status: 402 });
  }

  await ensureEngine();
  registerFonts(new URL(request.url).origin);
  const pdf = await RPm.renderToBuffer(buildDoc(payload) as never);

  // Email path: only when a Resend key is configured; otherwise the client
  // falls back to direct download (demo mode).
  if (payload.email) {
    const key = process.env.RESEND_API_KEY;
    if (!key) return NextResponse.json({ emailed: false, reason: "email-not-configured" });
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "K-SPOT Travel <onboarding@resend.dev>",
          to: [payload.email],
          subject: "Your K-SPOT Route Pass itinerary",
          text: "Your detailed route is attached. Have an amazing trip!\n\n- The K-SPOT editors",
          attachments: [
            {
              filename: "kspot-route-pass.pdf",
              content: Buffer.from(pdf).toString("base64"),
            },
          ],
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      return NextResponse.json({ emailed: true });
    } catch {
      return NextResponse.json({ emailed: false, reason: "send-failed" });
    }
  }

  return new NextResponse(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="kspot-route-pass.pdf"',
    },
  });
}
