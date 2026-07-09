import type { Locale } from "../config";
import { en, type LegalL10n } from "./en";
import { ko } from "./ko";
import { ja } from "./ja";
import { zh } from "./zh";
import { es } from "./es";

const LEGAL: Record<Locale, LegalL10n> = { en, ko, ja, zh, es };

export function getLegal(locale: Locale): LegalL10n {
  return LEGAL[locale] ?? en;
}

export type { LegalL10n };
