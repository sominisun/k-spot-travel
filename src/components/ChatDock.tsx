"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { l, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";
import { Icon } from "./ui";

interface Msg {
  role: "user" | "assistant";
  text: string;
  links?: { label: string; href: string }[];
  id?: string;
  voted?: boolean;
}

/** Slim docked "Ask the Editor" bar — expands into a sheet. */
export function ChatDock({ locale, dict }: { locale: Locale; dict: Dict["chat"] }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    const next: Msg[] = [...msgs, { role: "user", text: q }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          messages: next.map((m) => ({ role: m.role, text: m.text })),
        }),
      });
      const data = await res.json();
      setMsgs((cur) => [
        ...cur,
        { role: "assistant", text: data.reply ?? "…", links: data.links, id: data.id },
      ]);
    } catch {
      setMsgs((cur) => [
        ...cur,
        { role: "assistant", text: dict.escalate, links: [{ label: "Discord", href: l(locale, "/community") }] },
      ]);
    } finally {
      setBusy(false);
    }
  };

  const vote = async (i: number, helpful: boolean) => {
    const m = msgs[i];
    const q = msgs
      .slice(0, i)
      .reverse()
      .find((x) => x.role === "user")?.text;
    setMsgs((cur) => cur.map((x, idx) => (idx === i ? { ...x, voted: true } : x)));
    try {
      await fetch("/api/chat/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, question: q, answer: m.text, helpful }),
      });
    } catch {
      /* feedback is best-effort */
    }
  };

  return (
    <>
      {/* Collapsed: slim input-shaped launcher, bottom-right */}
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-[8px] border border-indigo/30 bg-paper px-4 py-2.5 text-sm font-semibold text-ink-soft shadow-lg transition-colors hover:border-indigo"
        >
          <Icon name="search" size={15} className="text-indigo" />
          {dict.launcher}
        </button>
      ) : (
        <div className="fixed right-4 bottom-4 z-40 flex max-h-[min(600px,80vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[8px] border border-line bg-paper shadow-2xl">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p className="font-display text-sm font-bold">{dict.title}</p>
              <p className="text-[11px] text-ink-faint">{dict.sub}</p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-[4px] text-ink-faint hover:bg-band"
            >
              <Icon name="x" size={16} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {msgs.length === 0 ? (
              <div className="space-y-2">
                {dict.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="block w-full rounded-[8px] border border-line px-3 py-2 text-left text-[13px] text-ink-soft transition-colors hover:border-indigo hover:text-indigo"
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}

            {msgs.map((m, i) => (
              <div key={i}>
                <div
                  className={`max-w-[85%] rounded-[8px] px-3 py-2 text-[13px] leading-relaxed whitespace-pre-line ${
                    m.role === "user"
                      ? "ml-auto bg-indigo text-white"
                      : "bg-band text-ink"
                  }`}
                >
                  {m.text}
                </div>
                {m.role === "assistant" && m.links?.length ? (
                  <div className="mt-1.5 space-y-1">
                    <p className="text-[10px] font-bold tracking-wide text-ink-faint uppercase">
                      {dict.sources}
                    </p>
                    {m.links.map((lnk) => (
                      <Link
                        key={lnk.href}
                        href={lnk.href.startsWith("/") ? l(locale, lnk.href) : lnk.href}
                        className="block rounded-[4px] border border-line px-2.5 py-1.5 text-[12px] font-semibold text-indigo hover:bg-indigo-soft"
                        onClick={() => setOpen(false)}
                      >
                        {lnk.label} →
                      </Link>
                    ))}
                  </div>
                ) : null}
                {m.role === "assistant" && !m.voted ? (
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <button
                      type="button"
                      aria-label={dict.helpful}
                      onClick={() => vote(i, true)}
                      className="flex h-6 w-6 items-center justify-center rounded-[4px] text-ink-faint hover:bg-band hover:text-celadon"
                    >
                      <Icon name="thumbUp" size={13} />
                    </button>
                    <button
                      type="button"
                      aria-label={dict.notHelpful}
                      onClick={() => vote(i, false)}
                      className="flex h-6 w-6 items-center justify-center rounded-[4px] text-ink-faint hover:bg-band hover:text-kred"
                    >
                      <Icon name="thumbDown" size={13} />
                    </button>
                  </div>
                ) : m.role === "assistant" && m.voted ? (
                  <p className="mt-1 text-[10px] text-ink-faint">{dict.thanksFeedback}</p>
                ) : null}
              </div>
            ))}
            {busy ? (
              <p className="text-[12px] text-ink-faint">{dict.thinking}</p>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-line p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void send(input);
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={dict.placeholder}
                className="min-w-0 flex-1 rounded-[8px] border border-line px-3 py-2 text-[13px] outline-none focus:border-indigo"
              />
              <button
                type="submit"
                aria-label={dict.send}
                disabled={busy || !input.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-indigo text-white disabled:opacity-40"
              >
                <Icon name="send" size={15} />
              </button>
            </form>
            <Link
              href={l(locale, "/community")}
              className="mt-2 block text-center text-[11px] text-ink-faint hover:text-indigo"
              onClick={() => setOpen(false)}
            >
              {dict.escalate}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
