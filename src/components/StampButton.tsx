"use client";

import { useEffect, useState } from "react";
import { isStamped, STAMP_EVENT, toggleStamp } from "@/lib/client-store";
import { Icon } from "./ui";

export function StampButton({
  spotSlug,
  labelIdle,
  labelDone,
}: {
  spotSlug: string;
  labelIdle: string;
  labelDone: string;
}) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const sync = () => setOn(isStamped(spotSlug));
    sync();
    window.addEventListener(STAMP_EVENT, sync);
    return () => window.removeEventListener(STAMP_EVENT, sync);
  }, [spotSlug]);

  return (
    <button
      type="button"
      onClick={() => setOn(toggleStamp(spotSlug))}
      aria-pressed={on}
      className={`inline-flex items-center gap-2 rounded-[8px] border px-4 py-2 text-sm font-bold transition-colors ${
        on
          ? "border-celadon bg-celadon/10 text-celadon"
          : "border-line text-ink-soft hover:border-celadon hover:text-celadon"
      }`}
    >
      <Icon name={on ? "check" : "stamp"} size={16} />
      {on ? labelDone : labelIdle}
    </button>
  );
}
