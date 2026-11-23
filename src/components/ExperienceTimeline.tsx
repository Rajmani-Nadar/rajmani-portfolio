'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';

const timeline = [
  {
    role: 'Web Platform Developer',
    period: 'Current',
    company: 'JPencil Technologies',
    description: 'Develops CMS-backed websites and supports clients with implementation, troubleshooting, dashboard training, and post-launch guidance.',
    responsibilities: [
      'Build reusable, CMS-compatible landing pages and website sections with HTML5 and CSS3.',
      'Resolve frontend layout, content, and CMS issues for client websites.',
      'Manage support queries and keep clients informed from investigation through resolution.',
      'Provide Website Builder and dashboard training through remote support sessions.',
      'Assist with content updates, deployment support, and post-launch usage guidance.'
    ],
    technologies: 'HTML5 • CSS3 • CMS Website Builder • Git • GitHub • AnyDesk • UltraViewer'
  },
  {
    role: 'Frontend Developer',
    period: 'January 2025 - February 2026',
    company: 'Sanvro Technologies',
    description: 'Built responsive business interfaces and CMS-driven web experiences with ERPNext, Frappe Framework, Strapi, React, Next.js, and TypeScript.',
    responsibilities: [
      'Developed responsive interfaces using React, Next.js, TypeScript, Tailwind CSS, HTML5, and CSS3.',
      'Customized ERPNext portal pages and dashboard layouts for business applications.',
      'Built reusable UI components and maintained consistent patterns across frontend work.',
      'Used Strapi and backend APIs to render and manage dynamic website content.',
      'Improved dashboard usability and fixed UI issues across ERPNext modules.',
      'Collaborated with the development team on implementation and application maintenance.'
    ],
    technologies: 'ERPNext • Frappe Framework • Strapi Headless CMS • React • Next.js • TypeScript • Tailwind CSS • HTML5 • CSS3 • Git • GitHub'
  },
];

export function ExperienceTimeline({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? 'h1' : 'h2';

  return (
    <>
      <Script id="experience-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rajmani-dev.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Experience', item: 'https://rajmani-dev.vercel.app/experience' }
          ]
        })}
      </Script>
      <section id="experience" className="scroll-mt-32 py-10 sm:py-14">
        <div className="mb-8 max-w-4xl sm:mb-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Experience</p>
          <Heading className="text-3xl font-bold tracking-[-0.05em] text-foreground sm:text-4xl">
            Building and supporting frontend experiences for websites and business platforms.
          </Heading>
        </div>

        <div className="relative space-y-6 pl-8 before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-[#D4AF37]/20 xl:space-y-8 xl:pl-0 xl:before:left-1/2">
          {timeline.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative min-w-0 xl:grid xl:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] xl:items-start"
            >
              <div className="absolute -left-8 top-6 z-10 h-4 w-4 rounded-full border-4 border-background bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.35)] xl:static xl:col-start-2 xl:row-start-1 xl:mt-6 xl:justify-self-center" />
              <div
                className={`min-w-0 rounded-[1.5rem] border border-border/15 bg-surface/90 p-5 shadow-card sm:p-6 xl:row-start-1 ${index % 2 === 0 ? 'xl:col-start-1' : 'xl:col-start-3'}`}
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2.5">
                  <h3 className="min-w-0 text-xl font-semibold leading-tight text-foreground sm:text-2xl">{item.role}</h3>
                  <span className="shrink-0 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#f9d977]">
                    {item.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-semibold text-foreground/75">{item.company}</p>
                <p className="text-[15px] leading-7 text-foreground/70">{item.description}</p>
                {item.responsibilities && (
                  <ul className="mt-5 space-y-2.5 text-sm leading-6 text-foreground/65">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                        <span className="min-w-0">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.technologies && (
                  <div className="mt-5 border-t border-border/15 pt-4">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/45">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.split(' • ').map((technology) => (
                        <span key={technology} className="max-w-full break-words rounded-full border border-border/15 bg-foreground/5 px-2.5 py-1 text-xs leading-5 text-foreground/70">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
