import { siteConfig } from "@/config/site";
import { getContent } from "@/data";
import type { Locale } from "@/data/types";
import { getDictionary } from "@/i18n/dictionaries";

// Datos estructurados schema.org/Person.
export function JsonLd({ locale }: { locale: Locale }) {
  const { profile, education } = getContent(locale);
  const t = getDictionary(locale);
  const sameAs = [siteConfig.linkedin, siteConfig.caiinno].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: `${siteConfig.url}/${locale}/`,
    jobTitle: t.meta.jobTitle,
    description: t.meta.description,
    knowsAbout: profile.tagline,
    worksFor: { "@type": "Organization", name: "CAIINNO" },
    alumniOf: [...new Set(education.map((e) => e.institution))].map((name) => ({
      "@type": "CollegeOrUniversity",
      name,
    })),
    award: ["Fulbright"],
    ...(siteConfig.photo ? { image: `${siteConfig.url}${siteConfig.photo}` } : {}),
    ...(siteConfig.email ? { email: `mailto:${siteConfig.email}` } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
