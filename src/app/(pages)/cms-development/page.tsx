import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/SeoLandingPage';

const url = 'https://rajmani-dev.vercel.app/cms-development';

export const metadata: Metadata = {
  title: 'CMS Website Developer | V. Rajmani Nadar',
  description: 'CMS website developer creating CMS-safe reusable HTML/CSS components, responsive landing pages, Website Builder sections, reusable UI blocks, and business websites.',
  keywords: ['CMS Website Developer', 'CMS-safe HTML CSS', 'Website Builder Developer', 'CMS Landing Pages', 'Business CMS Websites', 'Responsive CMS UI'],
  alternates: { canonical: url },
  openGraph: { title: 'CMS Website Developer | V. Rajmani Nadar', description: 'CMS website developer creating CMS-safe reusable HTML/CSS components, responsive landing pages, Website Builder sections, reusable UI blocks, and business websites.', url, siteName: 'V. Rajmani Portfolio', type: 'website', images: ['/images/og-image.png'] },
  twitter: { card: 'summary_large_image', title: 'CMS Website Developer | V. Rajmani Nadar', description: 'CMS website developer creating CMS-safe reusable HTML/CSS components, responsive landing pages, Website Builder sections, reusable UI blocks, and business websites.', images: ['/images/og-image.png'] },
  robots: { index: true, follow: true }
};

const data = {
  slug: 'cms-development', label: 'CMS Development', title: 'CMS Website Development with Safe, Reusable UI',
  subtitle: 'Creating CMS-safe HTML/CSS components, responsive landing pages, Website Builder sections, and business websites that teams can manage confidently.',
  intro: 'I build CMS experiences that give teams editing flexibility without losing visual quality. The approach emphasizes safe reusable sections, predictable responsive behavior, clear content structure, and practical support after launch.',
  sections: [
    { title: 'CMS-safe HTML & CSS', description: 'Create robust, reusable HTML and CSS blocks designed to work inside managed CMS environments.' },
    { title: 'Website Builder Development', description: 'Customize Website Builder sections so teams can manage content within a consistent visual system.' },
    { title: 'Reusable Landing Page Sections', description: 'Build flexible hero, service, CTA, banner, and content blocks for faster page creation.' },
    { title: 'Business Websites', description: 'Deliver responsive websites that present services clearly and support real business communication.' },
    { title: 'Performance-first CMS UI', description: 'Keep CMS-driven interfaces lightweight, structured, and pleasant to use across devices.' },
    { title: 'Responsive Design System', description: 'Maintain consistent spacing, typography, and behavior across reusable website components.' }
  ],
  projects: ['Ragini Diagnostics', 'Hariharan Waterproofing', 'Premium Car Wash Website'],
  professionalExperience: {
    company: 'JPencil Technologies',
    role: 'Web Platform Developer',
    items: ['CMS-safe reusable HTML/CSS sections.', 'Website Builder customization.', 'Client support and query resolution.', 'Dashboard training.', 'Support ticket management.', 'AnyDesk and UltraViewer support.', 'Website deployment support.']
  },
  faqs: [
    { question: 'What are CMS-safe HTML & CSS components?', answer: 'They are reusable HTML and CSS sections built to work reliably within a CMS or Website Builder without breaking existing page structure.' },
    { question: 'What is a Website Builder component?', answer: 'It is an editable page section that lets content teams update website content while keeping the intended layout and visual style.' },
    { question: 'Can you build responsive CMS landing pages?', answer: 'Yes. I create responsive landing page sections, banners, reusable blocks, and business website layouts for different screen sizes.' },
    { question: 'Do you provide CMS support after launch?', answer: 'Yes. Support can include content updates, CMS usage guidance, deployment support, issue resolution, and post-launch assistance.' },
    { question: 'Can you train teams to use a Website Builder?', answer: 'Yes. I provide dashboard and Website Builder training through tools such as AnyDesk and UltraViewer.' }
  ],
  schemaDescription: 'CMS website development expertise from V. Rajmani Nadar.'
};

export default function CmsDevelopmentPage() { return <SeoLandingPage data={data} />; }
