"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { l, type Locale } from "@/i18n/config";

const KEY = "ks2-consent";
const CONSENT_EVENT = "ks2:consent-change";

const COPY: Record<string, { text: string; accept: string; decline: string; policy: string }> = {
  en: {
    text: "We use cookies for anonymous analytics and — once approved — ad personalization by Google AdSense.",
    accept: "Accept",
    decline: "Decline",
    policy: "Privacy policy",
  },
  ko: {
    text: "익명 분석과 (승인 후) Google AdSense 광고 개인화를 위해 쿠키를 사용합니다.",
    accept: "동의",
    decline: "거부",
    policy: "개인정보처리방침",
  },
  ja: {
    text: "匿名の分析と（承認後は）Google AdSense広告のパーソナライズのためにCookieを使用します。",
    accept: "同意する",
    decline: "拒否",
    policy: "プライバシーポリシー",
  },
  zh: {
    text: "我们使用 Cookie 进行匿名分析，以及（获批后）Google AdSense 广告个性化。",
    accept: "接受",
    decline: "拒绝",
    policy: "隐私政策",
  },
  es: {
    text: "Usamos cookies para analítica anónima y — una vez aprobado — personalización de anuncios de Google AdSense.",
    accept: "Aceptar",
    decline: "Rechazar",
    policy: "Política de privacidad",
  },
};

export function CookieConsent({ locale }: { locale: Locale }) {
  const c = COPY[locale] ?? COPY.en;
  const show = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener(CONSENT_EVENT, onStoreChange);
      return () => window.removeEventListener(CONSENT_EVENT, onStoreChange);
    },
    () => !localStorage.getItem(KEY),
    () => false,
  );

  if (!show) return null;

  const set = (v: string) => {
    localStorage.setItem(KEY, v);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { state: v } }));
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-ink-soft">
          {c.text}{" "}
          <Link href={l(locale, "/privacy-policy")} className="font-semibold text-indigo underline underline-offset-2">
            {c.policy}
          </Link>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => set("declined")}
            className="rounded-[8px] border border-line px-3.5 py-1.5 text-xs font-bold text-ink-soft"
          >
            {c.decline}
          </button>
          <button
            type="button"
            onClick={() => set("accepted")}
            className="rounded-[8px] bg-ink px-3.5 py-1.5 text-xs font-bold text-paper"
          >
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
