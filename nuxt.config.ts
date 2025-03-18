// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/scripts', 'nuxt-i18n-micro'],
  i18n: {
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English'
      },
      {
        code: 'pt',
        language: 'pt-BR',
        name: 'Português'
      }
    ],
    meta: true,
    metaBaseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    translationDir: 'i18n/locales',
    defaultLocale: 'en',
    autoDetectLanguage: true,
    strategy: 'prefix_except_default'
  },
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
