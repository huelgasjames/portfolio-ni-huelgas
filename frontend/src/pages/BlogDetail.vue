<script setup>
import { useRoute } from 'vue-router'
import { usePortfolioStore } from '../stores/portfolio'
import { onMounted, ref } from 'vue'

const route = useRoute()
const portfolioStore = usePortfolioStore()
const blog = ref(null)

onMounted(() => {
  blog.value = portfolioStore.getBlogBySlug(route.params.slug)
})
</script>

<template>
  <div class="min-h-screen pt-20 px-4">
    <div v-if="blog" class="section-container py-12">
      <h1 class="text-4xl font-bold mb-4 gradient-text">{{ blog.title }}</h1>
      <div class="flex items-center gap-4 text-gray-400 mb-8">
        <span v-if="blog.reading_time">{{ blog.reading_time }} min read</span>
        <span v-if="blog.published_at">
          {{ new Date(blog.published_at).toLocaleDateString() }}
        </span>
        <span>{{ blog.views }} views</span>
      </div>

      <div v-if="blog.thumbnail" class="mb-8">
        <img :src="blog.thumbnail" :alt="blog.title" class="w-full rounded-2xl" />
      </div>

      <div class="glass-card p-8">
        <div class="text-gray-300 prose prose-invert max-w-none" v-html="blog.content" />
      </div>

      <div v-if="blog.tags && blog.tags.length > 0" class="mt-8 flex flex-wrap gap-3">
        <span
          v-for="tag in blog.tags"
          :key="tag.id"
          class="px-4 py-2 bg-primary/20 text-primary rounded-lg"
        >
          {{ tag.name }}
        </span>
      </div>
    </div>
  </div>
</template>
