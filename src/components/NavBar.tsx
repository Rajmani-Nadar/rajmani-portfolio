'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { id: 'home', href: '/#home', label: 'Home' },
  { id: 'about', href: '/#about', label: 'About' },
  { id: 'projects', href: '/#projects', label: 'Projects' },
  { id: 'experience', href: '/#experience', label: 'Experience' },
  { id: 'contact', href: '/#contact', label: 'Contact' }
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(pathname === '/' ? 'home' : '');

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-full border border-border/15 bg-surface/80 px-3 py-2.5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-border/10">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#f8d974] text-sm font-bold text-[#111] shadow-[0_0_24px_rgba(212,175,55,0.35)]">
              RD
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-foreground">Rajmani Dev</div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-foreground/50">Frontend Developer</div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <nav aria-label="Main navigation" className="hidden items-center gap-1 sm:flex">
              {links.map((link) => {
                const active = pathname === '/' && activeSection === link.id;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'location' : undefined}
                    className={`rounded-full px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                      active ? 'bg-[#D4AF37]/10 text-[#f9d977]' : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="mailto:rajmaninadar2000@gmail.com"
                className="ml-1 inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-2 text-sm font-medium text-[#f9d977] transition-colors hover:bg-[#D4AF37]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Hire me
              </a>
            </nav>

            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/15 bg-foreground/5 text-foreground sm:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mt-3 space-y-2 rounded-[1.35rem] border border-border/15 bg-surface/90 p-3 backdrop-blur-xl sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === '/' && activeSection === link.id ? 'location' : undefined}
              className={`flex min-h-11 items-center justify-between rounded-2xl border border-border/15 px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                pathname === '/' && activeSection === link.id ? 'bg-[#D4AF37]/10 text-[#f9d977]' : 'bg-foreground/5 text-foreground/80'
              }`}
              onClick={() => setOpen(false)}
            >
              <span>{link.label}</span>
              <span>→</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
