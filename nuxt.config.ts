import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,

  modules: ['@pinia/nuxt'],

  nitro: {
    preset: 'node-server',
  },

  components: {
    dirs: [
      { path: '~/components', pathPrefix: false },
    ],
  },

  build: {
    transpile: ['vuetify'],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://synthetic-courts-production.up.railway.app/api',
    },
  },

  css: ['@mdi/font/css/materialdesignicons.css'],

  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: '2025-01-01',
})
