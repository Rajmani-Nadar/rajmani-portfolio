'use client';

import { motion } from 'framer-motion';
import { GitBranch, Star } from 'lucide-react';

const repoStats = [
  { label: 'Repositories', value: '12+' },
  { label: 'Contributions', value: '320+' },
  { label: 'Stars', value: '10+' },
  { label: 'Focus', value: 'Frontend' }
];

const topRepos = [
  'portfolio-v2',
  'nextjs-landing-page',
  'erp-frontend-workflow',
  'cms-website-builder'
];

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node', 'CMS'];

export function GithubSection() {
  return (
    <section id="github" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">GitHub</p>
        <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
          Code, experimentation, and product-ready frontend work.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[1.75rem] border border-white/10 bg-[#121212] p-5"
        >
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-white">
              <GitBranch className="h-5 w-5 text-[#D4AF37]" />
              <span className="font-semibold">Contribution Graph</span>
            </div>
            <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#f9d977]">
              Activity
            </span>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 28 }).map((_, index) => (
              <div
                key={index}
                className={`aspect-square rounded-md ${index % 5 === 0 ? 'bg-[#D4AF37]/20' : index % 3 === 0 ? 'bg-[#D4AF37]/45' : 'bg-white/5'}`}
              />
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#121212] p-5">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#f9d977]">Stats</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {repoStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#121212] p-5">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[#f9d977]">Top Repositories</p>
            <div className="space-y-2">
              {topRepos.map((repo) => (
                <div key={repo} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
                  <div className="flex items-center gap-2 text-white">
                    <GitBranch className="h-4 w-4 text-[#D4AF37]" />
                    <span>{repo}</span>
                  </div>
                  <Star className="h-4 w-4 text-[#D4AF37]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1.5 text-sm text-white/75">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
