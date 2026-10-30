"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

type Item = { id: string; label: string };

export function MobileMenu({
  label,
  openLabel,
  closeLabel,
  items,
}: {
  label: string;
  openLabel: string;
  closeLabel: string;
  items: Item[];
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={open ? closeLabel : openLabel}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-2"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav
        id="menu-movil"
        aria-label={label}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-bg px-5 pt-4 pb-10"
      >
        <ul className="mx-auto max-w-md divide-y divide-line">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3.5 font-serif text-lg text-ink hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
