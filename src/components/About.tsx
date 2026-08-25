'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, HeartHandshake, Sparkles } from 'lucide-react';

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '15+', label: 'Projects' },
  { value: 'Next.js', label: 'Specialist' },
  { value: '100%', label: 'Responsive Design' }
];

const storyCards = [
  {
    title: 'Frontend obsession',
    description: 'I enjoy turning ideas into high-converting interfaces with careful UX thinking, refined motion, and production-ready code.'
  },
  {
    title: 'CMS + client work',
    description: 'I have practical experience building CMS-backed websites and collaborating with clients to shape business-ready experiences.'
  },
  {
    title: 'Performance matters',
    description: 'Every interface I build balances visual polish, accessibility, and speed so users get a premium product without friction.'
  }
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">About</p>
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
            Building elegant digital experiences that feel premium and work hard.
          </h2>
        </div>
        <div className="hidden rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1.5 text-xs text-[#f9d977] md:flex md:items-center md:gap-2">
          <Sparkles className="h-3.5 w-3.5" />
          Crafted for modern brands
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[1.75rem] border border-white/10 bg-[#151515] p-6 sm:p-8"
        >
          <p className="mb-4 text-lg leading-8 text-white/75">
            I&apos;m a Frontend Web Platform Developer focused on creating premium, conversion-friendly websites with a balance of visual elegance and product-level thinking.
          </p>
          <p className="mb-6 text-base leading-7 text-white/65">
            My work spans custom CMS website development, reusable React systems, and Next.js experiences designed for speed, structure, and clean business workflows.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {storyCards.map((card, index) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-[#111111] p-4 transition hover:-translate-y-1 hover:border-[#D4AF37]/30"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-3 inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2 text-[#f9d977]">
                  {index === 0 ? <HeartHandshake className="h-4 w-4" /> : index === 1 ? <BriefcaseBusiness className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-6 text-white/65">{card.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-[1.5rem] border border-white/10 bg-[#111111] p-5"
            >
              <p className="text-2xl font-bold text-[#D4AF37]">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
