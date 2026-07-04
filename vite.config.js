import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // `vite build` and `vite preview` both run in "production" mode, so the
  // GitHub Pages base path stays consistent between the built files and the
  // server that previews them. `vite dev` runs in "development" mode and
  // serves from root for convenient local browsing.
  base: mode === 'production' ? '/Abraham-public-college/' : '/',
  plugins: [react(), tailwindcss()],
}))
