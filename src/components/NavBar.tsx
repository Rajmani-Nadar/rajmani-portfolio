'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' }
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="mb-10 sm:mb-12">
      <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-surface/70 px-4 py-3 backdrop-blur-xl shadow-card">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-background font-bold shadow-glow">
            VR
          </span>
          <div className="leading-tight">
            <div className="text-sm">V. Rajmani</div>
            <div className="text-xs text-muted">Web Platform Developer</div>
          </div>
        </Link>

        <button
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav className="hidden sm:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-white/5 ${
                  active ? 'text-white bg-white/10' : 'text-muted'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="mailto:rajmaninadar2000@gmail.com"
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white text-background px-3 py-2 text-sm font-semibold shadow-card transition hover:-translate-y-0.5"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v16H4z" />
              <path d="m4 4 8 8 8-8" />
            </svg>
            Hire me
          </Link>
        </nav>
      </div>

      {open && (
        <div className="mt-3 space-y-1 rounded-2xl border border-white/5 bg-surface/80 p-3 backdrop-blur-xl sm:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-white/5 ${
                  active ? 'text-white bg-white/10' : 'text-muted'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="mailto:rajmaninadar2000@gmail.com"
            className="block rounded-xl bg-white text-center text-background px-3 py-2 text-sm font-semibold shadow-card transition"
          >
            Hire me
          </Link>
        </div>
      )}
    </header>
  );
}
