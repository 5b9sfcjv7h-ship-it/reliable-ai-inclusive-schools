"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "reading-support";

const OPTIONS = [
  { className: "rs-text", label: "Larger text" },
  { className: "rs-space", label: "More line spacing" },
] as const;

type OptionClass = (typeof OPTIONS)[number]["className"];

function readStored(): OptionClass[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return OPTIONS.map((o) => o.className).filter((c) => parsed.includes(c));
  } catch {
    return [];
  }
}

export function ReadingSupport() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<OptionClass[]>(() =>
    typeof window === "undefined" ? [] : readStored()
  );
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    for (const option of OPTIONS) {
      document.documentElement.classList.toggle(
        option.className,
        active.includes(option.className)
      );
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(active));
    } catch {
      /* storage unavailable: settings still apply for this page view */
    }
  }, [active]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function toggle(className: OptionClass) {
    setActive((current) =>
      current.includes(className)
        ? current.filter((c) => c !== className)
        : [...current, className]
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="reading-support-panel"
        className="rounded-md border border-border-subtle px-2.5 py-1.5 text-sm text-foreground hover:border-accent/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span aria-hidden="true">Aa</span>
        <span className="sr-only">Reading support options</span>
      </button>

      {open && (
        <div
          id="reading-support-panel"
          className="absolute right-0 top-full z-50 mt-2 w-60 rounded-md border border-border-subtle bg-surface p-4 shadow-sm"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
            Reading support
          </p>
          <div className="mt-2 divide-y divide-border-subtle">
            {OPTIONS.map((option) => {
              const on = active.includes(option.className);
              return (
                <button
                  key={option.className}
                  type="button"
                  role="switch"
                  aria-checked={on}
                  onClick={() => toggle(option.className)}
                  className="flex w-full items-center justify-between gap-3 py-2.5 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>{option.label}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-5 w-9 shrink-0 items-center rounded-full border px-0.5 transition-colors ${
                      on
                        ? "justify-end border-accent bg-accent"
                        : "justify-start border-border-subtle bg-foreground/[0.04]"
                    }`}
                  >
                    <span
                      className={`h-3.5 w-3.5 rounded-full ${
                        on ? "bg-surface" : "bg-muted"
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Settings are saved on this device only.
          </p>
        </div>
      )}
    </div>
  );
}
