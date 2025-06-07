import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0', // Bind to all interfaces
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'enkai-sushi-layout.onrender.com',
      '.onrender.com', // Cho phép tất cả subdomain của onrender.com
    ],
    open: false, // Tắt auto-open cho deployment
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'enkai-sushi-layout.onrender.com',
      '.onrender.com',
    ],
  }
})
