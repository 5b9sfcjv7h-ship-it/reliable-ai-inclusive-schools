"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/research-problem", label: "Research Problem" },
  { href: "/reading-library", label: "Reading Library" },
  { href: "/frameworks", label: "Frameworks" },
  { href: "/ai-workflow-lab", label: "AI Workflow Lab" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/pilot-study", label: "Pilot Study" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-base text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Reliable AI for Inclusive Schools
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      active ? "text-foreground font-medium" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-md border border-border-subtle px-3 py-1.5 text-sm text-foreground lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-border-subtle lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      active ? "text-foreground font-medium" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
