'use client';

import { motion } from 'framer-motion';
import { Download, GitBranch, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const contactLinks = [
  { label: 'Email', href: 'mailto:rajmaninadar2000@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/Rajmani-Nadar?tab=repositories', icon: GitBranch },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rajmani-v-5a550b233', icon: MessageCircle },
  { label: 'WhatsApp', href: 'https://wa.me/919876543210', icon: MessageCircle }
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#0f0f0f] via-[#171717] to-[#111111] p-6 sm:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_20%)]" />

        <div className="relative grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Contact</p>
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
              Let&apos;s build a premium web experience for your brand.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
              Whether you need a polished business site, a CMS-driven marketing platform, or a modern React/Next.js frontend, I can help turn the idea into something elegant and performant.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-[#D4AF37]" />
              Tamil Nadu, India
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
  href="/resume/Rajmani_Nadar_Resume.pdf"
  download
  className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
>
  Download Resume
</a>
            </div>
          </div>

          <div className="grid gap-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:-translate-y-0.5 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2 text-[#f9d977]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <span className="text-white/45">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
