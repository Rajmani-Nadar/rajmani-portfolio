'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Star } from 'lucide-react';
import Link from 'next/link';

const repositories = [
  { title: 'Ragini Diagnostics', description: 'Healthcare diagnostics experience with packages, booking flow, and SEO-ready responsive pages.', tech: ['Next.js', 'TypeScript', 'Tailwind CSS'], href: 'https://github.com/Rajmani-Nadar/ragini-diagnostics' },
  { title: 'Hariharan Waterproofing', description: 'Service business website with project gallery, FAQs, testimonials, and conversion-focused CTAs.', tech: ['Next.js', 'TypeScript', 'Tailwind CSS'], href: 'https://github.com/Rajmani-Nadar/hariharan-waterproofing' },
  { title: 'Grocery Platform', description: 'Responsive grocery shopping platform with product details, filtering, cart, and reusable UI.', tech: ['Next.js', 'React', 'TypeScript'], href: 'https://github.com/Rajmani-Nadar/grocery' },
  { title: 'Premium Car Wash', description: 'Premium service landing page with clear service discovery, testimonials, and booking CTA.', tech: ['React', 'Tailwind CSS', 'Framer Motion'], href: 'https://github.com/Rajmani-Nadar/premium-carwash' },
  { title: 'Personal Portfolio', description: 'This portfolio, built as a polished case-study experience with responsive motion and reusable components.', tech: ['Next.js', 'TypeScript', 'Framer Motion'], href: 'https://github.com/Rajmani-Nadar/rajmani-portfolio' }
];

const repoStats = [
  { label: 'Repositories', value: '12+' },
  { label: 'Contributions', value: '320+' },
  { label: 'Stars', value: '10+' },
  { label: 'Focus', value: 'Frontend' }
];

const contributionCells = Array.from({ length: 84 }, (_, index) => index);
const repositoriesUrl = 'https://github.com/Rajmani-Nadar?tab=repositories';

export function GithubSection() {
  return (
    <section id="github" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">GitHub</p>
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">GitHub Projects &amp; Contributions</h2>
        </div>
        <Link href={repositoriesUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#111] transition hover:-translate-y-0.5 hover:bg-[#e6c55c]">
          View All Repositories
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {repositories.map((repository, index) => (
          <motion.article key={repository.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} whileHover={{ y: -6 }} className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#121212] p-5 transition-shadow hover:border-[#D4AF37]/30 hover:shadow-[0_0_28px_rgba(212,175,55,0.12)]">
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2 text-[#f9d977]"><GitBranch className="h-5 w-5" /></span>
              <Star className="h-4 w-4 text-[#D4AF37] transition group-hover:fill-[#D4AF37]" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{repository.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-white/65">{repository.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {repository.tech.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">{item}</span>)}
            </div>
            <Link href={repository.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f9d977] hover:text-white">
              View Repository <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-[#121212] p-5">
          <div className="mb-5 flex items-center gap-2 text-white"><GitBranch className="h-5 w-5 text-[#D4AF37]" /><span className="font-semibold">Contribution Preview</span></div>
          <div className="grid grid-cols-12 gap-1.5 sm:grid-cols-21">
            {contributionCells.map((index) => <div key={index} className={`aspect-square rounded-sm ${index % 11 === 0 ? 'bg-[#D4AF37]/70' : index % 5 === 0 ? 'bg-[#D4AF37]/40' : index % 3 === 0 ? 'bg-[#D4AF37]/20' : 'bg-white/5'}`} />)}
          </div>
          <p className="mt-5 text-sm leading-6 text-white/65">Building consistently with React, Next.js, ERPNext and TypeScript.</p>
        </motion.div>

        <div className="rounded-[1.75rem] border border-white/10 bg-[#121212] p-5">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#f9d977]">GitHub Snapshot</p>
          <div className="grid grid-cols-2 gap-3">
            {repoStats.map((stat) => <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-2xl font-bold text-white">{stat.value}</p><p className="mt-1 text-sm text-white/60">{stat.label}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
