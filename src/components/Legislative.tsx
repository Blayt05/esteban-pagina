import type { CvContent } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { ScrollIcon } from "./Icons";
import { Section } from "./Section";

export function Legislative({ data, t }: { data: CvContent["legislative"]; t: Dictionary }) {
  return (
    <Section
      id="asesoria-legislativa"
      eyebrow={t.legislative.eyebrow}
      title={t.legislative.title}
      intro={<p>{data.intro}</p>}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.initiatives.map((item) => (
          <li
            key={item}
            data-reveal
            className="flex gap-4 rounded-xl border border-line bg-surface p-5 text-sm leading-relaxed text-ink/85"
          >
            <ScrollIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
