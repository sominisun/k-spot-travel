import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { paymentsConfigured, verifyPassToken } from "@/lib/pass-token";

export const runtime = "nodejs";

interface PdfStop {
  time: string;
  label: string;
  note: string;
  kind?: "spot" | "meal" | "evening";
  address?: string;
  howToGet?: string;
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

const INDIGO = rgb(0.118, 0.227, 0.431);
const INK = rgb(0.086, 0.094, 0.113);
const SOFT = rgb(0.271, 0.29, 0.329);

/** pdf-lib standard fonts are WinAnsi-only — strip anything they can't encode. */
function ascii(s: string): string {
  // eslint-disable-next-line no-control-regex
  return s.replace(/[^\x20-\x7E]/g, "").replace(/\s+/g, " ").trim() || "-";
}

function wrap(text: string, max: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max) {
      if (cur) lines.push(cur.trim());
      cur = w;
    } else cur = `${cur} ${w}`;
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseStart(s?: string): Date {
  if (s && /^\d{4}-\d{2}-\d{2}$/.test(s)) {
    const d = new Date(`${s}T09:00:00Z`);
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
  spring: ["Light layers + one warm jacket (mornings dip)", "Fine-dust mask for hazy days", "Comfortable walking shoes (10k+ steps/day)"],
  summer: ["Breathable clothes + compact umbrella (monsoon bursts)", "Sunscreen and a hat - queues are outdoors", "Cooling towel; cafes are your 2pm refuge"],
  autumn: ["Layers: warm days, cold evenings", "Camera space - this is Korea's cinematic season", "Comfortable walking shoes (10k+ steps/day)"],
  winter: ["Real winter coat, gloves, heat packs (hotpack at any CVS)", "Slip-resistant shoes for icy mornings", "Lip balm and moisturizer - the air is dry"],
};

async function buildPdf(payload: PdfPayload): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  let page = doc.addPage([595, 842]); // A4
  let y = 780;
  const left = 56;
  const start = parseStart(payload.startDate);
  const nDays = payload.days?.length ?? 0;

  const ensure = (need: number) => {
    if (y - need < 56) {
      page = doc.addPage([595, 842]);
      y = 780;
    }
  };
  const newPage = () => {
    page = doc.addPage([595, 842]);
    y = 780;
  };
  const heading = (text: string) => {
    ensure(40);
    page.drawText(text, { x: left, y, size: 13, font: bold, color: INDIGO });
    y -= 8;
    page.drawLine({ start: { x: left, y }, end: { x: 539, y }, thickness: 0.8, color: INDIGO });
    y -= 18;
  };
  const para = (text: string, size = 9, color = SOFT, indent = 0, max = 92) => {
    for (const line of wrap(ascii(text), max)) {
      ensure(size + 4);
      page.drawText(line, { x: left + indent, y, size, font, color });
      y -= size + 3;
    }
  };

  // ---- Cover ----------------------------------------------------------
  page.drawText("K-SPOT TRAVEL", { x: left, y, size: 10, font: bold, color: INDIGO });
  y -= 26;
  page.drawText("ROUTE PASS", { x: left, y, size: 30, font: bold, color: INK });
  y -= 20;
  page.drawText(ascii(payload.title ?? "My K-SPOT Route"), { x: left, y, size: 14, font, color: SOFT });
  y -= 12;
  page.drawLine({ start: { x: left, y }, end: { x: 539, y }, thickness: 1.2, color: INDIGO });
  y -= 26;

  page.drawText("TRIP", { x: left, y, size: 9, font: bold, color: INDIGO });
  page.drawText(`${fmt(start)} - ${fmt(addDays(start, Math.max(nDays - 1, 0)))}  (${nDays} day${nDays === 1 ? "" : "s"})`, {
    x: left + 70, y, size: 10, font, color: INK,
  });
  y -= 16;
  if (payload.shows?.length) {
    page.drawText("BASED ON", { x: left, y, size: 9, font: bold, color: INDIGO });
    const showLines = wrap(payload.shows.map(ascii).join(" - "), 78);
    for (const [i, line] of showLines.entries()) {
      page.drawText(line, { x: left + 70, y: y - i * 13, size: 10, font, color: INK });
    }
    y -= showLines.length * 13 + 3;
  }
  if (payload.pace) {
    page.drawText("PACE", { x: left, y, size: 9, font: bold, color: INDIGO });
    page.drawText(ascii(payload.pace), { x: left + 70, y, size: 10, font, color: INK });
    y -= 16;
  }
  y -= 6;
  para("Inside: minute-level running sheets with transit directions and map links for every stop, your booking operations calendar, a budget sheet and a season checklist. Everything is also in the .ics calendar file - reservation alarms included.", 9.5, SOFT, 0, 92);
  y -= 8;

  // ---- Day running sheets --------------------------------------------
  for (const day of payload.days ?? []) {
    ensure(80);
    y -= 6;
    page.drawText(`DAY ${day.day}`, { x: left, y, size: 13, font: bold, color: INDIGO });
    page.drawText(fmt(addDays(start, day.day - 1)), { x: left + 55, y, size: 10, font, color: SOFT });
    y -= 14;
    page.drawText(ascii(day.theme), { x: left, y, size: 12, font: bold, color: INK });
    y -= 16;

    for (const stop of day.stops) {
      const noteLines = wrap(ascii(stop.note), 82);
      ensure(16 + noteLines.length * 11 + 8);
      page.drawText(stop.time, { x: left, y, size: 9.5, font: bold, color: INDIGO });
      page.drawText(ascii(stop.label), { x: left + 42, y, size: 10.5, font: bold, color: INK });
      y -= 12;
      for (const line of noteLines) {
        page.drawText(line, { x: left + 42, y, size: 9, font, color: SOFT });
        y -= 11;
      }
      if (stop.address) {
        para(`Address: ${stop.address}`, 8.5, SOFT, 42, 84);
      }
      if (stop.howToGet) {
        para(`Getting there: ${stop.howToGet}`, 8.5, SOFT, 42, 84);
      }
      if (stop.kind === "spot") {
        para(`Map: google.com/maps/search/?api=1&query=${encodeURIComponent(ascii(stop.label))}`, 8, INDIGO, 42, 88);
      }
      y -= 5;
    }
    y -= 8;
  }

  // ---- Booking operations calendar -----------------------------------
  newPage();
  heading("BOOKING OPERATIONS CALENDAR");
  para("Korean hot tables release seats ~30 days out and vanish in minutes. These dates are computed from your trip start - set phone alarms (they are already in your .ics file).", 9.5);
  y -= 8;
  const ops: { when: Date; what: string; detail: string }[] = [];
  for (const d of payload.deadlines ?? []) {
    ops.push({ when: addDays(start, -30), what: `Booking window opens: ${d.name}`, detail: d.booking });
  }
  ops.push({ when: addDays(start, -14), what: "Book intercity trains & day tours", detail: "KTX weekend seats and popular day tours sell out ~2 weeks ahead." });
  ops.push({ when: addDays(start, -7), what: "Reconfirm everything", detail: "Reconfirm restaurant reservations, re-check spot hours, watch the forecast." });
  ops.push({ when: addDays(start, -2), what: "Download offline essentials", detail: "Naver Map offline areas, this PDF, tickets and vouchers to your phone." });
  for (const op of ops) {
    ensure(30);
    page.drawText(fmt(op.when), { x: left, y, size: 9.5, font: bold, color: INDIGO });
    page.drawText(ascii(op.what), { x: left + 90, y, size: 10, font: bold, color: INK });
    y -= 12;
    para(op.detail, 9, SOFT, 90, 76);
    y -= 4;
  }

  // ---- Budget sheet ---------------------------------------------------
  y -= 10;
  heading("BUDGET SHEET (PER PERSON, EXCL. FLIGHTS & HOTEL)");
  const rows: [string, string][] = [
    ["Transit (T-money: subway, bus)", "KRW 10,000 / day"],
    ["Meals (street food to one nice table)", "KRW 40,000 - 70,000 / day"],
    ["Admissions (most filming spots are free)", "KRW 0 - 15,000 / day"],
    ["Buffer (photo booths, cafes, souvenirs)", "KRW 20,000 / day"],
  ];
  for (const [k, v] of rows) {
    ensure(16);
    page.drawText(ascii(k), { x: left, y, size: 9.5, font, color: INK });
    page.drawText(v, { x: 360, y, size: 9.5, font: bold, color: INDIGO });
    y -= 15;
  }
  y -= 4;
  const lo = 70 * nDays;
  const hi = 115 * nDays;
  page.drawText(`Estimated total: KRW ${(lo * 1000).toLocaleString("en-US")} - ${(hi * 1000).toLocaleString("en-US")}  (~USD ${Math.round(lo / 1.4)} - ${Math.round(hi / 1.4)})`, {
    x: left, y, size: 10.5, font: bold, color: INK,
  });
  y -= 14;
  para("Rate basis ~KRW 1,400/USD. One Culinary Class Wars tasting menu adds KRW 100,000-250,000 - budget it as an event, not a meal.", 8.5);

  // ---- Season checklist ----------------------------------------------
  y -= 12;
  heading(`CHECKLIST - ${season(start).toUpperCase()} TRIP`);
  const items = [
    ...PACK[season(start)],
    "eSIM installed before departure (activates on landing)",
    "T-money card at any convenience store; keep KRW 10k notes for top-ups",
    "Apps: Naver Map, Kakao T, Papago, CatchTable Global",
    "Passport in your day bag - instant tax refund needs it at the register",
    "Power adapter: Korea uses 220V Type C/F (round two-pin)",
  ];
  for (const item of items) {
    ensure(14);
    page.drawText("[ ]", { x: left, y, size: 9.5, font: bold, color: INDIGO });
    para(item, 9.5, INK, 24, 84);
    y -= 2;
  }

  ensure(30);
  page.drawText("Your K-content is your Korea travel map - K-SPOT Travel", {
    x: left, y: 40, size: 8.5, font, color: SOFT,
  });

  return doc.save();
}

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

  const pdf = await buildPdf(payload);

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

  return new NextResponse(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="kspot-route-pass.pdf"',
    },
  });
}
