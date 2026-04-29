import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],

  nitro: {
     prerender: {
      crawlLinks: true,
      routes: ['/favicon.ico', '/robots.txt'],
    },
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
      apiBase: 'http://localhost:8001/api',
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
