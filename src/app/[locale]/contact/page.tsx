import type { Metadata } from "next";
import Link from "next/link";
import { l } from "@/i18n/config";
import { getLegal } from "@/i18n/legal";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { COMMUNITY, SITE } from "@/lib/site";
import { Icon, SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.legal.contactTitle };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const legal = getLegal(locale);
  const c = legal.contact;

  const rows = [
    {
      title: c.rows[0].title,
      body: SITE.contactEmail,
      href: `mailto:${SITE.contactEmail}`,
      note: c.rows[0].note,
    },
    {
      title: c.rows[1].title,
      body: c.rows[1].body ?? "Discord",
      href: COMMUNITY.discordInvite || l(locale, "/community"),
      note: c.rows[1].note,
    },
    {
      title: c.rows[2].title,
      body: c.rows[2].body ?? "",
      href: null as string | null,
      note: c.rows[2].note,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title={dict.legal.contactTitle} />
      <div className="mt-6 space-y-3">
        {rows.map((r) => (
          <div key={r.title} className="rounded-[8px] border border-line p-5">
            <h2 className="font-display font-bold">{r.title}</h2>
            {r.href ? (
              <a
                href={r.href}
                className="mt-1 inline-flex items-center gap-1.5 font-bold text-indigo hover:underline"
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {r.body} <Icon name="external" size={13} />
              </a>
            ) : (
              <p className="mt-1 font-bold text-ink">{r.body}</p>
            )}
            <p className="mt-1.5 text-sm text-ink-soft">{r.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-soft">
        {c.outro1} “{dict.common.reportInfo}” {c.outro2}{" "}
        <Link
          href={l(locale, "/about")}
          className="font-bold text-indigo underline underline-offset-2"
        >
          {c.outroLinkLabel}
        </Link>
      </p>
    </div>
  );
}
