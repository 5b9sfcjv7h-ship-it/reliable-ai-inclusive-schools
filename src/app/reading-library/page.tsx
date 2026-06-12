import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContentCard } from "@/components/ContentCard";
import { CalloutPanel } from "@/components/CalloutPanel";
import { readings } from "@/data/readings";

const GOVERNANCE_TAG = "Governance and Responsible Implementation";

export default function ReadingLibraryPage() {
  const governanceReadings = readings.filter((reading) =>
    reading.tags.includes(GOVERNANCE_TAG)
  );
  const otherReadings = readings.filter(
    (reading) => !reading.tags.includes(GOVERNANCE_TAG)
  );

  return (
    <>
      <Hero
        eyebrow="Reading Library"
        title="The literature grounding this research"
        subtitle="Key journal articles, frameworks, reports, and policy guidance, with notes on how each connects to the research question."
      />

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-6">
          {otherReadings.map((reading) => (
            <ContentCard
              key={reading.slug}
              title={reading.title}
              meta={`${reading.authors} · ${reading.year} · ${reading.type}`}
              description={reading.summary}
              tags={reading.tags}
              status={reading.status}
            >
              <p className="mt-4 border-t border-border-subtle pt-4 text-[0.9375rem] leading-relaxed text-foreground">
                <span className="font-medium">Relevance: </span>
                {reading.relevance}
              </p>
            </ContentCard>
          ))}
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
          <div className="mt-10 space-y-6">
            {governanceReadings.map((reading) => (
              <ContentCard
                key={reading.slug}
                title={reading.title}
                meta={`${reading.authors} · ${reading.year} · ${reading.type}`}
                description={reading.summary}
                tags={reading.tags}
                status={reading.status}
              >
                <p className="mt-4 border-t border-border-subtle pt-4 text-[0.9375rem] leading-relaxed text-foreground">
                  <span className="font-medium">Relevance: </span>
                  {reading.relevance}
                </p>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
