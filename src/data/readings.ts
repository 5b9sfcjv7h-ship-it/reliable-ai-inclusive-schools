import type { Reading } from "@/lib/types";

export const readings: Reading[] = [
  {
    slug: "udl-guidelines-cast",
    title: "Universal Design for Learning Guidelines, Version 2.2",
    authors: "CAST",
    year: "2018",
    type: "framework guide",
    summary:
      "The core UDL framework: a set of guidelines for designing curriculum that gives all learners equal opportunities to access, engage with, and demonstrate learning.",
    relevance:
      "Provides the inclusive-design vocabulary used throughout this hub to evaluate whether AI-supported adaptations genuinely widen access rather than just add novelty.",
    tags: ["UDL", "inclusion", "curriculum design"],
    status: "integrated",
    visibility: "public-safe",
  },
  {
    slug: "fixsen-implementation-research",
    title: "Implementation Research: A Synthesis of the Literature",
    authors: "Fixsen, Naoom, Blase, Friedman & Wallace",
    year: "2005",
    type: "report",
    summary:
      "Foundational synthesis describing the stages and drivers of implementation science, including exploration, installation, initial implementation, and full implementation.",
    relevance:
      "Frames why a single successful AI demo lesson does not equal reliable practice. Adoption requires staged implementation support, not just access to a tool.",
    tags: ["implementation science", "fidelity", "school systems"],
    status: "integrated",
    visibility: "public-safe",
  },
  {
    slug: "mishra-koehler-tpack",
    title: "Technological Pedagogical Content Knowledge: A Framework for Teacher Knowledge",
    authors: "Mishra & Koehler",
    year: "2006",
    type: "journal article",
    summary:
      "Introduces TPACK, describing the dynamic interaction between technology, pedagogy, and content knowledge required for effective technology integration.",
    relevance:
      "Used to assess whether AI workflows are being integrated as pedagogically sound practice, or bolted on as a separate technical layer.",
    tags: ["TPACK", "teacher knowledge", "technology integration"],
    status: "integrated",
    visibility: "public-safe",
  },
  {
    slug: "puentedura-samr",
    title: "SAMR: A Practical Guide for Technology Integration",
    authors: "Puentedura, R.",
    year: "2014",
    type: "framework guide",
    summary:
      "Outlines the Substitution, Augmentation, Modification, Redefinition model for evaluating the depth of technology-enabled change to a learning task.",
    relevance:
      "Offers a shared language for distinguishing AI use that merely substitutes for existing tasks from AI use that meaningfully redefines them.",
    tags: ["SAMR", "technology integration", "task design"],
    status: "developing",
    visibility: "public-safe",
  },
  {
    slug: "long-magerko-ai-literacy",
    title: "What is AI Literacy? Competencies and Design Considerations",
    authors: "Long & Magerko",
    year: "2020",
    type: "journal article",
    summary:
      "Defines AI literacy as a set of competencies enabling people to critically evaluate, collaborate with, and communicate about AI systems.",
    relevance:
      "Anchors the AI literacy expectations embedded in the workflow lab and glossary, separating critical understanding from tool fluency.",
    tags: ["AI literacy", "critical evaluation", "professional development"],
    status: "developing",
    visibility: "public-safe",
  },
  {
    slug: "unesco-ai-education-guidance",
    title: "Guidance for Generative AI in Education and Research",
    authors: "UNESCO",
    year: "2023",
    type: "policy document",
    summary:
      "International policy guidance on the risks, opportunities, and governance considerations of generative AI use in education systems.",
    relevance:
      "Provides external policy grounding for the governance gap identified on the homepage, and informs the privacy and risk-checking workflow.",
    tags: ["policy", "governance", "privacy"],
    status: "draft",
    visibility: "public-safe",
  },
];
