import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { PageTransition } from '@/components/PageTransition';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ThemeProvider } from '@/components/ThemeProvider';
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'V. Rajmani Nadar | Frontend Developer • ERPNext & Frappe Developer',
  description:
    'Frontend Web Platform Developer specializing in React, Next.js, TypeScript, Tailwind CSS, ERPNext, Frappe Framework, CMS website development, dashboard customization, reusable frontend components, and business workflow interfaces.',
  metadataBase: new URL('https://rajmani-dev.vercel.app'),
  alternates: {
    canonical: 'https://rajmani-dev.vercel.app'
  },
  keywords: [
    'Rajmani Nadar',
    'V Rajmani',
    'Frontend Developer India',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Tailwind CSS Developer',
    'ERPNext Developer',
    'Frappe Framework Developer',
    'CMS Website Developer',
    'Business Website Developer',
    'Dashboard UI Developer',
    'Website Customization',
    'Frontend Web Platform Developer',
    'Software Application UI Developer',
    'Remote Frontend Developer',
    'India Frontend Developer',
    'Chennai Frontend Developer',
    'Portfolio Developer',
    'Reusable UI Components',
    'Business Workflow UI'
  ],
  openGraph: {
    title: 'V. Rajmani Nadar — Frontend Web Platform Developer',
    description: 'Building premium React, Next.js, ERPNext, Frappe, and CMS-powered web experiences.',
    url: 'https://rajmani-dev.vercel.app',
    siteName: 'V. Rajmani Portfolio',
    locale: 'en_US',
    type: 'website',
    images: ['/images/og-image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V. Rajmani Nadar — Frontend Web Platform Developer',
    description: 'Building premium React, Next.js, ERPNext, Frappe, and CMS-powered web experiences.',
    images: ['/images/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1
    }
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
          <Script id="person-schema" type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'V. Rajmani Nadar',
              alternateName: 'Rajmani Nadar',
              jobTitle: 'Frontend Web Platform Developer',
              description:
                'Frontend developer specializing in React, Next.js, TypeScript, ERPNext, Frappe Framework, CMS website development, reusable frontend components, dashboard customization, and business workflow interfaces.',
              url: 'https://rajmani-dev.vercel.app',
              image: 'https://rajmani-dev.vercel.app/images/og-image.png',
              email: 'rajmaninadar2000@gmail.com',
              sameAs: ['https://github.com/Rajmani-Nadar', 'https://www.linkedin.com/in/rajmani-nadar'],
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'ERPNext',
                'Frappe Framework',
                'Strapi Headless CMS',
                'CMS Website Builder',
                'Responsive UI',
                'Frontend Development',
                'Business Workflow UI',
                'Dashboard Customization',
                'SEO-Friendly Website Development',
                'Git',
                'GitHub',
                'Vercel'
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'JPencil Technologies'
              },
              alumniOf: 'Sanvro Technologies'
            })}
          </Script>
          <Script id="website-schema" type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'V. Rajmani Portfolio',
              url: 'https://rajmani-dev.vercel.app',
              description:
                'Portfolio of V. Rajmani Nadar, Frontend Web Platform Developer specializing in React, Next.js, ERPNext, Frappe Framework, and CMS platforms.',
              inLanguage: 'en-IN'
            })}
          </Script>
          <Script id="organization-schema" type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'V. Rajmani Portfolio',
              url: 'https://rajmani-dev.vercel.app',
              logo: 'https://rajmani-dev.vercel.app/images/favicon.png'
            })}
          </Script>
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
