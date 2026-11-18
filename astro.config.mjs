import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://saultoast.github.io',
  output: 'static',
  integrations: [mdx()],
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
