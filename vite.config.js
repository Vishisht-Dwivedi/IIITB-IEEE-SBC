import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '4121-2405-201-3004-6061-19df-272f-752c-c18a.ngrok-free.app', // Add your ngrok host here
    ]
  }
})
