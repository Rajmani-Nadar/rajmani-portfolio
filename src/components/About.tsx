'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, HeartHandshake, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: 'Next.js', label: 'Next.js Specialist' },
  { value: '100%', label: 'Responsive Design' },
  { value: '5', label: 'Live Websites' },
  { value: 'SEO', label: 'Performance & SEO Ready' }
];

const currentTechnologies = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub', 'Vercel', 'CMS', 'REST API'];

const focusAreas = ['Responsive UI Development', 'CMS Website Builder', 'Business Websites', 'Performance & SEO Optimization'];

const recentWork = [
  { title: 'Ragini Diagnostics', image: '/images/ragini-home.png', target: '#featured-ragini-diagnostics' },
  { title: 'Hariharan Waterproofing', image: '/images/hariharan-home.png', target: '#featured-hariharan-waterproofing' },
  { title: 'Grocery E-Commerce', image: '/images/grocery-home.png', target: '#featured-grocery-e-commerce' },
  { title: 'Premium Car Wash Website', image: '/images/car-wash.png', target: '#featured-premium-car-wash' }
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
  },
  {
    title: 'ERPNext & Frappe',
    description: 'Building CMS-backed business platforms, customizing ERPNext interfaces, developing reusable dashboard components, and supporting business workflows through the Frappe Framework.'
  }
];

export function About() {
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
            I&apos;m a Frontend Web Platform Developer specializing in React, Next.js, TypeScript, and Tailwind CSS, building modern, responsive, and business-focused web experiences.
          </p>
          <p className="mb-4 text-base leading-7 text-white/65">
            Alongside frontend development, I work with <strong className="font-semibold text-white/80">ERPNext</strong> and the <strong className="font-semibold text-white/80">Frappe Framework</strong> to customize CMS-backed business platforms, develop reusable frontend components, and build dashboard experiences that support real business workflows.
          </p>
          <p className="mb-6 text-base leading-7 text-white/65">
            My experience combines frontend engineering, CMS website development, ERPNext/Frappe customization, client support, dashboard training, and production-ready website deployment.
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

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white">Recent Work</h3>
            <p className="mt-2 text-sm text-white/60">Healthcare • Waterproofing • E-Commerce • Business Landing Pages</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {recentWork.map((project) => (
                <motion.a
                  key={project.title}
                  href={project.target}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#D4AF37]/25 bg-[#111111] shadow-[0_0_0_rgba(212,175,55,0)] transition-shadow hover:shadow-[0_0_20px_rgba(212,175,55,0.18)]"
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
              className="flex min-h-28 flex-col justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#111111] p-4 transition-shadow hover:shadow-[0_0_24px_rgba(212,175,55,0.12)] sm:p-5"
            >
              <p className="text-2xl font-bold text-[#D4AF37]">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4 }}
            className="col-span-2 rounded-2xl border border-[#D4AF37]/20 bg-[#111111] p-4 transition-shadow hover:shadow-[0_0_24px_rgba(212,175,55,0.12)] sm:p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f9d977]">Currently Working With</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {currentTechnologies.map((technology) => (
                <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
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
            className="col-span-2 rounded-2xl border border-[#D4AF37]/20 bg-[#111111] p-4 transition-shadow hover:shadow-[0_0_24px_rgba(212,175,55,0.12)] sm:p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f9d977]">Focus Areas</h3>
            <ul className="mt-4 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
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
