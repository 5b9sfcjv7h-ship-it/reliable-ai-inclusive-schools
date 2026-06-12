import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CalloutPanel } from "@/components/CalloutPanel";
import { StatusBadge } from "@/components/StatusBadge";
import { readings } from "@/data/readings";
import type { Reading } from "@/lib/types";

const GOVERNANCE_TAG = "Governance and Responsible Implementation";
const INSTRUCTIONAL_DESIGN_TAG = "Instructional Design and AI Integration";

const LINK_LABELS: Record<Reading["type"], string> = {
  "journal article": "View paper",
  book: "View source",
  report: "Read report",
  "policy document": "Read guidance",
  "framework guide": "View framework",
  "professional article": "Read article",
};

function ReadingRow({ reading }: { reading: Reading }) {
  return (
    <article className="py-8 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
          {reading.authors} · {reading.year} · {reading.type}
        </p>
        <StatusBadge status={reading.status} />
      </div>
      <h3 className="mt-2 text-lg font-semibold tracking-[-0.01em] text-foreground">
        {reading.title}
      </h3>
      <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-foreground-soft">
        {reading.summary}
      </p>
      <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-foreground">
        <span className="font-medium">Why it matters: </span>
        {reading.relevance}
      </p>
      {reading.url && (
        <p className="mt-4">
          <a
            href={reading.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {reading.linkLabel ?? LINK_LABELS[reading.type]}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      )}
    </article>
  );
}

export default function ReadingLibraryPage() {
  const governanceReadings = readings.filter((reading) =>
    reading.tags.includes(GOVERNANCE_TAG)
  );
  const instructionalDesignReadings = readings.filter((reading) =>
    reading.tags.includes(INSTRUCTIONAL_DESIGN_TAG)
  );
  const otherReadings = readings.filter(
    (reading) =>
      !reading.tags.includes(GOVERNANCE_TAG) &&
      !reading.tags.includes(INSTRUCTIONAL_DESIGN_TAG)
  );

  return (
    <>
      <Hero
        eyebrow="Reading Library"
        title="The literature grounding this research"
        subtitle="Key journal articles, frameworks, reports, and policy guidance, with notes on how each connects to the research question."
      />

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            eyebrow="Core sources"
            title="Frameworks and foundational literature"
            description="The frameworks and studies that anchor the inclusion lens, the implementation focus, and the AI literacy expectations used across this hub."
          />
          <div className="mt-10 divide-y divide-border-subtle">
            {otherReadings.map((reading) => (
              <ReadingRow key={reading.slug} reading={reading} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            eyebrow="Cluster"
            title="Instructional Design and AI Integration"
            description="Emerging sources on designing learning tasks for the presence of generative AI."
          />
          <div className="mt-6">
            <CalloutPanel title="How to read this cluster">
              These sources are used as task and learning design references.
              Most are written for higher education and need adaptation for
              inclusive, teacher-facing school workflows. They are not
              school-sector governance sources, and they are not evidence
              that AI improves student learning outcomes.
            </CalloutPanel>
          </div>
          <div className="mt-10 divide-y divide-border-subtle">
            {instructionalDesignReadings.map((reading) => (
              <ReadingRow key={reading.slug} reading={reading} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            eyebrow="Cluster"
            title="Governance and Responsible Implementation"
            description="National, regional, and international guidance that frames how schools govern and implement AI use."
          />
          <div className="mt-6">
            <CalloutPanel title="How to read this cluster">
              These sources are used as governance, policy, implementation,
              and quality-assurance references. They should not be read as
              direct evidence that generative AI improves student learning
              outcomes.
            </CalloutPanel>
          </div>
          <div className="mt-10 divide-y divide-border-subtle">
            {governanceReadings.map((reading) => (
              <ReadingRow key={reading.slug} reading={reading} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
