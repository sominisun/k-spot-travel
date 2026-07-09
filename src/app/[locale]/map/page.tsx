import type { Metadata } from "next";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allShows, allSpots, geoOf, showsAtSpot } from "@/lib/data";
import { lShow, lSpot } from "@/lib/localize";
import { SectionHeading } from "@/components/ui";
import { MapExplorer, type MapSpot } from "./MapExplorer";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.map.title, description: dict.map.sub };
}

export default async function MapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  const spots: MapSpot[] = allSpots.flatMap((raw) => {
    const g = geoOf(raw.slug);
    if (!g) return [];
    const spot = lSpot(raw, locale);
    return [
      {
        slug: spot.slug,
        name: spot.name,
        area: spot.area,
        lat: g.lat,
        lng: g.lng,
        approx: g.approx,
        shows: showsAtSpot(spot.slug).map(({ show }) => show.slug),
      },
    ];
  });

  const showOptions = allShows.map((s) => ({
    slug: s.slug,
    title: lShow(s, locale).title,
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionHeading title={dict.map.title} />
      <p className="mt-2 max-w-2xl text-ink-soft">{dict.map.sub}</p>
      <MapExplorer
        locale={locale}
        spots={spots}
        shows={showOptions}
        allLabel={dict.map.allSpots}
        filterLabel={dict.map.filterByShow}
      />
    </div>
  );
}
