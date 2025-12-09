// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://cheesegratin4.github.io',
  outDir: 'docs',
  trailingSlash: 'always',
  
  build: {
        // 빌드된 CSS/JS 파일 이름에 고유 해시를 추가하여 캐시 무효화 (Cache Busting)
        assets: '_astro',
        assetsPrefix: '/_astro/',
    },
  integrations: [tailwind()], 
});
