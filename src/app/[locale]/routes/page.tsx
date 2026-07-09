import type { Metadata } from "next";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allRoutes } from "@/lib/data";
import { lRoute } from "@/lib/localize";
import { RouteCard } from "@/components/cards";
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
  return { title: dict.routes.title, description: dict.routes.sub };
}

export default async function RoutesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionHeading title={dict.routes.title} />
      <p className="mt-2 max-w-2xl text-ink-soft">{dict.routes.sub}</p>
      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {allRoutes.map((route) => (
          <RouteCard key={route.slug} route={lRoute(route, locale)} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
