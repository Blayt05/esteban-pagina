import { asset, siteConfig } from "@/config/site";
import type { Locale } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { DownloadIcon, GlobeIcon, LinkedInIcon, MailIcon } from "./Icons";
import { Section } from "./Section";

export function Contact({ locale, t }: { locale: Locale; t: Dictionary }) {
  // Los enlaces se muestran solo cuando están definidos en src/config/site.ts (TODO).
  const links = [
    siteConfig.email && {
      href: `mailto:${siteConfig.email}`,
      label: t.contact.email,
      value: siteConfig.email,
      icon: <MailIcon />,
    },
    siteConfig.linkedin && {
      href: siteConfig.linkedin,
      label: t.contact.linkedin,
      value: siteConfig.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      icon: <LinkedInIcon />,
      external: true,
    },
    siteConfig.caiinno && {
      href: siteConfig.caiinno,
      label: t.contact.caiinno,
      value: siteConfig.caiinno.replace(/^https?:\/\/(www\.)?/, ""),
      icon: <GlobeIcon />,
      external: true,
    },
  ].filter((l): l is Exclude<typeof l, null | false | ""> => Boolean(l));

  // En desarrollo se muestran los datos pendientes para no olvidarlos; en producción se ocultan.
  const pending =
    process.env.NODE_ENV === "production"
      ? []
      : [
          !siteConfig.email && "email",
          !siteConfig.linkedin && "linkedin",
          !siteConfig.caiinno && "caiinno",
          !siteConfig.cvAvailable && "cvAvailable + public/cv-*.pdf",
        ].filter(Boolean);

  return (
    <Section id="contacto" eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <div data-reveal className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        {links.length > 0 && (
          <ul className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-full items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:border-accent"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-accent-soft text-accent">
                    {l.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                      {l.label}
                    </span>
                    <span className="block truncate text-ink">{l.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
        {pending.length > 0 && (
          <p className="flex-1 rounded-2xl border border-dashed border-accent p-5 text-sm text-muted">
            TODO (src/config/site.ts): {pending.join(", ")}
          </p>
        )}
        {siteConfig.cvAvailable && (
          <a
            href={asset(siteConfig.cvPdf[locale])}
            download
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-2 dark:bg-gold dark:text-navy"
          >
            <DownloadIcon />
            {t.contact.downloadCv}
          </a>
        )}
      </div>
    </Section>
  );
}
