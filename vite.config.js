import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MyPortfolio/', // Ensure this is the correct path
  plugins: [react()],
});
