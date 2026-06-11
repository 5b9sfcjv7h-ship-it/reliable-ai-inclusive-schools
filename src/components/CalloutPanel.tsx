import type { ReactNode } from "react";

const VARIANT_STYLES = {
  default: "border-border-subtle bg-surface",
  accent: "border-accent/30 bg-accent/[0.04]",
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
    <div className={`rounded-lg border p-6 ${VARIANT_STYLES[variant]}`}>
      <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
        {title}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}
