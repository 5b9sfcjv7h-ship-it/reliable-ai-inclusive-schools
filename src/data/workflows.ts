import type { Workflow } from "@/lib/types";

export const workflows: Workflow[] = [
  {
    slug: "curriculum-adaptation",
    title: "Curriculum Adaptation Workflow",
    purpose:
      "Use AI to help generate differentiated versions of an existing lesson or task while keeping the learning intent and standards intact.",
    audience: "Classroom teachers and learning support staff",
    steps: [
      {
        title: "Define the unchanged learning intent",
        detail:
          "Write down the specific learning outcome and success criteria before drafting any prompt, so adaptations can be checked against the original intent.",
      },
      {
        title: "Identify the barrier, not just the student",
        detail:
          "Describe the specific barrier (e.g. reading load, working memory demand, vocabulary) using a UDL lens, rather than a label or diagnosis.",
      },
      {
        title: "Draft adaptation options with AI",
        detail:
          "Prompt for two or three alternative versions of the task that address the named barrier while preserving the learning intent.",
      },
      {
        title: "Review against the success criteria",
        detail:
          "Check each option against the original success criteria. Reject any version that quietly lowers the cognitive demand of the task.",
      },
      {
        title: "Adjust and finalise with professional judgement",
        detail:
          "Edit the chosen option using subject and student knowledge the AI does not have, then finalise for use.",
      },
    ],
    qualityChecks: [
      "Learning intent unchanged from the original task",
      "No student-identifiable information used in any prompt",
      "Adaptation reviewed by the responsible teacher before use",
    ],
    tags: ["curriculum", "differentiation", "UDL"],
    status: "developing",
    visibility: "public-safe",
  },
  {
    slug: "aac-vocabulary-planning",
    title: "AAC Vocabulary Planning Workflow",
    purpose:
      "Use AI as a brainstorming partner to plan core and fringe vocabulary sets for augmentative and alternative communication (AAC) users, prior to specialist review.",
    audience: "Speech and language professionals, learning support staff",
    steps: [
      {
        title: "Specify the communication context",
        detail:
          "Describe the activity, setting, and communicative purposes involved (e.g. requesting, commenting, social closing) without naming any individual.",
      },
      {
        title: "Generate candidate vocabulary lists",
        detail:
          "Ask AI to propose core vocabulary and topic-specific fringe vocabulary relevant to the described context.",
      },
      {
        title: "Cross-check against existing core word lists",
        detail:
          "Compare AI suggestions against the school's established core vocabulary list to avoid introducing inconsistent or duplicate symbols.",
      },
      {
        title: "Specialist review and prioritisation",
        detail:
          "A speech and language professional reviews, prioritises, and adapts the list based on the individual's profile and goals.",
      },
      {
        title: "Trial and gather feedback",
        detail:
          "Introduce prioritised vocabulary in context and record observations for the next planning cycle.",
      },
    ],
    qualityChecks: [
      "No individual student details entered into any AI tool",
      "Final vocabulary set signed off by a qualified specialist",
      "Consistency checked against existing AAC system in use",
    ],
    tags: ["AAC", "communication", "specialist support"],
    status: "draft",
    visibility: "public-safe",
  },
  {
    slug: "accessible-resource-review",
    title: "Accessible Resource Review Workflow",
    purpose:
      "Use AI to support a structured accessibility review of an existing teaching resource before it is shared with students.",
    audience: "Classroom teachers, resource developers",
    steps: [
      {
        title: "Run an initial accessibility scan",
        detail:
          "Ask AI to review the resource against a defined accessibility checklist (e.g. reading level, contrast, alt text, structure).",
      },
      {
        title: "Triage the suggestions",
        detail:
          "Sort AI-generated suggestions into 'apply directly', 'needs human judgement', and 'not applicable to this context'.",
      },
      {
        title: "Apply low-risk fixes",
        detail:
          "Make straightforward formatting and language fixes that do not change meaning or assessment intent.",
      },
      {
        title: "Escalate higher-impact changes",
        detail:
          "Route suggestions that affect content, sequencing, or assessment to the relevant subject specialist for review.",
      },
      {
        title: "Record the review",
        detail:
          "Note what was changed and why, so the resource has a simple accessibility review trail for future reuse.",
      },
    ],
    qualityChecks: [
      "Checklist used is based on an established accessibility standard",
      "Meaning and assessment intent preserved after edits",
      "Review trail recorded for future reuse",
    ],
    tags: ["accessibility", "resource design", "review"],
    status: "developing",
    visibility: "public-safe",
  },
  {
    slug: "ai-output-quality-assurance",
    title: "AI Output Quality Assurance Workflow",
    purpose:
      "Apply a consistent quality assurance check to any AI-generated content before it is used with students or shared with colleagues.",
    audience: "All staff using generative AI tools",
    steps: [
      {
        title: "Check factual accuracy",
        detail:
          "Verify any factual claims, citations, names, or figures against a trusted source. Do not assume AI output is correct by default.",
      },
      {
        title: "Check curriculum alignment",
        detail:
          "Confirm the output matches the relevant curriculum, year level, and assessment requirements.",
      },
      {
        title: "Check tone and framing",
        detail:
          "Review language for bias, stereotyping, or framing that may be exclusionary, and adjust as needed.",
      },
      {
        title: "Check originality and attribution",
        detail:
          "Ensure any reused material is appropriately attributed and that AI-generated content is not presented as a verified primary source.",
      },
      {
        title: "Sign off and log",
        detail:
          "Record that the output passed review, by whom, and on what date, before it is used.",
      },
    ],
    qualityChecks: [
      "Factual claims independently verified",
      "Curriculum and year-level alignment confirmed",
      "Sign-off recorded before use",
    ],
    tags: ["quality assurance", "verification", "professional judgement"],
    status: "developing",
    visibility: "public-safe",
  },
  {
    slug: "privacy-and-risk-checking",
    title: "Privacy and Risk Checking Workflow",
    purpose:
      "Apply a consistent privacy and risk check to any input before it is entered into a generative AI tool.",
    audience: "All staff using generative AI tools",
    steps: [
      {
        title: "Screen for student-identifiable information",
        detail:
          "Check the prompt for names, photos, work samples, or any combination of details that could identify a specific student.",
      },
      {
        title: "Screen for school-identifiable information",
        detail:
          "Check for school names, locations, or internal documents that could identify the school or its policies externally.",
      },
      {
        title: "Screen for confidential information",
        detail:
          "Check for information covered by confidentiality obligations, including assessment data, behaviour records, or staff information.",
      },
      {
        title: "De-identify or generalise",
        detail:
          "Where the underlying need is valid, rewrite the prompt using de-identified or generalised descriptions instead of specific details.",
      },
      {
        title: "Confirm tool and data handling",
        detail:
          "Confirm the AI tool being used is approved by the school and understand how submitted data is stored and used.",
      },
    ],
    qualityChecks: [
      "No student-, school-, or confidentiality-identifiable information entered",
      "Approved tool used in line with school data handling guidance",
      "De-identified version used wherever specific detail is not essential",
    ],
    tags: ["privacy", "risk", "governance"],
    status: "integrated",
    visibility: "publishable",
  },
];
