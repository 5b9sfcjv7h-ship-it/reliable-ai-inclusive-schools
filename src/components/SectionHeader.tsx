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
      <h2 className="font-sans text-2xl leading-[1.08] font-medium tracking-normal text-balance text-foreground sm:text-3xl sm:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-foreground-soft">{description}</p>
      )}
    </div>
  );
}
