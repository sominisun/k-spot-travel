import type { Metadata } from "next";
import Link from "next/link";
import { l } from "@/i18n/config";
import { getLegal } from "@/i18n/legal";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allShows, allSpots } from "@/lib/data";
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
  return { title: dict.legal.aboutTitle };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const legal = getLegal(locale);
  const a = legal.about;

  const p1 = a.p1
    .replace("{shows}", String(allShows.length))
    .replace("{spots}", String(allSpots.length));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title={dict.legal.aboutTitle} />

      <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
        <p>
          <strong className="text-ink">{dict.footer.tagline}</strong> {p1}
        </p>
        <p>{a.p2}</p>
      </div>

      <section className="mt-9">
        <h2 className="font-display text-2xl font-bold">{a.policyTitle}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
          {a.bullets.map((item) => (
            <li key={item.b}>
              <strong className="text-ink">{item.b}</strong> {item.t}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-9 text-sm text-ink-soft">
        {a.contactLead}{" "}
        <Link
          href={l(locale, "/contact")}
          className="font-bold text-indigo underline underline-offset-2"
        >
          {dict.footer.contact} →
        </Link>
      </p>
    </div>
  );
}
