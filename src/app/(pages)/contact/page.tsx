import type { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact | V. Rajmani',
  description: 'Get in touch with V. Rajmani for web platform projects and collaborations.'
};

export default function ContactPage() {
  return <ContactSection />;
}
