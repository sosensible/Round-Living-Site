/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    setupFiles: 'src/setupTests.ts',
    includeSource: ['src/**/*.{js,ts,vue}'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
