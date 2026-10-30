import type { Experience as ExperienceItem } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { sortExperience } from "@/lib/utils";
import { ChevronDownIcon } from "./Icons";
import { Section } from "./Section";

export function Experience({ items, t }: { items: ExperienceItem[]; t: Dictionary }) {
  const sorted = sortExperience(items);

  return (
    <Section id="trayectoria" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <ol className="relative ml-2 border-l border-line sm:ml-4">
        {sorted.map((job, i) => (
          <li
            key={`${job.organization}-${job.period}`}
            data-reveal
            className="relative pb-10 pl-8 last:pb-0 sm:pl-12"
          >
            <span
              aria-hidden
              className={`absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 ${
                job.end === null ? "border-gold bg-gold" : "border-accent bg-bg"
              }`}
            />
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <p className="text-sm font-semibold tracking-wide text-accent">
                  {job.period}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.end === null && (
                    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                      {t.experience.present}
                    </span>
                  )}
                  {job.shortConsultancy && (
                    <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-muted">
                      {t.experience.shortConsultancy}
                    </span>
                  )}
                  {job.country && (
                    <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-medium text-muted">
                      {job.country}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="mt-3 font-serif text-xl leading-snug font-medium text-ink sm:text-2xl">
                {job.organization}
              </h3>
              <p className="mt-1 text-base text-muted">{job.role}</p>

              <details className="group mt-4" open={i === 0}>
                <summary className="inline-flex cursor-pointer items-center gap-2 rounded text-sm font-semibold text-ink/80 hover:text-accent">
                  {t.experience.details} ({job.bullets.length})
                  <ChevronDownIcon className="details-chevron h-4 w-4 transition-transform" />
                </summary>
                <ul className="mt-4 space-y-3 text-[0.97rem] leading-relaxed text-ink/80">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 50)} className="relative pl-5">
                      <span aria-hidden className="absolute top-[0.65em] left-0 h-1.5 w-1.5 rounded-full bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
