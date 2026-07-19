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
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ shows?: string; days?: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  const { shows, days } = await searchParams;
  // Shared plan links unfurl with a personalized OG card.
  if (shows) {
    const og = `/og/plan?shows=${encodeURIComponent(shows)}&days=${encodeURIComponent(days ?? "3")}`;
    return {
      title: dict.planner.title,
      description: dict.planner.sub,
      openGraph: { images: [og] },
      twitter: { card: "summary_large_image", images: [og] },
    };
  }
  return { title: dict.planner.title, description: dict.planner.sub };
}

export default async function PlannerPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ shows?: string; days?: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const sp = await searchParams;
  const validSlugs = new Set(allShows.map((s) => s.slug));
  const initialShows = (sp.shows ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter((s) => validSlugs.has(s))
    .slice(0, 6);
  const initialDays = Math.min(Math.max(Number(sp.days) || 0, 0), 7) || undefined;

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
        address: spot.address,
        howToGet: spot.howToGet,
        koreanName: spot.koreanName,
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
      <PlannerClient
        locale={locale}
        dict={dict}
        data={data}
        initialShows={initialShows}
        initialDays={initialDays}
        emailEnabled={Boolean(process.env.RESEND_API_KEY)}
      />
    </div>
  );
}
