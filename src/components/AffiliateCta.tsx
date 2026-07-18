import { Icon } from "@/components/ui";

/**
 * Editorial affiliate callout — one per page maximum, clearly disclosed.
 * Links carry tracking only when the matching NEXT_PUBLIC_AFF_* env is set.
 */
export function AffiliateCta({
  title,
  body,
  cta,
  href,
  disclosure,
}: {
  title: string;
  body: string;
  cta: string;
  href: string;
  disclosure: string;
}) {
  return (
    <aside className="mt-8 rounded-[8px] border-2 border-indigo/25 bg-band p-5">
      <p className="font-display text-lg font-bold">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{body}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-3 inline-flex items-center gap-1.5 rounded-[8px] bg-indigo px-4 py-2 text-sm font-bold text-white hover:bg-indigo-deep"
      >
        {cta} <Icon name="arrow" size={14} />
      </a>
      <p className="mt-2.5 text-[11px] text-ink-faint">{disclosure}</p>
    </aside>
  );
}
