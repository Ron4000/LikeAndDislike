import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/LikeAndDislike/',
  build: {
    outDir: './docs',
    emptyOutDir: true,
    minify: false,
  },
})