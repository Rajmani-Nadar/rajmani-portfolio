'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, HeartHandshake, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';

const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: 'Next.js', label: 'Next.js Specialist' },
  { value: '100%', label: 'Responsive Design' },
  { value: '5', label: 'Live Websites' },
  { value: 'SEO', label: 'Performance & SEO Ready' }
];

const currentTechnologies = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub', 'Vercel', 'CMS', 'REST API'];

const focusAreas = ['Responsive UI Development', 'CMS Website Builder', 'Business Websites', 'Performance & SEO Optimization'];

const recentWork = [
  { title: 'QRForge', image: '/images/qrforge.svg', target: '/projects#featured-qrforge' },
  { title: 'Ragini Diagnostics', image: '/images/ragini-home.png', target: '/projects#featured-ragini-diagnostics' },
  { title: 'Hariharan Waterproofing', image: '/images/hariharan-home.png', target: '/projects#featured-hariharan-waterproofing' },
  { title: 'Grocery E-Commerce', image: '/images/grocery-home.png', target: '/projects#featured-grocery-e-commerce' },
  { title: 'Premium Car Wash Website', image: '/images/car-wash.png', target: '/projects#featured-premium-car-wash-website' }
];

const storyCards = [
  {
    title: 'Frontend craft',
    description: 'I turn designs and requirements into responsive interfaces with clear structure, consistent styling, and maintainable code.'
  },
  {
    title: 'CMS & client delivery',
    description: 'I build CMS-backed websites and help clients manage content, resolve issues, and use their platforms confidently.'
  },
  {
    title: 'Business-ready UI',
    description: 'I focus on practical user flows, reusable components, and responsive layouts that support real business needs.'
  },
  {
    title: 'ERPNext & Frappe',
    description: 'I customize ERPNext interfaces and use the Frappe Framework to build and support frontend experiences for business platforms.'
  }
];

export function About({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? 'h1' : 'h2';

  return (
    <>
      <Script id="about-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rajmani-dev.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'About', item: 'https://rajmani-dev.vercel.app/about' }
          ]
        })}
      </Script>
      <section id="about" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">About</p>
          <Heading className="text-3xl font-bold tracking-[-0.05em] text-foreground sm:text-4xl">
            Frontend developer focused on clear, practical digital experiences.
          </Heading>
        </div>
        <div className="hidden rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1.5 text-xs text-[#f9d977] md:flex md:items-center md:gap-2">
          <Sparkles className="h-3.5 w-3.5" />
          React • Next.js • TypeScript
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[1.75rem] border border-border/15 bg-surface/90 p-6 shadow-card sm:p-8"
        >
          <p className="mb-4 max-w-3xl text-lg leading-8 text-foreground/75">
            I&apos;m <strong className="font-semibold text-foreground">V. Rajmani Nadar</strong>, a frontend web platform developer who builds modern, responsive websites and web applications with React, Next.js, and TypeScript.
          </p>
          <p className="mb-6 max-w-3xl text-base leading-7 text-foreground/65">
            My work spans component-based interfaces, CMS websites, Tailwind CSS styling, and ERPNext or Frappe platforms. I bring an understanding of both frontend implementation and day-to-day client needs, from responsive layouts and reusable components to content management and post-launch support.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {storyCards.map((card, index) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border/15 bg-background/80 p-4 transition hover:-translate-y-1 hover:border-[#D4AF37]/30"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-3 inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2 text-[#f9d977]">
                  {index === 0 ? <HeartHandshake className="h-4 w-4" /> : index === 1 ? <BriefcaseBusiness className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm leading-6 text-foreground/65">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-foreground">Recent Work</h3>
            <p className="mt-2 text-sm text-foreground/60">QR Tools • Healthcare • E-Commerce • Business Platforms</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {recentWork.map((project) => (
                <motion.a
                  key={project.title}
                  href={project.target}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#D4AF37]/25 bg-background shadow-[0_0_0_rgba(212,175,55,0)] transition-shadow hover:shadow-[0_0_20px_rgba(212,175,55,0.18)]"
                >
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width:640px) 50vw, 25vw" />
                  <span className="absolute inset-x-0 bottom-0 bg-black/65 px-2 py-2 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {project.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="flex min-h-28 flex-col justify-center rounded-2xl border border-[#D4AF37]/20 bg-background/80 p-4 transition-shadow hover:shadow-[0_0_24px_rgba(212,175,55,0.12)] sm:p-5"
            >
              <p className="text-2xl font-bold text-[#D4AF37]">{stat.value}</p>
              <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4 }}
            className="col-span-2 rounded-2xl border border-[#D4AF37]/20 bg-background/80 p-4 transition-shadow hover:shadow-[0_0_24px_rgba(212,175,55,0.12)] sm:p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f9d977]">Currently Working With</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {currentTechnologies.map((technology) => (
                <span key={technology} className="rounded-full border border-border/15 bg-foreground/5 px-3 py-1.5 text-xs text-foreground/70">
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4 }}
            className="col-span-2 rounded-2xl border border-[#D4AF37]/20 bg-background/80 p-4 transition-shadow hover:shadow-[0_0_24px_rgba(212,175,55,0.12)] sm:p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f9d977]">Focus Areas</h3>
            <ul className="mt-4 grid gap-2 text-sm text-foreground/70 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
}
