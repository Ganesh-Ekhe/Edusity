import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4173,
    strictPort: true,
    hmr: {
      port: 443,
    }
  },
  preview: {
    allowedHosts: ['edusity-g7yq.onrender.com']
  }
})
