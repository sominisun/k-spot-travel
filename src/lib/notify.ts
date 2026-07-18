// Operator notification fan-out, used by the contact form and newsletter.
// Three channels, each best-effort and independent:
//  1) Discord webhook (DISCORD_WEBHOOK_URL) — real-time phone ping
//  2) Email to the operator (RESEND_API_KEY + CONTACT_FORWARD_EMAIL) —
//     works on Resend's free tier with the onboarding@resend.dev sender
//     as long as CONTACT_FORWARD_EMAIL is the Resend account's own address
//  3) Local JSONL (dev/self-hosted backstop; ephemeral on serverless)
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export async function notifyOperator(opts: {
  kind: string;
  subject: string;
  text: string;
  logFile: string;
  logEntry: Record<string, unknown>;
}): Promise<{ delivered: boolean }> {
  let delivered = false;

  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: `**[${opts.kind}]** ${opts.text.slice(0, 1800)}` }),
      });
      delivered = true;
    } catch {
      /* best-effort */
    }
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORWARD_EMAIL;
  if (key && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "K-SPOT Travel <onboarding@resend.dev>",
          to: [to],
          subject: opts.subject,
          text: opts.text,
        }),
      });
      if (res.ok) delivered = true;
    } catch {
      /* best-effort */
    }
  }

  try {
    const dir = path.join(process.cwd(), ".chatlog");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, opts.logFile),
      JSON.stringify({ ts: new Date().toISOString(), ...opts.logEntry }) + "\n",
      "utf8",
    );
  } catch {
    /* best-effort */
  }

  return { delivered };
}
