"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { l, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";
import { Icon } from "@/components/ui";

type Trait =
  | "heritage" | "coast" | "city" | "nature"
  | "slow" | "balanced" | "packed"
  | "street" | "fine" | "casual" | "home"
  | "spring" | "summer" | "autumn" | "winter"
  | "photo" | "beauty" | "foodie" | "feels";

/** Editorial trait profiles for matchable shows + their best route. */
const PROFILES: { slug: string; title: string; traits: Trait[]; route: string }[] = [
  { slug: "when-life-gives-you-tangerines", title: "When Life Gives You Tangerines", traits: ["coast", "slow", "home", "spring", "feels", "nature"], route: "jeju-tangerines-trail" },
  { slug: "goblin", title: "Guardian: The Lonely and Great God", traits: ["heritage", "slow", "winter", "feels", "photo"], route: "gangwon-goblin-coast" },
  { slug: "queen-of-tears", title: "Queen of Tears", traits: ["city", "balanced", "fine", "autumn", "beauty"], route: "seoul-trending-now" },
  { slug: "culinary-class-wars", title: "Culinary Class Wars", traits: ["city", "packed", "fine", "foodie", "street"], route: "foodie-seoul-culinary-class-wars" },
  { slug: "itaewon-class", title: "Itaewon Class", traits: ["city", "packed", "casual", "summer", "street"], route: "seoul-kdrama-classics" },
  { slug: "hometown-cha-cha-cha", title: "Hometown Cha-Cha-Cha", traits: ["coast", "slow", "home", "summer", "feels", "nature"], route: "jeju-healing-dramas" },
  { slug: "twenty-five-twenty-one", title: "Twenty-Five Twenty-One", traits: ["heritage", "balanced", "street", "spring", "feels", "photo"], route: "suwon-and-gapyeong-day-trips" },
  { slug: "squid-game", title: "Squid Game", traits: ["city", "packed", "street", "photo", "casual"], route: "seoul-trending-now" },
  { slug: "our-blues", title: "Our Blues", traits: ["coast", "slow", "home", "nature", "feels"], route: "jeju-healing-dramas" },
  { slug: "pachinko", title: "Pachinko", traits: ["coast", "balanced", "home", "autumn", "feels", "heritage"], route: "first-timer-everything" },
  { slug: "lovely-runner", title: "Lovely Runner", traits: ["heritage", "balanced", "casual", "spring", "photo", "feels"], route: "suwon-and-gapyeong-day-trips" },
  { slug: "kpop-demon-hunters", title: "KPop Demon Hunters", traits: ["city", "packed", "street", "photo", "beauty"], route: "seoul-trending-now" },
];

const ANSWER_TRAITS: Trait[][][] = [
  // q1 scenery
  [["heritage"], ["coast", "nature"], ["city"], ["nature"]],
  // q2 character
  [["street", "home"], ["fine", "city"], ["foodie", "fine"], ["feels", "casual"]],
  // q3 pace
  [["slow"], ["balanced"], ["packed"]],
  // q4 food
  [["street"], ["fine", "foodie"], ["casual"], ["home", "feels"]],
  // q5 season
  [["spring"], ["summer"], ["autumn"], ["winter"]],
  // q6 souvenir
  [["photo"], ["beauty"], ["foodie"], ["feels"]],
];

export function QuizClient({
  locale,
  dict,
  titles,
}: {
  locale: Locale;
  dict: Dict;
  titles: Record<string, string>;
}) {
  const t = dict.quiz;
  const questions = useMemo(
    () => [
      { q: t.q1, a: [t.q1a, t.q1b, t.q1c, t.q1d] },
      { q: t.q2, a: [t.q2a, t.q2b, t.q2c, t.q2d] },
      { q: t.q3, a: [t.q3a, t.q3b, t.q3c] },
      { q: t.q4, a: [t.q4a, t.q4b, t.q4c, t.q4d] },
      { q: t.q5, a: [t.q5a, t.q5b, t.q5c, t.q5d] },
      { q: t.q6, a: [t.q6a, t.q6b, t.q6c, t.q6d] },
    ],
    [t],
  );

  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    if (answers.length < questions.length) return null;
    const traits = answers.flatMap((a, qi) => ANSWER_TRAITS[qi][a] ?? []);
    let best = PROFILES[0];
    let bestScore = -1;
    for (const p of PROFILES) {
      const score = p.traits.filter((tr) => traits.includes(tr)).length;
      if (score > bestScore) {
        bestScore = score;
        best = p;
      }
    }
    return best;
  }, [answers, questions.length]);

  const answer = (i: number) => {
    const next = [...answers, i];
    setAnswers(next);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setAnswers([]);
    setStep(-1);
    setCopied(false);
  };

  const share = async () => {
    const url = `${window.location.origin}${l(locale, "/quiz")}?match=${result?.slug ?? ""}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
  };

  if (step === -1) {
    return (
      <button
        type="button"
        onClick={() => setStep(0)}
        className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-indigo px-6 py-3 font-bold text-white hover:bg-indigo-deep"
      >
        <Icon name="sparkle" size={16} /> {t.start}
      </button>
    );
  }

  if (result) {
    return (
      <div className="mt-8 rounded-[8px] border-2 border-indigo/25 p-6 text-center">
        <p className="text-[11px] font-bold tracking-[0.18em] text-indigo uppercase">
          {t.result}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold">
          {titles[result.slug] ?? result.title}
        </h2>
        <p className="mt-2 text-sm text-ink-faint">{t.resultSub}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href={l(locale, `/shows/${result.slug}`)}
            className="rounded-[8px] bg-indigo px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-deep"
          >
            {t.seeSpots} →
          </Link>
          <Link
            href={l(locale, `/routes/${result.route}`)}
            className="rounded-[8px] border border-indigo px-4 py-2.5 text-sm font-bold text-indigo hover:bg-indigo-soft"
          >
            {t.seeRoute} →
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
          <button
            type="button"
            onClick={share}
            className="inline-flex items-center gap-1.5 font-semibold text-ink-soft hover:text-indigo"
          >
            <Icon name="copy" size={14} /> {copied ? t.shared : t.share}
          </button>
          <button
            type="button"
            onClick={reset}
            className="font-semibold text-ink-faint hover:text-indigo"
          >
            {t.retake}
          </button>
        </div>
      </div>
    );
  }

  const q = questions[step];
  return (
    <div className="mt-8">
      <div className="flex items-center gap-1.5">
        {questions.map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full ${i <= step ? "bg-indigo" : "bg-line"}`}
          />
        ))}
      </div>
      <h2 className="mt-6 font-display text-2xl font-bold">{q.q}</h2>
      <div className="mt-5 space-y-2.5">
        {q.a.map((opt, i) => (
          <button
            key={opt}
            type="button"
            onClick={() => answer(i)}
            className="block w-full rounded-[8px] border border-line px-4 py-3 text-left font-semibold text-ink-soft transition-colors hover:border-indigo hover:text-indigo"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
