import Image from "next/image";
import { asset, siteConfig } from "@/config/site";
import { heroVideo } from "@/data/media";
import type { Profile } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { initials } from "@/lib/utils";
import { ArrowRightIcon, ChevronDownIcon } from "./Icons";

// Las animaciones de entrada son CSS puro (.hero-in con retraso escalonado), así que no dependen de JS.
const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as React.CSSProperties;

export function Hero({ profile, t }: { profile: Profile; t: Dictionary }) {
  const poster = heroVideo.poster ?? siteConfig.photo;

  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:min-h-[92vh] lg:pb-28"
    >
      {/* Fondo animado: manchas de color que flotan y una retícula sutil. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-blob absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold/15 blur-3xl" />
        <div className="hero-blob hero-blob-2 absolute bottom-[-12rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="hero-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p
            className="hero-in mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.18em] text-accent uppercase sm:text-sm"
            style={delay(0)}
          >
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
            {profile.name.split(" ").map((word, i) => (
              <span key={`${word}-${i}`} className="hero-word" style={delay(120 + i * 90)}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="hero-in mt-4 text-base text-muted sm:text-lg" style={delay(450)}>
            {t.meta.jobTitle}
          </p>
          <blockquote className="hero-in mt-10 border-l-2 border-gold pl-6" style={delay(600)}>
            <p className="font-serif text-2xl leading-snug text-ink/90 italic sm:text-3xl">
              “{profile.headline}”
            </p>
          </blockquote>
          <div className="hero-in mt-10 flex flex-wrap gap-3" style={delay(750)}>
            <a
              href="#trayectoria"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-lg"
            >
              {t.hero.ctaPrimary}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              {t.sections.galeria}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-ink/80 transition hover:text-accent"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero-in mx-auto w-full max-w-sm" style={delay(300)}>
          <div className="hero-portrait relative aspect-[4/5]">
            <div
              aria-hidden
              className="hero-frame absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-gold/50"
            />
            {heroVideo.src ? (
              <video
                src={asset(heroVideo.src)}
                poster={poster ? asset(poster) : undefined}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={t.hero.photoAlt}
                className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-xl"
              />
            ) : siteConfig.photo ? (
              <Image
                src={asset(siteConfig.photo)}
                alt={t.hero.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 80vw"
                className="rounded-[2rem] object-cover shadow-xl"
              />
            ) : (
              // TODO: foto pendiente (siteConfig.photo) o video (heroVideo en src/data/media.ts).
              <div
                role="img"
                aria-label={t.hero.photoAlt}
                className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent-soft via-surface to-surface-2 shadow-xl ring-1 ring-gold/30 dark:bg-navy dark:bg-none dark:ring-gold/25"
              >
                <span aria-hidden className="hero-ring absolute h-56 w-56 rounded-full border border-gold/40 dark:border-gold/25" />
                <span aria-hidden className="hero-ring hero-ring-2 absolute h-72 w-72 rounded-full border border-gold/15" />
                <span className="relative font-serif text-8xl font-medium text-accent dark:text-gold/90">
                  {initials(profile.name)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <a
        href="#sobre-mi"
        aria-label={t.sections["sobre-mi"]}
        className="scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-muted transition hover:text-accent lg:block"
      >
        <ChevronDownIcon className="h-6 w-6" />
      </a>
    </section>
  );
}
