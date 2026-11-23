import { About } from '@/components/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | V. Rajmani Nadar | Rajmani Dev',
  description: 'Learn about V. Rajmani Nadar’s frontend development background, technical skills, and experience building responsive websites and business interfaces.',
  alternates: { canonical: 'https://rajmani-dev.vercel.app/about' },
  openGraph: {
    title: 'About V. Rajmani Nadar | Rajmani Dev',
    description: 'Frontend development background, technical skills, and experience building responsive websites and business interfaces.',
    url: 'https://rajmani-dev.vercel.app/about',
    siteName: 'Rajmani Dev',
    type: 'website',
    images: ['/images/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About V. Rajmani Nadar | Rajmani Dev',
    description: 'Frontend development background, technical skills, and experience building responsive websites and business interfaces.',
    images: ['/images/og-image.jpg']
  }
};

export default function AboutPage() {
  return <About standalone />;
}
