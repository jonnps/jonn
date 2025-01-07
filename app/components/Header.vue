<script lang="ts" setup>
type Navigation = {
  name: string
  to: string
}

const navigation: Record<string, Navigation> = {
  home: {
    name: 'Home',
    to: '/'
  },
  blog: {
    name: 'Blog',
    to: '/blog'
  }
}
</script>

<template>
  <div class="mx-auto my-2 flex w-full items-center justify-center">
    <header class="rounded-full">
      <div class="group relative inline-flex items-center overflow-hidden transition rounded-full">
        <div
          class="absolute inset-0.5 rounded-full border border-white/10 bg-zinc-900 sm:bg-zinc-900/80 sm:backdrop-blur-md"
        />

        <nav class="z-10 flex justify-around gap-2 p-2 transition-all duration-300 ease-in-out sm:hover:gap-4">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :to="item.to"
            class="flex items-center rounded-full border px-4 py-1 transition-all duration-300 ease-in-out sm:px-6 text-white/60"
            :class="[
              item.to === $route.path
                ? 'border-white/5 bg-[#303235] text-white/75 shadow-2xl shadow-white/50 text-shadow-sm'
                : 'border-transparent text-muted hover:border-white/5 hover:text-main'
            ]"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>
    </header>
  </div>
</template>
