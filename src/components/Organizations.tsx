import type { Organization } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

export function Organizations({ items, t }: { items: Organization[]; t: Dictionary }) {
  return (
    <section
      id="organizaciones"
      aria-labelledby="organizaciones-titulo"
      className="border-b border-line py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          id="organizaciones-titulo"
          data-reveal
          className="mb-10 text-center text-xs font-semibold tracking-[0.2em] text-muted uppercase"
        >
          {t.organizations.title}
        </h2>
        <ul data-reveal className="flex flex-wrap items-stretch justify-center gap-3">
          {items.map((org) => (
            <li
              key={org.name}
              title={org.short ? org.name : undefined}
              className="flex min-h-14 max-w-xs flex-col justify-center rounded-xl border border-line bg-surface px-5 py-3 text-center"
            >
              {org.short ? (
                <>
                  <span className="font-serif text-xl font-semibold tracking-wide text-ink">
                    {org.short}
                  </span>
                  <span className="mt-0.5 text-[0.7rem] leading-snug text-muted">{org.name}</span>
                </>
              ) : (
                <span className="font-serif text-base leading-snug font-medium text-ink">
                  {org.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
