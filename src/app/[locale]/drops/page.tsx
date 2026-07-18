import type { Metadata } from "next";
import Link from "next/link";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { l } from "@/i18n/config";
import { DROPS } from "@/data/drops";
import { SectionHeading } from "@/components/ui";
import { NewsletterForm } from "@/components/NewsletterForm";
import { InsiderDrop } from "@/components/InsiderDrop";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.drops.title, description: dict.drops.sub };
}

const TAG_KEY = {
  "new-spots": "tagNew",
  "re-verified": "tagReverified",
  playbook: "tagPlaybook",
} as const;

export default async function DropsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.drops;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title={t.title} />
      <p className="mt-2 max-w-2xl text-ink-soft">{t.sub}</p>

      <div className="mt-6 rounded-[8px] border border-line bg-band p-5">
        <p className="text-[11px] font-bold tracking-[0.18em] text-indigo uppercase">
          {dict.newsletter.title}
        </p>
        <p className="mt-1 text-sm text-ink-soft">{dict.newsletter.sub}</p>
        <NewsletterForm locale={locale} dict={dict} />
      </div>

      <div className="mt-10 space-y-10">
        {DROPS.map((drop) =>
          drop.insiderUntil && drop.insiderUntil > new Date().toISOString().slice(0, 10) ? (
            <InsiderDrop
              key={drop.slug}
              drop={drop}
              locale={locale}
              tagLabel={t[TAG_KEY[drop.tag]]}
              lockedText={t.insiderLocked}
            />
          ) : (
          <article key={drop.slug} className="border-b border-line pb-9">
            <p className="text-xs text-ink-faint">
              <span className="mr-2 rounded-[4px] border border-celadon px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-celadon uppercase">
                {t[TAG_KEY[drop.tag]]}
              </span>
              {drop.date}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold">{drop.title}</h2>
            <p className="mt-2 text-sm font-semibold text-ink-soft">{drop.excerpt}</p>
            {drop.body.map((p, i) => (
              <p key={i} className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <p className="mt-4 flex flex-wrap gap-3">
              {drop.links.map((link) => (
                <Link
                  key={link.href}
                  href={l(locale, link.href)}
                  className="text-sm font-bold text-indigo hover:underline"
                >
                  {link.label} →
                </Link>
              ))}
            </p>
          </article>
          ),
        )}
      </div>

      <p className="mt-8 text-sm text-ink-faint">{t.insiderNote}</p>
    </div>
  );
}
