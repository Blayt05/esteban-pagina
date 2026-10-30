"use client";

import { useEffect } from "react";

// Añade .is-visible a los elementos [data-reveal] cuando entran en pantalla.
// Lo que ya está visible se marca antes de activar .reveal en <html>, en el mismo frame,
// para que no parpadee. Con prefers-reduced-motion, el CSS lo muestra todo sin animación.
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    if (!("IntersectionObserver" in window)) return;

    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    const pending = elements.filter((el) => {
      if (inView(el)) {
        el.classList.add("is-visible");
        return false;
      }
      return true;
    });
    root.classList.add("reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    pending.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      root.classList.remove("reveal");
    };
  }, []);

  return null;
}
