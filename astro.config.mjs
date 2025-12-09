// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://cheesegratin4.github.io',
  outDir: 'docs',
  trailingSlash: 'always',
  integrations: [tailwind()], 
});
