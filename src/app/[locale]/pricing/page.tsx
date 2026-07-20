import type { Metadata } from "next";
import Link from "next/link";
import { l } from "@/i18n/config";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { PAYMENTS } from "@/lib/site";
import { Icon, Kicker } from "@/components/ui";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.pricing.title, description: dict.pricing.sub };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { dict, locale } = await resolveLocale(params);
  const p = dict.pricing;
  const passHref = PAYMENTS.passCheckoutUrl || l(locale, "/planner");
  const insiderHref = PAYMENTS.insiderCheckoutUrl || l(locale, "/planner");
  const external = Boolean(PAYMENTS.passCheckoutUrl);

  const ctaProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="text-center">
        <Kicker>{p.kicker}</Kicker>
        <h1 className="mt-1 font-display text-3xl font-bold sm:text-4xl">{p.title}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-ink-soft">{p.sub}</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {/* Free tier */}
        <section className="rounded-[8px] border border-line p-6">
          <h2 className="font-display text-lg font-bold">{p.freeName}</h2>
          <p className="mt-3 font-display text-3xl font-bold">{p.free}</p>
          <ul className="mt-5 space-y-2.5">
            {p.freeFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                <Icon name="check" size={15} className="mt-0.5 shrink-0 text-celadon" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Route Pass */}
        <section className="relative rounded-[8px] border-2 border-indigo p-6">
          <p className="absolute -top-3 left-5 bg-paper px-2 text-[11px] font-bold tracking-[0.14em] text-indigo uppercase">
            {p.popular}
          </p>
          <h2 className="font-display text-lg font-bold">{p.passName}</h2>
          <p className="mt-3">
            <span className="font-display text-3xl font-bold text-indigo">{p.passPrice}</span>
          </p>
          <p className="mt-1 text-xs text-ink-faint">{p.passUnit}</p>
          <ul className="mt-5 space-y-2.5">
            {p.passFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                <Icon name="check" size={15} className="mt-0.5 shrink-0 text-celadon" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href={passHref}
            {...ctaProps}
            className="mt-6 block rounded-[8px] bg-indigo px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-indigo-deep"
          >
            {p.passCta} →
          </a>
        </section>

        {/* Insider */}
        <section className="rounded-[8px] border border-line p-6">
          <h2 className="font-display text-lg font-bold">{p.insiderName}</h2>
          <p className="mt-3">
            <span className="font-display text-3xl font-bold">{p.insiderPrice}</span>
          </p>
          <p className="mt-1 text-xs text-ink-faint">{p.insiderUnit}</p>
          <ul className="mt-5 space-y-2.5">
            {p.insiderFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                <Icon name="check" size={15} className="mt-0.5 shrink-0 text-celadon" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href={insiderHref}
            {...ctaProps}
            className="mt-6 block rounded-[8px] border-2 border-indigo px-5 py-2.5 text-center text-sm font-bold text-indigo hover:bg-indigo hover:text-white"
          >
            {p.insiderCta} →
          </a>
        </section>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink-faint">
        {p.checkoutNote}
      </p>

      <section className="mx-auto mt-10 max-w-2xl rounded-[8px] bg-band p-6">
        <h2 className="font-display text-base font-bold">{p.refundTitle}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.refundNote}</p>
        <Link
          href={l(locale, "/terms")}
          className="mt-3 inline-block text-sm font-semibold text-indigo hover:underline"
        >
          {p.termsLink} →
        </Link>
      </section>
    </div>
  );
}
