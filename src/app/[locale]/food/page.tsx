import Link from "next/link";
import type { Metadata } from "next";
import { l } from "@/i18n/config";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allRestaurants } from "@/lib/data";
import { lRestaurant } from "@/lib/localize";
import { PARTNERS } from "@/lib/site";
import { RestaurantCard } from "@/components/cards";
import { Icon, SectionHeading, TipBox } from "@/components/ui";
import { SourcedImage } from "@/components/SourcedImage";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.food.title, description: dict.food.sub };
}

export default async function FoodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const ccw = allRestaurants
    .filter((r) => r.sourceShow === "Culinary Class Wars")
    .map((r) => lRestaurant(r, locale));
  const classics = allRestaurants
    .filter((r) => r.sourceShow !== "Culinary Class Wars")
    .map((r) => lRestaurant(r, locale));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid items-center gap-8 lg:grid-cols-[7fr_5fr]">
        <div>
          <SectionHeading title={dict.food.title} />
          <p className="mt-2 max-w-2xl text-ink-soft">{dict.food.sub}</p>
          <div className="mt-4">
            <TipBox label={dict.food.booking}>
              <Link
                href={l(locale, "/guide/booking-restaurants-catchtable")}
                className="font-bold text-indigo underline underline-offset-2"
              >
                CatchTable Global — step by step
              </Link>
              {" · "}
              <a
                href={PARTNERS.catchTable}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo underline underline-offset-2"
              >
                Open the app <Icon name="external" size={12} className="inline" />
              </a>
            </TipBox>
          </div>
        </div>
        <SourcedImage slug="hero-food" alt="Korean street food" ratio="aspect-[3/2]" />
      </div>

      <h2 className="mt-10 font-display text-2xl font-bold">Culinary Class Wars</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ccw.map((r) => (
          <RestaurantCard key={r.slug} r={r} locale={locale} dict={dict} />
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold">Screen-famous institutions</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {classics.map((r) => (
          <RestaurantCard key={r.slug} r={r} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
