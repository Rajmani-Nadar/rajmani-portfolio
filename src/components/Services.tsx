'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Building2, LayoutTemplate, Rocket, Sparkles } from 'lucide-react';

const services = [
  { title: 'Business Website Development', icon: Building2, description: 'Custom digital storefronts and business websites designed for trust, clarity, and growth.' },
  { title: 'CMS Website Builder', icon: LayoutTemplate, description: 'Flexible content systems that let teams update pages easily without losing design quality.' },
  { title: 'Landing Pages', icon: Rocket, description: 'Focused landing pages crafted to communicate value clearly and improve conversion paths.' },
  { title: 'Website Redesign', icon: Sparkles, description: 'Modernized web experiences that improve UX, polish, and overall brand perception.' },
  { title: 'Performance Optimization', icon: ArrowRight, description: 'Speed-focused refinements to improve responsiveness, structure, and user experience.' }
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Services</p>
        <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
          Straightforward services for businesses that want a better web presence.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="rounded-[1.5rem] border border-white/10 bg-[#121212] p-5"
            >
              <div className="mb-4 inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-3 text-[#f9d977]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{service.title}</h3>
              <p className="text-sm leading-6 text-white/65">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
