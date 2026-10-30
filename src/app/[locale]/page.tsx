import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { KeyFigures } from "@/components/KeyFigures";
import { Legislative } from "@/components/Legislative";
import { Memberships } from "@/components/Memberships";
import { Organizations } from "@/components/Organizations";
import { Publications } from "@/components/Publications";
import { Sports } from "@/components/Sports";
import { Talks } from "@/components/Talks";
import { Teaching } from "@/components/Teaching";
import { getContent } from "@/data";
import { getDictionary, isLocale } from "@/i18n/dictionaries";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const cv = getContent(locale);

  return (
    <>
      <Hero profile={cv.profile} t={t} />
      <About profile={cv.profile} t={t} />
      <KeyFigures figures={cv.keyFigures} t={t} />
      <Organizations items={cv.organizations} t={t} />
      <Experience items={cv.experience} t={t} />
      <Education items={cv.education} certifications={cv.certifications} t={t} />
      <Teaching data={cv.teaching} t={t} />
      <Publications items={cv.publications} t={t} />
      <Legislative data={cv.legislative} t={t} />
      <Awards items={cv.awards} t={t} />
      <Talks items={cv.talks} t={t} />
      <Memberships items={cv.memberships} t={t} />
      <Sports data={cv.sports} t={t} />
      <Contact locale={locale} t={t} />
    </>
  );
}
