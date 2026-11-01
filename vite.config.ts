import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/projetoBanestes/', // Substitua pelo nome do seu repositório
  test: {
    environment: 'jsdom',
  },
});
