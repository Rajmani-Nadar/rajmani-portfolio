import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition shadow-card',
  {
    variants: {
      variant: {
        primary:
          'border border-border/15 bg-surface/80 text-foreground hover:border-border/30 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/30',
        ghost:
          'border border-border/15 bg-surface/80 text-foreground hover:border-border/30 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/30'
      },
      size: {
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-3 text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

const arrowIcon = (
  <svg
    className="h-4 w-4 transition-transform group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
}

export function Button({ href, children, variant, size, newTab }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn('group', buttonVariants({ variant, size }))}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noreferrer noopener' : undefined}
    >
      {children}
      {arrowIcon}
    </Link>
  );
}
