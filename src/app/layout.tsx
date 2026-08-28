import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { PageTransition } from '@/components/PageTransition';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ThemeProvider } from '@/components/ThemeProvider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'V. Rajmani Nadar | Frontend Web Platform Developer',
  description:
    'Frontend Web Platform Developer building fast, modern and elegant websites with React, Next.js and TypeScript.',
  metadataBase: new URL('https://rajmani-portfolio-2001.vercel.app'),
  openGraph: {
    title: 'V. Rajmani Nadar | Frontend Web Platform Developer',
    description: 'Building fast, modern and elegant websites with React, Next.js and TypeScript.',
    url: 'https://rajmani-portfolio-2001.vercel.app',
    siteName: 'V. Rajmani Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V. Rajmani Nadar | Frontend Web Platform Developer',
    description: 'Building fast, modern and elegant websites with React, Next.js and TypeScript.'
  },
  verification: {
    google: 'fxmTqqQEOTeQ9X7FVo88NkTNyjVEZWZFV6C-2yCYnQI'
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#0B0B0B] text-white antialiased transition-colors duration-300">
        <ThemeProvider>
          <ScrollProgress />
          <div className="relative overflow-hidden">
            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_25%),radial-gradient(circle_at_80%_0,rgba(255,255,255,0.08),transparent_25%)]" />
            <div className="pointer-events-none fixed inset-0 bg-grid opacity-30" />
            <div className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6 lg:px-8 lg:pt-8">
              <NavBar />
              <PageTransition>{children}</PageTransition>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
