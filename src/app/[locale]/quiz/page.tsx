import type { Metadata } from "next";
import { localeParams, resolveLocale } from "@/lib/page-utils";
import { allShows } from "@/lib/data";
import { lShow } from "@/lib/localize";
import { SectionHeading } from "@/components/ui";
import { QuizClient } from "./QuizClient";

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ match?: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  const { match } = await searchParams;
  // Shared result links get a per-show OG card so the share unfurls.
  if (match && allShows.some((s) => s.slug === match)) {
    return {
      title: dict.quiz.title,
      description: dict.quiz.sub,
      openGraph: { images: [`/og/quiz/${match}`] },
      twitter: { card: "summary_large_image", images: [`/og/quiz/${match}`] },
    };
  }
  return { title: dict.quiz.title, description: dict.quiz.sub };
}

export default async function QuizPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ match?: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const { match } = await searchParams;
  const titles = Object.fromEntries(
    allShows.map((s) => [s.slug, lShow(s, locale).title]),
  );
  const friendMatch = match && titles[match] ? match : undefined;
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <SectionHeading title={dict.quiz.title} />
      <p className="mt-2 text-ink-soft">{dict.quiz.sub}</p>
      <QuizClient locale={locale} dict={dict} titles={titles} friendMatch={friendMatch} />
    </div>
  );
}
