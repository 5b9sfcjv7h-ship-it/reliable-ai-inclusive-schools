import { Hero } from "@/components/Hero";
import { ContentCard } from "@/components/ContentCard";
import { PlainTerms } from "@/components/PlainTerms";
import { frameworks } from "@/data/frameworks";

export default function FrameworksPage() {
  return (
    <>
      <Hero
        eyebrow="Frameworks"
        title="The frameworks used to evaluate AI-supported practice"
        subtitle="Each framework offers a different lens (pedagogical, technical, systemic, or methodological) for judging whether an AI-supported workflow is a genuine improvement."
      />

      <section className="border-b border-border-subtle py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <PlainTerms>
            <p>
              These are the established models used to judge whether an
              AI-supported practice is genuinely better. Each one asks a
              different question about inclusion, implementation, or
              quality. None of them is proof that AI improves learning; they
              are the tests a workflow has to pass.
            </p>
          </PlainTerms>
        </div>
      </section>

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
              <p className="mt-4 border-t border-border-subtle pt-4 text-[0.9375rem] leading-relaxed text-foreground">
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
