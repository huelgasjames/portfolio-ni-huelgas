<script setup>
import { usePortfolioStore } from '../stores/portfolio'
import { RouterLink } from 'vue-router'

const portfolioStore = usePortfolioStore()
</script>

<template>
  <div class="min-h-screen pt-20 px-4">
    <div class="section-container py-12">
      <h1 class="text-4xl font-bold mb-8 gradient-text">Blog</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
          v-for="blog in portfolioStore.blogs"
          :key="blog.id"
          :to="`/blog/${blog.slug}`"
          class="glass-card overflow-hidden group cursor-pointer"
        >
          <div v-if="blog.thumbnail" class="aspect-video bg-surface">
            <img
              :src="blog.thumbnail"
              :alt="blog.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ blog.title }}</h3>
            <p v-if="blog.excerpt" class="text-gray-400 mb-4 line-clamp-2">{{ blog.excerpt }}</p>
            <div class="flex items-center gap-4 text-sm text-gray-500">
              <span v-if="blog.reading_time">{{ blog.reading_time }} min read</span>
              <span v-if="blog.published_at">
                {{ new Date(blog.published_at).toLocaleDateString() }}
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
