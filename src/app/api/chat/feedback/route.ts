import { NextRequest, NextResponse } from "next/server";
import { logChat } from "@/lib/chat-log";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await logChat({
      ts: new Date().toISOString(),
      kind: "feedback",
      locale: typeof body.locale === "string" ? body.locale : undefined,
      question: typeof body.question === "string" ? body.question.slice(0, 500) : undefined,
      answer: typeof body.answer === "string" ? body.answer.slice(0, 500) : undefined,
      helpful: Boolean(body.helpful),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
