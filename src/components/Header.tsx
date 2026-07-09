"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LOCALES, LOCALE_LABELS, l, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";
import { Icon } from "./ui";
import { WISH_EVENT, wishCount } from "@/lib/client-store";

export function Header({ locale, dict }: { locale: Locale; dict: Dict["nav"] }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [wishes, setWishes] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setWishes(wishCount());
    update();
    window.addEventListener(WISH_EVENT, update);
    return () => window.removeEventListener(WISH_EVENT, update);
  }, []);

  const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";

  const NAV: { href: string; label: string }[] = [
    { href: "/shows", label: dict.shows },
    { href: "/spots", label: dict.spots },
    { href: "/map", label: dict.map },
    { href: "/routes", label: dict.routes },
    { href: "/food", label: dict.food },
    { href: "/beauty", label: dict.beauty },
    { href: "/guide", label: dict.guide },
    { href: "/community", label: dict.community },
  ];

  const isActive = (href: string) => rest.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
        <Link
          href={l(locale, "/")}
          className="font-display text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          K<span className="text-indigo">·</span>SPOT{" "}
          <span className="text-[10px] font-semibold tracking-[0.22em] text-ink-faint uppercase">
            Travel
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={l(locale, item.href)}
              className={`text-[13px] font-semibold transition-colors hover:text-indigo ${
                isActive(item.href) ? "text-indigo" : "text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href={l(locale, "/saved")}
            className="relative flex h-9 w-9 items-center justify-center rounded-[8px] text-ink-soft hover:bg-band"
            aria-label={dict.saved}
          >
            <Icon name="heart" />
            {wishes > 0 ? (
              <span className="absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo px-1 text-[9px] font-bold text-white">
                {wishes}
              </span>
            ) : null}
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex h-9 items-center gap-1 rounded-[8px] px-2 text-[13px] font-semibold text-ink-soft hover:bg-band"
              aria-label="Language"
            >
              <Icon name="globe" />
              <span className="hidden sm:inline">{LOCALE_LABELS[locale]}</span>
              <Icon name="chevron" size={14} />
            </button>
            {langOpen ? (
              <div className="absolute right-0 mt-1 w-36 rounded-[8px] border border-line bg-paper py-1 shadow-lg">
                {LOCALES.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}${rest === "/" ? "" : rest}`}
                    onClick={() => setLangOpen(false)}
                    className={`block px-3 py-1.5 text-[13px] font-medium hover:bg-band ${
                      loc === locale ? "text-indigo" : "text-ink-soft"
                    }`}
                  >
                    {LOCALE_LABELS[loc]}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href={l(locale, "/planner")}
            className="hidden rounded-[8px] bg-indigo px-3.5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-indigo-deep sm:block"
          >
            {dict.planner}
          </Link>

          <button
            type="button"
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-[8px] text-ink-soft hover:bg-band lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line bg-paper px-4 pb-4 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={l(locale, item.href)}
              className="block border-b border-line py-2.5 text-sm font-semibold text-ink-soft"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={l(locale, "/planner")}
            className="mt-3 block rounded-[8px] bg-indigo px-4 py-2.5 text-center text-sm font-bold text-white"
            onClick={() => setOpen(false)}
          >
            {dict.planner}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
