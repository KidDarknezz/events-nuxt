import { defineConfig } from 'vitest/config'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
      '~': path.resolve(__dirname, 'app')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,js}'],
    coverage: {
      provider: 'istanbul', // built-in provider
      reporter: ['text', 'lcov'], // shows coverage in terminal + generates lcov report
      all: true, // collect coverage for all files, not just tested files
      src: ['app'] // folder to collect coverage from
    }
  }
})
