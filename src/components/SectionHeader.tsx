interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-6 space-y-2">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="text-muted max-w-2xl text-sm sm:text-base">{subtitle}</p>}
    </div>
  );
}
