import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Ensure relative path for Netlify
  plugins: [react()],
  base: '/',
})
