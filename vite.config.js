import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  
  // vite.config.js
  server: {
    host:  '0.0.0.0',
    port: 5174,
    open: true,
    strictPort: true,
    hmr: {
      overlay: false,
    },
  },


  plugins: [react()],
})