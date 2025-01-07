// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/scripts'],
  content: {
    documentDriven: true
  },
  nitro: {
    preset: 'netlify'
  },
  scripts: {
    registry: {
      googleAnalytics: true
    }
  },

  runtimeConfig: {
    public: {
      scripts: {
        googleAnalytics: {
          id: ''
        }
      }
    }
  }
})
