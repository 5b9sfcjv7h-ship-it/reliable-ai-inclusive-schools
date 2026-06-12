import { Hero } from "@/components/Hero";
import { SafetyNotice } from "@/components/SafetyNotice";

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
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-base leading-relaxed text-foreground">
            Field notes are currently under review.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            This section will publish selected, de-identified observations
            from early workflow trials and implementation discussions. Each
            entry will be reviewed for privacy, confidentiality, and public
            relevance before release.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Target release window: Q4 2026.
          </p>
        </div>
      </section>
    </>
  );
}
