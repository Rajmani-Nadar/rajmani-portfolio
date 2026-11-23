'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, GitBranch, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from './contact/ContactForm';

const contactLinks = [
  { label: 'Email', detail: 'rajmaninadar2000@gmail.com', href: 'mailto:rajmaninadar2000@gmail.com', icon: Mail },
  { label: 'GitHub', detail: 'github.com/Rajmani-Nadar', href: 'https://github.com/Rajmani-Nadar?tab=repositories', icon: GitBranch },
  { label: 'LinkedIn', detail: 'linkedin.com/in/rajmani-v-5a550b233', href: 'https://linkedin.com/in/rajmani-v-5a550b233', icon: MessageCircle },
  { label: 'WhatsApp', href: 'https://wa.me/919876543210', icon: MessageCircle }
];

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const Heading = standalone ? 'h1' : 'h2';

  return (
    <section id="contact" className="scroll-mt-28 py-10 sm:py-14">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
        className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-surface/90 p-5 shadow-card sm:p-8 lg:p-10"
      >
        <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <div className="min-w-0">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Contact</p>
            <Heading className="max-w-2xl text-3xl font-bold tracking-[-0.05em] text-foreground sm:text-4xl">
              Have a website project in mind?
            </Heading>
            <p className="mt-4 max-w-xl text-base leading-7 text-foreground/70">
              For freelance website development, redesigns, or collaborations, share a few details below. I&apos;ll follow up directly.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-foreground/70">
              <MapPin className="h-4 w-4 text-[#D4AF37]" />
              Tamil Nadu, India
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resume/Rajmani_Nadar_Resume.pdf"
                download
                className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-border/15 bg-foreground/5 px-4 py-2.5 text-sm font-medium text-foreground/75 transition-colors hover:border-[#D4AF37]/40 hover:text-[#f9d977] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-border/15 bg-foreground/5 p-3.5 text-foreground transition-colors hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="inline-flex shrink-0 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2 text-[#f9d977]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium">{item.label}</span>
                        {item.detail && <span className="block break-words text-xs leading-5 text-foreground/55">{item.detail}</span>}
                      </span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-foreground/45" />
                  </Link>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
