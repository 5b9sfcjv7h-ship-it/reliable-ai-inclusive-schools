export function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-foreground/[0.04] px-2.5 py-0.5 text-xs text-muted">
      {label}
    </span>
  );
}
