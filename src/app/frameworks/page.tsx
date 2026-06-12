import { Hero } from "@/components/Hero";
import { ContentCard } from "@/components/ContentCard";
import { frameworks } from "@/data/frameworks";

export default function FrameworksPage() {
  return (
    <>
      <Hero
        eyebrow="Frameworks"
        title="The frameworks used to evaluate AI-supported practice"
        subtitle="Each framework offers a different lens (pedagogical, technical, systemic, or methodological) for judging whether an AI-supported workflow is a genuine improvement."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2">
          {frameworks.map((framework) => (
            <ContentCard
              key={framework.slug}
              title={framework.name}
              meta={framework.shortName}
              description={framework.description}
              tags={framework.tags}
              status={framework.status}
            >
              <p className="mt-4 border-t border-border-subtle pt-4 text-sm leading-relaxed text-foreground">
                <span className="font-medium">Used here: </span>
                {framework.relevance}
              </p>
            </ContentCard>
          ))}
        </div>
      </section>
    </>
  );
}
