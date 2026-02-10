import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/5 pt-6 text-sm text-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p>© {new Date().getFullYear()} V. Rajmani. Crafted with Next.js & Tailwind CSS.</p>
      <div className="flex items-center gap-3">
        <Link href="mailto:rajmaninadar2000@gmail.com" className="hover:text-white transition">
          Email
        </Link>
        <span className="text-white/20">•</span>
        <Link href="https://github.com/Rajmani-Nadar" target="_blank" className="hover:text-white transition">
          GitHub
        </Link>
        <span className="text-white/20">•</span>
        <Link href="https://linkedin.com/in/rajmani-v-5a550b233" target="_blank" className="hover:text-white transition">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
