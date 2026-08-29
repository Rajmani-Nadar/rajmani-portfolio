import type { MetadataRoute } from 'next';
import { blogArticles } from '@/lib/blog';

const baseUrl = 'https://rajmani-dev.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/projects', '/experience', '/contact', '/blog', ...blogArticles.map((article) => `/blog/${article.slug}`)];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: route === '' ? baseUrl : `${baseUrl}${route}`,
    lastModified,
    changefreq: 'weekly',
    priority: route === '' ? 1 : 0.8
  }));
}
