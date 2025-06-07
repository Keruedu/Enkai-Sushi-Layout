import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Cho phép truy cập từ bên ngoài
    open: true, // Tự động mở browser khi start
  },
  preview: {
    port: 4173,
    host: true,
  }
})
