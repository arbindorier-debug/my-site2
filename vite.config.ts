import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-site2/', // <- имя репозитория на GitHub
  plugins: [react()],
});
