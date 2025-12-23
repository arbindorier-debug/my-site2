<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-site2/', // <- имя репозитория на GitHub
  plugins: [react()],
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
>>>>>>> main
});
