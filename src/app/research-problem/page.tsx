import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CalloutPanel } from "@/components/CalloutPanel";

export default function ResearchProblemPage() {
  return (
    <>
      <Hero
        eyebrow="Research Problem"
        title="From casual AI use to reliable inclusive practice"
        subtitle="This page sets out the problem this research addresses, the lens used to frame it, and the working definitions that recur across the rest of the hub."
      />

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="01" title="The problem" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            Generative AI tools are already widely used in schools, but mostly
            in an informal, individual, and unreviewed way. Teachers and
            support staff use general-purpose chat tools to draft resources,
            plan lessons, or generate ideas. Most do this without a shared
            workflow, a quality check, or any record of what was produced and
            how it was checked. That is an understandable response to tools
            that are genuinely useful and easy to access. But it leaves
            schools with no consistent basis for judging whether AI-assisted
            work meets professional standards, and no way to account for that
            work if it is ever questioned.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="02" title="Why it matters now" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            The window for shaping how generative AI is used in schools is
            narrow. Practice is forming quickly, often ahead of policy,
            training, or shared standards. Habits formed now will be costly to
            unwind later. If reliable, inclusive workflows are not set out and
            tested while practice is still forming, informal habits will
            harden into default practice. Some of those habits may quietly
            disadvantage students who are already underserved by
            general-purpose tools and resources.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="03" title="Why inclusive education is the right lens" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            Inclusive education sets a demanding test for any new classroom
            technology. Does it work for the full range of learners,
            including students with disability, additional learning needs, or
            complex communication needs? Or only for an assumed "average"
            student? Frameworks such as Universal Design for Learning already
            give schools a vocabulary for evaluating curriculum design on this
            basis. Applying the same lens to AI-supported practice keeps the
            focus on real students and real barriers, not on the novelty of
            the technology.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-10">
          <SectionHeader eyebrow="04" title="Working definitions" />
          <CalloutPanel title="Casual AI use">
            Ad hoc, individual use of general-purpose generative AI tools for
            tasks like planning or drafting, without a shared workflow, review
            step, or record of what was produced.
          </CalloutPanel>
          <CalloutPanel title="Reliable AI-supported inclusive practice" variant="accent">
            The use of generative AI within a defined workflow that includes a
            clear purpose, an inclusion check grounded in frameworks such as
            UDL, a quality assurance step, and professional sign-off before
            any output is used with students.
          </CalloutPanel>
        </div>
      </section>

      <section className="border-b border-border-subtle py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <SectionHeader eyebrow="05" title="Risks" />
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                <li>
                  Inconsistent or unverified AI output being used directly with
                  students.
                </li>
                <li>
                  Adaptations that reduce cognitive demand rather than remove
                  genuine barriers.
                </li>
                <li>
                  Student-, school-, or confidentiality-identifiable
                  information being entered into unapproved tools.
                </li>
                <li>
                  Uneven adoption widening gaps between staff, classes, and
                  schools.
                </li>
              </ul>
            </div>
            <div>
              <SectionHeader eyebrow="06" title="Opportunities" />
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                <li>
                  Reducing the time cost of high-quality differentiation and
                  accessible resource design.
                </li>
                <li>
                  Giving specialist staff a faster starting point for planning
                  tasks such as AAC vocabulary sets.
                </li>
                <li>
                  Building shared, transferable workflows rather than relying
                  on individual expertise.
                </li>
                <li>
                  Strengthening AI literacy and professional judgement across
                  staff teams.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeader eyebrow="07" title="Possible contribution" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            This research aims to produce a small set of tested, documented
            workflows covering curriculum adaptation, AAC vocabulary planning,
            accessible resource review, AI output quality assurance, and
            privacy and risk checking. Each comes with a record of how it was
            developed, what changed through trial and revision, and what it
            took to embed in practice: the time, training, and oversight
            required. For school leaders, that record supports a sound
            implementation decision. What does the workflow cost to run? What
            does it return in staff time and consistency? What governance
            needs to be in place before adoption? For the wider field, it is
            intended as a grounded contribution to the conversation about
            responsible AI adoption in education.
          </p>
        </div>
      </section>
    </>
  );
}
