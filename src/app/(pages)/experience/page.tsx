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
          period="2023 – Present"
          achievements={[
            'Migrated marketing and product sites to Next.js, increasing performance scores and SEO readiness.',
            'Customized ERPNext workflows for inspection and procurement, reducing manual steps for field teams.',
            'Implemented testing (Playwright) for ERP frontend modules, catching regressions before release.',
            'Collaborated with designers and content teams to streamline CMS handoffs using Strapi and reusable components.'
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
