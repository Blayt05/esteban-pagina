import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "./Section";

export function Memberships({
  items,
  t,
  embedded,
}: {
  items: string[];
  t: Dictionary;
  embedded?: boolean;
}) {
  return (
    <Section embedded={embedded} id="membresias" eyebrow={t.memberships.eyebrow} title={t.memberships.title} tone="muted">
      <ul className="max-w-4xl divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item} data-reveal className="flex gap-4 py-4 leading-relaxed text-ink/85">
            <span aria-hidden className="mt-2.5 h-1.5 w-6 flex-none rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
