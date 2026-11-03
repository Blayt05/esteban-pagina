"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { asset } from "@/config/site";
import { type MediaItem, youtubeEmbed, youtubeThumb } from "@/data/media";
import type { Locale } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { CloseIcon, ImageIcon, PlayIcon } from "./Icons";

type Labels = Dictionary["media"];

const spans: Record<NonNullable<MediaItem["layout"]>, string> = {
  square: "",
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
};

const resolve = (src: string) => (/^https?:\/\//.test(src) ? src : asset(src));

// Cuadrícula de fotos y videos con visor a pantalla completa (<dialog> nativo: Esc cierra,
// flechas cambian de elemento). Los elementos sin `src` se muestran como marcadores.
export function MediaGallery({
  items,
  locale,
  labels,
  dark = false,
  columns = "lg:grid-cols-3",
}: {
  items: MediaItem[];
  locale: Locale;
  labels: Labels;
  dark?: boolean;
  columns?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const ready = useMemo(
    () => items.map((item, i) => ({ item, i })).filter(({ item }) => item.src),
    [items],
  );

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  const step = useCallback(
    (dir: 1 | -1) => {
      setIndex((current) => {
        if (current === null || ready.length < 2) return current;
        const pos = ready.findIndex(({ i }) => i === current);
        return ready[(pos + dir + ready.length) % ready.length].i;
      });
    },
    [ready],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    dialog.addEventListener("keydown", onKey);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      dialog.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index !== null ? items[index] : null;

  return (
    <>
      <ul className={`grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[15rem] ${columns}`}>
        {items.map((item, i) => (
          <li
            key={`${item.caption.es}-${i}`}
            data-reveal="zoom"
            style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
            className={spans[item.layout ?? "square"]}
          >
            {item.src ? (
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`${item.type === "image" ? labels.open : labels.play}: ${item.caption[locale]}`}
                className="media-tile group relative block h-full w-full overflow-hidden rounded-2xl bg-navy text-left shadow-sm"
              >
                <Thumb item={item} />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                {item.type !== "image" && (
                  <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition duration-500 group-hover:scale-110 group-hover:bg-gold">
                    <span className="play-ping absolute inset-0 rounded-full bg-white/60" />
                    <PlayIcon className="relative ml-1 h-6 w-6" />
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 translate-y-1 p-5 text-sm font-medium text-white transition-transform duration-500 group-hover:translate-y-0">
                  {item.caption[locale]}
                </span>
              </button>
            ) : (
              <Placeholder item={item} locale={locale} labels={labels} dark={dark} />
            )}
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={current?.caption[locale]}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="lightbox m-auto max-h-[92vh] outline-none focus-visible:outline-none w-[min(92vw,72rem)] overflow-visible bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        {current?.src && (
          <figure className="relative">
            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
              {current.type === "image" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={resolve(current.src)}
                  alt={current.caption[locale]}
                  className="mx-auto max-h-[75vh] w-auto object-contain"
                />
              )}
              {current.type === "video" && (
                <video
                  key={current.src}
                  src={resolve(current.src)}
                  poster={current.poster ? resolve(current.poster) : undefined}
                  controls
                  autoPlay
                  playsInline
                  className="mx-auto aspect-video max-h-[75vh] w-full bg-black"
                />
              )}
              {current.type === "youtube" && (
                <iframe
                  key={current.src}
                  src={youtubeEmbed(current.src, true)}
                  title={current.caption[locale]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full"
                />
              )}
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-white/85">
              <span>{current.caption[locale]}</span>
              {ready.length > 1 && (
                <span className="flex gap-2">
                  <LightboxButton onClick={() => step(-1)} label={labels.previous}>
                    ←
                  </LightboxButton>
                  <LightboxButton onClick={() => step(1)} label={labels.next}>
                    →
                  </LightboxButton>
                </span>
              )}
            </figcaption>
            <button
              type="button"
              onClick={close}
              aria-label={labels.close}
              className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-lg transition hover:rotate-90 hover:bg-gold sm:-top-5 sm:-right-5"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </figure>
        )}
      </dialog>
    </>
  );
}

function Thumb({ item }: { item: MediaItem }) {
  const src = item.src!;
  const cls =
    "absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110";

  if (item.type === "video") {
    // Vista previa: muestra el póster o, si no hay, el primer cuadro del video.
    return item.poster ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={resolve(item.poster)} alt="" loading="lazy" className={cls} />
    ) : (
      <video src={`${resolve(src)}#t=0.1`} muted playsInline preload="metadata" className={cls} />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.type === "youtube" ? youtubeThumb(src) : resolve(src)}
      alt=""
      loading="lazy"
      className={cls}
    />
  );
}

function Placeholder({
  item,
  locale,
  labels,
  dark,
}: {
  item: MediaItem;
  locale: Locale;
  labels: Labels;
  dark: boolean;
}) {
  const isVideo = item.type !== "image";
  return (
    <div
      className={`placeholder-shimmer relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed p-6 text-center ${
        dark ? "border-white/25 bg-white/5 text-white/70" : "border-accent/40 bg-surface text-muted"
      }`}
    >
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-full ${
          dark ? "bg-gold/15 text-gold" : "bg-accent-soft text-accent"
        }`}
      >
        {isVideo ? <PlayIcon className="ml-0.5 h-6 w-6" /> : <ImageIcon className="h-6 w-6" />}
      </span>
      <span className="text-xs font-semibold tracking-[0.18em] uppercase">
        {isVideo ? labels.videoPending : labels.photoPending}
      </span>
      <span className={`text-sm ${dark ? "text-white/60" : "text-ink/60"}`}>{item.caption[locale]}</span>
    </div>
  );
}

function LightboxButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white ring-1 ring-white/20 transition hover:bg-gold hover:text-navy"
    >
      {children}
    </button>
  );
}
