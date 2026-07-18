"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";

export function ContactForm({ locale, dict }: { locale: Locale; dict: Dict }) {
  const t = dict.contactForm;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "busy") return;
    setState("busy");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, locale }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <p className="rounded-[8px] border border-celadon bg-band p-4 text-sm font-semibold text-celadon">
        {t.done}
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.emailPlaceholder}
        className="w-full rounded-[8px] border border-line px-3 py-2.5 text-sm outline-none focus:border-indigo"
      />
      <textarea
        required
        minLength={5}
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t.messagePlaceholder}
        className="w-full rounded-[8px] border border-line px-3 py-2.5 text-sm outline-none focus:border-indigo"
      />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={state === "busy"}
          className="rounded-[8px] bg-indigo px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-deep disabled:opacity-50"
        >
          {t.send}
        </button>
        {state === "error" ? <p className="text-sm text-kred">{t.error}</p> : null}
      </div>
      <p className="text-xs text-ink-faint">{t.note}</p>
    </form>
  );
}
