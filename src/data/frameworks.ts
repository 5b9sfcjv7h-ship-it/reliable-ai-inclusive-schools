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
    name: "Substitution, Augmentation, Modification, Redefinition",
    shortName: "SAMR",
    description:
      "A model for classifying the level of change a technology brings to a learning task, ranging from direct substitution to redefinition of the task itself.",
    relevance:
      "Applied to workflow design to be explicit about whether an AI-supported task is a like-for-like substitution or a genuine redesign of practice.",
    tags: ["technology integration", "task design"],
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
      "Underpins the AI output quality assurance workflow — every AI-generated artefact passes through a defined human review step before classroom use.",
    tags: ["quality assurance", "verification", "professional judgement"],
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
