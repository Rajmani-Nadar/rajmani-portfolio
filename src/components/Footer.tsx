import { ArrowUp, GitBranch, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const footerNavigation = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' }
];

const socialLinks = [
  { href: 'mailto:rajmaninadar2000@gmail.com', label: 'Email', icon: Mail },
  { href: 'https://github.com/Rajmani-Nadar?tab=repositories', label: 'GitHub', icon: GitBranch },
  { href: 'https://linkedin.com/in/rajmani-v-5a550b233', label: 'LinkedIn', icon: MessageCircle }
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/15 text-sm text-foreground/65">
      <div className="grid gap-8 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start lg:py-10">
        <div className="max-w-md">
          <Link
            href="/"
            className="inline-flex rounded-sm font-semibold tracking-tight text-foreground transition-colors hover:text-[#f9d977] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Rajmani Dev
          </Link>
          <p className="mt-1 text-xs font-medium text-foreground/50">V. Rajmani Nadar</p>
          <p className="mt-3 leading-6">
            Thanks for visiting. Get in touch to discuss a freelance website project or collaboration.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
          {footerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-foreground/65 transition-colors hover:text-[#f9d977] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-4 border-t border-border/10 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-foreground/50">
          © {new Date().getFullYear()} Rajmani Dev
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <nav aria-label="Social and contact links" className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith('https://');

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  aria-label={item.label}
                  className="inline-flex min-h-9 min-w-9 items-center justify-center gap-2 rounded-md text-foreground/60 transition-colors hover:text-[#f9d977] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  <span className="text-xs">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <Link
            href="/#home"
            className="inline-flex min-h-9 items-center gap-2 rounded-md border border-border/15 px-3 text-xs font-medium text-foreground/70 transition-colors hover:border-[#D4AF37]/40 hover:text-[#f9d977] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Back to top
            <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
