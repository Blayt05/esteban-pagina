"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const media = "(prefers-color-scheme: dark)";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  const mq = window.matchMedia(media);
  mq.addEventListener("change", callback);
  return () => {
    observer.disconnect();
    mq.removeEventListener("change", callback);
  };
}

// Tema efectivo: el elegido por el usuario (.dark/.light) o, si no hay, el del sistema.
function isDark() {
  const cl = document.documentElement.classList;
  if (cl.contains("dark")) return true;
  if (cl.contains("light")) return false;
  return window.matchMedia(media).matches;
}

function apply(theme: "dark" | "light") {
  const cl = document.documentElement.classList;
  cl.toggle("dark", theme === "dark");
  cl.toggle("light", theme === "light");
}

export function ThemeToggle({ toLight, toDark }: { toLight: string; toDark: string }) {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  // Aplica la preferencia guardada (si el usuario eligió un tema distinto al del sistema).
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") apply(saved);
    } catch {
      // Almacenamiento no disponible: se usa el tema del sistema.
    }
  }, []);

  function toggle() {
    const next = isDark() ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Almacenamiento no disponible: el cambio solo dura esta visita.
    }
  }

  const label = dark ? toLight : toDark;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-surface-2 hover:text-ink"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
