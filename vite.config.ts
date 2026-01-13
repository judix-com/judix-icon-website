import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = '/judix-icon-website/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : repoBase,
}))
