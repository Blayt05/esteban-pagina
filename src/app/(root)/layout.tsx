import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esteban Santamaría Hernández",
  robots: { index: false, follow: true },
};

// Layout raíz mínimo solo para la redirección de "/" a "/es/".
export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
