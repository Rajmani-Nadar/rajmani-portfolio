import { SectionHeader } from '@/components/SectionHeader';
import { Badge } from '@/components/Tag';
import { SectionReveal } from '@/components/SectionReveal';
import type { Metadata } from 'next';

const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Frappe Framework', 'ERPNext', 'Strapi', 'REST APIs', 'MySQL', 'Playwright'];
const tools = ['Git', 'CI/CD', 'Linux server deployments', 'Nginx/PM2', 'SEO audits', 'Postman', 'Frappe Desk', 'VS Code'];

export const metadata: Metadata = {
  title: 'About | V. Rajmani',
  description: 'Professional summary, skills, and toolkit of V. Rajmani, Web Platform Developer.'
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="About"
        title="I ship stable, discoverable, and maintainable web products."
        subtitle="I blend product thinking with platform rigor—covering frontend craft, ERP customization, and API-first delivery."
      />

      <SectionReveal className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="section-shell p-6 space-y-4 prose-custom">
          <p>
            I'm V. Rajmani, a Web Platform Developer with 1+ year of experience building React and Next.js applications, integrating with ERPNext using the Frappe framework, and enabling content teams through Strapi and RESTful APIs.
          </p>
          <p>
            I focus on performance, clean API contracts, and SEO-friendly implementations. My work spans migrating legacy sites to Next.js, optimizing search visibility, and tailoring ERPNext to match field operations like inspections and procurement.
          </p>
          <p>
            Outside of shipping features, I invest in testing strategy (unit + e2e), CI/CD hygiene, and documentation so teams can move faster without surprises.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glow">Open to remote, hybrid, onsite</Badge>
            <Badge>India timezone</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <div className="section-shell p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="section-shell p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Tools & Practices</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted border border-white/5">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
