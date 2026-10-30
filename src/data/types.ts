// Tipos compartidos por los datos en español (src/data/es) e inglés (src/data/en).
// Todo el texto de estos archivos proviene de content/cv-es.md y content/cv-en.md.

export type Locale = "es" | "en";

export interface Profile {
  name: string;
  /** Línea de título profesional bajo el nombre (temas tomados del CV). */
  tagline: string[];
  /** Frase central del hero. */
  headline: string;
  /** Título de la sección "¿Quién es...?" del CV. */
  aboutTitle: string;
  /** Párrafos completos de la biografía; los primeros `aboutSummaryCount` forman el resumen. */
  about: string[];
  aboutSummaryCount: number;
}

export interface KeyFigure {
  value: string;
  label: string;
  detail?: string;
}

export interface Organization {
  name: string;
  short?: string;
}

export interface Experience {
  organization: string;
  role: string;
  country?: string;
  /** Periodo tal como aparece en el CV. */
  period: string;
  /** Año de inicio, solo para ordenar. */
  start: number;
  /** Año de fin, solo para ordenar; `null` = actualidad. */
  end: number | null;
  bullets: string[];
  /** Consultoría internacional corta (OMPI, 2025). */
  shortConsultancy?: boolean;
}

export interface Education {
  institution: string;
  country: string;
  degree: string;
  period: string;
  /** Centro o unidad académica, si el CV la menciona. */
  unit?: string;
  thesis?: string;
  honors: string[];
}

export interface Certification {
  institution: string;
  country: string;
  year: string;
  title: string;
  note?: string;
}

export interface Teaching {
  institution: string;
  program: string;
}

export type PublicationCategory =
  | "idb"
  | "academic"
  | "caiinno"
  | "unctad"
  | "articles";

export interface Publication {
  category: PublicationCategory;
  title: string;
  /** Texto de publicación tal como aparece en el CV ("Publicado por CAIINNO en 2025."). */
  source?: string;
  /** Año, solo para ordenar y filtrar. */
  year?: number;
  /** Notas adicionales del CV (capítulo, financiamiento, etc.). */
  notes?: string[];
}

export interface Talk {
  institution: string;
  country: string;
}

export interface Sports {
  /** Párrafos de la biografía que conectan el karate con su carrera. */
  story: string[];
  achievements: string[];
}

export interface CvContent {
  profile: Profile;
  keyFigures: KeyFigure[];
  organizations: Organization[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  teaching: {
    highlight: string;
    courses: Teaching[];
    thesesAdvised: string[];
  };
  publications: Publication[];
  legislative: {
    intro: string;
    initiatives: string[];
  };
  awards: string[];
  talks: Talk[];
  memberships: string[];
  sports: Sports;
}
