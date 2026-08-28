'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'Web Platform Developer',
    period: 'Current',
    company: 'JPencil Technologies',
    description: 'Frontend Web Platform Developer working on CMS websites, ERPNext/Frappe business platforms, client support, dashboard customization, and website deployment.',
    responsibilities: [
      'Develop responsive websites using HTML, CSS, Tailwind CSS, React, Next.js, and TypeScript.',
      'Build reusable CMS-safe HTML and CSS components compatible with the Website Builder and CMS environment.',
      'Customize ERPNext and Frappe dashboards, web pages, and business interfaces.',
      'Develop frontend UI for CMS-backed business websites and dashboard experiences.',
      'Solve client website issues, frontend bugs, CMS-related issues, and UI improvements.',
      'Open support tickets for client-reported issues and close tickets after successful resolution.',
      'Track and update the status of client queries throughout the support process.',
      'Send professional follow-up emails regarding issue updates, completed fixes, pending tasks, and training sessions.',
      'Connect with clients using AnyDesk and UltraViewer to provide dashboard training and website guidance.',
      'Explain dashboard features, CMS management, and Website Builder functionality in a simple, easy-to-understand way.',
      'Assist clients with website content updates, CMS usage, deployment support, and post-launch guidance.'
    ],
    technologies: 'React • Next.js • TypeScript • Tailwind CSS • HTML5 • CSS3 • ERPNext • Frappe Framework • CMS Website Builder • Git • GitHub • Vercel • AnyDesk • UltraViewer'
  },
  {
    role: 'Freelance Frontend Developer',
    period: '2024 - 2025',
    company: 'Independent Projects',
    description: 'Delivered client-facing marketing sites and custom interfaces tailored around business goals and conversion needs.'
  },
  {
    role: 'Client Website Development',
    period: '2023 - 2024',
    company: 'Various Clients',
    description: 'Translated requirements into responsive, production-ready websites with CMS configuration and UI refinement.'
  },
  {
    role: 'CMS Training Sessions',
    period: '2023',
    company: 'Learning & Knowledge Sharing',
    description: 'Helped teams understand structured content workflows, editable systems, and efficient website operations.'
  }
];

const platformHighlight = {
  title: 'Business Platform Development',
  description: 'Working with ERPNext and the Frappe Framework to build CMS-backed business platforms, customize dashboards, manage business workflows, solve client support requests, and deliver frontend experiences that integrate with real business operations.'
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Experience</p>
        <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
          A steady path shaped by product work, client delivery, and frontend craft.
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mb-6 rounded-[1.5rem] border border-[#D4AF37]/20 bg-[#121212] p-5"
      >
        <h3 className="text-xl font-semibold text-white">{platformHighlight.title}</h3>
        <p className="mt-2 text-base leading-7 text-white/70">{platformHighlight.description}</p>
      </motion.div>

      <div className="relative before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-[#D4AF37]/20 sm:before:left-1/2">
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative pl-12 sm:pl-0"
            >
              <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-4 border-[#0b0b0b] bg-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.5)] sm:left-1/2 sm:-translate-x-1/2" />
              <div
                className={`rounded-[1.5rem] border border-white/10 bg-[#121212] p-5 sm:w-[calc(50%-2.25rem)] ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#f9d977]">
                    {item.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-white/60">{item.company}</p>
                <p className="text-base leading-7 text-white/70">{item.description}</p>
                {item.responsibilities && (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-white/65">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.technologies && <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-[#f9d977]">Technologies: {item.technologies}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
