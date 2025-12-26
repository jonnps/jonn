// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/fonts', 'nuxt-i18n-micro', '@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/critters'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://jonn.dev'
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls']
  },
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
    metaBaseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://jonn.dev',
    translationDir: 'i18n/locales',
    defaultLocale: 'en',
    autoDetectLanguage: true,
    strategy: 'prefix_except_default',
    disablePageLocales: true
  },
  content: {
    documentDriven: false
  },
  nitro: {
    preset: 'netlify-static',
    minify: true,
    compressPublicAssets: true
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: () => 'app'
        }
      }
    }
  },
  experimental: {
    payloadExtraction: true
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://api.iconify.design' }
      ],
      script: process.env.NUXT_PUBLIC_UMAMI_ID ? [
        { src: 'https://cloud.umami.is/script.js', defer: true, 'data-website-id': process.env.NUXT_PUBLIC_UMAMI_ID }
      ] : []
    }
  },
  fonts: {
    provider: 'google',
    families: [
      { name: 'Inter', weights: [400, 600, 700], subsets: ['latin'], preload: true }
    ],
    defaults: {
      weights: [400, 600, 700],
      subsets: ['latin']
    }
  },
  image: {
    provider: 'netlify',
    quality: 80,
    format: ['webp', 'avif']
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://jonn.dev'
    }
  }
})
