import type { Locale } from "../config";
import { en, type Dict } from "./en";
import { ko } from "./ko";
import { ja } from "./ja";
import { zh } from "./zh";
import { es } from "./es";

const DICTS: Record<Locale, Dict> = { en, ko, ja, zh, es };

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? en;
}

export type { Dict };
