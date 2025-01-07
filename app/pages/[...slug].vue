<template>
  <main>
    <Header class="fixed z-50 flex sm:bottom-auto top-0" />

    <div class="container">
      <div :class="[layout === 'home' ? 'pt-20' : 'pt-24']">
        <NuxtLayout>
          <ContentDoc />
        </NuxtLayout>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { page } = useContent()
const layout = computed(() => page.value?.layout)
</script>
