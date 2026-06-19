import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://davidplappert.com',
  integrations: [tailwind()],
  build: {
    format: 'directory',
  },
  redirects: {
    '/contact': '/',
    '/services': '/',
    '/about': '/',
    '/resume': '/',
    '/book': '/',
    '/case-studies': '/',
    '/faq': '/',
    '/testimonials': '/',
    '/press': '/',
    '/guides/vendor-shipped-aws-gatekeeping': '/',
  },
});
