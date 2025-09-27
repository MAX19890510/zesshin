import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      '@components': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '@lib': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/lib'),
    }
  }
})
