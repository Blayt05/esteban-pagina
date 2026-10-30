import type { Profile } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { ReadMore } from "./ReadMore";
import { Section } from "./Section";

export function About({ profile, t }: { profile: Profile; t: Dictionary }) {
  const summary = profile.about.slice(0, profile.aboutSummaryCount);
  const more = profile.about.slice(profile.aboutSummaryCount);

  return (
    <Section id="sobre-mi" eyebrow={t.about.eyebrow} title={profile.aboutTitle} tone="muted">
      <div data-reveal className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/85">
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
    </Section>
  );
}
