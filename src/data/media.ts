// Fotos y videos del sitio (compartidos por ES y EN; solo cambian los textos).
//
// Cómo rellenar:
//   - Foto:  copia el archivo en `public/media/` y escribe la ruta en `src`, p. ej. "/media/foro-bid.jpg".
//   - Video propio: copia el .mp4 en `public/media/` y pon su ruta en `src`; `poster` es la imagen
//     que se ve antes de reproducir (opcional, recomendada).
//   - Video de YouTube: usa `type: "youtube"` y pon en `src` el ID del video
//     (lo que va después de "v=" en la URL, p. ej. "dQw4w9WgXcQ") o la URL completa.
//   - Mientras `src` sea null se muestra un marcador "Foto/Video pendiente" con el pie de foto.
//
// `layout` controla el tamaño en la cuadrícula de la galería: "wide" (doble ancho),
// "tall" (doble alto) o "square" (normal, valor por defecto).

import type { Locale } from "./types";

export type MediaType = "image" | "video" | "youtube";

export interface MediaItem {
  type: MediaType;
  src: string | null;
  poster?: string | null;
  caption: Record<Locale, string>;
  layout?: "wide" | "tall" | "square";
}

/** Video corto en bucle (sin sonido) dentro del marco del retrato del inicio. null = solo foto. */
export const heroVideo: { src: string | null; poster?: string | null } = {
  // TODO: p. ej. "/media/hero.mp4" (5–15 s, sin audio, < 5 MB).
  src: null,
};

/** Galería principal. Puedes agregar o quitar elementos libremente. */
export const gallery: MediaItem[] = [
  {
    type: "video",
    src: null, // TODO
    layout: "wide",
    caption: {
      es: "Ponencia internacional (video destacado)",
      en: "International keynote (featured video)",
    },
  },
  {
    type: "image",
    src: null, // TODO
    layout: "tall",
    caption: { es: "Foro con organismos multilaterales", en: "Forum with multilateral organizations" },
  },
  {
    type: "image",
    src: null, // TODO
    caption: { es: "Equipo de CAIINNO", en: "The CAIINNO team" },
  },
  {
    type: "image",
    src: null, // TODO
    caption: { es: "Clase o conferencia universitaria", en: "University lecture" },
  },
  {
    type: "youtube",
    src: null, // TODO: ID o URL de YouTube
    caption: { es: "Entrevista en medios", en: "Media interview" },
  },
  {
    type: "image",
    src: null, // TODO
    layout: "wide",
    caption: { es: "Presentación de iniciativa legislativa", en: "Legislative initiative presentation" },
  },
];

/** Fotos y video de la sección de karate. */
export const karateMedia: MediaItem[] = [
  {
    type: "video",
    src: null, // TODO
    layout: "wide",
    caption: { es: "Kata o combate en competencia", en: "Kata or kumite in competition" },
  },
  {
    type: "image",
    src: null, // TODO
    caption: { es: "Campeonato Mundial, China 2009", en: "World Championship, China 2009" },
  },
  {
    type: "image",
    src: null, // TODO
    caption: { es: "Entrenamiento / dojo", en: "Training at the dojo" },
  },
];

/** Devuelve la URL de inserción de YouTube a partir de un ID o de cualquier URL de YouTube. */
export function youtubeEmbed(src: string, autoplay = false): string {
  const match = src.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  const id = match ? match[1] : src;
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0${autoplay ? "&autoplay=1" : ""}`;
}

export function youtubeThumb(src: string): string {
  const match = src.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  const id = match ? match[1] : src;
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
