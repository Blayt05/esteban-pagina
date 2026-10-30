import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RevealObserver } from "@/components/RevealObserver";
import { siteConfig } from "@/config/site";
import { getContent } from "@/data";
import { getDictionary, isLocale, locales } from "@/i18n/dictionaries";
import "../globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  const { profile } = getContent(locale);

  return {
    // Rutas relativas (sin "/" inicial) para conservar la ruta del repositorio en GitHub Pages.
    metadataBase: new URL(`${siteConfig.url}/`),
    title: t.meta.title,
    description: t.meta.description,
    authors: [{ name: profile.name }],
    alternates: {
      canonical: `${locale}/`,
      languages: { es: "es/", en: "en/", "x-default": "es/" },
    },
    openGraph: {
      type: "profile",
      title: t.meta.title,
      description: t.meta.description,
      url: `${locale}/`,
      siteName: profile.name,
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      ...(siteConfig.photo ? { images: [{ url: siteConfig.photo.replace(/^\//, ""), alt: profile.name }] } : {}),
    },
    twitter: {
      card: "summary",
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1426" },
  ],
};

// Se ejecuta antes del primer pintado: aplica el tema guardado y marca que hay JS (animaciones).
const themeScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark')}}catch(e){}})();`;

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const content = getContent(locale);

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-bg text-ink">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          {t.nav.skip}
        </a>
        <Header locale={locale} t={t} name={content.profile.name} />
        <main id="contenido">{children}</main>
        <Footer t={t} name={content.profile.name} />
        <RevealObserver />
        <JsonLd locale={locale} />
      </body>
    </html>
  );
}
