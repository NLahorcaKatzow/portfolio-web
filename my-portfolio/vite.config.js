import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-web/', // 👈 nombre exacto del repositorio
  css: { 
    postcss: './postcss.config.js'
  }
})
