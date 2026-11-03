import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Organizations } from "@/components/Organizations";
import { Sports } from "@/components/Sports";
import { getContent } from "@/data";
import { getDictionary, isLocale } from "@/i18n/dictionaries";

// Página compacta: 8 bloques. Formación, publicaciones, docencia, asesoría legislativa,
// reconocimientos, ponencias y membresías viven como pestañas dentro de "Perfil" (Credentials).
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const cv = getContent(locale);

  return (
    <>
      <Hero profile={cv.profile} t={t} />
      <About profile={cv.profile} figures={cv.keyFigures} t={t} />
      <Organizations items={cv.organizations} t={t} />
      <Experience items={cv.experience} t={t} />
      <Gallery locale={locale} t={t} />
      <Credentials cv={cv} t={t} />
      <Sports data={cv.sports} locale={locale} t={t} />
      <Contact locale={locale} t={t} />
    </>
  );
}
