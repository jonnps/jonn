<template>
  <div class="mb-6">
    <div class="flex items-center gap-x-4 text-xs mb-2">
      <time :datetime="datetime" class="text-gray-400">
        {{
          new Date(datetime).toLocaleDateString('en-US', {
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

  <ContentDoc class="space-y-4" />
</template>

<script setup lang="ts">
const { page } = useContent()
const title = computed(() => page.value?.title)
const datetime = computed(() => page.value?.datetime)
</script>
