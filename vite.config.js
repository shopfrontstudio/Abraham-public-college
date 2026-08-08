import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from the custom domain root (www.abrahampubliccollege.com), so
  // assets resolve from '/' in every mode — no repo sub-path anymore.
  base: '/',
  plugins: [react(), tailwindcss()],
})
