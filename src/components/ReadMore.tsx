"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "./Icons";

export function ReadMore({
  more,
  readMore,
  readLess,
}: {
  more: string[];
  readMore: string;
  readLess: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <div id={id} hidden={!open} className="space-y-5">
        {more.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent underline-offset-4 hover:underline"
      >
        {open ? readLess : readMore}
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
    </>
  );
}
