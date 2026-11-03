import type { Certification, Education as EducationItem } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { AwardIcon } from "./Icons";
import { Section } from "./Section";

export function Education({
  items,
  certifications,
  t,
  embedded,
}: {
  items: EducationItem[];
  certifications: Certification[];
  t: Dictionary;
  embedded?: boolean;
}) {
  return (
    <Section embedded={embedded} id="formacion" eyebrow={t.education.eyebrow} title={t.education.title} tone="muted">
      <ul className="grid gap-5 md:grid-cols-2">
        {items.map((ed) => (
          <li
            key={ed.degree}
            data-reveal
            className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7"
          >
            <p className="text-sm font-semibold text-accent">{ed.period}</p>
            <h3 className="mt-2 font-serif text-xl leading-snug font-medium text-ink">{ed.degree}</h3>
            <p className="mt-2 text-sm text-muted">
              {ed.institution} · {ed.country}
            </p>
            {ed.unit && <p className="mt-1 text-sm text-muted italic">{ed.unit}</p>}
            {ed.thesis && (
              <p className="mt-4 text-sm leading-relaxed text-ink/80">
                <span className="font-semibold">{t.education.thesis}: </span>
                {ed.thesis}
              </p>
            )}
            {ed.honors.length > 0 && (
              <ul className="mt-5 space-y-2 border-t border-line pt-4">
                {ed.honors.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-ink/85">
                    <AwardIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <h3 data-reveal className="mt-16 mb-6 font-serif text-2xl font-medium text-ink">
        {t.education.certifications}
      </h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <li
            key={`${c.year}-${c.title}`}
            data-reveal
            className="rounded-xl border-l-2 border-gold bg-surface p-5"
          >
            <p className="text-xs font-semibold tracking-wide text-accent">
              {c.year} · {c.country}
            </p>
            <p className="mt-2 font-medium leading-snug text-ink">{c.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{c.institution}</p>
            {c.note && <p className="mt-2 text-sm font-semibold text-ink/80">{c.note}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
