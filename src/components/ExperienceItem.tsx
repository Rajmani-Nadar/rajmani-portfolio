import { Badge } from './Tag';

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  tools: string[];
}

export function ExperienceItem({ company, role, period, achievements, tools }: ExperienceItemProps) {
  return (
    <div className="section-shell p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">{company}</p>
          <h3 className="text-xl font-semibold text-white">{role}</h3>
          <p className="text-muted text-sm">{period}</p>
        </div>
        <Badge variant="glow">Experience</Badge>
      </div>
      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted">
        {achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span key={tool} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted border border-white/5">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
