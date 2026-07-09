"use client";

import { useEffect } from "react";
import { ADSENSE } from "@/lib/site";

/** Renders nothing until NEXT_PUBLIC_ADSENSE_CLIENT + a slot id are configured. */
export function AdSlot({ slot, className = "" }: { slot?: string; className?: string }) {
  const active = Boolean(ADSENSE.client && slot);

  useEffect(() => {
    if (!active) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      /* ad blockers etc. */
    }
  }, [active]);

  if (!active) return null;
  return (
    <ins
      className={`adsbygoogle block ${className}`}
      data-ad-client={ADSENSE.client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
