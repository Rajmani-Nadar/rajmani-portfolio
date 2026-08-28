import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/SeoLandingPage';

const url = 'https://rajmani-dev.vercel.app/react-developer';

export const metadata: Metadata = {
  title: 'React Developer | V. Rajmani Nadar',
  description: 'React developer specializing in responsive business websites, reusable UI components, dashboard interfaces, and frontend application development.',
  keywords: ['React Developer', 'React Web Application Development', 'Reusable React Components', 'React Dashboard Developer', 'Responsive React UI', 'React Frontend Developer India'],
  alternates: { canonical: url },
  openGraph: { title: 'React Developer | V. Rajmani Nadar', description: 'React developer specializing in responsive business websites, reusable UI components, dashboard interfaces, and frontend application development.', url, siteName: 'V. Rajmani Portfolio', type: 'website', images: ['/images/og-image.png'] },
  twitter: { card: 'summary_large_image', title: 'React Developer | V. Rajmani Nadar', description: 'React developer specializing in responsive business websites, reusable UI components, dashboard interfaces, and frontend application development.', images: ['/images/og-image.png'] },
  robots: { index: true, follow: true }
};

const data = {
  slug: 'react-developer', label: 'React Developer', title: 'React Developer for Responsive Business Applications',
  subtitle: 'Building reusable React interfaces, responsive business websites, dashboard experiences, and API-ready frontend applications.',
  intro: 'I use React to turn product requirements into clear, flexible interfaces. Component-based development keeps the codebase maintainable while thoughtful responsive UI, API integration, and performance work keep the experience reliable for real users.',
  sections: [
    { title: 'React Expertise', description: 'Build polished React interfaces for business websites, application views, and customer-facing digital products.' },
    { title: 'Component-based Development', description: 'Create reusable UI components and consistent patterns that make future product work faster and safer.' },
    { title: 'Responsive UI', description: 'Design layouts that adapt naturally across devices without sacrificing clarity or interaction quality.' },
    { title: 'API-ready Frontend Architecture', description: 'Connect frontend interfaces to CMS and backend APIs for dynamic, structured content rendering.' },
    { title: 'Performance Optimization', description: 'Keep interfaces focused and efficient through sensible structure, asset choices, and rendering decisions.' },
    { title: 'Business Application UI', description: 'Translate workflows and operational requirements into interfaces that teams can understand and use.' }
  ],
  projects: ['Ragini Diagnostics', 'Grocery E-Commerce', 'Personal Portfolio'],
  faqs: [
    { question: 'Why use React for business applications?', answer: 'React supports reusable components and predictable UI patterns, making complex business applications easier to maintain and extend.' },
    { question: 'What types of websites do you build using React?', answer: 'I build responsive business websites, landing pages, dashboard interfaces, CMS-driven experiences, and frontend applications.' },
    { question: 'Can React applications connect to APIs?', answer: 'Yes. React frontends can integrate with CMS, REST, and backend APIs to render dynamic content and workflows.' },
    { question: 'Do you build responsive React interfaces?', answer: 'Yes. Responsive behavior is considered throughout the component and layout architecture for mobile, tablet, and desktop users.' },
    { question: 'Can you improve an existing React interface?', answer: 'Yes. I can refine component structure, responsive behavior, usability, performance, and visual consistency in existing React products.' }
  ],
  schemaDescription: 'React development services and expertise from V. Rajmani Nadar.'
};

export default function ReactDeveloperPage() { return <SeoLandingPage data={data} />; }
