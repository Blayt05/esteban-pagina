import type { Sports as SportsData } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

export function Sports({ data, t }: { data: SportsData; t: Dictionary }) {
  return (
    <section
      id="karate"
      aria-labelledby="karate-titulo"
      className="bg-grain relative overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      {/* Cinta negra decorativa con franjas doradas (4.º Dan). */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-3 bg-black">
        <div className="absolute top-0 right-[12%] flex h-full gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-full w-2 bg-gold" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div data-reveal className="mb-12 max-w-3xl">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span aria-hidden className="h-px w-8 bg-gold" />
            {t.sports.eyebrow}
          </p>
          <h2 id="karate-titulo" className="font-serif text-3xl font-medium sm:text-5xl">
            {t.sports.title}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div data-reveal className="space-y-6 text-lg leading-relaxed text-white/85">
            {data.story.map((p, i) => (
              <p
                key={p.slice(0, 40)}
                className={i === data.story.length - 1 ? "font-serif text-xl text-white italic" : ""}
              >
                {p}
              </p>
            ))}
          </div>

          <ol className="relative space-y-4 border-l border-gold/40 pl-6">
            {data.achievements.map((a) => (
              <li key={a} data-reveal className="relative">
                <span
                  aria-hidden
                  className="absolute top-2 -left-[29px] h-2.5 w-2.5 rotate-45 bg-gold"
                />
                <p className="rounded-lg bg-white/5 p-4 text-[0.95rem] leading-relaxed text-white/90 ring-1 ring-white/10">
                  {a}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
