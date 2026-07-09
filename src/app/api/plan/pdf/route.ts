import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export const runtime = "nodejs";

interface PdfStop { time: string; label: string; note: string }
interface PdfDay { day: number; theme: string; stops: PdfStop[] }
interface PdfPayload {
  title?: string;
  days?: PdfDay[];
  deadlines?: { name: string; booking: string }[];
  email?: string;
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

async function buildPdf(payload: PdfPayload): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  let page = doc.addPage([595, 842]); // A4
  let y = 780;
  const left = 56;

  const ensure = (need: number) => {
    if (y - need < 56) {
      page = doc.addPage([595, 842]);
      y = 780;
    }
  };

  // Header
  page.drawText("K-SPOT TRAVEL", { x: left, y, size: 10, font: bold, color: INDIGO });
  y -= 18;
  page.drawText(ascii(payload.title ?? "My K-SPOT Route"), {
    x: left, y, size: 22, font: bold, color: INK,
  });
  y -= 14;
  page.drawText("Route Pass - detailed itinerary", {
    x: left, y, size: 10, font, color: SOFT,
  });
  y -= 10;
  page.drawLine({ start: { x: left, y }, end: { x: 539, y }, thickness: 0.8, color: INDIGO });
  y -= 22;

  for (const day of payload.days ?? []) {
    ensure(60);
    page.drawText(`DAY ${day.day}`, { x: left, y, size: 13, font: bold, color: INDIGO });
    page.drawText(ascii(day.theme), { x: left + 55, y, size: 12, font: bold, color: INK });
    y -= 18;

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
      y -= 5;
    }
    y -= 10;
  }

  if (payload.deadlines?.length) {
    ensure(40);
    page.drawText("BOOKING DEADLINES", { x: left, y, size: 11, font: bold, color: INDIGO });
    y -= 16;
    for (const d of payload.deadlines) {
      const lines = wrap(`${ascii(d.name)} - ${ascii(d.booking)}`, 92);
      ensure(lines.length * 11 + 6);
      for (const [i, line] of lines.entries()) {
        page.drawText(i === 0 ? `- ${line}` : `  ${line}`, {
          x: left, y, size: 9, font, color: SOFT,
        });
        y -= 11;
      }
      y -= 3;
    }
  }

  ensure(30);
  y = Math.min(y, 70);
  page.drawText("Your K-content is your Korea travel map - k-spot.travel", {
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
