import Link from "next/link";
import type { Metadata } from "next";
import { l } from "@/i18n/config";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allBeautyGuides } from "@/lib/data";
import { lBeauty } from "@/lib/localize";
import { PARTNERS } from "@/lib/site";
import { SourcedImage } from "@/components/SourcedImage";
import { Icon, Pill, SectionHeading, TipBox } from "@/components/ui";
import { AdSlot } from "@/components/AdSlot";
import { ADSENSE } from "@/lib/site";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.beauty.title, description: dict.beauty.sub };
}

export default async function BeautyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const guides = allBeautyGuides.map((g) => lBeauty(g, locale));

  const buyFromHome = [
    { name: "Olive Young Global", href: PARTNERS.oliveYoungGlobal, note: "The source, shipped worldwide" },
    { name: "StyleKorean", href: PARTNERS.styleKorean, note: "Deep catalog, frequent bundles" },
    { name: "YesStyle", href: PARTNERS.yesStyle, note: "Beauty + fashion, 50+ countries" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid items-center gap-8 lg:grid-cols-[7fr_5fr]">
        <div>
          <SectionHeading title={dict.beauty.title} />
          <p className="mt-2 max-w-2xl text-ink-soft">{dict.beauty.sub}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {guides.map((g) => (
              <a
                key={g.slug}
                href={`#${g.slug}`}
                className="rounded-[8px] border border-line px-3 py-1.5 text-[13px] font-semibold text-ink-soft hover:border-indigo hover:text-indigo"
              >
                {g.title}
              </a>
            ))}
          </div>
        </div>
        <SourcedImage slug="hero-beauty" alt="Myeongdong beauty shopping" ratio="aspect-[3/2]" />
      </div>

      {/* Buy in Korea vs from home */}
      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-[8px] border border-line p-5">
          <h2 className="font-display text-lg font-bold">{dict.beauty.buyInKorea}</h2>
          <p className="mt-1.5 text-sm text-ink-soft">
            Olive Young Myeongdong Town flagship + any large branch.{" "}
            <Link
              href={l(locale, "/guide/kbeauty-shopping-seoul")}
              className="font-bold text-indigo underline underline-offset-2"
            >
              The full playbook →
            </Link>
          </p>
          <p className="mt-2 text-xs text-ink-faint">
            {dict.beauty.taxTip}: ₩15,000+ → instant refund at the register with your passport.
          </p>
        </div>
        <div className="rounded-[8px] border border-line p-5">
          <h2 className="font-display text-lg font-bold">{dict.beauty.buyFromHome}</h2>
          <ul className="mt-2 space-y-2">
            {buyFromHome.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group flex items-center justify-between rounded-[8px] border border-line px-3 py-2 hover:border-indigo"
                >
                  <span className="text-sm font-bold group-hover:text-indigo">{s.name}</span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-faint">
                    {s.note} <Icon name="external" size={12} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AdSlot slot={ADSENSE.slotList} className="mt-8" />

      {/* Guides */}
      <div className="mt-10 space-y-10">
        {guides.map((g) => (
          <section key={g.slug} id={g.slug} className="scroll-mt-20 border-t border-line pt-8">
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="indigo">{g.category}</Pill>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold">{g.title}</h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">{g.description}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.picks.map((p) => (
                <div key={p.name} className="rounded-[8px] border border-line p-4">
                  {p.brand ? (
                    <p className="text-[11px] font-bold tracking-wide text-ink-faint uppercase">
                      {p.brand}
                    </p>
                  ) : null}
                  <p className="mt-0.5 font-bold">{p.name}</p>
                  <p className="mt-1 text-sm text-ink-soft">{p.why}</p>
                  {p.priceHintUSD ? (
                    <p className="mt-1.5 text-xs font-bold text-celadon">{p.priceHintUSD}</p>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-sm text-ink-soft">
                <span className="font-bold">{dict.beauty.buyInKorea}: </span>
                {g.whereToBuy}
              </p>
              {g.oliveYoungTip ? (
                <TipBox label={dict.beauty.taxTip}>{g.oliveYoungTip}</TipBox>
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
