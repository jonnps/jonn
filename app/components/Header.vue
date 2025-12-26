<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

const { t, $switchLocale, $getLocales, $getLocale } = useI18n()
const route = useRoute()

const isOpen = ref(false)
const locales = $getLocales()
const locale = $getLocale()
const dropdownRef = ref(null)

const { data: page } = await useAsyncData(`header-alt-${route.path}`, () =>
  queryContent(route.path).only(['alternate']).findOne()
)

type Navigation = {
  name: string
  to: string
}

const navigation = computed(() => {
  return {
    home: {
      name: t('nav.home'),
      to: locale === 'en' ? '/' : '/pt'
    },
    blog: {
      name: t('nav.blog'),
      to: locale === 'en' ? '/blog' : '/pt/blog'
    }
  } as Record<string, Navigation>
})

const handleLanguageSwitch = async (targetLocale: string) => {
  isOpen.value = false
  if (page.value?.alternate?.[targetLocale]) {
    await navigateTo(page.value.alternate[targetLocale])
  } else {
    $switchLocale(targetLocale)
  }
}

const isActiveRoute = (path: string) => {
  return path === route.path
}

// Close dropdown when clicking outside
onClickOutside(dropdownRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="mx-auto my-2 flex w-full items-center justify-center">
    <header class="rounded-full">
      <div class="group relative inline-flex items-center rounded-full">
        <div
          class="absolute inset-0.5 rounded-full border border-white/10 bg-zinc-900 sm:bg-zinc-900/80 sm:backdrop-blur-md"
        />

        <nav class="z-10 flex justify-around gap-2 p-2 transition-all duration-300 ease-in-out">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :to="item.to"
            class="flex items-center rounded-full border px-4 py-1 transition-all duration-300 ease-in-out sm:px-6 text-white/60"
            :class="[
              isActiveRoute(item.to)
                ? 'border-white/5 bg-[#303235] text-white/75 shadow-2xl shadow-white/50 text-shadow-sm'
                : 'border-transparent text-muted hover:border-white/5 hover:text-main'
            ]"
          >
            {{ item.name }}
          </NuxtLink>

          <div class="relative" ref="dropdownRef">
            <button
              @click="isOpen = !isOpen"
              class="flex items-center gap-1 rounded-full border px-4 py-1 transition-all duration-300 ease-in-out sm:px-6 text-white/60 border-transparent text-muted hover:text-main"
              aria-haspopup="true"
              :aria-expanded="isOpen"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" class="iconLanguage_nlXk">
                <path
                  fill="currentColor"
                  d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
                ></path>
              </svg>
              {{ locale.toUpperCase() }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <div
              v-show="isOpen"
              class="absolute right-0 mt-2 w-28 rounded-lg bg-zinc-800 overflow-hidden shadow-lg ring-1 ring-white/10 transition-opacity duration-200 ease-in-out"
              :class="isOpen ? 'opacity-100' : 'opacity-0'"
            >
              <div>
                <button
                  v-for="language in locales"
                  :key="language.code"
                  @click="() => handleLanguageSwitch(language.code)"
                  class="flex w-full items-center px-4 py-2 text-sm text-white/60 hover:bg-zinc-700 transition-colors duration-200"
                  :class="{ 'bg-zinc-700': language.code === locale }"
                >
                  {{ language.name }}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
