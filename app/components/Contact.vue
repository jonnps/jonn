<script setup>
import { Icon } from '@iconify/vue'

const { t } = useI18n()

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'mdi:github',
    url: 'https://github.com/jonnps'
  },
  {
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    url: 'https://linkedin.com/in/jonnps'
  },
  {
    name: 'Twitter',
    icon: 'arcticons:x-twitter',
    url: 'https://twitter.com/_jonnps'
  },
  {
    name: 'Email',
    icon: 'mdi:email',
    url: 'mailto:j@jonn.dev'
  }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 class="text-2xl">{{ t('home.contact') }}</h2>
    <div class="flex flex-wrap justify-center md:justify-start gap-4">
      <a
        v-for="social in socialLinks"
        :key="social.name"
        :href="social.url"
        :title="social.name"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center shadow-sm border border-white/10 rounded-lg w-16 h-16 hover:border-white/30 transition-colors"
      >
        <Icon :icon="social.icon" width="32" height="32" />
      </a>
    </div>
  </div>
</template>
