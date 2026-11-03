import type { CvContent } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { Awards } from "./Awards";
import { Education } from "./Education";
import { Legislative } from "./Legislative";
import { Memberships } from "./Memberships";
import { type CredentialTab, credentialTabs } from "./nav";
import { Publications } from "./Publications";
import { Section } from "./Section";
import { Tabs } from "./Tabs";
import { Talks } from "./Talks";
import { Teaching } from "./Teaching";

// Agrupa en pestañas lo que antes eran siete secciones largas, para acortar la página.
export function Credentials({ cv, t }: { cv: CvContent; t: Dictionary }) {
  const panels: Record<CredentialTab, { content: React.ReactNode; count?: number }> = {
    formacion: {
      content: <Education embedded items={cv.education} certifications={cv.certifications} t={t} />,
    },
    publicaciones: {
      content: <Publications embedded items={cv.publications} t={t} />,
      count: cv.publications.length,
    },
    docencia: { content: <Teaching embedded data={cv.teaching} t={t} /> },
    "asesoria-legislativa": {
      content: <Legislative embedded data={cv.legislative} t={t} />,
      count: cv.legislative.initiatives.length,
    },
    reconocimientos: { content: <Awards embedded items={cv.awards} t={t} />, count: cv.awards.length },
    ponencias: { content: <Talks embedded items={cv.talks} t={t} />, count: cv.talks.length },
    membresias: { content: <Memberships embedded items={cv.memberships} t={t} /> },
  };

  return (
    <Section id="perfil" eyebrow={t.credentials.eyebrow} title={t.credentials.title}>
      <Tabs
        label={t.credentials.tabsLabel}
        tabs={credentialTabs.map((id) => ({ id, label: t.sections[id], ...panels[id] }))}
      />
    </Section>
  );
}
