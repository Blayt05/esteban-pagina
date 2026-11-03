import type { Experience as ExperienceItem } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { sortExperience } from "@/lib/utils";
import { ChevronDownIcon } from "./Icons";
import { Section } from "./Section";

/** Puestos visibles de entrada; el resto queda tras "Ver trayectoria completa". */
const VISIBLE = 3;

export function Experience({ items, t }: { items: ExperienceItem[]; t: Dictionary }) {
  const sorted = sortExperience(items);

  const visible = sorted.slice(0, VISIBLE);
  const rest = sorted.slice(VISIBLE);

  return (
    <Section id="trayectoria" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <ol className="timeline relative ml-2 border-l border-line sm:ml-4">
        {visible.map((job) => (
          <Job key={`${job.organization}-${job.period}`} job={job} t={t} />
        ))}
      </ol>
      {rest.length > 0 && (
        <details className="group/more mt-8">
          <summary
            data-reveal
            className="ml-2 inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent sm:ml-4"
          >
            <span className="group-open/more:hidden">
              {t.experience.showAll} (+{rest.length})
            </span>
            <span className="hidden group-open/more:inline">{t.experience.showLess}</span>
            <ChevronDownIcon className="h-4 w-4 transition-transform group-open/more:rotate-180" />
          </summary>
          <ol className="timeline relative mt-8 ml-2 border-l border-line sm:ml-4">
            {rest.map((job) => (
              <Job key={`${job.organization}-${job.period}`} job={job} t={t} />
            ))}
          </ol>
        </details>
      )}
    </Section>
  );
}

function Job({ job, t }: { job: ExperienceItem; t: Dictionary }) {
  return (
    <li data-reveal="left" className="relative pb-8 pl-8 last:pb-0 sm:pl-12">
      <span
        aria-hidden
        className={`absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 ${
          job.end === null ? "timeline-dot-live border-gold bg-gold" : "border-accent bg-bg"
        }`}
      />
      <div className="lift-card rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="text-sm font-semibold tracking-wide text-accent">{job.period}</p>
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

        <details className="group mt-4">
          <summary className="inline-flex cursor-pointer items-center gap-2 rounded text-sm font-semibold text-ink/80 hover:text-accent">
            {t.experience.details} ({job.bullets.length})
            <ChevronDownIcon className="details-chevron h-4 w-4 transition-transform" />
          </summary>
          <ul className="details-body mt-4 space-y-3 text-[0.97rem] leading-relaxed text-ink/80">
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
  );
}
