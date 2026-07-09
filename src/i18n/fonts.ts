// Per-locale magazine typography — all free (OFL) faces genuinely used in
// editorial work: Libre Caslon for Latin headlines, Noto Serif CJK families
// for KR/JP/ZH headlines, with matching sans bodies.
import {
  Inter,
  Libre_Caslon_Text,
  Noto_Sans_JP,
  Noto_Sans_KR,
  Noto_Sans_SC,
  Noto_Serif_JP,
  Noto_Serif_KR,
  Noto_Serif_SC,
} from "next/font/google";
import type { Locale } from "./config";

const caslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--f-caslon",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--f-inter",
  display: "swap",
});
const serifKR = Noto_Serif_KR({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  preload: false,
  variable: "--f-serif-kr",
  display: "swap",
});
const sansKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: false,
  variable: "--f-sans-kr",
  display: "swap",
});
const serifJP = Noto_Serif_JP({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  preload: false,
  variable: "--f-serif-jp",
  display: "swap",
});
const sansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: false,
  variable: "--f-sans-jp",
  display: "swap",
});
const serifSC = Noto_Serif_SC({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  preload: false,
  variable: "--f-serif-sc",
  display: "swap",
});
const sansSC = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: false,
  variable: "--f-sans-sc",
  display: "swap",
});

/** All font CSS variables (fonts themselves lazy-load per glyph slices). */
export const FONT_VARS = [
  caslon.variable,
  inter.variable,
  serifKR.variable,
  sansKR.variable,
  serifJP.variable,
  sansJP.variable,
  serifSC.variable,
  sansSC.variable,
].join(" ");

/** html class that maps --fd/--fb to the right family per locale (see globals.css). */
export function localeClass(locale: Locale): string {
  return `loc-${locale}`;
}
