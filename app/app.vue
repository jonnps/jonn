<template>
  <NuxtPage />
</template>

<script setup>
const head = useLocaleHead()
useHead(head)
</script>

<style>
:root {
  color-scheme: dark;
}

body {
  background-color: #19191d;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #fbfbfb;
  text-rendering: optimizeLegibility;
}
</style>
