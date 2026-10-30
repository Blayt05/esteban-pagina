import type { Dictionary } from "@/i18n/dictionaries";
import { primaryNav } from "./nav";

export function Footer({ t, name }: { t: Dictionary; name: string }) {
  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg text-ink">{name}</p>
          <p className="mt-1 text-sm text-muted">© {new Date().getFullYear()}</p>
        </div>
        <nav aria-label={t.footer.quickLinks}>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {primaryNav.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-muted hover:text-accent">
                  {t.sections[id]}
                </a>
              </li>
            ))}
            <li>
              <a href="#inicio" className="font-semibold text-accent hover:underline">
                ↑ {t.footer.backToTop}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
