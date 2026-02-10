import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { PageTransition } from '@/components/PageTransition';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' });

export const metadata: Metadata = {
  title: 'V. Rajmani | Web Platform Developer',
  description:
    'Portfolio of V. Rajmani, a Web Platform Developer specializing in React, Next.js, Frappe/ERPNext, and API-first solutions.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'V. Rajmani | Web Platform Developer',
    description:
      'Building performant web platforms with React, Next.js, Frappe/ERPNext, and API-first architectures.',
    url: 'https://example.com',
    siteName: 'V. Rajmani Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V. Rajmani | Web Platform Developer',
    description:
      'Building performant web platforms with React, Next.js, Frappe/ERPNext, and API-first architectures.'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-background text-white antialiased">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,255,203,0.12),transparent_25%),radial-gradient(circle_at_80%_0,rgba(93,160,255,0.12),transparent_25%)]" />
          <div className="pointer-events-none fixed inset-0 bg-grid opacity-40" />
          <main className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto py-10 sm:py-14">
            <NavBar />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
