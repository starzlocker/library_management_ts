/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/config/setupTests.ts'],
  },
  resolve: {
    alias: {
        '@': resolve(__dirname, '/src'),
    },
  },
})
