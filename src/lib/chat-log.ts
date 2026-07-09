import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

/**
 * Operator inbox plumbing.
 * 1) Local JSONL log (works in dev / self-hosted; ephemeral on serverless).
 * 2) Discord webhook — the real-time inbox on the operator's phone.
 * Both are best-effort: chat must never fail because logging did.
 */
export interface ChatLogEntry {
  ts: string;
  kind: "question" | "feedback";
  locale?: string;
  question?: string;
  answer?: string;
  matched?: "faq" | "claude" | "search" | "none";
  helpful?: boolean;
}

export async function logChat(entry: ChatLogEntry): Promise<void> {
  try {
    const dir = path.join(process.cwd(), ".chatlog");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "chat.jsonl"), JSON.stringify(entry) + "\n", "utf8");
  } catch {
    /* best-effort */
  }

  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (!webhook) return;
  try {
    const flag =
      entry.kind === "feedback"
        ? entry.helpful
          ? "🟢 helpful"
          : "🔴 NOT helpful"
        : entry.matched === "none"
          ? "🔴 unanswered"
          : `🟡 ${entry.matched}`;
    const content = [
      `**[chat ${flag}]** (${entry.locale ?? "?"})`,
      entry.question ? `**Q:** ${entry.question.slice(0, 300)}` : null,
      entry.answer ? `**A:** ${entry.answer.slice(0, 300)}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
  } catch {
    /* best-effort */
  }
}
