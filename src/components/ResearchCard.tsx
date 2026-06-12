import Link from "next/link";
import type { ReactNode } from "react";

export function ResearchCard({
  title,
  description,
  href,
  meta,
  icon,
}: {
  title: string;
  description: string;
  href?: string;
  meta?: string;
  icon?: ReactNode;
}) {
  const content = (
    <div className="flex h-full flex-col rounded-md border border-border-subtle bg-surface p-6 transition-colors group-hover:border-accent/50">
      {icon && <span className="mb-4 text-accent">{icon}</span>}
      {meta && (
        <p className="mb-2 text-xs font-medium tracking-[0.16em] text-muted uppercase">
          {meta}
        </p>
      )}
      <h3 className="text-base font-semibold tracking-[-0.01em] text-foreground group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-soft">{description}</p>
    </div>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="group block h-full rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {content}
    </Link>
  );
}
