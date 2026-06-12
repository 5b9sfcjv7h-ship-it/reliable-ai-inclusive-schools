import type { ReactNode } from "react";

export function ResearchLogicDiagram({
  steps,
}: {
  steps: { title: string; description: string; icon?: ReactNode }[];
}) {
  return (
    <ol className="mt-12 flex flex-col sm:flex-row">
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        const node = (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-surface text-accent">
            {step.icon ?? (
              <span className="text-xs font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
          </span>
        );
        return (
          <li
            key={step.title}
            className="flex gap-5 sm:flex-1 sm:flex-col sm:gap-0"
          >
            <div aria-hidden="true" className="flex flex-col items-center sm:hidden">
              {node}
              {!last && <span className="w-px flex-1 bg-accent/25" />}
            </div>

            <div aria-hidden="true" className="hidden sm:flex sm:items-center">
              {node}
              {!last && (
                <span className="flex flex-1 items-center pl-2 pr-3">
                  <span className="h-px flex-1 bg-accent/25" />
                  <svg
                    viewBox="0 0 8 10"
                    className="h-2.5 w-2 shrink-0 text-accent/40"
                    fill="currentColor"
                  >
                    <path d="M0 0l8 5-8 5z" />
                  </svg>
                </span>
              )}
            </div>

            <div className={`pb-10 sm:mt-4 sm:pb-0 ${last ? "" : "sm:pr-8"}`}>
              <p
                aria-hidden="true"
                className="text-[11px] font-medium tracking-[0.16em] text-muted"
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-base font-semibold tracking-[-0.01em] text-foreground">
                {step.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground-soft">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
