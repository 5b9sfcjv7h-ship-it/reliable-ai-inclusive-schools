import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="font-serif text-lg font-medium text-foreground">
              Reliable AI for Inclusive Schools
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Practical research on moving schools from casual AI use to
              reliable, inclusive, quality-assured AI-supported practice.
            </p>
          </div>
          <nav aria-label="Footer">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
              {GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                    {group.label}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className="mt-10 space-y-2 text-xs text-muted">
          <p>
            All examples and field notes are de-identified. No
            student-identifiable, school-identifiable, or confidential
            information is published on this site.
          </p>
          <p>
            This hub aims to model the inclusive design it argues for.{" "}
            <Link
              href="/about#inclusive-design"
              className="underline decoration-border-subtle underline-offset-2 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              How this hub approaches accessibility
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
