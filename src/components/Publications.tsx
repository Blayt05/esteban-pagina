import type { Publication } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { PublicationsExplorer } from "./PublicationsExplorer";
import { Section } from "./Section";

export function Publications({
  items,
  t,
  embedded,
}: {
  items: Publication[];
  t: Dictionary;
  embedded?: boolean;
}) {
  return (
    <Section embedded={embedded} id="publicaciones" eyebrow={t.publications.eyebrow} title={t.publications.title} tone="muted">
      <div data-reveal>
        <PublicationsExplorer publications={items} labels={t.publications} />
      </div>
    </Section>
  );
}
