import { gallery } from "@/data/media";
import type { Locale } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { MediaGallery } from "./MediaGallery";
import { Section } from "./Section";

// Fotos y videos: se editan en src/data/media.ts (`gallery`).
export function Gallery({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <Section
      id="galeria"
      eyebrow={t.gallery.eyebrow}
      title={t.gallery.title}
      intro={<p>{t.gallery.intro}</p>}
      tone="muted"
    >
      <MediaGallery items={gallery} locale={locale} labels={t.media} />
    </Section>
  );
}
