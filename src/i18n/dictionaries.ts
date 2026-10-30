import type { Locale, PublicationCategory } from "@/data/types";

// Textos de interfaz (navegación, títulos de sección, botones). El contenido del CV vive en src/data.

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export type SectionId =
  | "inicio"
  | "sobre-mi"
  | "cifras"
  | "organizaciones"
  | "trayectoria"
  | "formacion"
  | "docencia"
  | "publicaciones"
  | "asesoria-legislativa"
  | "reconocimientos"
  | "ponencias"
  | "membresias"
  | "karate"
  | "contacto";

const es = {
  meta: {
    title: "Esteban Santamaría Hernández · Economía del conocimiento y propiedad intelectual",
    description:
      "Doctor en Ciencias de Gobierno, maestro en Derecho de Propiedad Intelectual por The George Washington University (becario Fulbright), fundador y Director de CAIINNO. Consultor del Banco Mundial, el BID, CAF, la UNCTAD y la OMPI.",
    jobTitle: "Fundador y Director de CAIINNO",
  },
  nav: {
    label: "Navegación principal",
    skip: "Saltar al contenido",
    menu: "Menú",
    close: "Cerrar menú",
    language: "Idioma",
    switchTo: "English",
    switchToLabel: "Ver el sitio en inglés",
    themeToLight: "Activar modo claro",
    themeToDark: "Activar modo oscuro",
  },
  sections: {
    inicio: "Inicio",
    "sobre-mi": "Sobre mí",
    cifras: "Cifras clave",
    organizaciones: "Organizaciones",
    trayectoria: "Trayectoria",
    formacion: "Formación",
    docencia: "Docencia",
    publicaciones: "Publicaciones",
    "asesoria-legislativa": "Asesoría legislativa",
    reconocimientos: "Reconocimientos",
    ponencias: "Ponencias",
    membresias: "Membresías",
    karate: "Karate",
    contacto: "Contacto",
  } satisfies Record<SectionId, string>,
  hero: {
    ctaPrimary: "Trayectoria",
    ctaSecondary: "Contacto",
    photoAlt: "Fotografía de Esteban Santamaría Hernández",
  },
  about: {
    eyebrow: "Sobre mí",
    readMore: "Leer más",
    readLess: "Leer menos",
  },
  figures: { eyebrow: "Cifras clave", title: "Impacto en números" },
  organizations: {
    eyebrow: "Colaboraciones",
    title: "Organizaciones con las que ha colaborado",
  },
  experience: {
    eyebrow: "Trayectoria",
    title: "Experiencia profesional",
    present: "Actualidad",
    details: "Ver responsabilidades",
    shortConsultancy: "Consultoría internacional corta",
  },
  education: {
    eyebrow: "Formación",
    title: "Formación académica",
    thesis: "Tesis",
    certifications: "Certificaciones (más relevantes)",
  },
  teaching: {
    eyebrow: "Docencia",
    title: "Docencia (más relevantes)",
    theses: "Tesis asesoradas",
  },
  publications: {
    eyebrow: "Publicaciones",
    title: "Publicaciones",
    search: "Buscar publicaciones",
    searchPlaceholder: "Buscar por título, editorial o año…",
    all: "Todas",
    resultsOne: "1 resultado",
    resultsMany: "{n} resultados",
    empty: "No hay publicaciones que coincidan con la búsqueda.",
    filterLabel: "Filtrar por categoría",
    categories: {
      idb: "Banco Interamericano de Desarrollo",
      academic: "Académicas",
      caiinno: "CAIINNO y otras",
      unctad: "Revisor UNCTAD",
      articles: "Artículos",
    } satisfies Record<PublicationCategory, string>,
  },
  legislative: { eyebrow: "Asesoría legislativa", title: "Iniciativas de ley" },
  awards: { eyebrow: "Logros", title: "Reconocimientos y premios (más importantes)" },
  talks: { eyebrow: "Ponencias", title: "Ponencias internacionales (más relevantes)" },
  memberships: { eyebrow: "Membresías", title: "Membresías profesionales" },
  sports: { eyebrow: "Carrera deportiva", title: "La disciplina del karate" },
  contact: {
    eyebrow: "Contacto",
    title: "Conversemos",
    email: "Correo",
    linkedin: "LinkedIn",
    caiinno: "CAIINNO",
    downloadCv: "Descargar CV (PDF)",
  },
  footer: { quickLinks: "Enlaces rápidos", backToTop: "Volver arriba" },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "Esteban Santamaría-Hernández · Knowledge economy and intellectual property",
    description:
      "PhD in Government Sciences, LLM in Intellectual Property Law from The George Washington University (Fulbright scholar), founder and Director of CAIINNO. Consultant for the World Bank, the IDB, CAF, UNCTAD and WIPO.",
    jobTitle: "Founder and Director of CAIINNO",
  },
  nav: {
    label: "Main navigation",
    skip: "Skip to content",
    menu: "Menu",
    close: "Close menu",
    language: "Language",
    switchTo: "Español",
    switchToLabel: "View the site in Spanish",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
  },
  sections: {
    inicio: "Home",
    "sobre-mi": "About",
    cifras: "Key figures",
    organizaciones: "Organizations",
    trayectoria: "Experience",
    formacion: "Education",
    docencia: "Teaching",
    publicaciones: "Publications",
    "asesoria-legislativa": "Legislative advisory",
    reconocimientos: "Awards",
    ponencias: "Presentations",
    membresias: "Memberships",
    karate: "Karate",
    contacto: "Contact",
  },
  hero: {
    ctaPrimary: "Experience",
    ctaSecondary: "Contact",
    photoAlt: "Photograph of Esteban Santamaría-Hernández",
  },
  about: {
    eyebrow: "About",
    readMore: "Read more",
    readLess: "Read less",
  },
  figures: { eyebrow: "Key figures", title: "Impact in numbers" },
  organizations: {
    eyebrow: "Collaborations",
    title: "Organizations he has worked with",
  },
  experience: {
    eyebrow: "Experience",
    title: "Work experience",
    present: "Present",
    details: "View responsibilities",
    shortConsultancy: "Short International Consultancy",
  },
  education: {
    eyebrow: "Academic history",
    title: "Education",
    thesis: "Dissertation",
    certifications: "Certifications (most relevant)",
  },
  teaching: {
    eyebrow: "Teaching",
    title: "Courses taught (most relevant)",
    theses: "Theses advised",
  },
  publications: {
    eyebrow: "Publications",
    title: "Publications",
    search: "Search publications",
    searchPlaceholder: "Search by title, publisher or year…",
    all: "All",
    resultsOne: "1 result",
    resultsMany: "{n} results",
    empty: "No publications match your search.",
    filterLabel: "Filter by category",
    categories: {
      idb: "Inter-American Development Bank",
      academic: "Academic",
      caiinno: "CAIINNO & others",
      unctad: "UNCTAD reviewer",
      articles: "Articles",
    },
  },
  legislative: { eyebrow: "Legislative advisory", title: "Legislative initiatives" },
  awards: { eyebrow: "Achievements", title: "Honors and awards" },
  talks: { eyebrow: "Presentations", title: "Conference presentations (most relevant)" },
  memberships: { eyebrow: "Memberships", title: "Professional memberships" },
  sports: { eyebrow: "Athletic career", title: "The discipline of karate" },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk",
    email: "Email",
    linkedin: "LinkedIn",
    caiinno: "CAIINNO",
    downloadCv: "Download CV (PDF)",
  },
  footer: { quickLinks: "Quick links", backToTop: "Back to top" },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
