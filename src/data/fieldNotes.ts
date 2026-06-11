import type { FieldNote } from "@/lib/types";

export const fieldNotes: FieldNote[] = [
  {
    slug: "casual-use-baseline",
    title: "Mapping the current baseline of casual AI use",
    date: "2026-02",
    context:
      "Early scoping conversations with staff about how generative AI tools are currently being used for planning and resource creation.",
    observation:
      "Use is widespread but informal: individual staff use general-purpose chat tools for planning support, with no shared workflow, review step, or record of what was generated or how it was checked.",
    implication:
      "Any structured workflow needs to feel like a lightweight upgrade to existing habits, not an entirely new system, or adoption will be limited to a small group of early adopters.",
    tags: ["adoption", "baseline", "casual use"],
    status: "developing",
    visibility: "public-safe",
  },
  {
    slug: "differentiation-time-pressure",
    title: "Differentiation work is squeezed by planning time",
    date: "2026-03",
    context:
      "Discussion with classroom teachers about where AI-assisted differentiation could realistically fit into a working week.",
    observation:
      "Teachers consistently describe differentiation as the first task to be cut when planning time is short, even when they recognise its importance for inclusion.",
    implication:
      "A curriculum adaptation workflow needs to reduce time-to-first-draft significantly, while keeping a clear point for professional review, or it will be abandoned under time pressure.",
    tags: ["differentiation", "workload", "curriculum"],
    status: "developing",
    visibility: "public-safe",
  },
  {
    slug: "privacy-awareness-gap",
    title: "Variable awareness of data and privacy implications",
    date: "2026-03",
    context:
      "Informal conversations about what information staff currently include when using AI tools for planning.",
    observation:
      "Awareness of privacy risk varies significantly: some staff are highly cautious, while others routinely paste detailed student descriptions into general-purpose tools without considering data handling.",
    implication:
      "A privacy and risk-checking workflow needs to be introduced as a default first step in any AI-related professional learning, not as an optional add-on for interested staff.",
    tags: ["privacy", "governance", "professional learning"],
    status: "draft",
    visibility: "private",
  },
  {
    slug: "trust-and-verification",
    title: "Trust in AI output is inconsistent across staff",
    date: "2026-04",
    context:
      "Observations from early trials of AI-assisted resource review with a small group of volunteer staff.",
    observation:
      "Some staff treat AI output as authoritative and use it with minimal changes, while others over-correct and discard genuinely useful suggestions out of general distrust.",
    implication:
      "A shared quality assurance workflow can help calibrate trust by giving all staff the same structured way to check, rather than relying on individual instinct in either direction.",
    tags: ["quality assurance", "trust", "professional judgement"],
    status: "draft",
    visibility: "private",
  },
];
