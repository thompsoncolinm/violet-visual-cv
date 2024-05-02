import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/edge';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // 'server' or 'hybrid'
  adapter: vercel(),
  buildOptions: {
    site: 'https://violet-visual-cv.vercel.app', // replace with your Vercel URL
  },
  ssr: {
    target: 'webworker',
  },
});