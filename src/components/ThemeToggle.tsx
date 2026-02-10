'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="h-10 w-10 rounded-xl border border-border/20 bg-surface/60 opacity-70 animate-pulse"
      />
    );
  }

  const isDark = (resolvedTheme ?? 'dark') === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/20 bg-surface/70 text-foreground shadow-card transition hover:-translate-y-0.5 hover:border-border/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="sr-only">Toggle theme</span>
      <svg
        className="h-5 w-5 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: 'rotate(0deg)' }}
      >
        {isDark ? (
          <>
            <path d="M12 3v1" />
            <path d="M12 20v1" />
            <path d="M4.22 4.22l.7.7" />
            <path d="M19.08 19.08l.7.7" />
            <path d="M1 12h1" />
            <path d="M22 12h1" />
            <path d="M4.22 19.78l.7-.7" />
            <path d="M19.08 4.92l.7-.7" />
            <circle cx="12" cy="12" r="5" />
          </>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        )}
      </svg>
    </button>
  );
}
