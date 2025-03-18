<template>
  <div>
    <h2 class="text-pretty text-4xl tracking-tight">Random Thoughts</h2>
    <div class="mt-5 space-y-8 border-t border-white/10 pt-10">
      <NuxtLink v-for="post in posts" :key="post.id" :to="post._path" class="group inline-block">
        <article
          class="transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075] p-5"
        >
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-400">
              {{
                new Date(post.datetime).toLocaleDateString('en-US', {
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

<script setup>
const posts = await queryContent('blog').where({ layout: 'article' }).sort({ datetime: -1 }).find()
</script>
