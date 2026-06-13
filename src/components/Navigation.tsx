"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ReadingSupport } from "@/components/ReadingSupport";

const GROUPS = [
  {
    label: "The Research",
    links: [
      { href: "/research-problem", label: "Research Problem" },
      { href: "/reading-library", label: "Reading Library" },
      { href: "/frameworks", label: "Frameworks" },
    ],
  },
  {
    label: "The Practice",
    links: [
      { href: "/ai-workflow-lab", label: "AI Workflow Lab" },
      { href: "/pilot-study", label: "Pilot Study" },
      { href: "/field-notes", label: "Field Notes" },
    ],
  },
  {
    label: "Reference",
    links: [
      { href: "/glossary", label: "Glossary" },
      { href: "/about", label: "About" },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-4">
        <Link
          href="/"
          className="shrink-0 font-serif text-base font-medium text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Reliable AI for Inclusive Schools
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden xl:block">
            <ul className="flex items-center text-sm">
              {GROUPS.map((group, gi) => (
                <li key={group.label} className="flex items-center">
                  {gi > 0 && (
                    <span
                      aria-hidden="true"
                      className="mx-4 h-4 border-l border-border-subtle"
                    />
                  )}
                  <ul className="flex items-center gap-x-5">
                    {group.links.map((link) => {
                      const active = pathname === link.href;
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            aria-current={active ? "page" : undefined}
                            className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                              active
                                ? "text-foreground font-medium"
                                : "text-muted hover:text-foreground"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>

          <ReadingSupport />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-md border border-border-subtle px-3 py-1.5 text-sm text-foreground xl:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-border-subtle xl:hidden">
          <div className="mx-auto max-w-7xl space-y-6 px-6 py-6">
            {GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                  {group.label}
                </p>
                <ul className="mt-1">
                  {group.links.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={`block py-2 text-[0.9375rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                            active
                              ? "text-foreground font-medium"
                              : "text-foreground-soft hover:text-foreground"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
