'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Clock3, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { BlogArticle } from '@/lib/blog';
import { Button } from '@/components/Button';

const relatedSlugs = [
  'react-nextjs-business-website-development',
  'erpnext-dashboard-customization',
  'frappe-framework-frontend-development',
  'cms-safe-html-css-components'
];

export function BlogIndex({ articles }: { articles: BlogArticle[] }) {
  return (
    <>
      <Script id="blog-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rajmani-dev.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://rajmani-dev.vercel.app/blog' }
          ]
        })}
      </Script>
      <main className="space-y-10 pb-10 sm:space-y-12">
      <section className="pt-4 sm:pt-8">
        <div className="mb-6 text-sm text-[#f9d977]"><Link href="/" className="hover:text-white">Home</Link><span className="px-2 text-white/35">/</span><span className="text-white/65">Blog</span></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Developer Journal</p>
          <h1 className="text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl">Notes on frontend platforms and useful interfaces.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">Practical writing about React, Next.js, ERPNext, Frappe Framework, Strapi, CMS development, and the details that make business software easier to use.</p>
        </motion.div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <motion.article key={article.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.06 }} whileHover={{ y: -6 }} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#121212]">
            <Link href={`/blog/${article.slug}`} className="block">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                <Image src={article.coverImage} alt={article.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/55"><span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-2.5 py-1 text-[#f9d977]">{article.category}</span><span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" />{article.readingTime}</span><span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{article.publishedAt}</span></div>
                <h2 className="mt-5 text-xl font-semibold leading-tight text-white">{article.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">{article.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f9d977]">Read Article <ArrowUpRight className="h-4 w-4" /></span>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>
      </main>
    </>
  );
}

export function BlogArticlePage({ article, relatedArticles }: { article: BlogArticle; relatedArticles: BlogArticle[] }) {
  return (
    <main className="space-y-10 pb-10 sm:space-y-12">
      <article>
        <div className="mb-6 flex items-center gap-2 text-sm text-[#f9d977]"><Link href="/" className="hover:text-white">Home</Link><span className="text-white/35">/</span><Link href="/blog" className="hover:text-white">Blog</Link><span className="text-white/35">/</span><span className="text-white/65">{article.category}</span></div>
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1.5 text-xs font-semibold text-[#f9d977]">{article.category}</span>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-8 text-white/70">{article.description}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/55"><span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#D4AF37]" />{article.publishedAt}</span><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#D4AF37]" />{article.readingTime}</span></div>
        </motion.header>
        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-3xl border border-[#D4AF37]/25"><Image src={article.coverImage} alt={article.title} fill priority className="object-cover" sizes="(max-width:1024px) 100vw, 1024px" /></div>
        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/75">
          {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </article>

      <section className="border-t border-white/10 pt-8">
        <div className="mb-5 flex items-center justify-between gap-4"><div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Related Articles</p><h2 className="text-2xl font-bold text-white sm:text-3xl">Keep reading.</h2></div><Button href="/blog" variant="ghost">All Articles</Button></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedArticles.map((related) => <Link key={related.slug} href={`/blog/${related.slug}`} className="group rounded-2xl border border-white/10 bg-[#121212] p-4 transition hover:-translate-y-1 hover:border-[#D4AF37]/30"><p className="text-xs text-[#f9d977]">{related.category}</p><h3 className="mt-3 text-base font-semibold leading-6 text-white">{related.title}</h3><span className="mt-4 inline-flex items-center gap-1 text-xs text-white/55 group-hover:text-[#f9d977]">Read article <ArrowUpRight className="h-3.5 w-3.5" /></span></Link>)}
        </div>
      </section>

      <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#f9d977] hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to the blog</Link>
    </main>
  );
}

export function getRelatedArticles(currentSlug: string, articles: BlogArticle[]) {
  const preferred = relatedSlugs.map((slug) => articles.find((article) => article.slug === slug)).filter((article): article is BlogArticle => article !== undefined && article.slug !== currentSlug);
  const fallback = articles.filter((article) => article.slug !== currentSlug && !preferred.some((item) => item.slug === article.slug));
  return [...preferred, ...fallback].slice(0, 4);
}
