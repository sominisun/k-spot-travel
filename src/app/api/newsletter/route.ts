import { NextRequest, NextResponse } from "next/server";
import { notifyOperator } from "@/lib/notify";

export const runtime = "nodejs";

// Newsletter signup ("The K Edit Weekly").
// With RESEND_API_KEY + RESEND_AUDIENCE_ID: contact goes straight into the
// Resend audience. Without keys: appended to a local JSONL queue and pinged
// to the Discord inbox so no address is ever lost pre-launch.
export async function POST(request: NextRequest) {
  let email = "";
  let locale = "en";
  try {
    const body = await request.json();
    email = typeof body.email === "string" ? body.email.trim() : "";
    locale = typeof body.locale === "string" ? body.locale : "en";
  } catch {
    return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid-email" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const audience = process.env.RESEND_AUDIENCE_ID;
  if (key && audience) {
    try {
      const res = await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ email, unsubscribed: false }),
      });
      if (res.ok || res.status === 409) {
        return NextResponse.json({ ok: true });
      }
    } catch {
      /* fall through to the local queue */
    }
  }

  const { delivered } = await notifyOperator({
    kind: "newsletter",
    subject: `[K-SPOT newsletter] signup: ${email}`,
    text: `Newsletter signup: ${email} (${locale}) — add to the Resend audience.`,
    logFile: "newsletter.jsonl",
    logEntry: { email, locale },
  });
  // Same honesty rule as the contact form: no channel on serverless = the
  // address would be lost, so surface an error rather than a fake success.
  if (!delivered && process.env.VERCEL) {
    return NextResponse.json({ ok: false, error: "inbox-not-configured" }, { status: 503 });
  }
  return NextResponse.json({ ok: true, queued: true });
}
