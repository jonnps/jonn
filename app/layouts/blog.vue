<script setup>
import { Icon } from '@iconify/vue'

const { t, $getLocale } = useI18n()
const locale = $getLocale()
const posts = await queryContent(`${locale === 'pt' ? 'pt/' : ''}blog`)
  .where({ layout: 'article' })
  .sort({ datetime: -1 })
  .find()

const showArtModal = ref(false)

const toggleArtModal = () => {
  showArtModal.value = !showArtModal.value
}

useSeoMeta({
  title: () => `${t('blog.title')} | Jonnatha Santos`,
  description: () => t('home.bio.1'),
  ogTitle: () => `${t('blog.title')} | Jonnatha Santos`,
  ogDescription: () => t('home.bio.1'),
  ogImage: 'https://jonn.dev/jonn.png',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <div class="relative">
      <div class="relative">
        <img
          src="/jonn-eye.jpeg"
          alt="Jonn"
          class="w-full h-auto lg:h-36 object-cover lg:object-[center_-75px] rounded-t-xl"
        />
        <button
          @click="toggleArtModal"
          class="absolute bottom-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-sm"
          title="View art"
        >
          <Icon icon="mdi:information-outline" width="16" height="16" />
        </button>
      </div>

      <h2 class="text-pretty text-4xl tracking-tight leading-tight relative z-10 my-5">{{ t('blog.title') }}</h2>
    </div>

    <div
      v-if="showArtModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      @click="toggleArtModal"
    >
      <div class="relative bg-white/10 rounded-xl p-4 max-w-lg max-h-[80vh] overflow-hidden" @click.stop>
        <button
          @click="toggleArtModal"
          class="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
        >
          <Icon icon="mdi:close" width="18" height="18" />
        </button>

        <img src="/jonn-art.jpeg" alt="Jonn Art" class="w-full h-auto rounded-lg" />
      </div>
    </div>

    <div class="mt-5 space-y-8 border-t border-white/10 pt-10">
      <NuxtLink v-for="post in posts" :key="post.id" :to="post._path" class="group inline-block">
        <article
          class="transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075] p-5"
        >
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-400">
              {{
                locale === 'en'
                  ? new Date(post.datetime).toLocaleDateString('en-US', {
                      timeZone: 'UTC',
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    })
                  : new Date(post.datetime).toLocaleDateString('pt-BR', {
                      timeZone: 'UTC',
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    })
              }}
            </time>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg/6 font-semibold text-gray-100 group-hover:text-gray-300">
              <span class="absolute inset-0" />
              {{ post.title }}
            </h3>
            <p class="mt-5 line-clamp-3 text-sm/6 text-gray-400">{{ post.description }}</p>
          </div>
        </article>
      </NuxtLink>
    </div>
    <ContentDoc />
  </div>
</template>
