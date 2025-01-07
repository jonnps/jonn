export default defineNuxtPlugin((nuxtApp) => {
  const { proxy } = useScriptGoogleAnalytics()

  nuxtApp.hooks.hook('page:finish', () => {
    proxy.gtag('event', 'page_view')
  })
})
