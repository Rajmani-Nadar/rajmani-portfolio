import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionReveal } from '@/components/SectionReveal';
import type { Metadata } from 'next';

const projects = [
  {
    title: 'Sonali Wires',
    description:
      'Migrated the corporate website to Next.js with a Strapi headless CMS backend, significantly improving performance, SEO, and content scalability. Implemented structured metadata and optimized Lighthouse scores while enabling the marketing team to manage content independently via Strapi. Deployed on a dedicated Linux server with separate frontend and backend services.',
    meta: 'Next.js + Strapi',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Strapi (Headless CMS)',
      'REST APIs',
      'SEO Optimization',
      'Linux Server Deployment',
      'Nginx / PM2'
    ],
    liveLinks: [
      { label: 'Frontend (Next.js)', url: 'http://69.62.81.102:3000/' },
      { label: 'Backend (Strapi Admin)', url: 'http://69.62.81.102:1337/admin/' }
    ],
    architecture:
      'Next.js frontend on port 3000 consumes REST APIs from a Strapi headless CMS backend on port 1337; both services run on a dedicated Linux server.',
    tags: ['Production Deployment', 'Headless CMS Architecture', 'Server-Based Hosting', 'SEO Optimized']
  },
  {
    title: 'Fire Extinguisher Inspection System',
    description:
      'Customized ERPNext to digitize inspection checklists, automate scheduling, and generate compliance-ready reports for field teams.',
    meta: 'ERPNext customization',
    stack: ['Frappe', 'ERPNext', 'Python', 'DocTypes', 'Workflow', 'Print Formats']
  },
  {
    title: 'WERP',
    description:
      'Built a React-based ERP frontend with modular components, role-based access, and automated testing to keep releases predictable.',
    meta: 'React ERP frontend',
    stack: ['React', 'TypeScript', 'REST APIs', 'Playwright', 'Tailwind']
  }
];

export const metadata: Metadata = {
  title: 'Projects | V. Rajmani',
  description: 'Selected work including Next.js migrations, ERPNext customization, and React-based ERP frontends.'
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Projects"
        title="Recent work"
        subtitle="A snapshot of projects where I solved performance, integration, and workflow challenges."
      />

      <SectionReveal>
        <div className="grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
