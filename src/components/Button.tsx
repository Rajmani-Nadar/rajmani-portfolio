import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition shadow-card',
  {
    variants: {
      variant: {
        primary: 'bg-white text-background hover:-translate-y-0.5',
        ghost: 'border border-white/10 bg-white/5 text-white hover:border-white/30'
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

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
}

export function Button({ href, children, variant, size, newTab }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }))}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noreferrer noopener' : undefined}
    >
      {children}
    </Link>
  );
}
