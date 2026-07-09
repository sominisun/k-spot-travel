import type { ReactNode } from "react";

/* ---- Icon set: 1.5px line icons, no emoji anywhere in the UI. ---- */
const PATHS: Record<string, ReactNode> = {
  heart: (
    <path d="M12 21s-7.5-4.7-9.7-9.2C.8 8.6 2.7 5 6.2 5c2 0 3.4 1.1 4.3 2.4h3c.9-1.3 2.3-2.4 4.3-2.4 3.5 0 5.4 3.6 3.9 6.8C19.5 16.3 12 21 12 21Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </>
  ),
  arrow: <path d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5" />,
  check: <path d="M4.5 12.5 10 18 19.5 6.5" />,
  external: <path d="M14 4h6v6M20 4 11 13M9 5H5.5A1.5 1.5 0 0 0 4 6.5v12A1.5 1.5 0 0 0 5.5 20h12a1.5 1.5 0 0 0 1.5-1.5V15" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.4-4.4" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  send: <path d="M4 12 20 4l-4.5 16-4-6.5L4 12Zm7.5 1.5L20 4" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.5l3.5 2" />
    </>
  ),
  train: (
    <>
      <rect x="5" y="3.5" width="14" height="14" rx="2.5" />
      <path d="M5 11h14M9 21l1.5-3.5M15 21l-1.5-3.5" />
      <circle cx="9" cy="14.5" r="0.8" />
      <circle cx="15" cy="14.5" r="0.8" />
    </>
  ),
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="1.5" />
      <path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </>
  ),
  download: <path d="M12 4v11m0 0 4.5-4.5M12 15 7.5 10.5M5 20h14" />,
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11" height="11" rx="1.5" />
      <path d="M6 15.5H5A1.5 1.5 0 0 1 3.5 14V5A1.5 1.5 0 0 1 5 3.5h9A1.5 1.5 0 0 1 15.5 5v1" />
    </>
  ),
  thumbUp: <path d="M7.5 11 11 3.5c1.4 0 2.3 1.2 2.3 2.4V9h4.6c1.3 0 2.2 1.2 1.9 2.4l-1.3 6A2 2 0 0 1 16.6 19H7.5m0-8v8m0-8H4v8h3.5" />,
  thumbDown: <path d="M16.5 13 13 20.5c-1.4 0-2.3-1.2-2.3-2.4V15H6.1c-1.3 0-2.2-1.2-1.9-2.4l1.3-6A2 2 0 0 1 7.4 5h9.1m0 8V5m0 8H20V5h-3.5" />,
  stamp: (
    <>
      <path d="M12 3.5a3.5 3.5 0 0 1 3.5 3.5c0 2-1.5 3-1.5 4.5h-4C10 10 8.5 9 8.5 7A3.5 3.5 0 0 1 12 3.5ZM6 15.5h12a1.5 1.5 0 0 1 1.5 1.5v1.5h-15V17A1.5 1.5 0 0 1 6 15.5ZM4.5 20.5h15" />
    </>
  ),
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z" />,
};

export function Icon({
  name,
  size = 18,
  className = "",
}: {
  name: keyof typeof PATHS | string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}

/* ---- Text & layout primitives ---- */

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.18em] text-indigo uppercase">
      {children}
    </p>
  );
}

export function SectionHeading({
  kicker,
  title,
  className = "",
}: {
  kicker?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 className="mt-1 font-display text-2xl leading-snug font-bold sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export function Pill({
  children,
  tone = "line",
}: {
  children: ReactNode;
  tone?: "line" | "indigo" | "red" | "celadon";
}) {
  const tones = {
    line: "border border-line text-ink-soft",
    indigo: "bg-indigo-soft text-indigo",
    red: "bg-kred/10 text-kred",
    celadon: "bg-celadon/10 text-celadon",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-[4px] px-2 py-0.5 text-[11px] font-semibold tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function TipBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-[4px] border-l-2 border-indigo bg-indigo-soft/50 px-4 py-3 text-sm text-ink-soft">
      <span className="font-bold text-indigo">{label} — </span>
      {children}
    </div>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-line ${className}`} />;
}

export function FactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 border-b border-line py-2.5 text-sm last:border-0">
      <dt className="w-28 shrink-0 font-semibold text-ink-faint">{label}</dt>
      <dd className="text-ink-soft">{children}</dd>
    </div>
  );
}
