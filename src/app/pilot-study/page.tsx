import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContentCard } from "@/components/ContentCard";
import { CalloutPanel } from "@/components/CalloutPanel";
import { SafetyNotice } from "@/components/SafetyNotice";

const PHASES = [
  {
    title: "Phase 1: Baseline and design",
    description:
      "Map current casual AI use, tier candidate tasks by risk, confirm the workflows to be trialled, and finalise privacy and risk-checking guidance.",
    status: "developing" as const,
  },
  {
    title: "Phase 2: Small-group trial",
    description:
      "A small group of volunteer staff trial selected workflows on low-risk, teacher-facing tasks, with structured reflection after each use.",
    status: "draft" as const,
  },
  {
    title: "Phase 3: Review and revision",
    description:
      "Workflows are revised based on trial feedback, quality assurance results, and field notes, with particular attention to inclusion and governance steps.",
    status: "draft" as const,
  },
  {
    title: "Phase 4: Wider trial and write-up",
    description:
      "Revised workflows are trialled more widely, and findings on workflow reliability and implementation conditions are written up for school leaders and the broader research community.",
    status: "draft" as const,
  },
];

export default function PilotStudyPage() {
  return (
    <>
      <Hero
        eyebrow="Pilot Study"
        title="Trialling reliable AI-supported workflows in practice"
        subtitle="The pilot study examines whether structured AI workflows can be used reliably for low-risk, teacher-facing tasks. It applies a design-based research approach: workflows are drafted, trialled, observed, and revised in cycles with participating staff."
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
            Rather than testing a fixed workflow once, this pilot works in
            short cycles. A workflow is drafted. A small number of staff trial
            it on a real, low-risk task. Observations are recorded as field
            notes. The workflow is revised before the next cycle. This suits
            a problem where the right level of structure is not yet known and
            has to be found through use: enough to support quality and
            inclusion, without adding workload staff cannot sustain.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            The pilot covers teacher-facing tasks such as curriculum
            adaptation, accessible resource review, AAC-friendly language
            support, reporting support, planning support, and quality
            assurance of AI-generated outputs. It examines how reliably
            teachers can use structured AI workflows for these tasks, and
            what conditions, training, time, and oversight that reliability
            depends on. It does not test whether AI use improves student
            learning outcomes, and no claim of that kind will be made from
            this work.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Evidence" title="What the pilot will produce" />
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
            <li>Teacher workflow maps for each trialled task.</li>
            <li>A set of risk-tiered AI use cases for teacher-facing work.</li>
            <li>Results from a quality assurance checklist applied to AI-generated outputs.</li>
            <li>Teacher reflection data on usefulness, trust, and fit with practice.</li>
            <li>Workload perception data from participating staff.</li>
            <li>De-identified review of sample artefacts produced through the workflows.</li>
            <li>A log of implementation barriers encountered during the trial.</li>
          </ul>
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
              be trialled (see the AI Workflow Lab), tiering candidate tasks
              by risk, and finalising the privacy and risk-checking guidance
              that will apply throughout every later phase.
            </CalloutPanel>
          </div>
        </div>
      </section>
    </>
  );
}
