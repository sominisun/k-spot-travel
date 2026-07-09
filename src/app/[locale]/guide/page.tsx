import type { Metadata } from "next";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allArticles } from "@/lib/data";
import { categoryLabel, lArticle } from "@/lib/localize";
import { ArticleCard } from "@/components/cards";
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
  return { title: dict.guide.title, description: dict.guide.sub };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const categories = [...new Set(allArticles.map((a) => a.category))];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <SectionHeading title={dict.guide.title} />
      <p className="mt-2 max-w-2xl text-ink-soft">{dict.guide.sub}</p>

      {categories.map((cat) => (
        <section key={cat} className="mt-10">
          <h2 className="text-[11px] font-bold tracking-[0.18em] text-indigo uppercase">
            {categoryLabel(cat, locale)}
          </h2>
          <div className="mt-2 space-y-4">
            {allArticles
              .filter((a) => a.category === cat)
              .map((a) => (
                <ArticleCard
                  key={a.slug}
                  article={lArticle(a, locale)}
                  locale={locale}
                  dict={dict}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
