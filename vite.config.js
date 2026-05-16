import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/digital-artist-cohort-26/',
  plugins: [react()],
})
