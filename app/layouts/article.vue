<template>
  <div class="mb-6">
    <div class="flex items-center gap-x-4 text-xs mb-2">
      <time :datetime="datetime" class="text-gray-400">
        {{
          locale === 'en'
            ? new Date(datetime).toLocaleDateString('en-US', {
                timeZone: 'UTC',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })
            : new Date(datetime).toLocaleDateString('pt-BR', {
                timeZone: 'UTC',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })
        }}
      </time>
    </div>
    <h1 class="text-pretty text-4xl tracking-tight">
      {{ title }}
    </h1>
  </div>

  <ContentDoc class="space-y-4 mb-10" />
</template>

<script setup lang="ts">
const { $getLocale } = useI18n()
const { page } = useContent()
const locale = $getLocale()
const title = computed(() => page.value?.title)
const datetime = computed(() => page.value?.datetime)
const description = computed(() => page.value?.description)

const alternate = computed(() => {
  const alternate = []
  for (const [key, value] of Object.entries(page.value?.alternate || {})) {
    alternate.push({
      id: `i18n-alternate-${key}`,
      rel: 'alternate',
      hreflang: key,
      href: value as string
    })
  }

  return alternate
})

useHead({ link: alternate.value })

useSeoMeta({
  title: () => `${title.value} | Jonnatha Santos`,
  description: () => description.value,
  ogTitle: () => `${title.value} | Jonnatha Santos`,
  ogDescription: () => description.value,
  ogImage: 'https://jonn.dev/jonn.png',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${title.value} | Jonnatha Santos`,
  twitterDescription: () => description.value
})
</script>
