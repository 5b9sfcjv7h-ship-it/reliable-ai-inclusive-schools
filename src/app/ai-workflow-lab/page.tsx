import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { TagPill } from "@/components/TagPill";
import { CalloutPanel } from "@/components/CalloutPanel";
import { PlainTerms } from "@/components/PlainTerms";
import { workflows } from "@/data/workflows";

export default function AiWorkflowLabPage() {
  return (
    <>
      <Hero
        eyebrow="AI Workflow Lab"
        title="Structured workflows for AI-supported practice"
        subtitle="Each workflow sets out a defined sequence of steps, the audience it is designed for, and the quality checks applied before any output is used."
      />

      <section className="border-b border-border-subtle py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <PlainTerms>
            <p>
              These are step-by-step routines for common teaching tasks that
              use AI. Each one names its audience, the steps to follow, and
              the checks a teacher applies before anything is used with
              students. All examples are de-identified.
            </p>
          </PlainTerms>

          <nav aria-label="Workflows on this page" className="mt-10">
            <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
              Workflows on this page
            </p>
            <ol className="mt-3 space-y-2 text-sm">
              {workflows.map((workflow, i) => (
                <li key={workflow.slug}>
                  <a
                    href={`#${workflow.slug}`}
                    className="text-foreground-soft hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span aria-hidden="true" className="mr-2 text-xs font-medium tracking-[0.16em] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {workflow.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-10">
            <CalloutPanel title="Task-level design check">
              Each workflow is also checked against a simple SAMR question: is
              AI substituting, augmenting, modifying, or redefining the teacher
              task? The further a task moves from substitution, the stronger
              the quality assurance and inclusion safeguards it needs.
            </CalloutPanel>
          </div>
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

              <p className="mt-4 text-xs font-medium tracking-[0.16em] text-muted uppercase">
                Audience: <span className="font-normal normal-case tracking-normal text-foreground">{workflow.audience}</span>
              </p>

              <ol className="mt-8 space-y-6 border-l border-border-subtle pl-6">
                {workflow.steps.map((step, i) => (
                  <li key={step.title}>
                    <p className="text-base font-semibold tracking-[-0.01em] text-foreground">
                      {i + 1}. {step.title}
                    </p>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-foreground-soft">{step.detail}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-md border border-border-subtle bg-surface p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
                  Quality checks
                </p>
                <ul className="mt-3 space-y-2 text-[0.9375rem] leading-relaxed text-foreground-soft">
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
