import { About } from '@/components/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | V. Rajmani',
  description: 'Professional summary, skills, and toolkit of V. Rajmani, Web Platform Developer.'
};

export default function AboutPage() {
  return <About />;
}
