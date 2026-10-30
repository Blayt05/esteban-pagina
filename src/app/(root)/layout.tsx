import type { Metadata } from "next";
import { basePath } from "@/config/site";
import { defaultLocale } from "@/i18n/dictionaries";

const target = `${basePath}/${defaultLocale}/`;

export const metadata: Metadata = {
  title: "Esteban Santamaría Hernández",
  robots: { index: false, follow: true },
  alternates: { canonical: target },
};

// Layout raíz mínimo solo para la redirección de "/" a "/es/". El export estático no admite
// redirecciones de servidor: se usa <meta http-equiv="refresh">, con enlace de respaldo en la página.
export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
