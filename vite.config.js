import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Add specific external dependencies only if necessary
      external: [],
    },
  },
  resolve: {
    alias: {
      // Use `@` as an alias for `src` directory
      '@': path.resolve(__dirname, './src'),
    },
  },
});
