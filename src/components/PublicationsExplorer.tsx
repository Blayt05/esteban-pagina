"use client";

import { useMemo, useState } from "react";
import type { Publication, PublicationCategory } from "@/data/types";
import { SearchIcon } from "./Icons";

type Labels = {
  search: string;
  searchPlaceholder: string;
  all: string;
  resultsOne: string;
  resultsMany: string;
  empty: string;
  filterLabel: string;
  categories: Record<PublicationCategory, string>;
};

const order: PublicationCategory[] = ["idb", "academic", "caiinno", "unctad", "articles"];

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function PublicationsExplorer({
  publications,
  labels,
}: {
  publications: Publication[];
  labels: Labels;
}) {
  const [category, setCategory] = useState<PublicationCategory | "all">("all");
  const [query, setQuery] = useState("");

  // Orden por año descendente; las entradas sin año (p. ej. artículos) van al final.
  const sorted = useMemo(
    () => [...publications].sort((a, b) => (b.year ?? -1) - (a.year ?? -1)),
    [publications],
  );

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return sorted.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;
      const text = [p.title, p.source, ...(p.notes ?? []), labels.categories[p.category]]
        .filter(Boolean)
        .join(" ");
      return normalize(text).includes(q);
    });
  }, [sorted, category, query, labels.categories]);

  const counts = useMemo(() => {
    const c = {} as Record<PublicationCategory, number>;
    for (const p of publications) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, [publications]);

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      active
        ? "border-navy bg-navy text-white dark:border-gold dark:bg-gold dark:text-navy"
        : "border-line bg-surface text-ink/80 hover:border-accent hover:text-accent"
    }`;

  return (
    <div>
      <div className="flex flex-col gap-5">
        <label className="relative block max-w-xl">
          <span className="sr-only">{labels.search}</span>
          <SearchIcon className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="w-full rounded-full border border-line bg-surface py-3 pr-4 pl-12 text-base text-ink placeholder:text-muted/80 focus:border-accent focus:outline-none"
          />
        </label>
        <div role="group" aria-label={labels.filterLabel} className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={category === "all"}
            onClick={() => setCategory("all")}
            className={chip(category === "all")}
          >
            {labels.all} <span className="opacity-70">({publications.length})</span>
          </button>
          {order
            .filter((c) => counts[c])
            .map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={chip(category === c)}
              >
                {labels.categories[c]} <span className="opacity-70">({counts[c]})</span>
              </button>
            ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-muted">
        {results.length === 1
          ? labels.resultsOne
          : labels.resultsMany.replace("{n}", String(results.length))}
      </p>

      {results.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-line p-8 text-center text-muted">
          {labels.empty}
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {results.map((p) => (
            <li
              key={`${p.category}-${p.title}`}
              className="grid gap-x-6 gap-y-2 py-5 sm:grid-cols-[5rem_1fr]"
            >
              <span className="font-serif text-2xl text-accent sm:text-right">
                {p.year ?? "—"}
              </span>
              <div>
                <p className="font-serif text-lg leading-snug text-ink">{p.title}</p>
                {p.source && <p className="mt-1 text-sm text-muted">{p.source}</p>}
                {p.notes?.map((n) => (
                  <p key={n} className="mt-1 text-sm text-ink/75 italic">
                    {n}
                  </p>
                ))}
                <span className="mt-3 inline-block rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-medium text-muted">
                  {labels.categories[p.category]}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
