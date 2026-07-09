import type { Metadata } from "next";
import { l } from "@/i18n/config";
import Link from "next/link";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { COMMUNITY } from "@/lib/site";
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
  return { title: dict.community.title, description: dict.community.sub };
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const c = dict.community;
  const channels = [c.ch1, c.ch2, c.ch3, c.ch4];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <SectionHeading title={c.title} />
      <p className="mt-2 text-lg text-ink-soft">{c.sub}</p>

      <div className="mt-7">
        {COMMUNITY.discordInvite ? (
          <a
            href={COMMUNITY.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#5865F2] px-6 py-3 font-bold text-white hover:opacity-90"
          >
            {c.join} <Icon name="external" size={15} />
          </a>
        ) : (
          <div className="rounded-[8px] border border-line bg-band p-5">
            <p className="text-sm text-ink-soft">
              {c.pending}{" "}
              <Link
                href={l(locale, "/contact")}
                className="font-bold text-indigo underline underline-offset-2"
              >
                {dict.footer.contact} →
              </Link>
            </p>
          </div>
        )}
      </div>

      <section className="mt-9">
        <h2 className="font-display text-xl font-bold">{c.channels}</h2>
        <ul className="mt-3 space-y-2.5">
          {channels.map((ch) => (
            <li
              key={ch}
              className="flex gap-2.5 rounded-[8px] border border-line p-4 text-sm text-ink-soft"
            >
              <Icon name="check" size={16} className="mt-0.5 shrink-0 text-celadon" />
              {ch}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-9 rounded-[8px] border-l-2 border-indigo bg-indigo-soft/40 p-5">
        <h2 className="font-display text-lg font-bold text-indigo">{c.fanFrame}</h2>
        <p className="mt-1.5 text-sm text-ink-soft">{c.fanFrameSub}</p>
      </section>
    </div>
  );
}
