import type { CvContent } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "./Section";

export function Teaching({
  data,
  t,
  embedded,
}: {
  data: CvContent["teaching"];
  t: Dictionary;
  embedded?: boolean;
}) {
  return (
    <Section embedded={embedded} id="docencia" eyebrow={t.teaching.eyebrow} title={t.teaching.title}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <figure
          data-reveal
          className="self-start rounded-2xl border-l-4 border-gold bg-accent-soft p-8 text-ink shadow-sm dark:border-l-0 dark:bg-navy dark:text-white dark:ring-1 dark:ring-gold/25"
        >
          <span aria-hidden className="font-serif text-6xl leading-none text-accent dark:text-gold">“</span>
          <blockquote className="font-serif text-xl leading-relaxed">{data.highlight}</blockquote>
        </figure>

        <ul className="divide-y divide-line border-y border-line">
          {data.courses.map((c) => (
            <li key={c.institution} data-reveal className="py-5">
              <p className="font-serif text-lg font-medium text-ink">{c.institution}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{c.program}</p>
            </li>
          ))}
        </ul>
      </div>

      <h3 data-reveal className="mt-16 mb-6 font-serif text-2xl font-medium text-ink">
        {t.teaching.theses}
      </h3>
      <ol className="grid gap-4 md:grid-cols-3">
        {data.thesesAdvised.map((thesis, i) => (
          <li key={thesis} data-reveal className="rounded-xl border border-line bg-surface p-5">
            <span className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">{thesis}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
