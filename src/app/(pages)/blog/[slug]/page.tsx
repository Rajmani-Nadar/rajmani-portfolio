import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogArticlePage } from '@/components/BlogPages';
import { blogArticles, getArticleBySlug } from '@/lib/blog';

const siteUrl = 'https://rajmani-dev.vercel.app';

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = `${siteUrl}/blog/${article.slug}`;
  return {
    title: `${article.title} | V. Rajmani Nadar`,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, url, siteName: 'V. Rajmani Portfolio', type: 'article', publishedTime: article.publishedAt, authors: ['V. Rajmani Nadar'], images: [`${siteUrl}/blog/${article.slug}/opengraph-image`] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [`${siteUrl}/blog/${article.slug}/opengraph-image`] },
    robots: { index: true, follow: true }
  };
}

export default function BlogArticleRoute({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedArticles = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 4);
  return <BlogArticlePage article={article} relatedArticles={relatedArticles} />;
}
