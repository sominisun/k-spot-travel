import { NextRequest, NextResponse } from "next/server";
import { notifyOperator } from "@/lib/notify";

export const runtime = "nodejs";

// Contact form -> operator inbox (Discord webhook + forwarded email +
// local JSONL backstop). See lib/notify.ts for the channel details.
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

  await notifyOperator({
    kind: `contact${topic ? ` · ${topic}` : ""}`,
    subject: `[K-SPOT contact] ${email} (${locale})`,
    text: `From: ${email} (${locale})${topic ? `\nTopic: ${topic}` : ""}\n\n${message}`,
    logFile: "contact.jsonl",
    logEntry: { email, topic, message, locale },
  });
  return NextResponse.json({ ok: true });
}
