import { Hero } from "@/components/Hero";
import { ContentCard } from "@/components/ContentCard";
import { readings } from "@/data/readings";

export default function ReadingLibraryPage() {
  return (
    <>
      <Hero
        eyebrow="Reading Library"
        title="The literature grounding this research"
        subtitle="Key journal articles, frameworks, reports, and policy guidance, with notes on how each connects to the research question."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-6">
          {readings.map((reading) => (
            <ContentCard
              key={reading.slug}
              title={reading.title}
              meta={`${reading.authors} · ${reading.year} · ${reading.type}`}
              description={reading.summary}
              tags={reading.tags}
              status={reading.status}
            >
              <p className="mt-4 border-t border-border-subtle pt-4 text-sm leading-relaxed text-foreground">
                <span className="font-medium">Relevance: </span>
                {reading.relevance}
              </p>
            </ContentCard>
          ))}
        </div>
      </section>
    </>
  );
}
