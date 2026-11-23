'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import Link from 'next/link';

const repositories = [
  { title: 'QRForge', description: 'Free browser-based QR code generator with multiple QR formats, customization, frames, and PNG/SVG export.', tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], href: 'https://github.com/Rajmani-Nadar/qr-code-generator' },
  { title: 'Ragini Diagnostics', description: 'Healthcare diagnostics experience with packages, booking flow, and SEO-ready responsive pages.', tech: ['Next.js', 'TypeScript', 'Tailwind CSS'], href: 'https://github.com/Rajmani-Nadar/ragini-diagnostics' },
  { title: 'Hariharan Waterproofing', description: 'Service business website with project gallery, FAQs, testimonials, and conversion-focused CTAs.', tech: ['Next.js', 'TypeScript', 'Tailwind CSS'], href: 'https://github.com/Rajmani-Nadar/hariharan-waterproofing' },
  { title: 'Grocery Platform', description: 'Responsive grocery shopping platform with product details, filtering, cart, and reusable UI.', tech: ['Next.js', 'React', 'TypeScript'], href: 'https://github.com/Rajmani-Nadar/grocery' },
  { title: 'Personal Portfolio', description: 'This portfolio, built as a polished case-study experience with responsive motion and reusable components.', tech: ['Next.js', 'TypeScript', 'Framer Motion'], href: 'https://github.com/Rajmani-Nadar/rajmani-portfolio' }
];

const repositoriesUrl = 'https://github.com/Rajmani-Nadar?tab=repositories';

export function GithubSection() {
  return (
    <section id="github" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">GitHub</p>
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-foreground sm:text-4xl">Selected GitHub Repositories</h2>
        </div>
        <Link href={repositoriesUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#111] transition hover:-translate-y-0.5 hover:bg-[#e6c55c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          View All Repositories
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {repositories.map((repository, index) => (
          <motion.article key={repository.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} whileHover={{ y: -6 }} className="group flex h-full flex-col rounded-[1.5rem] border border-border/15 bg-surface/90 p-5 shadow-card transition-shadow hover:border-[#D4AF37]/30 hover:shadow-[0_0_28px_rgba(212,175,55,0.12)]">
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2 text-[#f9d977]"><GitBranch className="h-5 w-5" /></span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{repository.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-foreground/65">{repository.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {repository.tech.map((item) => <span key={item} className="rounded-full border border-border/15 bg-foreground/5 px-2.5 py-1 text-[11px] text-foreground/70">{item}</span>)}
            </div>
            <Link href={repository.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-semibold text-[#f9d977] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">
              View Repository <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
