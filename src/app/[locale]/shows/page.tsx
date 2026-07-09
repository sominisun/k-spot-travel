import Link from "next/link";
import type { Metadata } from "next";
import { l } from "@/i18n/config";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allShows, OTT_LABELS } from "@/lib/data";
import { lShow } from "@/lib/localize";
import { ShowCard } from "@/components/cards";
import { SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.shows.title, description: dict.shows.sub };
}

export default async function ShowsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ status?: string; ott?: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const { status, ott } = await searchParams;

  const shows = allShows.filter(
    (s) =>
      (!status || s.status === status) && (!ott || s.ott.includes(ott as never)),
  );

  const chip = (href: string, label: string, active: boolean) => (
    <Link
      key={href + label}
      href={href}
      className={`rounded-[8px] border px-3 py-1.5 text-[13px] font-semibold transition-colors ${
        active
          ? "border-indigo bg-indigo text-white"
          : "border-line text-ink-soft hover:border-indigo hover:text-indigo"
      }`}
    >
      {label}
    </Link>
  );

  const base = l(locale, "/shows");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionHeading title={dict.shows.title} />
      <p className="mt-2 max-w-2xl text-ink-soft">{dict.shows.sub}</p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {chip(base, dict.common.filterAll, !status && !ott)}
        {chip(`${base}?status=trending`, dict.common.trending, status === "trending")}
        {chip(`${base}?status=evergreen`, dict.common.evergreen, status === "evergreen")}
        <span className="mx-1 h-5 w-px bg-line" />
        {(["netflix", "disney", "appletv"] as const).map((o) =>
          chip(`${base}?ott=${o}`, OTT_LABELS[o], ott === o),
        )}
      </div>

      <p className="mt-4 text-xs font-semibold text-ink-faint">
        {shows.length} {dict.common.results}
      </p>

      <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {shows.map((show) => (
          <ShowCard key={show.slug} show={lShow(show, locale)} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
