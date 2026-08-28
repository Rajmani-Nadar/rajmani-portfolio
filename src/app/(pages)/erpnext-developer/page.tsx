import type { Metadata } from 'next';
import { SeoLandingPage } from '@/components/SeoLandingPage';

const url = 'https://rajmani-dev.vercel.app/erpnext-developer';

export const metadata: Metadata = {
  title: 'ERPNext & Frappe Frontend Developer | V. Rajmani Nadar',
  description: 'Frontend developer experienced in ERPNext, Frappe Framework, dashboard customization, CMS-backed business workflows, reusable UI components, and business interfaces.',
  keywords: ['ERPNext Developer', 'Frappe Framework Developer', 'ERPNext Dashboard UI', 'ERPNext Frontend Customization', 'Frappe Dashboard Developer', 'ERPNext UI Developer'],
  alternates: { canonical: url },
  openGraph: { title: 'ERPNext & Frappe Frontend Developer | V. Rajmani Nadar', description: 'Frontend developer experienced in ERPNext, Frappe Framework, dashboard customization, CMS-backed business workflows, reusable UI components, and business interfaces.', url, siteName: 'V. Rajmani Portfolio', type: 'website', images: ['/images/og-image.png'] },
  twitter: { card: 'summary_large_image', title: 'ERPNext & Frappe Frontend Developer | V. Rajmani Nadar', description: 'Frontend developer experienced in ERPNext, Frappe Framework, dashboard customization, CMS-backed business workflows, reusable UI components, and business interfaces.', images: ['/images/og-image.png'] },
  robots: { index: true, follow: true }
};

const data = {
  slug: 'erpnext-developer', label: 'ERPNext Developer', title: 'ERPNext & Frappe Frontend Development',
  subtitle: 'Creating responsive ERP interfaces, dashboard experiences, and CMS-backed business workflows with ERPNext and the Frappe Framework.',
  intro: 'I work at the frontend layer of ERPNext and Frappe business platforms, translating operational requirements into clear interfaces. My experience includes dashboard UI development, reusable components, responsive ERP interfaces, and CMS integrations.',
  sections: [
    { title: 'ERPNext Dashboard UI', description: 'Customize dashboard views and interface patterns to make business information easier to scan and act on.' },
    { title: 'Portal Page Customization', description: 'Adapt ERPNext portal pages and frontend layouts for practical business and customer-facing workflows.' },
    { title: 'Frappe Framework Frontend', description: 'Build and enhance frontend experiences within CMS-backed applications powered by the Frappe Framework.' },
    { title: 'Business Workflow Interfaces', description: 'Shape reusable interface components around the way teams manage real business processes.' },
    { title: 'Responsive ERP Interfaces', description: 'Improve usability across screen sizes so business interfaces remain useful beyond a single desktop view.' },
    { title: 'Dashboard UX Improvements', description: 'Refine hierarchy, navigation, and interaction details to make dashboard workflows more understandable.' }
  ],
  projects: ['Ragini Diagnostics', 'Hariharan Waterproofing', 'Grocery E-Commerce'],
  professionalExperience: {
    company: 'Sanvro Technologies',
    role: 'Frontend Developer',
    items: ['ERPNext interface customization.', 'Frappe Framework frontend.', 'Dashboard UI development.', 'Business workflow interfaces.', 'Strapi Headless CMS integration experience.']
  },
  faqs: [
    { question: 'What is ERPNext frontend customization?', answer: 'It is the process of adapting ERPNext pages, dashboards, portal views, and interface patterns to fit a business application and its users.' },
    { question: 'What is Frappe Framework UI development?', answer: 'It involves building and refining frontend experiences within applications and business platforms powered by the Frappe Framework.' },
    { question: 'Can ERPNext dashboards be customized?', answer: 'Yes. Dashboard layouts, components, hierarchy, and responsive behavior can be improved to support specific operational workflows.' },
    { question: 'Do you integrate ERPNext with CMS platforms?', answer: 'My professional experience includes CMS-backed business platforms and Strapi Headless CMS integration alongside ERPNext frontend work.' },
    { question: 'Can you customize ERPNext portal pages?', answer: 'Yes. Portal pages and frontend layouts can be tailored for clearer customer, team, and business application experiences.' }
  ],
  schemaDescription: 'ERPNext and Frappe Framework frontend development expertise from V. Rajmani Nadar.'
};

export default function ErpnextDeveloperPage() { return <SeoLandingPage data={data} />; }
