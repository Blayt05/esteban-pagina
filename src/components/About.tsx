import type { KeyFigure, Profile } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { CountUp } from "./CountUp";
import { ReadMore } from "./ReadMore";
import { Section } from "./Section";

// "Sobre mí" y "Cifras clave" en una sola sección: biografía a la izquierda, cifras animadas a la derecha.
export function About({
  profile,
  figures,
  t,
}: {
  profile: Profile;
  figures: KeyFigure[];
  t: Dictionary;
}) {
  const summary = profile.about.slice(0, profile.aboutSummaryCount);
  const more = profile.about.slice(profile.aboutSummaryCount);

  return (
    <Section id="sobre-mi" eyebrow={t.about.eyebrow} title={profile.aboutTitle} tone="muted">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div data-reveal="left" className="space-y-5 text-lg leading-relaxed text-ink/85">
          {summary.map((p, i) => (
            <p
              key={p.slice(0, 40)}
              className={
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-accent"
                  : ""
              }
            >
              {p}
            </p>
          ))}
          <ReadMore more={more} readMore={t.about.readMore} readLess={t.about.readLess} />
        </div>

        <section id="cifras" aria-labelledby="cifras-titulo" className="self-start">
          <h3 id="cifras-titulo" className="sr-only">
            {t.figures.title}
          </h3>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line shadow-xl ring-1 ring-gold/30 dark:bg-white/10 dark:ring-gold/20">
            {figures.map((f, i) => (
              <li
                key={f.label}
                data-reveal="zoom"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="figure-card group bg-surface p-5 text-ink sm:p-6 dark:bg-navy"
              >
                <p className="font-serif text-3xl font-medium text-accent transition-transform duration-500 group-hover:-translate-y-0.5 sm:text-4xl">
                  <CountUp value={f.value} />
                </p>
                <p className="mt-2 text-sm leading-snug font-semibold text-ink">{f.label}</p>
                {f.detail && (
                  <p className="mt-1.5 hidden text-xs leading-relaxed text-muted sm:block">
                    {f.detail}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Section>
  );
}
