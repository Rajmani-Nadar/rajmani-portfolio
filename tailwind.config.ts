import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#05060a',
        surface: '#0c0f17',
        accent: '#7CFFCB',
        accent2: '#5da0ff',
        muted: '#9aa4b5'
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 15px 60px rgba(0,0,0,0.35)',
        glow: '0 0 40px rgba(124,255,203,0.3)'
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
