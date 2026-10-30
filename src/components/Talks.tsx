import type { Talk } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { groupBy } from "@/lib/utils";
import { Section } from "./Section";

export function Talks({ items, t }: { items: Talk[]; t: Dictionary }) {
  const byCountry = groupBy(items, (talk) => talk.country);

  return (
    <Section id="ponencias" eyebrow={t.talks.eyebrow} title={t.talks.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {byCountry.map(([country, talks]) => (
          <section
            key={country}
            data-reveal
            aria-label={country}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <h3 className="flex items-baseline justify-between border-b border-line pb-3 font-serif text-xl font-medium text-ink">
              {country}
              <span className="text-sm font-sans font-semibold text-accent">{talks.length}</span>
            </h3>
            <ul className="mt-4 space-y-2.5">
              {talks.map((talk) => (
                <li key={talk.institution} className="text-sm leading-relaxed text-ink/80">
                  {talk.institution}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
