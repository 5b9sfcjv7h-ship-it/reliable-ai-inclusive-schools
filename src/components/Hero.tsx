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
    <div className="border-b border-border-subtle py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="mb-4 text-xs font-medium tracking-[0.16em] text-accent uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-sans text-4xl leading-[1.05] font-medium tracking-normal text-balance text-foreground sm:text-5xl sm:leading-[1.02] lg:text-6xl lg:leading-[1]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-soft">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </div>
  );
}
