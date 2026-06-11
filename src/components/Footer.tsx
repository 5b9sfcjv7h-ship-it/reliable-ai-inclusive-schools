import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-serif text-lg text-foreground">
              Reliable AI for Inclusive Schools
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              A research hub exploring how schools can move from casual
              generative AI use toward reliable, ethical, inclusive, and
              quality-assured AI-supported practice.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {LINKS.map((link) => (
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
          </nav>
        </div>
        <p className="mt-10 text-xs text-muted">
          All examples and field notes are de-identified. No
          student-identifiable, school-identifiable, or confidential
          information is published on this site.
        </p>
      </div>
    </footer>
  );
}
