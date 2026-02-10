import { Button } from '@/components/Button';
import { Badge } from '@/components/Tag';
import { SectionReveal } from '@/components/SectionReveal';
import Link from 'next/link';

const highlights = [
  {
    title: 'Platform-first mindset',
    description: 'Designing modular frontends that integrate with ERP, CMS, and REST ecosystems without sacrificing performance.'
  },
  {
    title: 'API craftsmanship',
    description: 'Building clean API contracts and resilient data flows between Next.js, Strapi, and ERPNext/Frappe backends.'
  },
  {
    title: 'Operational quality',
    description: 'Testing strategy, observability, and SEO baked in to keep releases stable and discoverable.'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-14">
      <SectionReveal className="section-shell p-6 sm:p-10 overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <Badge variant="glow">Web Platform Developer</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Hi, I'm V. Rajmani. I build performant web platforms that connect product, content, and ERP flows.
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              1+ year shaping React and Next.js experiences, customizing ERPNext with Frappe, and shipping API-first solutions that stay fast, reliable, and search-friendly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/projects" size="lg">
                View projects
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Contact
              </Button>
              <Button href="https://github.com/Rajmani-Nadar" variant="ghost" size="lg" newTab>
                GitHub
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 text-xs text-muted">
              {['React', 'Next.js', 'Frappe/ERPNext', 'Strapi', 'REST APIs', 'MySQL'].map((skill) => (
                <span key={skill} className="rounded-full bg-white/5 px-3 py-1 border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="section-shell p-6 bg-gradient-to-br from-white/5 via-surface to-black/20 border-white/10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-xs text-muted">Currently</p>
                <p className="text-white font-semibold">Web Platform Developer</p>
                <p className="text-sm text-muted">Suraj Technologies Pvt Ltd</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-xs text-muted">Location</p>
                <p className="text-white font-semibold">India</p>
                <p className="text-sm text-muted">Open to remote, hybrid, or onsite</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 sm:col-span-2">
                <p className="text-xs text-muted">Focus</p>
                <p className="text-white font-semibold">Composable web + ERP integrations</p>
                <p className="text-sm text-muted">Clean APIs • SEO-first builds • Testable delivery</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">What I bring</p>
            <h2 className="text-2xl sm:text-3xl font-semibold">Product-minded engineering</h2>
          </div>
          <Link href="/about" className="text-sm text-accent hover:text-accent2">About →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="section-shell p-5 sm:p-6 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-muted text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
