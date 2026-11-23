import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | V. Rajmani Nadar | Rajmani Dev',
  description: 'Professional experience of V. Rajmani Nadar in frontend development, CMS website delivery, client support, and ERPNext platform customization.',
  alternates: { canonical: 'https://rajmani-dev.vercel.app/experience' },
  openGraph: {
    title: 'Experience | V. Rajmani Nadar | Rajmani Dev',
    description: 'Frontend development, CMS website delivery, client support, and ERPNext platform customization experience.',
    url: 'https://rajmani-dev.vercel.app/experience',
    siteName: 'Rajmani Dev',
    type: 'website',
    images: ['/images/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | V. Rajmani Nadar | Rajmani Dev',
    description: 'Frontend development, CMS website delivery, client support, and ERPNext platform customization experience.',
    images: ['/images/og-image.jpg']
  }
};

export default function ExperiencePage() {
  return <ExperienceTimeline standalone />;
}
