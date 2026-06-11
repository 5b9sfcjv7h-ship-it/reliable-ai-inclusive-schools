import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ResearchCard } from "@/components/ResearchCard";
import { CalloutPanel } from "@/components/CalloutPanel";
import { SafetyNotice } from "@/components/SafetyNotice";

const PROBLEM_CARDS = [
  {
    title: "Inconsistency",
    description:
      "AI use varies wildly between staff, classes, and tasks, with no shared workflow or way to compare what works.",
  },
  {
    title: "Inequity",
    description:
      "Without an inclusion lens, AI-assisted adaptations risk widening — rather than closing — gaps for students with additional needs.",
  },
  {
    title: "Governance Gap",
    description:
      "Most schools have no clear, shared guidance on privacy, risk, and quality assurance for generative AI use.",
  },
];

const LOGIC_STEPS = [
  "Casual Use",
  "Structured Workflows",
  "Quality Assurance",
  "Inclusive Practice",
  "Reliable Implementation",
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
      "The design and status of the pilot study exploring these workflows in practice.",
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
        subtitle="A research hub exploring how schools can move from casual generative AI use toward reliable, ethical, inclusive, and quality-assured AI-supported practice."
      >
        <CalloutPanel title="Current working question">
          How can schools move from casual AI use to reliable AI-supported
          inclusive practice?
        </CalloutPanel>
      </Hero>

      <section className="border-b border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="The Problem"
            title="Three gaps casual AI use leaves open"
            description="Each of these gaps shapes the research questions and workflows explored across this hub."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PROBLEM_CARDS.map((card) => (
              <ResearchCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Research Logic" title="From casual use to reliable implementation" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-5">
            {LOGIC_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex flex-col gap-2 rounded-lg border border-border-subtle bg-surface p-4"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                  Stage {i + 1}
                </span>
                <span className="font-serif text-lg text-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border-subtle py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Explore" title="Sections of this hub" />
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SafetyNotice />
        </div>
      </section>
    </>
  );
}
