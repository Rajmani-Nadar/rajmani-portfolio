'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js']
  },
  {
    title: 'Styling',
    items: ['Tailwind CSS', 'Bootstrap', 'SCSS']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Figma']
  },
  {
    title: 'Other',
    items: ['REST APIs', 'CMS Website Builder', 'Responsive Design', 'SEO Basics']
  },
  {
    title: 'ERPNext & CMS Platforms',
    items: ['ERPNext', 'Frappe Framework', 'CMS Website Builder', 'Dashboard Customization', 'CMS-safe HTML & CSS', 'Business Workflow UI', 'Client Support', 'Ticket Management']
  }
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Skills</p>
        <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
          Tools and systems for premium digital product delivery.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
            className="rounded-[1.6rem] border border-white/10 bg-[#121212] p-5"
          >
            <h3 className="mb-4 text-lg font-semibold text-[#f9d977]">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1.5 text-sm text-white/80"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
