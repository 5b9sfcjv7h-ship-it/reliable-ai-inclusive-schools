import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { SafetyNotice } from "@/components/SafetyNotice";
import { CalloutPanel } from "@/components/CalloutPanel";

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="About this research"
        subtitle="This hub tracks an ongoing programme of work on reliable, inclusive AI-supported practice in schools."
      />

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Purpose" title="Why this hub exists" />
          <p className="mt-6 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            This site makes the research process visible as it develops. That
            includes the problem framing, the literature and frameworks in
            use, the workflows being tested, and the field notes that inform
            revisions. It is meant to be useful to school leaders and teachers
            weighing up AI adoption, to other researchers in this area, and as
            a foundation for future advisory and professional learning work
            with schools.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Provenance" title="Who is behind this work" />
          <p className="mt-6 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            This hub is developed and maintained by a Queensland-based special
            education teacher and curriculum leader, as part of a developing
            PhD pathway. The work is grounded in day-to-day practice:
            designing curriculum, adjustments, and communication supports for
            students with disability and complex learning needs, and leading
            staff through the practical questions AI raises in that work.
          </p>
          <p className="mt-4 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            The focus is deliberately narrow: teacher-facing AI workflows for
            inclusive practice, and the governance and quality assurance that
            make them reliable. Claims made here are limited to what that
            experience and the cited literature can support.
          </p>
          <div className="mt-8">
            <CalloutPanel title="What this site is not">
              <p>
                This is a developing research and advisory hub. It is not
                official advice from any government, department, or school,
                and it does not speak for any employer. No
                student-identifiable or school-identifiable information
                appears here.
              </p>
            </CalloutPanel>
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Approach" title="How this research is being conducted" />
          <p className="mt-6 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            The work follows a design-based research approach: cycles of
            design, trial, observation, and revision with participating
            schools and staff. It draws on established frameworks, including
            Universal Design for Learning, implementation science, TPACK, and
            SAMR. These keep the work grounded in existing evidence about
            inclusive practice and technology adoption, rather than treating
            AI as an entirely new problem for schools.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="Status of content" title="How to read this hub" />
          <p className="mt-6 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            Content across this hub is marked with a status:{" "}
            <span className="text-foreground">draft</span>,{" "}
            <span className="text-foreground">developing</span>,{" "}
            <span className="text-foreground">integrated</span>, or{" "}
            <span className="text-foreground">publishable</span>. This shows
            how settled it is. Draft and developing material reflects active
            thinking and may change as the work progresses.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            eyebrow="Workspace vs. Hub"
            title="A private research workspace, for now"
          />
          <p className="mt-6 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            This site is currently a private research workspace. It exists so
            the structure of the work, problem framing, literature,
            frameworks, workflows, and field notes, can be drafted, tested,
            and revised in one place as the project develops. Most of what
            appears here is provisional. Some material is recorded only for
            internal use during the pilot.
          </p>
          <p className="mt-4 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            A future public-facing version of this hub will present a curated
            subset of this work: material marked{" "}
            <span className="text-foreground">integrated</span> or{" "}
            <span className="text-foreground">publishable</span>, rewritten
            for an external audience, with all private and draft content
            removed. Until that version exists, nothing on this site should be
            treated as finished or institutionally endorsed.
          </p>
          <div className="mt-10">
            <SafetyNotice />
          </div>
        </div>
      </section>
    </>
  );
}
