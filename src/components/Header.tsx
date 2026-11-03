import Link from "next/link";
import type { Locale } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { initials } from "@/lib/utils";
import { GlobeIcon } from "./Icons";
import { MobileMenu } from "./MobileMenu";
import { ScrollProgress } from "./ScrollProgress";
import { allNav, primaryNav } from "./nav";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale, t, name }: { locale: Locale; t: Dictionary; name: string }) {
  const other: Locale = locale === "es" ? "en" : "es";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft font-serif text-sm font-semibold tracking-wide text-accent ring-1 ring-gold/50 dark:bg-surface dark:text-gold"
          >
            {initials(name)}
          </span>
          <span className="hidden font-serif text-base font-medium text-ink sm:block">{name}</span>
        </a>

        <nav aria-label={t.nav.label} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="nav-link relative rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  {t.sections[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href={`/${other}/`}
            hrefLang={other}
            lang={other}
            aria-label={t.nav.switchToLabel}
            className="inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-ink/80 transition-colors hover:bg-surface-2 hover:text-ink"
          >
            <GlobeIcon className="h-4 w-4" />
            <span className="uppercase">{other}</span>
          </Link>
          <ThemeToggle toLight={t.nav.themeToLight} toDark={t.nav.themeToDark} />
          <MobileMenu
            label={t.nav.label}
            openLabel={t.nav.menu}
            closeLabel={t.nav.close}
            items={allNav.map((id) => ({ id, label: t.sections[id] }))}
          />
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
