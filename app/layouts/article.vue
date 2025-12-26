<template>
  <ContentDoc>
    <template #default="{ doc }">
      <Head>
        <Title>{{ doc.title }} | Jonnatha Santos</Title>
        <Meta name="description" :content="doc.description" />
        <Meta property="og:title" :content="`${doc.title} | Jonnatha Santos`" />
        <Meta property="og:description" :content="doc.description" />
        <Meta property="og:image" :content="`${siteUrl}/jonn.png`" />
        <Meta property="og:type" content="article" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Link
          v-for="(href, lang) in doc.alternate"
          :key="lang"
          rel="alternate"
          :hreflang="lang"
          :href="toAbsoluteUrl(href)"
        />
      </Head>

      <div class="mb-6">
        <div class="flex items-center gap-x-4 text-xs mb-2">
          <time :datetime="doc.datetime" class="text-gray-400">
            {{
              locale === 'en'
                ? new Date(doc.datetime).toLocaleDateString('en-US', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  })
                : new Date(doc.datetime).toLocaleDateString('pt-BR', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  })
            }}
          </time>
        </div>
        <h1 class="text-pretty text-4xl tracking-tight">
          {{ doc.title }}
        </h1>
      </div>

      <ContentRenderer :value="doc" class="space-y-4 mb-10" />
    </template>
  </ContentDoc>
</template>

<script setup lang="ts">
const { $getLocale } = useI18n()
const locale = $getLocale()

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://jonn.dev'

const toAbsoluteUrl = (href: string) => href.startsWith('/') ? `${siteUrl}${href}` : href
</script>
