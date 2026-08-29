import { ImageResponse } from 'next/og';
import { getArticleBySlug } from '@/lib/blog';

export const runtime = 'edge';
export const alt = 'V. Rajmani Nadar developer article';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  const title = article?.title ?? 'Developer Blog';
  const category = article?.category ?? 'Frontend Development';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0b0b0b',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          width: '100%',
          height: '100%',
          border: '8px solid #d4af37'
        }}
      >
        <div style={{ color: '#d4af37', fontSize: 28, letterSpacing: 4, textTransform: 'uppercase' }}>{category}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.08 }}>{title}</div>
          <div style={{ color: '#b1b1b1', fontSize: 28 }}>V. Rajmani Nadar | Frontend Web Platform Developer</div>
        </div>
        <div style={{ color: '#f8d974', fontSize: 24 }}>rajmani-dev.vercel.app/blog</div>
      </div>
    ),
    { ...size }
  );
}
