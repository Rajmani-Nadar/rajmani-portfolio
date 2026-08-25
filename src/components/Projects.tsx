'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'Ragini Diagnostics',
    summary: 'Healthcare diagnostics website built using Next.js and Tailwind CSS.',
    description: 'A healthcare-first digital experience with service package pages, mobile-friendly booking flows, and SEO structure optimized for local search visibility.',
    tech: ['Next.js', 'Tailwind CSS', 'SEO', 'Responsive'],
    highlights: ['Health package pages', 'Responsive booking UI', 'SEO optimization', 'Mobile-first design'],
    href: 'https://example.com',
    github: 'https://github.com/Rajmani-Nadar'
  },
  {
    title: 'Kethan Gold',
    summary: 'Luxury jewellery website with elegant storytelling and high-end visual polish.',
    description: 'Created a refined luxury interface for jewellery presentations, digital gold product storytelling, and CMS-managed catalogue browsing with smooth motion details.',
    tech: ['Next.js', 'CMS', 'Animations', 'Luxury UI'],
    highlights: ['Elegant UI', 'Jewellery collections', 'Digi Gold ready', 'CMS integration', 'Smooth animations'],
    href: 'https://example.com',
    github: 'https://github.com/Rajmani-Nadar'
  },
  {
    title: 'Grocery Platform',
    summary: 'Dynamic product-led shopping experience with responsive commerce flows.',
    description: 'Built a product-first storefront architecture with dynamic routes, reusable listings, and shopping UI that adapts seamlessly across device sizes.',
    tech: ['React', 'Next.js', 'CMS', 'Commerce UI'],
    highlights: ['Dynamic routes', 'Product pages', 'Shopping UI', 'CMS support', 'Responsive design'],
    href: 'https://example.com',
    github: 'https://github.com/Rajmani-Nadar'
  }
];

const moreProjects = [
  { title: 'Car Wash Website', category: 'Service brand', accent: 'from-[#D4AF37]/15 to-transparent' },
  { title: 'Restaurant Website', category: 'Hospitality', accent: 'from-[#D4AF37]/10 to-transparent' },
  { title: 'Gym Dashboard', category: 'Productivity', accent: 'from-[#D4AF37]/15 to-transparent' },
  { title: 'Portfolio Website', category: 'Personal brand', accent: 'from-[#D4AF37]/10 to-transparent' }
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Case Studies</p>
        <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
          Featured work designed for business impact and product clarity.
        </h2>
      </div>

      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151515]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="min-h-[260px] bg-gradient-to-br from-[#D4AF37]/15 via-[#1e1e1e] to-[#111111] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_20%),linear-gradient(120deg,rgba(255,255,255,0.04),rgba(0,0,0,0.12))] p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f9d977]">
                      Featured Project
                    </span>
                    <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.8)]" />
                  </div>
                  <div>
                    <div className="mb-3 h-10 w-28 rounded-xl bg-white/5" />
                    <div className="space-y-2">
                      <div className="h-3 w-full rounded-full bg-white/10" />
                      <div className="h-3 w-5/6 rounded-full bg-white/10" />
                      <div className="h-3 w-4/6 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-lg text-[#D4AF37]">{project.summary}</p>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">{project.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#111] transition hover:-translate-y-0.5 hover:bg-[#e6c55c]"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#D4AF37]/30 hover:text-[#f9d977]"
                  >
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">More Projects</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {moreProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.accent} p-[1px]`}
            >
              <div className="h-full rounded-[1.45rem] border border-white/10 bg-[#111111] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/60">
                    {project.category}
                  </span>
                  <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <div className="mt-5 h-28 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_30%),rgba(255,255,255,0.02)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
