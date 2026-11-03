import { karateMedia } from "@/data/media";
import type { Locale, Sports as SportsData } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { MediaGallery } from "./MediaGallery";
import { SectionHeading } from "./Section";

export function Sports({ data, locale, t }: { data: SportsData; locale: Locale; t: Dictionary }) {
  return (
    <section
      id="karate"
      aria-labelledby="karate-titulo"
      className="bg-grain relative overflow-hidden bg-surface-2 py-16 text-ink sm:py-24 dark:border-b dark:border-gold/20 dark:bg-navy"
    >
      {/* Cinta negra decorativa con franjas doradas (4.º Dan). */}
      <div aria-hidden className="belt absolute inset-x-0 top-0 h-3 bg-gold/30 dark:bg-black">
        <div className="absolute top-0 right-[12%] flex h-full gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-full w-2 bg-accent dark:bg-gold" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="karate" eyebrow={t.sports.eyebrow} title={t.sports.title} />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div data-reveal className="space-y-6 text-lg leading-relaxed text-ink/85">
            {data.story.map((p, i) => (
              <p
                key={p.slice(0, 40)}
                className={i === data.story.length - 1 ? "font-serif text-xl text-ink italic" : ""}
              >
                {p}
              </p>
            ))}
          </div>

          <ol className="relative space-y-4 border-l border-gold/40 pl-6">
            {data.achievements.map((a) => (
              <li key={a} data-reveal="right" className="relative">
                <span
                  aria-hidden
                  className="absolute top-2 -left-[29px] h-2.5 w-2.5 rotate-45 bg-gold"
                />
                <p className="rounded-lg bg-surface p-4 text-[0.95rem] leading-relaxed text-ink/85 shadow-sm ring-1 ring-line dark:bg-white/5 dark:ring-white/10">
                  {a}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Fotos y video de karate: se editan en src/data/media.ts (`karateMedia`). */}
        <div className="mt-14">
          <MediaGallery items={karateMedia} locale={locale} labels={t.media} />
        </div>
      </div>
    </section>
  );
}
