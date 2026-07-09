import Link from "next/link";
import type { Metadata } from "next";
import { l } from "@/i18n/config";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allSpots, showsAtSpot } from "@/lib/data";
import { lSpot, regionLabel } from "@/lib/localize";
import { SpotCard } from "@/components/cards";
import { Icon, SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.spots.title, description: dict.spots.sub };
}

export default async function SpotsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ region?: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const { region } = await searchParams;

  const spots = region ? allSpots.filter((s) => s.region === region) : allSpots;
  const regions = [...new Set(allSpots.map((s) => s.region))];
  const base = l(locale, "/spots");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionHeading title={dict.spots.title} />
          <p className="mt-2 max-w-2xl text-ink-soft">{dict.spots.sub}</p>
        </div>
        <Link
          href={l(locale, "/map")}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-[8px] border border-indigo px-4 py-2 text-sm font-bold text-indigo hover:bg-indigo-soft"
        >
          <Icon name="pin" size={15} />
          {dict.spots.mapView}
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={base}
          className={`rounded-[8px] border px-3 py-1.5 text-[13px] font-semibold ${
            !region ? "border-indigo bg-indigo text-white" : "border-line text-ink-soft hover:border-indigo"
          }`}
        >
          {dict.common.filterAll}
        </Link>
        {regions.map((r) => (
          <Link
            key={r}
            href={`${base}?region=${r}`}
            className={`rounded-[8px] border px-3 py-1.5 text-[13px] font-semibold ${
              region === r
                ? "border-indigo bg-indigo text-white"
                : "border-line text-ink-soft hover:border-indigo"
            }`}
          >
            {regionLabel(r, locale)}
          </Link>
        ))}
      </div>

      <p className="mt-4 text-xs font-semibold text-ink-faint">
        {spots.length} {dict.common.results}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {spots.map((spot) => (
          <SpotCard
            key={spot.slug}
            spot={lSpot(spot, locale)}
            locale={locale}
            dict={dict}
            showCount={showsAtSpot(spot.slug).length}
          />
        ))}
      </div>
    </div>
  );
}
