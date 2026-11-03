import type { Organization } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

// Carrusel continuo de organizaciones (se pausa al pasar el cursor; estático con movimiento reducido).
// TODO opcional: cuando tengas logotipos, agrega `logo` a cada organización y muéstralo aquí.
export function Organizations({ items, t }: { items: Organization[]; t: Dictionary }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="marquee-track flex flex-none gap-3 pr-3">
      {items.map((org) => (
        <li
          key={org.name}
          title={org.short ? org.name : undefined}
          className="flex min-h-14 flex-none flex-col justify-center rounded-xl border border-line bg-surface px-5 py-3 text-center transition-colors hover:border-gold"
        >
          {org.short ? (
            <>
              <span className="font-serif text-xl font-semibold tracking-wide text-ink">{org.short}</span>
              <span className="mt-0.5 max-w-[14rem] text-[0.7rem] leading-snug text-muted">{org.name}</span>
            </>
          ) : (
            <span className="max-w-[16rem] font-serif text-base leading-snug font-medium text-ink">
              {org.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="organizaciones"
      aria-labelledby="organizaciones-titulo"
      className="border-b border-line py-12 sm:py-14"
    >
      <h2
        id="organizaciones-titulo"
        data-reveal
        className="mb-8 px-5 text-center text-xs font-semibold tracking-[0.2em] text-muted uppercase"
      >
        {t.organizations.title}
      </h2>
      <div data-reveal className="marquee flex overflow-hidden">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
