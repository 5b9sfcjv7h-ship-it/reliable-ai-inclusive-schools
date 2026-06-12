import { Hero } from "@/components/Hero";
import { TagPill } from "@/components/TagPill";
import { glossaryTerms } from "@/data/glossary";

export default function GlossaryPage() {
  return (
    <>
      <Hero
        eyebrow="Glossary"
        title="Plain-English definitions"
        subtitle="The frameworks, terms, and concepts used across this hub, defined in plain English for readers from any background."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl divide-y divide-border-subtle px-6">
          {glossaryTerms.map((item) => (
            <div key={item.term} className="py-6 first:pt-0">
              <h3 className="text-base font-semibold tracking-[-0.01em] text-foreground">{item.term}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-foreground-soft">{item.definition}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
