import type { Metadata } from "next";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allShows } from "@/lib/data";
import { lShow, lSpotsOfShow } from "@/lib/localize";
import { SectionHeading } from "@/components/ui";
import { StampsClient, type StampShow } from "./StampsClient";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.stamps.title, description: dict.stamps.sub };
}

export default async function StampsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  const shows: StampShow[] = allShows.map((s) => ({
    slug: s.slug,
    title: lShow(s, locale).title,
    spots: lSpotsOfShow(s, locale).map(({ spot }) => ({
      slug: spot.slug,
      name: spot.name,
    })),
  }));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title={dict.stamps.title} />
      <p className="mt-2 text-ink-soft">{dict.stamps.sub}</p>
      <StampsClient locale={locale} dict={dict} shows={shows} />
    </div>
  );
}
