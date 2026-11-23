import { Projects } from '@/components/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | V. Rajmani Nadar | Rajmani Dev',
  description: 'Selected web projects by V. Rajmani Nadar, including a QR code generator, healthcare and business websites, and a grocery e-commerce experience.',
  alternates: { canonical: 'https://rajmani-dev.vercel.app/projects' },
  openGraph: {
    title: 'Projects | V. Rajmani Nadar | Rajmani Dev',
    description: 'Selected web projects including a QR code generator, healthcare and business websites, and a grocery e-commerce experience.',
    url: 'https://rajmani-dev.vercel.app/projects',
    siteName: 'Rajmani Dev',
    type: 'website',
    images: ['/images/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | V. Rajmani Nadar | Rajmani Dev',
    description: 'Selected web projects including a QR code generator, healthcare and business websites, and a grocery e-commerce experience.',
    images: ['/images/og-image.jpg']
  }
};

export default function ProjectsPage() {
  return <Projects standalone />;
}
