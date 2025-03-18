<script setup>
import { Icon } from '@iconify/vue'

const { t } = useI18n()

const techStack = [
  { name: 'WordPress', icon: 'mdi:wordpress' },
  { name: 'WooCommerce', icon: 'devicon:woocommerce' },
  { name: 'PHP', icon: 'logos:php' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'React', icon: 'logos:react' },
  { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Linux', icon: 'logos:linux-tux' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'Redis', icon: 'logos:redis' },
  { name: 'GitHub', icon: 'mdi:github' }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 class="text-2xl">{{ t('home.techStack.title') }}</h2>
    <p class="text-gray-400">{{ t('home.techStack.description') }}</p>
    <div class="flex flex-wrap justify-center md:justify-start gap-4">
      <div
        v-for="tech in techStack"
        :key="tech.name"
        :title="tech.name"
        class="flex items-center justify-center shadow-sm border border-white/10 rounded-lg w-16 h-16"
      >
        <Icon :icon="tech.icon" width="32" height="32" />
      </div>
    </div>
  </div>
</template>
