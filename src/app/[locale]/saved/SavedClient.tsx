"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { l, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";
import { WISH_EVENT, wishList } from "@/lib/client-store";
import { WishHeart } from "@/components/WishHeart";

export interface SavedItem {
  id: string;
  title: string;
  sub: string;
  href: string;
}

export function SavedClient({
  locale,
  dict,
  catalog,
}: {
  locale: Locale;
  dict: Dict;
  catalog: SavedItem[];
}) {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setIds(wishList());
    sync();
    window.addEventListener(WISH_EVENT, sync);
    return () => window.removeEventListener(WISH_EVENT, sync);
  }, []);

  const items = catalog.filter((c) => ids.includes(c.id));

  if (items.length === 0) {
    return (
      <div className="mt-8 rounded-[8px] border border-line bg-band p-8 text-center">
        <p className="text-ink-soft">{dict.saved.empty}</p>
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
    <ul className="mt-6 space-y-2.5">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between gap-3 rounded-[8px] border border-line p-4"
        >
          <Link href={l(locale, item.href)} className="min-w-0">
            <p className="truncate font-bold hover:text-indigo">{item.title}</p>
            <p className="text-xs text-ink-faint">{item.sub}</p>
          </Link>
          <WishHeart id={item.id} />
        </li>
      ))}
    </ul>
  );
}
