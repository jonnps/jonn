// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/scripts', 'nuxt-i18n-micro', '@nuxt/image', '@nuxtjs/sitemap'],
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
  scripts: {
    registry: {
      googleAnalytics: true
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://jonn.dev',
      scripts: {
        googleAnalytics: {
          id: ''
        }
      },
      nuxtImage: {
        quality: 80,
        format: ['webp'],
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536
        }
      }
    }
  }
})
