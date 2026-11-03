import type { Dictionary } from "@/i18n/dictionaries";
import { AwardIcon } from "./Icons";
import { Section } from "./Section";

export function Awards({
  items,
  t,
  embedded,
}: {
  items: string[];
  t: Dictionary;
  embedded?: boolean;
}) {
  return (
    <Section embedded={embedded} id="reconocimientos" eyebrow={t.awards.eyebrow} title={t.awards.title} tone="muted">
      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            data-reveal
            className="flex gap-4 rounded-xl bg-surface p-6 leading-relaxed text-ink/85 shadow-sm"
          >
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent-soft text-accent">
              <AwardIcon />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
