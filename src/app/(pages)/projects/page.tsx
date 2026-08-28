import { Projects } from '@/components/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | V. Rajmani',
  description: 'Selected work including Next.js migrations, ERPNext customization, and React-based ERP frontends.'
};

export default function ProjectsPage() {
  return <Projects />;
}
