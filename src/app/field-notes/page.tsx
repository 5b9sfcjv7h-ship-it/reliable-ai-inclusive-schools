import { Hero } from "@/components/Hero";
import { ContentCard } from "@/components/ContentCard";
import { SafetyNotice } from "@/components/SafetyNotice";
import { fieldNotes } from "@/data/fieldNotes";

export default function FieldNotesPage() {
  return (
    <>
      <Hero
        eyebrow="Field Notes"
        title="Observations from early conversations and trials"
        subtitle="De-identified notes recording what was observed, the context it arose in, and what it implies for the workflows in this hub."
      />

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SafetyNotice />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-6">
          {fieldNotes
            .filter((note) => note.visibility === "public-safe")
            .map((note) => (
            <ContentCard
              key={note.slug}
              title={note.title}
              meta={note.date}
              description={note.context}
              tags={note.tags}
              status={note.status}
            >
              <div className="mt-4 space-y-3 border-t border-border-subtle pt-4 text-sm leading-relaxed">
                <p className="text-foreground">
                  <span className="font-medium">Observation: </span>
                  {note.observation}
                </p>
                <p className="text-foreground">
                  <span className="font-medium">Implication: </span>
                  {note.implication}
                </p>
              </div>
            </ContentCard>
            ))}
        </div>
      </section>
    </>
  );
}
