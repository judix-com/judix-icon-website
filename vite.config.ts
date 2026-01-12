import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = process.env.GITHUB_PAGES === 'true' ? '/judix-icon-website/' : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: repoBase,
})
