import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), astroI18next()],
  devToolbar: {
    enabled: false
  }
});
