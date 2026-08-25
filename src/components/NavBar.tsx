'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mb-8 sm:mb-10">
      <div className="rounded-full border border-white/10 bg-[#111111]/75 px-3 py-2.5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/5">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#f8d974] text-sm font-bold text-[#111] shadow-[0_0_24px_rgba(212,175,55,0.35)]">
              VR
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">V. Rajmani</div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/50">Frontend Developer</div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 sm:flex">
              {links.map((link) => {
                const active = pathname === '/' && link.href === '#home';
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3 py-2 text-sm transition ${
                      active ? 'bg-[#D4AF37]/10 text-[#f9d977]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="mailto:rajmaninadar2000@gmail.com"
                className="ml-1 inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-2 text-sm font-medium text-[#f9d977] transition hover:-translate-y-0.5 hover:bg-[#D4AF37]/15"
              >
                Hire me
              </a>
            </nav>

            <ThemeToggle />
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white sm:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mt-3 space-y-2 rounded-[1.35rem] border border-white/10 bg-[#111111]/90 p-3 backdrop-blur-xl sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80"
              onClick={() => setOpen(false)}
            >
              <span>{link.label}</span>
              <span>→</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
