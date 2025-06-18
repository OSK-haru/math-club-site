import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/math-club-site/', 
  plugins: [react()],
});
