import type { Experience } from "@/data/types";

/** Ordena la experiencia de lo más reciente a lo más antiguo (actualidad primero). */
export function sortExperience(items: Experience[]): Experience[] {
  const end = (e: Experience) => e.end ?? Number.POSITIVE_INFINITY;
  return [...items].sort((a, b) => end(b) - end(a) || b.start - a.start);
}

/** Agrupa elementos por clave conservando el orden de aparición. */
export function groupBy<T>(items: T[], key: (item: T) => string): [string, T[]][] {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const k = key(item);
    map.set(k, [...(map.get(k) ?? []), item]);
  }
  return [...map.entries()];
}

export function initials(name: string): string {
  return name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}
