import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/SeoLandingPage';

const url = 'https://rajmani-dev.vercel.app/services';

export const metadata: Metadata = {
  title: 'Frontend Development & ERPNext Customization Services | V. Rajmani Nadar',
  description: 'Premium React, Next.js, ERPNext, Frappe Framework, CMS, and business workflow web development services by V. Rajmani Nadar.',
  keywords: ['Frontend Development Services', 'React Development Services', 'Next.js Business Websites', 'ERPNext Customization', 'Frappe Framework Development', 'CMS Website Development', 'Responsive UI Development', 'Website SEO Optimization'],
  alternates: { canonical: url },
  openGraph: { title: 'Frontend Development & ERPNext Customization Services', description: 'Building premium React, Next.js, ERPNext, Frappe Framework, CMS, and business workflow web experiences.', url, siteName: 'V. Rajmani Portfolio', type: 'website', images: ['/images/og-image.png'] },
  twitter: { card: 'summary_large_image', title: 'Frontend Development & ERPNext Customization Services', description: 'Building premium React, Next.js, ERPNext, Frappe Framework, CMS, and business workflow web experiences.', images: ['/images/og-image.png'] },
  robots: { index: true, follow: true }
};

const data = {
  slug: 'services', label: 'Services', title: 'Frontend Development & ERPNext Customization Services',
  subtitle: 'Building premium React, Next.js, ERPNext, Frappe Framework, CMS, and business workflow web experiences.',
  intro: 'I help businesses turn complex requirements into responsive, maintainable, and polished digital experiences. From CMS-safe website sections to ERPNext dashboard interfaces, each engagement balances usability, performance, and practical business outcomes.',
  sections: [
    { title: 'React Web Application Development', description: 'Build reusable, component-driven React interfaces for business applications and customer-facing products.' },
    { title: 'Next.js Business Website Development', description: 'Create fast, SEO-friendly business websites, landing pages, and scalable marketing experiences with Next.js.' },
    { title: 'ERPNext Dashboard Customization', description: 'Refine ERPNext interfaces and dashboard layouts so teams can work with greater clarity and efficiency.' },
    { title: 'Frappe Framework Frontend Development', description: 'Develop frontend experiences for CMS-backed business platforms using the Frappe Framework.' },
    { title: 'CMS Website Builder Development', description: 'Create editable Website Builder sections that preserve brand consistency and content flexibility.' },
    { title: 'CMS-safe HTML & CSS Components', description: 'Deliver robust HTML and CSS blocks designed to work reliably inside managed CMS environments.' },
    { title: 'Responsive UI Development', description: 'Shape interfaces that remain clear, accessible, and useful across mobile, tablet, and desktop screens.' },
    { title: 'Website Performance & SEO Optimization', description: 'Improve structure, loading performance, discoverability, and the overall quality of the user experience.' }
  ],
  projects: ['Ragini Diagnostics', 'Hariharan Waterproofing', 'Grocery E-Commerce'],
  whyWorkWithMe: ['Clean reusable frontend code.', 'CMS-safe components.', 'Dashboard customization.', 'Responsive UI.', 'Business workflow interfaces.', 'Performance-first development.'],
  faqs: [
    { question: 'What frontend development services do you provide?', answer: 'I build React and Next.js websites, CMS experiences, dashboards, reusable UI components, and business workflow interfaces.' },
    { question: 'Can you customize ERPNext interfaces?', answer: 'Yes. I work on ERPNext frontend customization, dashboard layouts, portal pages, and responsive business interfaces.' },
    { question: 'Do you build CMS-safe website sections?', answer: 'Yes. I create reusable HTML and CSS sections that are compatible with Website Builder and managed CMS environments.' },
    { question: 'Do you optimize websites for performance and SEO?', answer: 'Yes. Performance, responsive behavior, semantic structure, and SEO-friendly implementation are part of my frontend process.' },
    { question: 'How can I discuss a project?', answer: 'Use the contact section or the Hire Me button to share your goals, platform, and project requirements.' }
  ],
  schemaDescription: 'Frontend development and ERPNext customization services by V. Rajmani Nadar.'
};

export default function ServicesPage() { return <SeoLandingPage data={data} />; }
