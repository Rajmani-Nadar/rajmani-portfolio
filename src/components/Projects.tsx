'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, GitBranch, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

const featuredProjects = [
  {
    title: 'QRForge',
    summary: 'Free QR Code Generator',
    description: 'A privacy-focused QR code generator built with Next.js and TypeScript, supporting multiple QR formats, customizable colors and frames, high-resolution PNG/SVG downloads, and browser-based QR generation without accounts, databases, or external QR APIs.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    highlights: ['Multiple QR formats', 'Custom colors and frames', 'PNG and SVG downloads', 'Browser-side generation', 'No signup required', 'Responsive design'],
    gallery: ['/images/qrforge.svg'],
    href: 'https://qr-code-generator-pi-sand.vercel.app/',
    github: 'https://github.com/Rajmani-Nadar/qr-code-generator'
  },
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

const moreProjects: {
  title: string;
  description: string;
  image: string;
  href: string;
  github?: string;
  category: string;
}[] = [
  {
    title: 'Premium Car Wash Website',
    description: 'Responsive business landing page with premium UI, services section, testimonials, and booking CTA.',
    image: '/images/car-wash.png',
    href: 'https://premium-carwash.vercel.app/',
    category: 'Service brand'
  },
  {
    title: 'Personal Portfolio',
    description: 'Personal developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, reusable components, and responsive design.',
    image: '/images/portfolio.png',
    href: 'https://rajmani-dev.vercel.app',
    github: 'https://github.com/Rajmani-Nadar/rajmani-portfolio',
    category: 'Personal brand'
  }
];

function FeaturedProjectGallery({ title, images }: { title: string; images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!isLightboxOpen) return;

    const trigger = triggerRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLightboxOpen(false);
      if (event.key === 'ArrowRight') setActiveIndex((current) => (current + 1) % images.length);
      if (event.key === 'ArrowLeft') setActiveIndex((current) => (current - 1 + images.length) % images.length);

      if (event.key === 'Tab') {
        const focusableButtons = Array.from(
          dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])') ?? []
        );
        const firstButton = focusableButtons[0];
        const lastButton = focusableButtons[focusableButtons.length - 1];

        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton?.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton?.focus();
        }
      }
    };

    closeButtonRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      trigger?.focus();
    };
  }, [images.length, isLightboxOpen]);

  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  const openLightbox = () => setIsLightboxOpen(true);

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
      <div className="flex flex-col gap-3 p-4 sm:p-5 lg:p-6">
        <button
          ref={triggerRef}
          type="button"
          aria-label={`Open ${title} screenshot fullscreen`}
          onClick={openLightbox}
          className="group relative block w-full cursor-zoom-in rounded-2xl text-left outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/15 bg-[#111]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image src={activeImage} alt={`${title} project screenshot`} fill className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]" sizes="(max-width:768px) 100vw, 50vw" />
              </motion.div>
            </AnimatePresence>
            <span className="pointer-events-none absolute bottom-3 right-3 hidden items-center gap-2 rounded-full border border-white/15 bg-black/75 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 md:inline-flex">
              <Expand className="h-3.5 w-3.5" />
              Preview
            </span>
          </div>
        </button>

        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {images.map((image, index) => (
              <motion.button
                key={image}
                type="button"
                aria-label={`Show ${title} screenshot ${index + 1}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.18 }}
                className={`relative aspect-[16/9] overflow-hidden rounded-xl border bg-[#111] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${index === activeIndex ? 'border-[#D4AF37]' : 'border-border/15 hover:border-[#D4AF37]/50'}`}
              >
                <Image src={image} alt="" fill className="object-cover object-center" sizes="(max-width:640px) 25vw, 12vw" />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            ref={dialogRef}
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
              <button ref={closeButtonRef} type="button" aria-label="Close fullscreen preview" onClick={() => setIsLightboxOpen(false)} className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:border-[#D4AF37] hover:text-[#f9d977]">
                <X className="h-5 w-5" />
              </button>
              {images.length > 1 && (
                <>
                  <button type="button" aria-label="Previous screenshot" onClick={showPrevious} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:border-[#D4AF37] hover:text-[#f9d977]">
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button type="button" aria-label="Next screenshot" onClick={showNext} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:border-[#D4AF37] hover:text-[#f9d977]">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <p className="mt-3 text-center text-xs text-white/60">{activeIndex + 1} / {images.length}</p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Projects({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? 'h1' : 'h2';

  const projectSchemas = [
    ...featuredProjects.map((project) => ({
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: project.title,
      description: project.description,
      programmingLanguage: project.tech,
      codeRepository: project.github,
      applicationCategory: 'WebApplication',
      author: { '@type': 'Person', name: 'V. Rajmani Nadar' }
    })),
    ...moreProjects.map((project) => ({
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: project.title,
      description: project.description,
      programmingLanguage: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      codeRepository: project.github,
      applicationCategory: 'WebApplication',
      author: { '@type': 'Person', name: 'V. Rajmani Nadar' }
    }))
  ];

  return (
    <>
      <Script id="projects-structured-data" type="application/ld+json">
        {JSON.stringify([
          ...projectSchemas,
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rajmani-dev.vercel.app/' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://rajmani-dev.vercel.app/projects' }
            ]
          }
        ])}
      </Script>
      <section id="projects" className="scroll-mt-28 py-8 sm:py-12">
      <div className="mb-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Case Studies</p>
        <Heading className="text-3xl font-bold tracking-[-0.05em] text-foreground sm:text-4xl">
          Featured work designed for business impact and product clarity.
        </Heading>
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
            className="overflow-hidden rounded-[1.75rem] border border-border/15 bg-surface/90"
          >
            <div className="grid items-stretch gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <FeaturedProjectGallery title={project.title} images={project.gallery} />

              <div className="flex flex-col p-5 sm:p-7 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">{project.summary}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{project.title}</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-foreground/70">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-lg border border-border/15 bg-foreground/5 px-2.5 py-1.5 text-xs font-medium text-foreground/75">
                      {item}
                    </span>
                  ))}
                  </div>

                <ul className="mt-6 grid gap-x-4 gap-y-2.5 text-sm leading-6 text-foreground/70 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex min-w-0 items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3 border-t border-border/15 pt-5">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#111] transition-colors hover:bg-[#e6c55c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border/15 bg-foreground/5 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-[#D4AF37]/40 hover:text-[#f9d977] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
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
            <motion.article
              key={project.title}
              id={`featured-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group overflow-hidden rounded-[1.5rem] border border-border/15 bg-surface/90 shadow-card transition-colors hover:border-[#D4AF37]/30"
            >
              <div className="relative aspect-[2/1] overflow-hidden border-b border-border/15 bg-[#111]">
                <Image src={project.image} alt={`${project.title} homepage`} fill className="object-contain transition-transform duration-500 group-hover:scale-[1.02]" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/65">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-3 border-t border-border/15 pt-4">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#D4AF37] px-3.5 py-2 text-sm font-semibold text-[#111] transition-colors hover:bg-[#e6c55c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:text-[#f9d977] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <GitBranch className="h-4 w-4" />
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
