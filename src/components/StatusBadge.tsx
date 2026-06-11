import type { Status } from "@/lib/types";

const STATUS_LABELS: Record<Status, string> = {
  draft: "Draft",
  developing: "Developing",
  integrated: "Integrated",
  publishable: "Publishable",
};

const STATUS_STYLES: Record<Status, string> = {
  draft: "border-border-subtle text-muted",
  developing: "border-accent/40 text-accent",
  integrated: "border-accent text-accent bg-accent/5",
  publishable: "border-accent bg-accent text-surface",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
