import type { MetadataRoute } from 'next';

const baseUrl = 'https://rajmani-portfolio-2001.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/projects', '/experience', '/contact'];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: route === '' ? baseUrl : `${baseUrl}${route}`,
    lastModified,
    changefreq: 'weekly',
    priority: route === '' ? 1 : 0.8
  }));
}
