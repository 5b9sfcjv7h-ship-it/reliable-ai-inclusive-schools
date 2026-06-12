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
    url: "https://udlguidelines.cast.org/",
    startHere: true,
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
    url: "https://nirn.fpg.unc.edu/resource/implementation-research-a-synthesis-of-the-literature/",
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
    url: "https://doi.org/10.1111/j.1467-9620.2006.00684.x",
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
    url: "https://hippasus.com/rrpweblog/archives/2014/06/29/LearningTechnologySAMRModel.pdf",
    linkLabel: "View guide",
    tags: ["SAMR", "technology integration", "task design"],
    status: "developing",
    visibility: "public-safe",
  },
  {
    slug: "keys-harris-samr-ai-matrix",
    title: "A Practical SAMR + AI Framework for Instructional Design",
    authors: "Keys-Harris, A.",
    year: "2026",
    type: "professional article",
    summary:
      "Proposes a SAMR + AI Matrix that combines SAMR, Bloom's Taxonomy, and generative AI functionality to help educators deliberately redesign learning tasks for the presence of AI.",
    relevance:
      "Useful for task redesign and for keeping cognitive demand explicit when AI enters a task. It is a higher education instructional design source, so it needs adaptation for inclusive, teacher-facing school workflows, and it is not evidence that AI improves learning outcomes.",
    url: "https://er.educause.edu/articles/2026/4/a-practical-samr--ai-framework-for-instructional-design",
    linkLabel: "Read article",
    tags: ["instructional design", "SAMR", "task design", "Instructional Design and AI Integration"],
    status: "draft",
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
    url: "https://doi.org/10.1145/3313831.3376727",
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
    url: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research",
    tags: ["policy", "governance", "privacy", "Governance and Responsible Implementation"],
    status: "draft",
    visibility: "public-safe",
  },
  {
    slug: "australian-framework-genai-schools",
    title: "Australian Framework for Generative Artificial Intelligence (AI) in Schools",
    authors: "Australian Government Department of Education / Education Ministers",
    year: "2023",
    type: "policy document",
    summary:
      "The national framework setting out principles, guardrails, and expectations for the use of generative AI in Australian schools.",
    relevance:
      "The primary Australian policy foundation for this hub. Used to check that workflows and governance routines align with national school-sector expectations.",
    url: "https://www.education.gov.au/schooling/resources/australian-framework-generative-artificial-intelligence-ai-schools",
    startHere: true,
    tags: ["policy", "governance", "Australia", "Governance and Responsible Implementation"],
    status: "integrated",
    visibility: "public-safe",
  },
  {
    slug: "us-ed-ai-future-teaching-learning",
    title: "Artificial Intelligence and the Future of Teaching and Learning: Insights and Recommendations",
    authors: "U.S. Department of Education, Office of Educational Technology",
    year: "2023",
    type: "report",
    summary:
      "A government report on the role of AI in education, with recommendations on human oversight, educator roles, and responsible implementation.",
    relevance:
      "Informs the emphasis on human oversight and the educator's role as the point of professional judgement in every workflow.",
    url: "https://www.ed.gov/sites/ed/files/documents/ai-report/ai-report.pdf",
    tags: ["policy", "human oversight", "implementation", "Governance and Responsible Implementation"],
    status: "draft",
    visibility: "public-safe",
  },
  {
    slug: "uk-dfe-genai-education",
    title: "Generative Artificial Intelligence (AI) in Education",
    authors: "UK Department for Education",
    year: "2023",
    type: "policy document",
    summary:
      "UK government policy guidance on generative AI use in schools, covering acceptable use, safeguarding, and data protection.",
    relevance:
      "Provides a comparative policy context for school-sector AI guidance and informs the privacy and risk-checking workflow.",
    url: "https://www.gov.uk/government/publications/generative-artificial-intelligence-in-education",
    tags: ["policy", "governance", "privacy", "Governance and Responsible Implementation"],
    status: "draft",
    visibility: "public-safe",
  },
  {
    slug: "ec-ethical-guidelines-ai-educators",
    title: "Ethical Guidelines on the Use of Artificial Intelligence and Data in Teaching and Learning for Educators",
    authors: "European Commission",
    year: "2022",
    type: "policy document",
    summary:
      "Guidance for educators on the ethical use of AI and data, covering transparency, accountability, and decision-making.",
    relevance:
      "Informs the professional judgement safeguards in the Governed Teacher Workflows framework, particularly around transparency and accountability.",
    url: "https://op.europa.eu/en/publication-detail/-/publication/d81a0d54-5348-11ed-92ed-01aa75ed71a1/language-en",
    tags: ["ethics", "governance", "professional judgement", "Governance and Responsible Implementation"],
    status: "draft",
    visibility: "public-safe",
  },
  {
    slug: "nist-ai-rmf-genai-profile",
    title: "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile",
    authors: "NIST, U.S. Department of Commerce",
    year: "2024",
    type: "framework guide",
    summary:
      "A technical risk-management framework for generative AI, covering risk mapping, testing, monitoring, and incident processes.",
    relevance:
      "Informs the use-case tiering and quality assurance rubric in the Governed Teacher Workflows framework.",
    url: "https://doi.org/10.6028/NIST.AI.600-1",
    tags: ["risk management", "quality assurance", "governance", "Governance and Responsible Implementation"],
    status: "draft",
    visibility: "public-safe",
  },
  {
    slug: "teachai-guidance-toolkit",
    title: "AI Guidance for Schools Toolkit",
    authors: "TeachAI",
    year: "2023",
    type: "framework guide",
    summary:
      "A practical toolkit to help schools develop AI policy, acceptable use guidance, and AI literacy plans.",
    relevance:
      "Used as a practical reference for school policy and acceptable use language when designing governance routines.",
    url: "https://www.teachai.org/toolkit",
    linkLabel: "View toolkit",
    tags: ["school policy", "implementation", "AI literacy", "Governance and Responsible Implementation"],
    status: "draft",
    visibility: "public-safe",
  },
  {
    slug: "eu-ai-act-2024-1689",
    title: "Artificial Intelligence Act, Regulation (EU) 2024/1689",
    authors: "European Union",
    year: "2024",
    type: "policy document",
    summary:
      "EU legislation establishing a risk-based regulatory framework for AI systems, including rights and accountability obligations.",
    relevance:
      "Provides high-level regulatory context for risk-based thinking about AI use, used as background for governance routines rather than a direct school-sector source.",
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
    linkLabel: "View regulation",
    tags: ["regulation", "risk", "accountability", "Governance and Responsible Implementation"],
    status: "draft",
    visibility: "public-safe",
  },
  {
    slug: "coe-ai-human-rights-framework-convention",
    title: "Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law",
    authors: "Council of Europe",
    year: "2024",
    type: "policy document",
    summary:
      "An international treaty framework setting out obligations for AI systems in relation to human rights, democracy, and the rule of law.",
    relevance:
      "Provides background on non-discrimination and public-sector accountability that informs the inclusive education lens applied to AI workflows.",
    url: "https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence",
    linkLabel: "View treaty",
    tags: ["human rights", "governance", "non-discrimination", "Governance and Responsible Implementation"],
    status: "draft",
    visibility: "public-safe",
  },
  {
    slug: "jurenka-responsible-genai-education",
    title: "Towards Responsible Development of Generative AI for Education: An Evaluation-Driven Approach",
    authors: "Jurenka, I. et al.",
    year: "2024",
    type: "journal article",
    summary:
      "A research paper proposing an evaluation-driven approach to developing generative AI tools for education, covering pedagogical quality, developmental appropriateness, and accessibility.",
    relevance:
      "Informs the quality assurance rubric, particularly the criteria used to review AI-generated outputs for pedagogical and developmental appropriateness.",
    url: "https://arxiv.org/abs/2407.12687",
    tags: ["evaluation", "quality assurance", "accessibility", "Governance and Responsible Implementation"],
    status: "draft",
    visibility: "public-safe",
  },
];
