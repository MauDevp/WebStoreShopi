import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  // vite.config.js
  server: {
    host: '0.0.0.0',
    hmr: {
      overlay: false,
    },
  },

  plugins: [react()],
})


