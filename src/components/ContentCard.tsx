import type { ReactNode } from "react";
import type { Status } from "@/lib/types";
import { StatusBadge } from "@/components/StatusBadge";
import { TagPill } from "@/components/TagPill";

export function ContentCard({
  title,
  meta,
  description,
  tags,
  status,
  children,
}: {
  title: string;
  meta?: string;
  description: string;
  tags?: string[];
  status?: Status;
  children?: ReactNode;
}) {
  return (
    <article className="rounded-md border border-border-subtle bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          {meta && (
            <p className="mb-1.5 text-xs font-medium tracking-[0.16em] text-muted uppercase">
              {meta}
            </p>
          )}
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
            {title}
          </h3>
        </div>
        {status && <StatusBadge status={status} />}
      </div>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-foreground-soft">{description}</p>
      {children}
      {tags && tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
