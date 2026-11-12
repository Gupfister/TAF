import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/operacao-tin/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Operação TIN',
        short_name: 'Operação TIN',
        description: 'Preparação física para o TACF',
        theme_color: '#080d18',
        background_color: '#080d18',
        display: 'standalone',
        start_url: '/operacao-tin/',
        icons: [
          { src: '/operacao-tin/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/operacao-tin/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
})
