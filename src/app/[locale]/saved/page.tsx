import type { Metadata } from "next";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allRestaurants, allRoutes, allSpots } from "@/lib/data";
import { lRoute, lSpot } from "@/lib/localize";
import { SectionHeading } from "@/components/ui";
import { SavedClient, type SavedItem } from "./SavedClient";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.saved.title };
}

const lSpotWith = (locale: Parameters<typeof lSpot>[1]) => (s: Parameters<typeof lSpot>[0]) =>
  lSpot(s, locale);

export default async function SavedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  const catalog: SavedItem[] = [
    ...allSpots.map(lSpotWith(locale)).map((s) => ({
      id: `spot:${s.slug}`,
      title: s.name,
      sub: s.area,
      href: `/spots/${s.slug}`,
    })),
    ...allRoutes.map((r) => lRoute(r, locale)).map((r) => ({
      id: `route:${r.slug}`,
      title: r.title,
      sub: `${r.days}d · ${r.city}`,
      href: `/routes/${r.slug}`,
    })),
    ...allRestaurants.map((r) => ({
      id: `food:${r.slug}`,
      title: r.name,
      sub: r.cuisine,
      href: `/food/${r.slug}`,
    })),
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title={dict.saved.title} />
      <p className="mt-2 text-ink-soft">{dict.saved.sub}</p>
      <SavedClient locale={locale} dict={dict} catalog={catalog} />
    </div>
  );
}
