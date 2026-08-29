import type { Metadata } from 'next';
import { BlogIndex } from '@/components/BlogPages';
import { blogArticles } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Developer Blog | V. Rajmani Nadar',
  description: 'Practical articles about React, Next.js, ERPNext, Frappe Framework, Strapi Headless CMS, and frontend development.',
  alternates: { canonical: 'https://rajmani-dev.vercel.app/blog' },
  openGraph: { title: 'Developer Blog | V. Rajmani Nadar', description: 'Practical articles about React, Next.js, ERPNext, Frappe Framework, Strapi Headless CMS, and frontend development.', url: 'https://rajmani-dev.vercel.app/blog', siteName: 'V. Rajmani Portfolio', type: 'website', images: ['/images/og-image.png'] },
  twitter: { card: 'summary_large_image', title: 'Developer Blog | V. Rajmani Nadar', description: 'Practical articles about React, Next.js, ERPNext, Frappe Framework, Strapi Headless CMS, and frontend development.', images: ['/images/og-image.png'] },
  robots: { index: true, follow: true }
};

export default function BlogPage() {
  return <BlogIndex articles={blogArticles} />;
}
