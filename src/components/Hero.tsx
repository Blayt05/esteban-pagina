import Image from "next/image";
import { asset, siteConfig } from "@/config/site";
import type { Profile } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { initials } from "@/lib/utils";
import { ArrowRightIcon } from "./Icons";

export function Hero({ profile, t }: { profile: Profile; t: Dictionary }) {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <div data-reveal>
          <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase sm:text-sm">
            {profile.tagline.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-gold">·</span>}
                {item}
              </span>
            ))}
          </p>
          <h1
            id="inicio-titulo"
            className="font-serif text-5xl leading-[1.05] font-medium tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-4 text-base text-muted sm:text-lg">{t.meta.jobTitle}</p>
          <blockquote className="mt-10 border-l-2 border-gold pl-6">
            <p className="font-serif text-2xl leading-snug text-ink/90 italic sm:text-3xl">
              “{profile.headline}”
            </p>
          </blockquote>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#trayectoria"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-2 dark:bg-gold dark:text-navy dark:hover:bg-gold/90"
            >
              {t.hero.ctaPrimary}
              <ArrowRightIcon />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div data-reveal className="mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5]">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-gold/50"
            />
            {siteConfig.photo ? (
              <Image
                src={asset(siteConfig.photo)}
                alt={t.hero.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 80vw"
                className="rounded-[2rem] object-cover shadow-xl"
              />
            ) : (
              // TODO: foto pendiente (ver siteConfig.photo en src/config/site.ts).
              <div
                role="img"
                aria-label={t.hero.photoAlt}
                className="bg-grain relative flex h-full w-full items-center justify-center rounded-[2rem] bg-navy shadow-xl dark:ring-1 dark:ring-gold/25"
              >
                <span className="font-serif text-8xl font-medium text-gold/90">
                  {initials(profile.name)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
