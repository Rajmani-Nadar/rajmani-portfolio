'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, GitBranch, Hand, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const featuredProjects = [
  {
    title: 'Ragini Diagnostics',
    summary: 'Healthcare Website',
    description: 'A modern healthcare diagnostics website with responsive UI, health packages, booking interface, SEO optimization, and mobile-first design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    highlights: ['Health packages', 'Booking interface', 'SEO optimization', 'Mobile-first design'],
    gallery: [
      '/images/ragini-home.png',
      '/images/ragini-services.png',
      '/images/ragini-packages.png',
      '/images/ragini-contact.png'
    ],
    href: 'https://ragini-diagnostics.vercel.app/',
    github: 'https://github.com/Rajmani-Nadar/ragini-diagnostics'
  },
  {
    title: 'Hariharan Waterproofing',
    summary: 'Business Services Website',
    description: 'A premium waterproofing services website with service pages, gallery, FAQ, testimonials, and contact CTA.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    highlights: ['Service pages', 'Project gallery', 'FAQ section', 'Contact CTA'],
    gallery: [
      '/images/hariharan-home.png',
      '/images/hariharan-services.png',
      '/images/hariharan-projects.png',
      '/images/hariharan-faq.png'
    ],
    href: 'https://hariharan-waterproofing.vercel.app/',
    github: 'https://github.com/Rajmani-Nadar/hariharan-waterproofing'
  },
  {
    title: 'Grocery E-Commerce',
    summary: 'E-Commerce Website',
    description: 'A grocery shopping platform featuring dynamic product pages, category filtering, reusable components, responsive shopping experience, and modern UI.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    highlights: ['Dynamic product pages', 'Category filtering', 'Reusable components', 'Responsive shopping'],
    gallery: [
      '/images/grocery-home.png',
      '/images/grocery-products.png',
      '/images/grocery-product-details.png',
      '/images/grocery-admin_dashboard.png'
    ],
    href: 'https://rajmani-grocery.vercel.app/',
    github: 'https://github.com/Rajmani-Nadar/grocery'
  }
];

const moreProjects = [
  {
    title: 'Premium Car Wash Website',
    description: 'Responsive business landing page with premium UI, services section, testimonials, and booking CTA.',
    image: '/images/car-wash.png',
    href: 'https://premium-carwash.vercel.app/',
    github: 'https://github.com/Rajmani-Nadar/premium-carwash',
    category: 'Service brand',
    accent: 'from-[#D4AF37]/15 to-transparent'
  },
  {
    title: 'Personal Portfolio',
    description: 'Personal developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, reusable components, and responsive design.',
    image: '/images/portfolio.png',
    href: 'https://rajmani-dev.vercel.app',
    github: 'https://github.com/Rajmani-Nadar/rajmani-portfolio',
    category: 'Personal brand',
    accent: 'from-[#D4AF37]/10 to-transparent'
  }
];

function FeaturedProjectGallery({ title, images }: { title: string; images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [hasOpenedLightbox, setHasOpenedLightbox] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLightboxOpen(false);
      if (event.key === 'ArrowRight') setActiveIndex((current) => (current + 1) % images.length);
      if (event.key === 'ArrowLeft') setActiveIndex((current) => (current - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, isLightboxOpen]);

  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  const openLightbox = () => {
    setHasOpenedLightbox(true);
    setIsLightboxOpen(true);
  };

  const showPrevious = () => setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % images.length);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 48) {
      if (distance > 0) showPrevious();
      else showNext();
    }
    setTouchStart(null);
  };

  return (
    <>
      <div className="space-y-3">
        <button
          type="button"
          aria-label={`Open ${title} screenshot fullscreen`}
          onClick={openLightbox}
          className="group relative block w-full cursor-zoom-in text-left"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-950">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image src={activeImage} alt={title} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              {!hasOpenedLightbox && (
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ opacity: { duration: 0.25 }, y: { duration: 0.25 } }}
                  className="pointer-events-none absolute bottom-4 right-4 hidden items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#111111]/85 px-3 py-2 text-xs font-semibold text-[#f9d977] shadow-[0_0_18px_rgba(212,175,55,0.18)] backdrop-blur-sm md:inline-flex md:opacity-0 md:transition-opacity md:group-hover:opacity-100"
                >
                  <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.2 }}>
                    <Hand className="h-4 w-4" />
                  </motion.span>
                  Click to Preview
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </button>

        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {images.map((image, index) => (
            <motion.button
              key={image}
              type="button"
              aria-label={`Show ${title} screenshot ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`relative aspect-[16/9] overflow-hidden rounded-xl border bg-zinc-950 ${index === activeIndex ? 'border-[#D4AF37]' : 'border-white/10'}`}
            >
              <Image src={image} alt="" fill className="object-cover object-center" sizes="(max-width:640px) 25vw, 12vw" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot preview`}
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-zinc-950 shadow-2xl">
                <Image src={activeImage} alt={title} fill className="object-contain object-center" sizes="100vw" />
              </div>
              <button type="button" aria-label="Close fullscreen preview" onClick={() => setIsLightboxOpen(false)} className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:border-[#D4AF37] hover:text-[#f9d977]">
                <X className="h-5 w-5" />
              </button>
              <button type="button" aria-label="Previous screenshot" onClick={showPrevious} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:border-[#D4AF37] hover:text-[#f9d977]">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button type="button" aria-label="Next screenshot" onClick={showNext} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:border-[#D4AF37] hover:text-[#f9d977]">
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="mt-3 text-center text-xs text-white/60">{activeIndex + 1} / {images.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Case Studies</p>
        <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
          Featured work designed for business impact and product clarity.
        </h2>
      </div>

      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            id={`featured-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151515]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <FeaturedProjectGallery title={project.title} images={project.gallery} />

              <div className="p-6 sm:p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-lg text-[#D4AF37]">{project.summary}</p>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">{project.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#111] transition hover:-translate-y-0.5 hover:bg-[#e6c55c]"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#D4AF37]/30 hover:text-[#f9d977]"
                  >
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">More Projects</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {moreProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.accent} p-[1px]`}
            >
              <div className="h-full rounded-[1.45rem] border border-white/10 bg-[#111111] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/60">
                    {project.category}
                  </span>
                  <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{project.description}</p>
                <div className="relative mt-5 aspect-video overflow-hidden rounded-2xl border border-white/10">
                  <Image src={project.image} alt={`${project.title} homepage`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:text-[#e6c55c]">
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#f9d977]">
                    <GitBranch className="h-4 w-4" /> GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
