import { en } from "./en";
import { es } from "./es";
import type { CvContent, Locale } from "./types";

const content: Record<Locale, CvContent> = { es, en };

export function getContent(locale: Locale): CvContent {
  return content[locale];
}
