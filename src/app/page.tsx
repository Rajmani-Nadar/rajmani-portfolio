import { About } from '@/components/About';
import { ContactSection } from '@/components/ContactSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { GithubSection } from '@/components/Github';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Skills } from '@/components/Skills';
import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
  return (
    <main className="space-y-8 pb-10 sm:space-y-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceTimeline />
      <Services />
      <GithubSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
