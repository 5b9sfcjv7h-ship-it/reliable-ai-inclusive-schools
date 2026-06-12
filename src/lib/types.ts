export type Status = "draft" | "developing" | "integrated" | "publishable";

export type Visibility = "private" | "public-safe" | "publishable";

export interface Reading {
  slug: string;
  title: string;
  authors: string;
  year: string;
  type: "journal article" | "book" | "report" | "policy document" | "framework guide";
  summary: string;
  relevance: string;
  url?: string;
  linkLabel?: string;
  tags: string[];
  status: Status;
  visibility: Visibility;
}

export interface Framework {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  relevance: string;
  tags: string[];
  status: Status;
}

export interface WorkflowStep {
  title: string;
  detail: string;
}

export interface Workflow {
  slug: string;
  title: string;
  purpose: string;
  audience: string;
  steps: WorkflowStep[];
  qualityChecks: string[];
  tags: string[];
  status: Status;
  visibility: Visibility;
}

export interface FieldNote {
  slug: string;
  title: string;
  date: string;
  context: string;
  observation: string;
  implication: string;
  tags: string[];
  status: Status;
  visibility: Visibility;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  tags: string[];
}
