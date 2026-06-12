import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ResearchCard } from "@/components/ResearchCard";
import { SafetyNotice } from "@/components/SafetyNotice";

const PROBLEM_CARDS = [
  {
    title: "Inconsistency",
    description:
      "AI use varies between staff, classes, and tasks, with no shared workflow and no way to compare what is working.",
  },
  {
    title: "Inequity",
    description:
      "Without an inclusion lens, AI-assisted adaptations risk widening the gaps for students with additional needs instead of closing them.",
  },
  {
    title: "Governance Gap",
    description:
      "Most schools have no clear, shared guidance on privacy, risk, and quality assurance for generative AI use.",
  },
];

const LOGIC_STEPS = [
  {
    title: "Casual Use",
    description: "Individual, informal use with no shared workflow or review.",
  },
  {
    title: "Structured Workflows",
    description: "Defined steps for common tasks, with a clear point of professional review.",
  },
  {
    title: "Quality Assurance",
    description: "Output is checked for accuracy, alignment, and tone before use.",
  },
  {
    title: "Inclusive Practice",
    description: "Workflows are evaluated against an explicit inclusion lens.",
  },
  {
    title: "Reliable Implementation",
    description: "Practice is consistent, documented, and supported across the school.",
  },
];

const SECTION_LINKS = [
  {
    title: "Research Problem",
    description:
      "The problem this hub addresses, why it matters now, and the inclusive education lens used throughout.",
    href: "/research-problem",
  },
  {
    title: "Reading Library",
    description:
      "The literature and policy guidance that grounds this research, with notes on relevance to schools.",
    href: "/reading-library",
  },
  {
    title: "Frameworks",
    description:
      "The frameworks used to evaluate AI-supported practice, from UDL to implementation science.",
    href: "/frameworks",
  },
  {
    title: "AI Workflow Lab",
    description:
      "Structured, reviewable workflows for using AI in curriculum, communication, and quality assurance.",
    href: "/ai-workflow-lab",
  },
  {
    title: "Field Notes",
    description:
      "De-identified observations from early conversations and trials, and what they imply for the workflows.",
    href: "/field-notes",
  },
  {
    title: "Pilot Study",
    description:
      "The design and status of the pilot study testing these workflows in practice.",
    href: "/pilot-study",
  },
  {
    title: "Glossary",
    description:
      "Plain-English definitions of the frameworks, terms, and concepts used across this hub.",
    href: "/glossary",
  },
  {
    title: "About",
    description: "About this research, its purpose, and how it is being conducted.",
    href: "/about",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Research Hub"
        title="Reliable AI for Inclusive Schools"
        subtitle="AI is now part of everyday school practice. This hub sets out how to make that practice reliable, inclusive, and quality-assured, and what it takes to implement it well."
      />

      <section className="border-b border-border-subtle py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            Working Question
          </p>
          <p className="mt-4 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
            How can schools move from casual AI use to reliable
            AI-supported inclusive practice?
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Generative AI is already part of everyday school life. But it is
            mostly an individual habit, not a professional practice. That gap
            has a cost. Staff rework unreliable output. Quality varies between
            classrooms. Decisions affecting students get made with no clear
            record of how AI was involved. This research starts from that
            gap. It sets out what changes when AI use moves from informal
            habit to workflows that are structured, quality-assured, and
            tested against inclusive teaching standards.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="The Problem"
            title="Three gaps casual use leaves open"
            description="Each gap below shapes the workflows and questions covered in this hub."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PROBLEM_CARDS.map((card) => (
              <ResearchCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Research Logic"
            title="From casual use to reliable implementation"
            description="The hub is organised around this progression. Each stage builds on the one before it, rather than replacing it."
          />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border-subtle bg-border-subtle sm:grid-cols-5">
            {LOGIC_STEPS.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2 bg-surface p-5">
                <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-lg text-foreground">{step.title}</span>
                <span className="text-sm leading-relaxed text-muted">{step.description}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Contents" title="Sections of this hub" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECTION_LINKS.map((section) => (
              <ResearchCard
                key={section.href}
                title={section.title}
                description={section.description}
                href={section.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SafetyNotice />
        </div>
      </section>
    </>
  );
}
