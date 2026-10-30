import type { KeyFigure } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

export function KeyFigures({ figures, t }: { figures: KeyFigure[]; t: Dictionary }) {
  return (
    <section
      id="cifras"
      aria-labelledby="cifras-titulo"
      className="bg-grain bg-navy py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div data-reveal className="mb-12">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <span aria-hidden className="h-px w-8 bg-gold" />
            {t.figures.eyebrow}
          </p>
          <h2 id="cifras-titulo" className="font-serif text-3xl font-medium sm:text-4xl">
            {t.figures.title}
          </h2>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {figures.map((f) => (
            <li key={f.label} data-reveal className="bg-navy p-7 sm:p-8">
              <p className="font-serif text-5xl font-medium text-gold">{f.value}</p>
              <p className="mt-3 text-base font-semibold text-white">{f.label}</p>
              {f.detail && <p className="mt-2 text-sm leading-relaxed text-white/70">{f.detail}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
