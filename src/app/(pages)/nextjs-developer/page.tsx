import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/SeoLandingPage';

const url = 'https://rajmani-dev.vercel.app/nextjs-developer';

export const metadata: Metadata = {
  title: 'Next.js Developer | V. Rajmani Nadar',
  description: 'Next.js developer building SEO-friendly websites, CMS-powered business platforms, landing pages, dashboards, and scalable frontend experiences.',
  keywords: ['Next.js Developer', 'Next.js SEO Websites', 'Next.js CMS Developer', 'Next.js Landing Pages', 'Next.js Dashboard Developer', 'Next.js Developer India'],
  alternates: { canonical: url },
  openGraph: { title: 'Next.js Developer | V. Rajmani Nadar', description: 'Next.js developer building SEO-friendly websites, CMS-powered business platforms, landing pages, dashboards, and scalable frontend experiences.', url, siteName: 'V. Rajmani Portfolio', type: 'website', images: ['/images/og-image.png'] },
  twitter: { card: 'summary_large_image', title: 'Next.js Developer | V. Rajmani Nadar', description: 'Next.js developer building SEO-friendly websites, CMS-powered business platforms, landing pages, dashboards, and scalable frontend experiences.', images: ['/images/og-image.png'] },
  robots: { index: true, follow: true }
};

const data = {
  slug: 'nextjs-developer', label: 'Next.js Developer', title: 'Next.js Developer for SEO-friendly Business Platforms',
  subtitle: 'Building fast websites, CMS-powered platforms, landing pages, dashboards, and scalable frontend experiences with Next.js.',
  intro: 'I use Next.js to create frontend experiences that are discoverable, responsive, and ready to grow. The work combines clear information architecture, reusable components, CMS integration, and performance-minded implementation.',
  sections: [
    { title: 'SEO-friendly Development', description: 'Build structured pages with strong metadata, semantic content, and a technical foundation designed for discoverability.' },
    { title: 'Static & Dynamic Rendering', description: 'Choose practical rendering patterns for marketing pages, content systems, and interactive business applications.' },
    { title: 'Business Websites', description: 'Create premium, responsive websites that communicate services clearly and support business goals.' },
    { title: 'CMS Integration', description: 'Connect Next.js experiences to headless and managed CMS platforms for flexible content workflows.' },
    { title: 'Tailwind CSS Architecture', description: 'Use reusable styling patterns to maintain visual consistency across pages and components.' },
    { title: 'Performance Optimization', description: 'Refine loading, structure, and frontend behavior so the finished experience feels fast and dependable.' }
  ],
  projects: ['Ragini Diagnostics', 'Hariharan Waterproofing', 'Grocery E-Commerce'],
  faqs: [
    { question: 'Why choose Next.js for SEO?', answer: 'Next.js supports strong metadata handling, flexible rendering strategies, and performance-focused page delivery for discoverable websites.' },
    { question: 'Is Next.js good for CMS websites?', answer: 'Yes. Next.js can consume headless CMS APIs and combine dynamic content with a fast, structured frontend experience.' },
    { question: 'Can you build Next.js landing pages?', answer: 'Yes. I build responsive landing pages with clear content hierarchy, reusable sections, conversion-focused CTAs, and SEO metadata.' },
    { question: 'Can Next.js support dashboards?', answer: 'Yes. Next.js is well suited for authenticated business interfaces, dashboard views, reusable components, and API-connected workflows.' },
    { question: 'Do you use Tailwind CSS with Next.js?', answer: 'Yes. Tailwind CSS is used to build consistent, responsive, and maintainable interface systems when it fits the project.' }
  ],
  schemaDescription: 'Next.js development services and expertise from V. Rajmani Nadar.'
};

export default function NextjsDeveloperPage() { return <SeoLandingPage data={data} />; }
