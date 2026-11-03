import type { SectionId } from "@/i18n/dictionaries";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  embedded = false,
  children,
}: {
  id: SectionId;
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  tone?: "default" | "muted";
  /** Dentro de una pestaña de "Perfil": solo el contenido, sin encabezado ni <section>. */
  embedded?: boolean;
  children: React.ReactNode;
}) {
  if (embedded) {
    return (
      <div>
        {intro && <div className="mb-8 max-w-3xl text-lg leading-relaxed text-muted">{intro}</div>}
        {children}
      </div>
    );
  }

  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className={`relative py-16 sm:py-24 ${tone === "muted" ? "bg-surface-2" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id={id} eyebrow={eyebrow} title={title} intro={intro} />
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  light = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <header data-reveal className="mb-10 max-w-3xl sm:mb-12">
      <p
        className={`mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase ${
          light ? "text-gold" : "text-accent"
        }`}
      >
        <span aria-hidden className={`eyebrow-line h-px w-8 ${light ? "bg-gold" : "bg-accent"}`} />
        {eyebrow}
      </p>
      <h2
        id={`${id}-titulo`}
        className={`font-serif text-3xl leading-tight font-medium text-balance sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <div className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>
          {intro}
        </div>
      )}
    </header>
  );
}
