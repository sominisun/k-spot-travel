"use client";

import { useEffect, useState } from "react";
import { isWished, toggleWish, WISH_EVENT } from "@/lib/client-store";
import { Icon } from "./ui";

export function WishHeart({ id, size = 16 }: { id: string; size?: number }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const sync = () => setOn(isWished(id));
    sync();
    window.addEventListener(WISH_EVENT, sync);
    return () => window.removeEventListener(WISH_EVENT, sync);
  }, [id]);

  return (
    <button
      type="button"
      aria-label="Save"
      aria-pressed={on}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setOn(toggleWish(id));
      }}
      className={`flex h-8 w-8 items-center justify-center rounded-full border bg-paper/90 backdrop-blur transition-colors ${
        on ? "border-kred text-kred" : "border-line text-ink-faint hover:text-kred"
      }`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={on ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path d="M12 21s-7.5-4.7-9.7-9.2C.8 8.6 2.7 5 6.2 5c2 0 3.4 1.1 4.3 2.4h3c.9-1.3 2.3-2.4 4.3-2.4 3.5 0 5.4 3.6 3.9 6.8C19.5 16.3 12 21 12 21Z" />
      </svg>
    </button>
  );
}
