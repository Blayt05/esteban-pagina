"use client";

import { useEffect, useRef, useState } from "react";

type Tab = { id: string; label: string; count?: number; content: React.ReactNode };

// Pestañas accesibles (flechas, Inicio/Fin). Cada panel conserva su ancla (#publicaciones, etc.):
// si la URL apunta a una pestaña, se abre y se desplaza hasta ella.
export function Tabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [active, setActive] = useState(tabs[0].id);
  const listRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (tabs.some((t) => t.id === id)) {
        setActive(id);
        requestAnimationFrame(() => rootRef.current?.scrollIntoView({ block: "start" }));
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [tabs]);

  // Mantiene visible la pestaña activa en la barra deslizable del móvil.
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-tab="${active}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = tabs.findIndex((t) => t.id === active);
    const next =
      e.key === "ArrowRight"
        ? (i + 1) % tabs.length
        : e.key === "ArrowLeft"
          ? (i - 1 + tabs.length) % tabs.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? tabs.length - 1
              : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(tabs[next].id);
    listRef.current?.querySelector<HTMLElement>(`[data-tab="${tabs[next].id}"]`)?.focus();
  };

  return (
    <div ref={rootRef} className="scroll-mt-24">
      <div
        ref={listRef}
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="no-scrollbar -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              data-tab={tab.id}
              aria-selected={selected}
              aria-controls={tab.id}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              className={`relative flex-none rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                selected
                  ? "border border-gold bg-accent-soft text-accent shadow-sm dark:border-gold dark:bg-gold dark:text-navy"
                  : "border border-line bg-surface text-ink/75 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className={`ml-1.5 ${selected ? "opacity-80" : "text-muted"}`}>{tab.count}</span>
              )}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={tab.id}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active}
          tabIndex={0}
          className="tab-panel focus-visible:outline-offset-8"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
