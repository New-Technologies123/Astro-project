import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

export default defineConfig({
  integrations: [react(), astroI18next()],
  devToolbar: {
    enabled: false,
  }
  // experimental: {
  //   viewTransitions: true, // Включаем View Transitions
  // },
});