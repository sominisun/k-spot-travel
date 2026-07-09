import type { Metadata } from "next";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allRestaurants, allShows, geoOf } from "@/lib/data";
import { lRestaurant, lShow, lSpotsOfShow } from "@/lib/localize";
import { SectionHeading } from "@/components/ui";
import { PlannerClient, type PlannerData } from "./PlannerClient";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.planner.title, description: dict.planner.sub };
}

export default async function PlannerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  const data: PlannerData = {
    shows: allShows.map((s) => ({
      slug: s.slug,
      title: lShow(s, locale).title,
      status: s.status,
      spots: lSpotsOfShow(s, locale).map(({ spot, sceneNote }) => ({
        slug: spot.slug,
        name: spot.name,
        region: spot.region,
        area: spot.area,
        scene: sceneNote,
        geo: geoOf(spot.slug) ?? null,
      })),
    })),
    restaurants: allRestaurants
      .map((r) => lRestaurant(r, locale))
      .map((r) => ({
        slug: r.slug,
        name: r.name,
        region: r.region,
        sourceShow: r.sourceShow,
        priceRange: r.priceRange,
        booking: r.bookingMethod,
      })),
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <SectionHeading title={dict.planner.title} />
      <p className="mt-2 max-w-2xl text-ink-soft">{dict.planner.sub}</p>
      <PlannerClient locale={locale} dict={dict} data={data} />
    </div>
  );
}
