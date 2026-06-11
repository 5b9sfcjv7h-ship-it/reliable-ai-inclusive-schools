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
    <article className="rounded-lg border border-border-subtle bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          {meta && (
            <p className="mb-1 text-xs font-medium tracking-[0.2em] text-muted uppercase">
              {meta}
            </p>
          )}
          <h3 className="font-serif text-xl text-foreground sm:text-2xl">
            {title}
          </h3>
        </div>
        {status && <StatusBadge status={status} />}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
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
