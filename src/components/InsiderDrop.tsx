"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { l, type Locale } from "@/i18n/config";
import { passTier } from "@/lib/client-store";
import { Icon } from "@/components/ui";
import type { Drop } from "@/data/drops";

/**
 * Insider early-access gate for a drop. The public sees a locked teaser
 * (title + excerpt + unlock date); Insider members see the full dispatch
 * immediately. Editorial gating only — not a payment boundary.
 */
export function InsiderDrop({
  drop,
  locale,
  tagLabel,
  lockedText,
}: {
  drop: Drop;
  locale: Locale;
  tagLabel: string;
  lockedText: string;
}) {
  const [insider, setInsider] = useState(false);
  useEffect(() => setInsider(passTier() === "insider"), []);

  return (
    <article className="border-b border-line pb-9">
      <p className="text-xs text-ink-faint">
        <span className="mr-2 rounded-[4px] border border-celadon px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-celadon uppercase">
          {tagLabel}
        </span>
        {drop.date}
      </p>
      <h2 className="mt-2 font-display text-2xl font-bold">{drop.title}</h2>
      <p className="mt-2 text-sm font-semibold text-ink-soft">{drop.excerpt}</p>

      {insider ? (
        <>
          {drop.body.map((p, i) => (
            <p key={i} className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
          <p className="mt-4 flex flex-wrap gap-3">
            {drop.links.map((link) => (
              <Link
                key={link.href}
                href={l(locale, link.href)}
                className="text-sm font-bold text-indigo hover:underline"
              >
                {link.label} →
              </Link>
            ))}
          </p>
        </>
      ) : (
        <p className="mt-4 inline-flex items-center gap-2 rounded-[8px] border-2 border-indigo/25 bg-band px-4 py-2.5 text-sm font-semibold text-indigo">
          <Icon name="lock" size={15} />
          {lockedText} {drop.insiderUntil}
        </p>
      )}
    </article>
  );
}
