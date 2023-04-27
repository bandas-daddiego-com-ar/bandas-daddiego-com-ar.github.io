import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['/icons/icon.png', '/icons/icon.svg'],
      manifest: {
        name: 'Metrónomo',
        short_name: 'Metrónomo',
        description: 'Metrónomo',
        theme_color: '#0c0c0c0',
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
