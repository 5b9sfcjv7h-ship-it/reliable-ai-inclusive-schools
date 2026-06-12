import Link from "next/link";

export function ResearchCard({
  title,
  description,
  href,
  meta,
}: {
  title: string;
  description: string;
  href?: string;
  meta?: string;
}) {
  const content = (
    <div className="flex h-full flex-col rounded-lg border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/50">
      {meta && (
        <p className="mb-2 text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {meta}
        </p>
      )}
      <h3 className="font-serif text-xl text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      {href && (
        <span className="mt-4 text-sm font-medium text-accent">
          View &rarr;
        </span>
      )}
    </div>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="block h-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {content}
    </Link>
  );
}
