import type { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact | V. Rajmani Nadar | Rajmani Dev',
  description: 'Contact V. Rajmani Nadar about freelance website development, redesigns, and collaborations.',
  alternates: { canonical: 'https://rajmani-dev.vercel.app/contact' },
  openGraph: {
    title: 'Contact V. Rajmani Nadar | Rajmani Dev',
    description: 'Get in touch about freelance website development, redesigns, and collaborations.',
    url: 'https://rajmani-dev.vercel.app/contact',
    siteName: 'Rajmani Dev',
    type: 'website',
    images: ['/images/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact V. Rajmani Nadar | Rajmani Dev',
    description: 'Get in touch about freelance website development, redesigns, and collaborations.',
    images: ['/images/og-image.jpg']
  }
};

export default function ContactPage() {
  return <ContactSection standalone />;
}
