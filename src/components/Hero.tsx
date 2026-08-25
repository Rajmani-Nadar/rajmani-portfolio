'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, GitBranch, Mouse, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const roles = [
  'Frontend Developer',
  'Next.js Developer',
  'React Developer',
  'TypeScript Developer'
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 45 : 90;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === currentRole) {
          setIsDeleting(true);
        }
      } else {
        const nextText = currentRole.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => window.clearTimeout(timeout);
  }, [text, roleIndex, isDeleting]);

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#101010]/90 px-5 py-8 shadow-[0_0_50px_rgba(212,175,55,0.08)] sm:px-8 sm:py-10 lg:px-12 lg:py-14"
      onMouseMove={handlePointerMove}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(212, 175, 55, 0.23), transparent 25%)`
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f9d977]">
            <Sparkles className="h-3.5 w-3.5" />
            Frontend Web Platform Developer
          </div>

          <div className="space-y-4">
            <h1 className="font-grotesk text-4xl font-bold leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-[#f7e7b2] via-[#D4AF37] to-[#f8d974] bg-clip-text text-transparent">
                V. Rajmani Nadar
              </span>
            </h1>

            <div className="flex min-h-[2.8rem] items-center gap-2 text-xl font-medium text-white/90 sm:text-2xl">
              <span className="text-[#d7d7d7]">I build</span>
              <span className="min-w-[10ch] text-[#D4AF37]">{text}</span>
              <span className="animate-pulse text-[#D4AF37]">|</span>
            </div>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Building fast, modern and elegant websites with React, Next.js and TypeScript. I design premium digital experiences that feel polished, convert better, and perform beautifully on every screen.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#111] transition hover:-translate-y-0.5 hover:bg-[#e6c55c]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
  href="/resume/Rajmani_Nadar_Resume.pdf"
  download
  className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
>
  Download Resume
</a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#D4AF37]/40 hover:text-[#f9d977]"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 text-xs font-medium text-white/60">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'CMS', 'SEO'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                {item}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/20 bg-gradient-to-br from-white/10 via-[#171717] to-[#0f0f0f] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.2),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_25%)]" />

            <div className="relative space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">Current Role</p>
                  <p className="mt-2 text-lg font-semibold text-white">Frontend Developer</p>
                </div>
                <div className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#f9d977]">
                  Available
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">Experience</p>
                  <p className="mt-3 text-3xl font-bold text-white">1+ </p>
                  <p className="text-sm text-white/60">Years building modern interfaces.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">Projects</p>
                  <p className="mt-3 text-3xl font-bold text-white">15+</p>
                  <p className="text-sm text-white/60">Responsive and SEO-focused builds.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#f9d977]">Core stack</p>
                  <GitBranch className="h-4 w-4 text-[#f9d977]" />
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-white/75">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind', 'CMS', 'REST APIs'].map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative mt-10 flex justify-center text-white/55">
        <div className="flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.24em]">
          <Mouse className="h-4 w-4" />
          Scroll
        </div>
      </div>
    </section>
  );
}
