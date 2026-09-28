import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/15 pt-6 text-sm text-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="text-center sm:text-left text-foreground/80">© {new Date().getFullYear()} V. Rajmani</p>
      <div className="flex items-center gap-3 justify-center sm:justify-end">
        <Link href="mailto:rajmaninadar2000@gmail.com" className="hover:text-foreground transition text-foreground/75">
          Email
        </Link>
        <span className="text-foreground/20">•</span>
        <Link href="https://github.com/Rajmani-Nadar?tab=repositories" target="_blank" className="hover:text-foreground transition text-foreground/75">
          GitHub
        </Link>
        <span className="text-foreground/20">•</span>
        <Link href="https://linkedin.com/in/rajmani-v-5a550b233" target="_blank" className="hover:text-foreground transition text-foreground/75">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
