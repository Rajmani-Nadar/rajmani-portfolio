import { cn } from '@/lib/cn';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'glow';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]',
        variant === 'glow'
          ? 'border-accent/40 bg-accent/10 text-accent shadow-glow'
          : 'border-white/10 bg-white/5 text-muted',
        className
      )}
    >
      {children}
    </span>
  );
}
