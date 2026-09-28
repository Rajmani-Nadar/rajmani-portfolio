'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'The final result was fast, responsive, and very easy to manage. We appreciated the attention to user flow and the clean structure behind the website.',
    client: 'Ragini Diagnostics',
    role: 'Healthcare Services'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Testimonials</p>
        <h2 className="text-3xl font-bold tracking-[-0.05em] text-foreground sm:text-4xl">
          Clients value clear communication, polished execution, and reliable delivery.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.client}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-[1.7rem] border border-border/15 bg-surface/90 p-6 shadow-card"
          >
            <Quote className="mb-4 h-8 w-8 text-[#D4AF37]" />
            <p className="text-lg leading-8 text-foreground/75">“{item.quote}”</p>
            <div className="mt-6 border-t border-border/15 pt-4">
              <p className="text-base font-semibold text-foreground">{item.client}</p>
              <p className="text-sm text-foreground/60">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
