import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContentCard } from "@/components/ContentCard";
import { CalloutPanel } from "@/components/CalloutPanel";
import { SafetyNotice } from "@/components/SafetyNotice";

const PHASES = [
  {
    title: "Phase 1 — Baseline and design",
    description:
      "Map current casual AI use, confirm the workflows to be trialled, and finalise privacy and risk-checking guidance.",
    status: "developing" as const,
  },
  {
    title: "Phase 2 — Small-group trial",
    description:
      "A small group of volunteer staff trial selected workflows in their own planning, with structured reflection after each use.",
    status: "draft" as const,
  },
  {
    title: "Phase 3 — Review and revision",
    description:
      "Workflows are revised based on trial feedback and field notes, with particular attention to inclusion and quality assurance steps.",
    status: "draft" as const,
  },
  {
    title: "Phase 4 — Wider trial and write-up",
    description:
      "Revised workflows are trialled more widely, and findings are written up for school leaders and the broader research community.",
    status: "draft" as const,
  },
];

export default function PilotStudyPage() {
  return (
    <>
      <Hero
        eyebrow="Pilot Study"
        title="Trialling reliable AI-supported workflows in practice"
        subtitle="The pilot study applies a design-based research approach: workflows are drafted, trialled, observed, and revised in cycles with participating staff."
      />

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SafetyNotice />
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Approach" title="Design-based research, in cycles" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            Rather than testing a fixed workflow once, this pilot study works
            in short cycles: a workflow is drafted, a small number of staff
            trial it in an authentic planning context, observations are
            recorded as field notes, and the workflow is revised before the
            next cycle. This approach is suited to a problem where the right
            level of structure — enough to support quality and inclusion,
            without adding unsustainable overhead — is not yet known and needs
            to be discovered through use.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Status" title="Pilot phases" />
          <div className="mt-10 space-y-6">
            {PHASES.map((phase) => (
              <ContentCard
                key={phase.title}
                title={phase.title}
                description={phase.description}
                status={phase.status}
              />
            ))}
          </div>

          <div className="mt-10">
            <CalloutPanel title="Current focus" variant="accent">
              The pilot is currently in Phase 1: confirming the workflows to
              be trialled (see the AI Workflow Lab) and finalising the privacy
              and risk-checking guidance that will apply throughout every
              later phase.
            </CalloutPanel>
          </div>
        </div>
      </section>
    </>
  );
}
