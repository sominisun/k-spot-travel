import type { Metadata } from "next";
import { getLegal } from "@/i18n/legal";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { SITE } from "@/lib/site";
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
  return { title: dict.legal.privacyTitle };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { dict, locale } = await resolveLocale(params);
  const legal = getLegal(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title={dict.legal.privacyTitle} />
      <p className="mt-2 text-sm text-ink-faint">
        {legal.effectiveLabel}: 2026-07-09 · {SITE.name} ({SITE.url})
      </p>
      <div className="mt-6 space-y-8">
        {legal.privacy.map((s) => (
          <section key={s.h}>
            <h2 className="font-display text-xl font-bold">{s.h}</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-soft">
              {s.ps.map((p) => (
                <li key={p.slice(0, 40)}>{p.replace("{email}", SITE.contactEmail)}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      {legal.prevailNote ? (
        <p className="mt-10 border-t border-line pt-4 text-xs text-ink-faint">
          {legal.prevailNote}
        </p>
      ) : null}
    </div>
  );
}
