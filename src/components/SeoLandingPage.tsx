'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Code2, Gauge, Layers3, PanelsTopLeft, ServerCog, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/Button';
import { ContactSection } from '@/components/ContactSection';

type LandingPageData = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  sections: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  projects: string[];
  schemaDescription: string;
  whyWorkWithMe?: string[];
  professionalExperience?: { company: string; role: string; items: string[] };
};

const relatedLinks = [
  { href: '/services', label: 'Services' },
  { href: '/react-developer', label: 'React Developer' },
  { href: '/nextjs-developer', label: 'Next.js Developer' },
  { href: '/erpnext-developer', label: 'ERPNext Developer' },
  { href: '/cms-development', label: 'CMS Development' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' }
];

const projectLinks: Record<string, string> = {
  'Ragini Diagnostics': '/projects#featured-ragini-diagnostics',
  'Hariharan Waterproofing': '/projects#featured-hariharan-waterproofing',
  'Grocery E-Commerce': '/projects#featured-grocery-e-commerce'
};

const iconSet = [Code2, Layers3, PanelsTopLeft, ServerCog, Gauge, Sparkles];

export function SeoLandingPage({ data }: { data: LandingPageData }) {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://rajmani-dev.vercel.app/' },
    { name: data.label, url: `https://rajmani-dev.vercel.app/${data.slug}` }
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.title,
      url: `https://rajmani-dev.vercel.app/${data.slug}`,
      description: data.schemaDescription,
      inLanguage: 'en-IN'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer }
      }))
    }
  ];

  return (
    <>
      <Script id={`${data.slug}-schema`} type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>

      <main className="space-y-10 pb-10 sm:space-y-12">
        <section className="pt-4 sm:pt-8">
          <div className="mb-6 flex items-center gap-2 text-sm text-[#f9d977]">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="text-white/35">/</span>
            <span className="text-white/65">{data.label}</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#171717] via-[#121212] to-[#0f0f0f] p-6 sm:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_32%)]" />
            <div className="relative max-w-4xl">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">{data.label}</p>
              <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl">{data.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">{data.subtitle}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact" size="lg">Hire Me</Button>
                <Button href="/projects" variant="ghost" size="lg">Explore Projects</Button>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl"
        >
          <p className="text-lg leading-8 text-white/70">{data.intro}</p>
        </motion.section>

        <section>
          <div className="mb-6">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Expertise</p>
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">Practical frontend work with business impact.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.sections.map((section, index) => {
              const Icon = iconSet[index % iconSet.length];
              return (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                  className="rounded-[1.5rem] border border-white/10 bg-[#121212] p-5"
                >
                  <div className="mb-4 inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-3 text-[#f9d977]"><Icon className="h-5 w-5" /></div>
                  <h3 className="mb-3 text-lg font-semibold text-white">{section.title}</h3>
                  <p className="text-sm leading-6 text-white/65">{section.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {data.whyWorkWithMe && (
          <section className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#121212] p-6 sm:p-8">
            <div className="mb-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Why Work With Me</p>
              <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">Practical delivery with a polished finish.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.whyWorkWithMe.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />{item}</div>)}
            </div>
          </section>
        )}

        {data.professionalExperience && (
          <section>
            <div className="mb-6">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Professional Experience</p>
              <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">Experience applied to real platforms.</h2>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#121212] p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#f9d977]">{data.professionalExperience.company}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{data.professionalExperience.role}</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/70 sm:grid-cols-2">
                {data.professionalExperience.items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />{item}</li>)}
              </ul>
            </div>
          </section>
        )}

        <section>
          <div className="mb-6">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Selected Work</p>
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">Featured projects from the portfolio.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {data.projects.map((project, index) => (
              <motion.div key={project} whileHover={{ y: -5 }} className="rounded-[1.5rem] border border-white/10 bg-[#121212] p-5">
                <p className="mb-5 text-sm font-semibold text-[#f9d977]">0{index + 1}</p>
                <h3 className="text-xl font-semibold text-white">{project}</h3>
                <Link href={projectLinks[project] ?? '/projects'} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f9d977] hover:text-white">
                  View case study <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">FAQ</p>
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">Common questions.</h2>
          </div>
          <div className="space-y-3">
            {data.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-white/10 bg-[#121212] px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#D4AF37] transition-transform group-open:rotate-180" />
                </summary>
                <p className="pt-3 text-sm leading-6 text-white/65">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Related Expertise</p>
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">Explore more of the portfolio.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => <Button key={link.href} href={link.href}>{link.label}</Button>)}
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  );
}
