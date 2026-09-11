// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',
  base: '/regalo-manga', // Recuerda cambiar TU-USUARIO por tu usuario real de GitHub
  vite: {
    plugins: [tailwindcss()]
  }
});