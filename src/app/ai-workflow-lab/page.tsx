import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { TagPill } from "@/components/TagPill";
import { SafetyNotice } from "@/components/SafetyNotice";
import { workflows } from "@/data/workflows";

export default function AiWorkflowLabPage() {
  return (
    <>
      <Hero
        eyebrow="AI Workflow Lab"
        title="Structured workflows for AI-supported practice"
        subtitle="Each workflow sets out a defined sequence of steps, the audience it is designed for, and the quality checks applied before any output is used."
      />

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SafetyNotice />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-16 px-6">
          {workflows.map((workflow) => (
            <article key={workflow.slug} id={workflow.slug}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <SectionHeader title={workflow.title} description={workflow.purpose} />
                <StatusBadge status={workflow.status} />
              </div>

              <p className="mt-4 text-sm font-medium tracking-wide text-muted uppercase">
                Audience: <span className="font-normal normal-case text-foreground">{workflow.audience}</span>
              </p>

              <ol className="mt-8 space-y-6 border-l border-border-subtle pl-6">
                {workflow.steps.map((step, i) => (
                  <li key={step.title}>
                    <p className="font-serif text-lg text-foreground">
                      {i + 1}. {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-lg border border-border-subtle bg-surface p-6">
                <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
                  Quality checks
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {workflow.qualityChecks.map((check) => (
                    <li key={check} className="flex gap-2">
                      <span className="text-accent">—</span>
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {workflow.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
