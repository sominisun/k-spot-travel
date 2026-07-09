import Link from "next/link";
import { l, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";
import { PARTNERS, SITE } from "@/lib/site";

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const f = dict.footer;
  const cols = [
    {
      title: f.explore,
      links: [
        { href: l(locale, "/shows"), label: dict.nav.shows },
        { href: l(locale, "/spots"), label: dict.nav.spots },
        { href: l(locale, "/food"), label: dict.nav.food },
        { href: l(locale, "/beauty"), label: dict.nav.beauty },
        { href: l(locale, "/guide"), label: dict.nav.guide },
      ],
    },
    {
      title: f.plan,
      links: [
        { href: l(locale, "/planner"), label: dict.nav.planner },
        { href: l(locale, "/routes"), label: dict.nav.routes },
        { href: l(locale, "/map"), label: dict.nav.map },
        { href: l(locale, "/quiz"), label: dict.nav.quiz },
        { href: l(locale, "/community"), label: dict.nav.community },
      ],
    },
    {
      title: f.about,
      links: [
        { href: l(locale, "/about"), label: f.aboutUs },
        { href: l(locale, "/contact"), label: f.contact },
        { href: l(locale, "/privacy-policy"), label: f.privacy },
        { href: l(locale, "/terms"), label: f.terms },
      ],
    },
  ];

  return (
    <footer className="mt-20 border-t border-line bg-band">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold">
            K<span className="text-indigo">·</span>SPOT{" "}
            <span className="text-[10px] font-semibold tracking-[0.22em] text-ink-faint uppercase">
              Travel
            </span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink-soft">{f.tagline}</p>
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-ink-faint">
            {f.disclaimer}
          </p>
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-ink-faint">
            {f.affiliate}
          </p>
          <p className="mt-4 text-xs text-ink-faint">
            <a
              href={PARTNERS.visitKorea}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-2 hover:text-indigo"
            >
              VisitKorea (KTO)
            </a>
            {" · "}
            <a
              href={PARTNERS.visitSeoul}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-2 hover:text-indigo"
            >
              Visit Seoul
            </a>
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <p className="text-[11px] font-bold tracking-[0.18em] text-ink-faint uppercase">
              {col.title}
            </p>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-indigo"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-ink-faint">
        © {new Date().getFullYear()} {SITE.name}. {f.madeWith}
      </div>
    </footer>
  );
}
