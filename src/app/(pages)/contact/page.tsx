import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { SectionReveal } from '@/components/SectionReveal';

export const metadata: Metadata = {
  title: 'Contact | V. Rajmani',
  description: 'Get in touch with V. Rajmani for web platform projects and collaborations.'
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something reliable and fast"
        subtitle="Reach out for freelance, contract, or full-time collaborations."
      />

      <SectionReveal>
        <ContactForm />
      </SectionReveal>
    </div>
  );
}
