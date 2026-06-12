import type { ReactNode } from "react";

export function PlainTerms({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border border-accent/30 bg-accent/[0.04] p-6">
      <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
        In plain terms
      </p>
      <div className="mt-2.5 text-[1.0625rem] leading-[1.7] text-foreground">
        {children}
      </div>
    </div>
  );
}
