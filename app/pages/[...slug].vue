<template>
  <main>
    <Header class="fixed z-50 flex sm:bottom-auto top-0" />

    <div class="container">
      <div :class="[layout ? 'pt-20' : 'pt-24']">
        <NuxtLayout :name="layout || false">
          <Suspense>
            <template #default>
              <ContentDoc />
            </template>
            <template #fallback>
              <div class="flex items-center justify-center h-64">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-zinc-800 h-12 w-12"></div>
                  <div class="flex-1 space-y-4 py-1">
                    <div class="h-4 bg-zinc-800 rounded w-3/4"></div>
                    <div class="space-y-2">
                      <div class="h-4 bg-zinc-800 rounded"></div>
                      <div class="h-4 bg-zinc-800 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Suspense>
        </NuxtLayout>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`page-${route.path}`, () =>
  queryContent(route.path).only(['layout']).findOne()
)
const layout = computed(() => page.value?.layout)
</script>
