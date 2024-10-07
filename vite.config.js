import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    manifest: {
      name: 'Votre Application',
      short_name: 'App',
      description: 'Une description de votre application',
      theme_color: '#ffffff',
      start_url: '/',
      display: 'standalone'
    }
  })],
  /*server: {
    host: '192.168.11.116',
    port: 3000
  }*/
})
