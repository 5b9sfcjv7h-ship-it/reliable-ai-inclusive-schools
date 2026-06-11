import type { ReactNode } from "react";

export function Hero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-border-subtle py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl leading-[1.1] text-foreground sm:text-6xl sm:max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}
