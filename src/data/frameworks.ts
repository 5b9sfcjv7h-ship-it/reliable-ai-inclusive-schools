import type { Framework } from "@/lib/types";

export const frameworks: Framework[] = [
  {
    slug: "udl",
    name: "Universal Design for Learning",
    shortName: "UDL",
    description:
      "A framework for designing curriculum from the outset to address learner variability through multiple means of engagement, representation, and action and expression.",
    relevance:
      "Used as the primary inclusion lens: any AI-supported adaptation is checked against whether it removes a barrier for a real range of learners, not just one profile.",
    tags: ["inclusion", "curriculum design", "accessibility"],
    status: "integrated",
  },
  {
    slug: "implementation-science",
    name: "Implementation Science",
    shortName: "Implementation Science",
    description:
      "The study of methods that promote the systematic uptake of practices into routine settings, including stages of implementation and implementation drivers.",
    relevance:
      "Provides the structure for moving from individual teacher experimentation to school-wide, sustained, and supported AI-assisted practice.",
    tags: ["implementation", "fidelity", "school systems"],
    status: "integrated",
  },
  {
    slug: "tpack",
    name: "Technological Pedagogical Content Knowledge",
    shortName: "TPACK",
    description:
      "A model describing the interplay between technology, pedagogy, and content knowledge, and the specialised knowledge required to integrate them effectively.",
    relevance:
      "Helps evaluate whether an AI workflow strengthens the connection between subject content and pedagogy, rather than treating AI as a generic add-on.",
    tags: ["teacher knowledge", "technology integration", "pedagogy"],
    status: "developing",
  },
  {
    slug: "samr",
    name: "Substitution, Augmentation, Modification, Redefinition (SAMR + AI)",
    shortName: "SAMR + AI",
    description:
      "A model for classifying how far a technology changes a learning task, from direct substitution through to redefinition. Extended for generative AI, it is used to assess how AI changes both the task and the cognitive work the task demands.",
    relevance:
      "Used as an instructional design lens, not a governance framework or evidence of learning impact. In this hub, each SAMR level triggers further questions before a workflow is adopted: quality assurance, accessibility, privacy, curriculum fit, and professional judgement.",
    tags: ["technology integration", "task design", "generative AI"],
    status: "developing",
  },
  {
    slug: "ai-literacy",
    name: "AI Literacy",
    shortName: "AI Literacy",
    description:
      "A set of competencies that allow people to critically evaluate AI technologies, communicate and collaborate effectively with them, and use them as tools online, at home, and in the workplace.",
    relevance:
      "Frames the professional learning expectations for staff using AI tools, separating critical evaluation skills from basic operational familiarity.",
    tags: ["AI literacy", "professional development", "critical evaluation"],
    status: "developing",
  },
  {
    slug: "inclusive-education-policy",
    name: "Inclusive Education Policy",
    shortName: "Inclusive Education Policy",
    description:
      "The body of national and institutional policy that establishes obligations and standards for educating students with disability and additional needs in mainstream settings.",
    relevance:
      "Sets the non-negotiable baseline that any AI-supported practice must meet or exceed existing obligations for inclusive provision.",
    tags: ["policy", "inclusion", "compliance"],
    status: "draft",
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    shortName: "Quality Assurance",
    description:
      "Systematic processes for checking that outputs and practices meet defined standards before they are used, including review, verification, and sign-off steps.",
    relevance:
      "Underpins the AI output quality assurance workflow. Every AI-generated artefact passes through a defined human review step before classroom use.",
    tags: ["quality assurance", "verification", "professional judgement"],
    status: "developing",
  },
  {
    slug: "governed-teacher-workflows",
    name: "Governed Teacher Workflows",
    shortName: "Governed Teacher Workflows",
    description:
      "A practical implementation frame for turning responsible AI principles into repeatable, teacher-facing workflows. It combines use-case tiering by risk, workflow design, a quality assurance rubric, governance routines, professional judgement safeguards, and an inclusive education lens.",
    relevance:
      "Acts as the connective layer between high-level responsible AI guidance and day-to-day classroom practice. Every workflow in this hub is built and checked against this frame before it is trialled.",
    tags: ["governance", "implementation", "quality assurance", "inclusion"],
    status: "developing",
  },
  {
    slug: "design-based-research",
    name: "Design-Based Research",
    shortName: "Design-Based Research",
    description:
      "An iterative research methodology that develops solutions to real-world problems in authentic settings through cycles of design, enactment, analysis, and redesign.",
    relevance:
      "Describes the overall research approach of this hub: workflows are drafted, trialled, observed, and revised in cycles rather than fixed in advance.",
    tags: ["methodology", "research design", "iteration"],
    status: "draft",
  },
];
