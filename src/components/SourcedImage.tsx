import Image from "next/image";
import { imageOf } from "@/lib/data";

/**
 * The only way images render on this site: photo + visible credit.
 * All sources are Wikimedia Commons files under CC BY / CC BY-SA / CC0 / PD —
 * attribution is a license requirement and we render it always.
 */
export function SourcedImage({
  slug,
  alt,
  ratio = "aspect-[3/2]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  unoptimized = false,
  className = "",
  fallbackTitle,
  fallbackNote,
  captionLink = true,
}: {
  slug: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  /** Bypass the Next image proxy for a source that is unstable behind the optimizer. */
  unoptimized?: boolean;
  className?: string;
  /** Rendered in the quiet typographic block when no licensed photo exists yet */
  fallbackTitle?: string;
  fallbackNote?: string;
  /** Render the source credit as a link. Must be false inside an <a> parent. */
  captionLink?: boolean;
}) {
  const img = imageOf(slug);

  if (!img) {
    return (
      <figure
        className={`flex ${ratio} flex-col items-center justify-center gap-2 rounded-[4px] border border-line bg-band px-6 text-center ${className}`}
      >
        <span className="font-display text-lg font-bold text-ink-soft">
          {fallbackTitle ?? alt}
        </span>
        {fallbackNote ? (
          <span className="max-w-xs text-xs text-ink-faint">{fallbackNote}</span>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div className={`relative ${ratio} overflow-hidden rounded-[4px] bg-band`}>
        <Image
          src={img.url}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={unoptimized}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-1.5 text-[11px] leading-tight text-ink-faint">
        {captionLink ? (
          <a
            href={img.page}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo"
          >
            {img.artist} · Wikimedia Commons · {img.license}
          </a>
        ) : (
          <span>
            {img.artist} · Wikimedia Commons · {img.license}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
