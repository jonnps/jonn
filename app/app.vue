<template>
  <NuxtPage />
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://jonn.dev'

const head = useLocaleHead()
useHead({
  ...head,
  link: [
    ...(head.link || []),
    { rel: 'canonical', href: `${siteUrl}${route.path}` }
  ]
})
</script>

<style>
:root {
  color-scheme: dark;
}

body {
  background-color: #19191d;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #fbfbfb;
  text-rendering: optimizeLegibility;
}
</style>
