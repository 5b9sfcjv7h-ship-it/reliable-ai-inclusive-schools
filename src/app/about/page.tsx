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
          <SectionHeader eyebrow="POSITIONING THIS WORK" title="Where this work comes from" />
          <p className="mt-6 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            This hub has been developed by an educator working in the
            Queensland special education context.
          </p>
          <p className="mt-4 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            It began as a practical exploration of how AI can support
            inclusive education, teacher workflow, curriculum access, and
            accessible design. It also reflects a broader shift: increasingly
            capable AI tools are changing what individual practitioners can
            research, build, test, and publish without specialist technical
            teams.
          </p>
          <p className="mt-4 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            The site was developed in approximately three days using a
            human-AI workflow. ChatGPT supported research synthesis, planning,
            writing, and critique. Claude Code, using Fable 5, supported
            development and coding alongside VS Code. Much of the process
            involved describing problems clearly, using screenshots as context,
            asking targeted questions, and iterating quickly.
          </p>
          <p className="mt-4 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            That process is relevant to the work itself. It demonstrates how
            AI can expand the practical capability of educators when used with
            judgement, curiosity, and clear intent. The central question is
            how schools move from informal AI adoption to reliable
            AI-supported inclusive practice, where tools are used with clear
            purpose, appropriate safeguards, and a focus on improving access
            for students with disability and complex learning needs.
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

      <section id="inclusive-design" className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader
            eyebrow="Inclusive design"
            title="How this hub approaches accessibility"
          />
          <p className="mt-6 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            This hub is a working research site. It aims to model the
            inclusive design principles it argues for: clear structure and
            navigation, readable typography, sufficient contrast,
            keyboard-accessible controls, plain-language summaries on key
            pages, and optional reading supports in the site header. No
            student-identifiable or school-identifiable information appears
            anywhere on the site.
          </p>
          <p className="mt-4 text-[1.0625rem] leading-[1.8] text-foreground-soft">
            Universal Design for Learning informs the site itself, not just
            the research. Information is presented in more than one way,
            through text, structure, and diagrams. Reading supports are
            optional rather than imposed. Pages state their purpose up
            front. The hub has not yet been formally audited against WCAG,
            and accessibility will continue to be reviewed and improved as
            the site develops.
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
