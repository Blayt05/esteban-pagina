// Configuración del sitio. Este es el ÚNICO archivo con datos pendientes (`TODO:`).
// Todo lo que no aparece en el CV (foto, correo, LinkedIn, enlaces) se completa aquí.

export const siteConfig = {
  // TODO: URL pública definitiva del sitio, sin barra final (p. ej. "https://estebansantamaria.com").
  // Se usa para Open Graph, hreflang, sitemap y JSON-LD. Si se despliega en GitHub Pages,
  // incluye la ruta del repositorio (p. ej. "https://usuario.github.io/esteban-pagina").
  url: "https://example.com",

  // TODO: correo de contacto (p. ej. "nombre@dominio.com"). Mientras sea null, no se muestra.
  email: null as string | null,

  // TODO: URL del perfil de LinkedIn. Mientras sea null, no se muestra.
  linkedin: null as string | null,

  // TODO: URL del sitio web de CAIINNO. Mientras sea null, no se muestra.
  caiinno: null as string | null,

  // TODO: foto de perfil. Coloca la imagen en `public/` (p. ej. `public/esteban.jpg`)
  // y escribe aquí la ruta ("/esteban.jpg"). Mientras sea null, se muestra un marcador con iniciales.
  photo: null as string | null,

  // TODO: coloca los PDF del CV en `public/cv-es.pdf` y `public/cv-en.pdf`
  // y cambia `cvAvailable` a true para mostrar el botón de descarga.
  cvAvailable: false,
  cvPdf: {
    es: "/cv-es.pdf",
    en: "/cv-en.pdf",
  },
} as const;

/** Ruta base para GitHub Pages (vacía en Vercel/local). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Antepone `basePath` a rutas de archivos en `public/` (imágenes, PDFs). */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
