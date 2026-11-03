import type { SectionId } from "@/i18n/dictionaries";

/** Secciones visibles en la barra de escritorio. */
export const primaryNav: SectionId[] = [
  "sobre-mi",
  "trayectoria",
  "galeria",
  "perfil",
  "karate",
  "contacto",
];

/** Todas las secciones, en orden de aparición (menú móvil). */
export const allNav: SectionId[] = primaryNav;

/** Pestañas de la sección "Perfil" (cada una conserva su ancla, p. ej. #publicaciones). */
export const credentialTabs = [
  "formacion",
  "publicaciones",
  "docencia",
  "asesoria-legislativa",
  "reconocimientos",
  "ponencias",
  "membresias",
] as const satisfies SectionId[];

export type CredentialTab = (typeof credentialTabs)[number];
