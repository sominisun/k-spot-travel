"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";

const CONSENT_KEY = "ks2-consent";
const CONSENT_EVENT = "ks2:consent-change";
const LENS_EVENT = "ks2:lens-event";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type LensEventDetail = Record<string, string> & { name: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsBridge() {
  const enabled = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener(CONSENT_EVENT, onStoreChange);
      return () => window.removeEventListener(CONSENT_EVENT, onStoreChange);
    },
    () => localStorage.getItem(CONSENT_KEY) === "accepted",
    () => false,
  );

  useEffect(() => {
    if (!enabled || !measurementId) return;

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args));
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });

    const forwardLensEvent = (event: Event) => {
      const detail = (event as CustomEvent<LensEventDetail>).detail;
      if (!detail?.name) return;

      const { name, ...parameters } = detail;
      window.gtag?.("event", name, {
        ...parameters,
        event_category: "korea_lens",
      });
    };

    window.addEventListener(LENS_EVENT, forwardLensEvent);
    return () => window.removeEventListener(LENS_EVENT, forwardLensEvent);
  }, [enabled]);

  if (!measurementId) return null;

  return (
    <Script
      id="ks2-google-analytics"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
    />
  );
}
