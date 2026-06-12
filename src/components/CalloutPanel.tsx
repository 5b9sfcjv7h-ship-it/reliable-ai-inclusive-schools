import type { ReactNode } from "react";

const VARIANT_STYLES = {
  default: "border-border-subtle bg-surface",
  accent: "border-accent/30 bg-accent/[0.04]",
  muted: "border-dashed border-border-subtle bg-foreground/[0.02]",
};

export function CalloutPanel({
  title,
  children,
  variant = "default",
}: {
  title: string;
  children: ReactNode;
  variant?: keyof typeof VARIANT_STYLES;
}) {
  return (
    <div className={`rounded-md border p-6 ${VARIANT_STYLES[variant]}`}>
      <p className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
        {title}
      </p>
      <div className="mt-3 text-[0.9375rem] leading-relaxed text-foreground-soft">{children}</div>
    </div>
  );
}
