"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { l, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";
import { STAMP_EVENT, stampList } from "@/lib/client-store";
import { Icon } from "@/components/ui";

export interface StampShow {
  slug: string;
  title: string;
  spots: { slug: string; name: string }[];
}

export function StampsClient({
  locale,
  dict,
  shows,
}: {
  locale: Locale;
  dict: Dict;
  shows: StampShow[];
}) {
  const t = dict.stamps;
  const [visited, setVisited] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sync = () => setVisited(stampList());
    sync();
    window.addEventListener(STAMP_EVENT, sync);
    return () => window.removeEventListener(STAMP_EVENT, sync);
  }, []);

  const progress = useMemo(
    () =>
      shows
        .map((s) => ({
          ...s,
          done: s.spots.filter((sp) => visited.includes(sp.slug)).length,
        }))
        .filter((s) => s.spots.length > 0)
        .sort((a, b) => b.done / b.spots.length - a.done / a.spots.length),
    [shows, visited],
  );

  const started = progress.filter((p) => p.done > 0);

  const copyCard = async () => {
    const lines = [
      "My K-SPOT pilgrimage stamps",
      "",
      ...started.map(
        (p) =>
          `${p.done === p.spots.length ? "■" : "▨"} ${p.title}: ${p.done}/${p.spots.length}`,
      ),
      "",
      "Track yours → k-spot.travel",
    ];
    await navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
  };

  if (started.length === 0) {
    return (
      <div className="mt-8 rounded-[8px] border border-line bg-band p-8 text-center">
        <p className="text-ink-soft">{t.empty}</p>
        <Link
          href={l(locale, "/spots")}
          className="mt-4 inline-block rounded-[8px] bg-indigo px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-deep"
        >
          {dict.nav.spots} →
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-ink-soft">
          {t.progress}: {visited.length}
        </p>
        <button
          type="button"
          onClick={copyCard}
          className="inline-flex items-center gap-1.5 rounded-[8px] border border-line px-3.5 py-1.5 text-[13px] font-semibold hover:border-indigo"
        >
          <Icon name="copy" size={14} /> {copied ? dict.quiz.shared : t.copyCard}
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {progress.map((p) => {
          const complete = p.done === p.spots.length && p.done > 0;
          return (
            <div
              key={p.slug}
              className={`rounded-[8px] border p-4 ${
                complete ? "border-celadon bg-celadon/5" : "border-line"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <Link
                  href={l(locale, `/shows/${p.slug}`)}
                  className="font-display font-bold hover:text-indigo"
                >
                  {p.title}
                </Link>
                <span
                  className={`text-sm font-bold ${complete ? "text-celadon" : "text-ink-faint"}`}
                >
                  {complete ? t.completed : `${p.done}/${p.spots.length}`}
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                <div
                  className={`h-full rounded-full ${complete ? "bg-celadon" : "bg-indigo"}`}
                  style={{ width: `${(p.done / p.spots.length) * 100}%` }}
                />
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {p.spots.map((sp) => (
                  <Link
                    key={sp.slug}
                    href={l(locale, `/spots/${sp.slug}`)}
                    className={`rounded-[4px] px-2 py-0.5 text-[11px] font-semibold ${
                      visited.includes(sp.slug)
                        ? "bg-celadon/15 text-celadon"
                        : "bg-band text-ink-faint hover:text-indigo"
                    }`}
                  >
                    {sp.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
