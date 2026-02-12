import { SectionHeader } from '@/components/SectionHeader';
import { ExperienceItem } from '@/components/ExperienceItem';
import { SectionReveal } from '@/components/SectionReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | V. Rajmani',
  description: 'Professional experience of V. Rajmani as a Web Platform Developer.'
};

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Experience"
        title="Roles and impact"
        subtitle="Hands-on work delivering product features, platform integrations, and quality practices."
      />

      <SectionReveal>
        <ExperienceItem
          company="Suraj Technologies Pvt Ltd"
          role="Web Platform Developer"
          period="Jan 2025 - Feb 2026"
          achievements={[
            "Migrated marketing and product sites to Next.js, improving performance scores and SEO.",
            "Customized ERPNext workflows for inspection and procurement, reducing manual steps.",
            "Implemented Playwright testing for ERP frontend modules to prevent regressions.",
            "Collaborated with designers and content teams to streamline CMS workflows using Strapi."
          ]}
          tools={[
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind',
            'Frappe/ERPNext',
            'Strapi',
            'REST APIs',
            'MySQL',
            'Playwright'
          ]}
        />
      </SectionReveal>
    </div>
  );
}
