import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, l, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dict";
import {
  allBeautyGuides,
  allArticles,
  allRestaurants,
  allRoutes,
  allShows,
  allSpots,
  evergreenShows,
  trendingShows,
} from "@/lib/data";
import { lArticle, lRestaurant, lRoute, lShow } from "@/lib/localize";
import { getSeoulPicks } from "@/data/events";
import { COMMUNITY, PARTNERS } from "@/lib/site";
import { SourcedImage } from "@/components/SourcedImage";
import { ArticleCard, RestaurantCard, RouteCard, ShowCard } from "@/components/cards";
import { Icon, Kicker, SectionHeading } from "@/components/ui";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);
  const h = dict.home;

  const stats = [
    { n: allShows.length, label: h.statShows },
    { n: allSpots.length, label: h.statSpots },
    { n: allRoutes.length, label: h.statRoutes },
    { n: allRestaurants.length + allBeautyGuides.length, label: h.statPicks },
  ];

  return (
    <div>
      {/* ---- Hero: white, serif, photo-led ---- */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-14 lg:grid-cols-[7fr_5fr]">
        <div>
          <Kicker>{h.kicker}</Kicker>
          <h1 className="mt-3 font-display text-4xl leading-[1.15] font-bold sm:text-5xl">
            {h.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {h.heroSub}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={l(locale, "/planner")}
              className="inline-flex items-center gap-2 rounded-[8px] bg-indigo px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-deep"
            >
              {h.ctaPlanner}
            </Link>
            <Link
              href={l(locale, "/shows")}
              className="inline-flex items-center gap-2 rounded-[8px] border border-line px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-indigo hover:text-indigo"
            >
              {h.ctaShows}
              <Icon name="arrow" size={16} />
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-4 gap-4 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-indigo">{s.n}</dt>
                <dd className="mt-0.5 text-[11px] leading-tight font-semibold tracking-wide text-ink-faint uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <SourcedImage
          slug="hero-seoul"
          alt="Seoul skyline at night"
          ratio="aspect-[4/5]"
          sizes="(min-width:1024px) 40vw, 100vw"
          priority
        />
      </section>

      {/* ---- Trending ---- */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading kicker={h.trendingKicker} title={h.trendingTitle} />
          <Link
            href={l(locale, "/shows")}
            className="shrink-0 text-sm font-bold text-indigo hover:underline"
          >
            {dict.common.viewAll} →
          </Link>
        </div>
        <div className="mt-7 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {trendingShows.slice(0, 6).map((show) => (
            <ShowCard key={show.slug} show={lShow(show, locale)} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      {/* ---- Evergreen strip ---- */}
      <section className="border-y border-line bg-band">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionHeading title={h.evergreenTitle} />
          <div className="mt-7 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {evergreenShows.slice(0, 4).map((show) => (
              <ShowCard key={show.slug} show={lShow(show, locale)} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Routes ---- */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading kicker={h.routesKicker} title={h.routesTitle} />
          <Link
            href={l(locale, "/routes")}
            className="shrink-0 text-sm font-bold text-indigo hover:underline"
          >
            {dict.common.viewAll} →
          </Link>
        </div>
        <div className="mt-7 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {allRoutes.slice(0, 3).map((route) => (
            <RouteCard key={route.slug} route={lRoute(route, locale)} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      {/* ---- Food ---- */}
      <section className="border-y border-line bg-band">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading kicker={h.foodKicker} title={h.foodTitle} />
            <Link
              href={l(locale, "/food")}
              className="shrink-0 text-sm font-bold text-indigo hover:underline"
            >
              {dict.common.viewAll} →
            </Link>
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allRestaurants.slice(0, 3).map((r) => (
              <RestaurantCard key={r.slug} r={lRestaurant(r, locale)} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Beauty banner ---- */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid items-center gap-8 rounded-[8px] border border-line p-6 sm:p-8 lg:grid-cols-[5fr_7fr]">
          <SourcedImage
            slug="hero-beauty"
            alt="Myeongdong shopping street"
            ratio="aspect-[4/3]"
          />
          <div>
            <Kicker>{h.beautyKicker}</Kicker>
            <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
              {h.beautyTitle}
            </h2>
            <p className="mt-3 max-w-lg text-ink-soft">{dict.beauty.sub}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={l(locale, "/beauty")}
                className="rounded-[8px] bg-indigo px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-deep"
              >
                {dict.beauty.picks} →
              </Link>
              <a
                href={PARTNERS.oliveYoungGlobal}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1.5 rounded-[8px] border border-line px-4 py-2.5 text-sm font-bold text-ink-soft hover:border-indigo hover:text-indigo"
              >
                Olive Young Global <Icon name="external" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Quiz hook ---- */}
      <section className="border-y border-line bg-indigo">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {h.quizTitle}
            </h2>
            <p className="mt-2 max-w-xl text-white/80">{h.quizSub}</p>
          </div>
          <Link
            href={l(locale, "/quiz")}
            className="rounded-[8px] bg-white px-5 py-3 text-sm font-bold text-indigo hover:bg-indigo-soft"
          >
            {h.quizCta} →
          </Link>
        </div>
      </section>

      {/* ---- Guides + Now in Seoul ---- */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 lg:grid-cols-[7fr_5fr]">
        <div>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading kicker={h.guideKicker} title={h.guideTitle} />
            <Link
              href={l(locale, "/guide")}
              className="shrink-0 text-sm font-bold text-indigo hover:underline"
            >
              {dict.common.viewAll} →
            </Link>
          </div>
          <div className="mt-4 space-y-4">
            {allArticles.slice(0, 4).map((a) => (
              <ArticleCard
                key={a.slug}
                article={lArticle(a, locale)}
                locale={locale}
                dict={dict}
              />
            ))}
          </div>
        </div>
        <div>
          <SectionHeading kicker={h.nowSeoulKicker} title={h.nowSeoulTitle} />
          <div className="mt-4 space-y-3">
            {getSeoulPicks(locale).map((p) => {
              const inner = (
                <div className="rounded-[8px] border border-line p-4 transition-colors hover:border-indigo">
                  <p className="text-[11px] font-bold tracking-wide text-ink-faint uppercase">
                    {p.area}
                  </p>
                  <p className="mt-1 font-display font-bold">{p.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{p.note}</p>
                </div>
              );
              return p.external ? (
                <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <Link key={p.title} href={l(locale, p.href)}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Community ---- */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-[8px] border border-line bg-band p-8 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {h.communityTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-ink-soft">{h.communitySub}</p>
          <div className="mt-5">
            {COMMUNITY.discordInvite ? (
              <a
                href={COMMUNITY.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-[8px] bg-[#5865F2] px-5 py-3 text-sm font-bold text-white hover:opacity-90"
              >
                {h.communityCta} →
              </a>
            ) : (
              <Link
                href={l(locale, "/community")}
                className="inline-block rounded-[8px] bg-[#5865F2] px-5 py-3 text-sm font-bold text-white hover:opacity-90"
              >
                {h.communityCta} →
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
