import { blogArticles } from '@/lib/blog';

const siteUrl = 'https://rajmani-dev.vercel.app';

export function GET() {
  const items = blogArticles
    .map(
      (article) => `
        <item>
          <title><![CDATA[${article.title}]]></title>
          <link>${siteUrl}/blog/${article.slug}</link>
          <guid>${siteUrl}/blog/${article.slug}</guid>
          <description><![CDATA[${article.description}]]></description>
          <pubDate>${new Date(`${article.publishedAt}T00:00:00.000Z`).toUTCString()}</pubDate>
          <category><![CDATA[${article.category}]]></category>
        </item>`
    )
    .join('');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>V. Rajmani Developer Blog</title>
        <link>${siteUrl}/blog</link>
        <description>Articles about frontend development, React, Next.js, ERPNext, Frappe, Strapi, and CMS platforms.</description>
        <language>en-IN</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(feed, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
