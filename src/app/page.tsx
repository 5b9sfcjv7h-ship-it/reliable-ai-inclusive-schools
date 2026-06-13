import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ResearchCard } from "@/components/ResearchCard";
import { ResearchLogicDiagram } from "@/components/ResearchLogicDiagram";
import { SafetyNotice } from "@/components/SafetyNotice";
import {
  IconClipboardCheck,
  IconCompass,
  IconLandmark,
  IconPeople,
  IconRoute,
  IconScaleUnbalanced,
  IconShieldDashed,
  IconVariance,
} from "@/components/icons";

const PROBLEM_CARDS = [
  {
    title: "Inconsistency",
    description:
      "AI use varies between staff, classes, and tasks, with no shared workflow and no way to compare what is working.",
    icon: <IconVariance className="h-6 w-6" />,
  },
  {
    title: "Inequity",
    description:
      "Without an inclusion lens, AI-assisted adaptations risk widening the gaps for students with additional needs instead of closing them.",
    icon: <IconScaleUnbalanced className="h-6 w-6" />,
  },
  {
    title: "Governance Gap",
    description:
      "Most schools have no clear, shared guidance on privacy, risk, and quality assurance for generative AI use.",
    icon: <IconShieldDashed className="h-6 w-6" />,
  },
];

const LOGIC_STEPS = [
  {
    title: "Responsible AI Principles",
    description: "National and international guidance on safe, ethical, and responsible AI use.",
    icon: <IconCompass />,
  },
  {
    title: "School Governance",
    description: "Local policy, approved tools, privacy rules, and risk settings that apply those principles in a school.",
    icon: <IconLandmark />,
  },
  {
    title: "Teacher Workflows",
    description: "Defined steps for common tasks, with a clear point of professional review.",
    icon: <IconRoute />,
  },
  {
    title: "Quality Assurance",
    description: "Output is checked for accuracy, alignment, and tone before use.",
    icon: <IconClipboardCheck />,
  },
  {
    title: "Inclusive Practice",
    description: "Workflows are evaluated against an explicit inclusion lens for students with disability and complex needs.",
    icon: <IconPeople />,
  },
];

const SECTION_GROUPS = [
  {
    label: "The Research",
    items: [
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
    ],
  },
  {
    label: "The Practice",
    items: [
      {
        title: "AI Workflow Lab",
        description:
          "Structured, reviewable workflows for using AI in curriculum, communication, and quality assurance.",
        href: "/ai-workflow-lab",
      },
      {
        title: "Pilot Study",
        description:
          "The design and status of the pilot study testing these workflows in practice.",
        href: "/pilot-study",
      },
      {
        title: "Field Notes",
        description:
          "De-identified observations from early conversations and trials, and what they imply for the workflows.",
        href: "/field-notes",
      },
    ],
  },
  {
    label: "Reference",
    items: [
      {
        title: "Glossary",
        description:
          "Plain-English definitions of the frameworks, terms, and concepts used across this hub.",
        href: "/glossary",
      },
      {
        title: "About",
        description:
          "About this research, its purpose, and how it is being conducted.",
        href: "/about",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Research Hub"
        title="Turning responsible AI principles into inclusive school practice"
        subtitle="A research and advisory hub on the workflows, safeguards, and implementation routines schools need to use generative AI reliably."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/research-problem"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Start with the research problem
          </Link>
          <Link
            href="/ai-workflow-lab"
            className="rounded-md border border-border-subtle bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            See the workflows
          </Link>
        </div>
      </Hero>

      <section className="border-b border-border-subtle py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">
            Working Question
          </p>
          <p className="mt-4 font-sans text-2xl leading-[1.08] font-medium tracking-normal text-balance text-foreground sm:text-3xl sm:leading-[1.05]">
            How can schools move from casual AI use to reliable
            AI-supported inclusive practice?
          </p>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.8] text-foreground-soft">
            Schools are being told to use AI responsibly. The harder problem
            is turning those principles into daily routines teachers can
            actually use, and that leaders can quality assure. Most current
            AI use is informal: an individual habit, not a professional
            practice. Staff rework unreliable output. Quality varies between
            classrooms. Decisions affecting students get made with no clear
            record of how AI was involved. This research starts from that
            gap. It sets out what changes when AI use moves from informal
            habit to governed workflows that are structured, quality-assured,
            and tested against inclusive teaching standards.
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
              <ResearchCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Research Logic"
            title="From principles to inclusive practice"
            description="The hub is organised around this chain. Each stage depends on the one before it, rather than replacing it."
          />
          <ResearchLogicDiagram steps={LOGIC_STEPS} />
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Contents" title="Sections of this hub" />
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-3">
            {SECTION_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
                  {group.label}
                </p>
                <ul className="mt-3 divide-y divide-border-subtle border-t border-border-subtle">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group block py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <span className="block text-base font-semibold tracking-[-0.01em] text-foreground transition-colors group-hover:text-accent">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-foreground-soft">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
