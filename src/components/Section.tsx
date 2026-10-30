import type { SectionId } from "@/i18n/dictionaries";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  children,
}: {
  id: SectionId;
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  tone?: "default" | "muted";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className={`py-20 sm:py-28 ${tone === "muted" ? "bg-surface-2" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header data-reveal className="mb-12 max-w-3xl">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            <span aria-hidden className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h2
            id={`${id}-titulo`}
            className="font-serif text-3xl leading-tight font-medium text-balance text-ink sm:text-4xl"
          >
            {title}
          </h2>
          {intro && <div className="mt-5 text-lg leading-relaxed text-muted">{intro}</div>}
        </header>
        {children}
      </div>
    </section>
  );
}
