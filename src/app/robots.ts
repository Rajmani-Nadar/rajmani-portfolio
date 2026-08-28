import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://rajmani-dev.vercel.app/sitemap.xml',
    host: 'https://rajmani-dev.vercel.app'
  };
}