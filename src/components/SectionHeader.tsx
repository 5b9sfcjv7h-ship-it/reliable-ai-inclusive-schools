export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-medium tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-2xl leading-snug font-medium tracking-[-0.01em] text-balance text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-foreground-soft">{description}</p>
      )}
    </div>
  );
}
