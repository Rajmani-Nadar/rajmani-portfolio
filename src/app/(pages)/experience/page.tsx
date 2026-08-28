import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | V. Rajmani',
  description: 'Professional experience of V. Rajmani as a Web Platform Developer.'
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
