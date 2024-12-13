import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'MyPortfolio', // Adjust if deploying to subdirectories, e.g., '/your-repo-name/' for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist', // Specifies the output directory for production builds
  },
});
