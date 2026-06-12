import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { SafetyNotice } from "@/components/SafetyNotice";

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="About this research"
        subtitle="This hub documents an ongoing programme of research into reliable, ethical, and inclusive AI-supported practice in schools."
      />

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Purpose" title="Why this hub exists" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            This site makes a research process visible as it develops: the
            problem framing, the literature and frameworks being drawn on,
            the workflows being trialled, and the field notes that inform
            revisions. It is intended to be useful to school leaders and
            teachers weighing up AI adoption, to other researchers working in
            this area, and as a foundation for future advisory and
            professional learning work with schools.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Approach" title="How this research is being conducted" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            The research follows a design-based research approach, working in
            cycles of design, trial, observation, and revision with
            participating schools and staff. It draws on established
            frameworks, including Universal Design for Learning,
            implementation science, TPACK, and SAMR, to keep the work
            grounded in existing evidence about inclusive practice and
            technology adoption, rather than treating AI as a problem schools
            have not faced before in some form.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Status of content" title="How to read this hub" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            Content across this hub is marked with a status,{" "}
            <span className="text-foreground">draft</span>,{" "}
            <span className="text-foreground">developing</span>,{" "}
            <span className="text-foreground">integrated</span>, or{" "}
            <span className="text-foreground">publishable</span>, to indicate
            how settled it is. Draft and developing material reflects active
            thinking and may change significantly as the research progresses.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            eyebrow="Workspace vs. Hub"
            title="A private research workspace, for now"
          />
          <p className="mt-6 text-base leading-relaxed text-muted">
            This site is currently a private research workspace. It exists so
            that the structure of the research, problem framing, literature,
            frameworks, workflows, and field notes, can be drafted, tested,
            and revised in one place as the project develops. Most of what
            appears here is provisional, and some material is recorded only
            for internal use during the pilot.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A future public-facing version of this hub is intended to present
            a curated subset of this work: material marked{" "}
            <span className="text-foreground">integrated</span> or{" "}
            <span className="text-foreground">publishable</span>, rewritten
            for an external audience, with all private and draft content
            removed. Until that version exists, nothing on this site should
            be treated as a finished or institutionally endorsed output.
          </p>
          <div className="mt-10">
            <SafetyNotice />
          </div>
        </div>
      </section>
    </>
  );
}
