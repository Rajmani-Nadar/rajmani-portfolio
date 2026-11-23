'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'The final result was fast, responsive, and very easy to manage. We appreciated the attention to user flow and the clean structure behind the website.',
    client: 'Ragini Diagnostics',
    role: 'Healthcare Services'
  }
];

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="testimonials" className="scroll-mt-28 py-10 sm:py-14">
      <div className="mb-8 max-w-4xl sm:mb-10">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Testimonials</p>
        <h2 className="text-3xl font-bold tracking-[-0.05em] text-foreground sm:text-4xl">
          A client perspective on the finished website.
        </h2>
      </div>

      <div className="max-w-6xl">
        {testimonials.map((item, index) => (
          <motion.figure
            key={item.client}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : index * 0.08 }}
            className="group grid overflow-hidden rounded-[1.75rem] border border-border/15 bg-surface/90 shadow-card transition-colors hover:border-[#D4AF37]/30 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.34fr)]"
          >
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center gap-3">
                <Quote aria-hidden="true" className="h-6 w-6 text-[#D4AF37]/75" />
                <span className="h-px w-8 bg-[#D4AF37]/40" />
              </div>
              <blockquote className="max-w-4xl text-lg leading-8 text-foreground/80 sm:text-xl sm:leading-9">
                “{item.quote}”
              </blockquote>
            </div>
            <figcaption className="flex items-center border-t border-border/15 bg-foreground/[0.025] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <div className="border-l-2 border-[#D4AF37]/70 pl-4">
                <p className="text-lg font-semibold leading-snug text-foreground">{item.client}</p>
                <p className="mt-1.5 text-sm text-foreground/60">{item.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
