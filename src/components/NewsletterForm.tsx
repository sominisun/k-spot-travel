"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";

export function NewsletterForm({
  locale,
  dict,
  compact = false,
}: {
  locale: Locale;
  dict: Dict;
  compact?: boolean;
}) {
  const t = dict.newsletter;
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "busy") return;
    setState("busy");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return <p className={compact ? "text-sm text-celadon" : "mt-3 text-sm font-semibold text-celadon"}>{t.done}</p>;
  }

  return (
    <form onSubmit={submit} className={compact ? "flex gap-2" : "mt-4 flex max-w-md gap-2"}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.placeholder}
        className="min-w-0 flex-1 rounded-[8px] border border-line bg-paper px-3 py-2 text-sm outline-none focus:border-indigo"
      />
      <button
        type="submit"
        disabled={state === "busy"}
        className="rounded-[8px] bg-indigo px-4 py-2 text-sm font-bold text-white hover:bg-indigo-deep disabled:opacity-50"
      >
        {t.cta}
      </button>
      {state === "error" ? <p className="self-center text-xs text-kred">{t.error}</p> : null}
    </form>
  );
}
