<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: 'Jonnatha Santos | Web Developer',
  description: () => t('home.bio.1'),
  ogTitle: 'Jonnatha Santos | Web Developer',
  ogDescription: () => t('home.bio.1'),
  ogImage: 'https://jonn.dev/jonn.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jonnatha Santos | Web Developer',
  twitterDescription: () => t('home.bio.1'),
  twitterImage: 'https://jonn.dev/jonn.png'
})
</script>

<template>
  <div class="flex flex-col text-center md:text-left gap-8 py-4">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col items-center md:items-start md:flex-row gap-8">
        <ProfileAvatar />

        <div class="flex flex-col gap-4">
          <h1 class="text-4xl">Jonnatha <span class="font-bold">Santos</span></h1>
          <p class="text-xl">{{ t('home.subtitle') }}</p>
          <p>
            {{ t('home.bio.1') }}
          </p>
          <p>
            {{ t('home.bio.2') }}
          </p>
          <p>
            {{ t('home.bio.3') }}
          </p>
        </div>
      </div>
    </div>

    <TechStack />

    <Contact />
  </div>

  <ContentDoc />
</template>
