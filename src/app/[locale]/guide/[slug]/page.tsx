import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, l, LOCALES } from "@/i18n/config";
import { resolveLocale } from "@/lib/page-utils";
import { allArticles, getArticle } from "@/lib/data";
import { categoryLabel, hasArticleL10n, lArticle } from "@/lib/localize";
import { ADSENSE, PARTNERS } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";
import { AffiliateCta } from "@/components/AffiliateCta";
import { Icon, Pill, Rule, TipBox } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allArticles.map((a) => ({ locale, slug: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const source = getArticle(slug);
  if (!source) return {};
  const a = isLocale(locale) ? lArticle(source, locale) : source;
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const { slug } = await params;
  const source = getArticle(slug);
  if (!source) notFound();
  const article = lArticle(source, locale);
  const translated = locale === "en" || hasArticleL10n(slug, locale);

  // One clearly-disclosed affiliate callout on the pages where it answers
  // the reader's actual next step. eSIM = Klook's top-commission category.
  const AFF_CTA: Record<string, { kind: "esim" | "hotel"; href: string }> = {
    "sim-esim-apps": { kind: "esim", href: PARTNERS.klookEsim() },
    "airport-to-seoul": { kind: "esim", href: PARTNERS.klookEsim() },
    "seoul-neighborhoods-for-fans": { kind: "hotel", href: PARTNERS.agodaSearch("Seoul") },
    "busan-set-jetting": { kind: "hotel", href: PARTNERS.agodaSearch("Busan") },
  };
  const ctaSpec = AFF_CTA[slug];

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-xs font-semibold text-ink-faint">
        <Link href={l(locale, "/guide")} className="hover:text-indigo">
          {dict.nav.guide}
        </Link>{" "}
        / {article.title}
      </nav>

      <header className="mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="indigo">{categoryLabel(article.category, locale)}</Pill>
          <span className="text-xs font-semibold text-ink-faint">
            {article.readMinutes} {dict.common.minRead} · {dict.common.lastVerified}:{" "}
            {article.updated}
          </span>
        </div>
        <h1 className="mt-3 font-display text-3xl leading-tight font-bold sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{article.excerpt}</p>
        {!translated ? (
          <p className="mt-3 rounded-[4px] bg-band px-3 py-2 text-xs text-ink-faint">
            {dict.common.englishOnlyNote}
          </p>
        ) : null}
      </header>

      <AdSlot slot={ADSENSE.slotArticle} className="mt-6" />

      <div className="mt-8 space-y-9">
        {article.sections.map((section, i) => (
          <section key={i}>
            {section.heading ? (
              <h2 className="font-display text-2xl leading-snug font-bold">
                {section.heading}
              </h2>
            ) : null}
            <div className="mt-3 space-y-4">
              {section.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className={`leading-relaxed text-ink-soft ${
                    i === 0 && j === 0
                      ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-5xl first-letter:leading-[0.9] first-letter:font-bold first-letter:text-indigo"
                      : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
            {section.list ? (
              <ul className="mt-4 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-2 text-[15px] text-ink-soft">
                    <Icon
                      name="check"
                      size={16}
                      className="mt-1 shrink-0 text-celadon"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.tip ? (
              <div className="mt-4">
                <TipBox label={dict.common.tips}>{section.tip}</TipBox>
              </div>
            ) : null}
            {i === 1 ? <AdSlot slot={ADSENSE.slotArticle} className="mt-6" /> : null}
          </section>
        ))}
      </div>

      {ctaSpec ? (
        <AffiliateCta
          title={ctaSpec.kind === "esim" ? dict.affCta.esimTitle : dict.affCta.hotelTitle}
          body={ctaSpec.kind === "esim" ? dict.affCta.esimBody : dict.affCta.hotelBody}
          cta={ctaSpec.kind === "esim" ? dict.affCta.esimCta : dict.affCta.hotelCta}
          href={ctaSpec.href}
          disclosure={dict.affCta.disclosure}
        />
      ) : null}

      {article.faq?.length ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">{dict.guide.faq}</h2>
          <div className="mt-4 space-y-2">
            {article.faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-[8px] border border-line px-4 py-3"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-2 text-sm font-bold">
                  {f.q}
                  <Icon
                    name="chevron"
                    size={15}
                    className="shrink-0 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {article.related?.length ? (
        <section className="mt-10">
          <h2 className="text-[11px] font-bold tracking-[0.18em] text-ink-faint uppercase">
            {dict.guide.related}
          </h2>
          <ul className="mt-2 space-y-1.5">
            {article.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href.startsWith("/") ? l(locale, r.href) : r.href}
                  className="text-sm font-bold text-indigo hover:underline"
                >
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <Rule className="mt-10" />
      <p className="mt-4 text-xs text-ink-faint">
        <Link
          href={l(locale, "/contact")}
          className="underline underline-offset-2 hover:text-indigo"
        >
          {dict.common.reportInfo}
        </Link>
      </p>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          dateModified: article.updated,
          author: { "@type": "Organization", name: "K-SPOT Travel" },
        }}
      />
      {article.faq?.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      ) : null}
    </article>
  );
}
