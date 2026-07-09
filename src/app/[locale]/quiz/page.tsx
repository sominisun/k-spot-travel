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
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  return { title: dict.quiz.title, description: dict.quiz.sub };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const titles = Object.fromEntries(
    allShows.map((s) => [s.slug, lShow(s, locale).title]),
  );
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <SectionHeading title={dict.quiz.title} />
      <p className="mt-2 text-ink-soft">{dict.quiz.sub}</p>
      <QuizClient locale={locale} dict={dict} titles={titles} />
    </div>
  );
}
