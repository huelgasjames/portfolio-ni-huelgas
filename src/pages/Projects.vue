<script setup>
import { usePortfolioStore } from '../stores/portfolio'
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const portfolioStore = usePortfolioStore()
const selectedCategory = ref('All')

const categories = ['All', ...new Set(portfolioStore.projects.map(p => p.category).filter(Boolean))]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return portfolioStore.projects
  return portfolioStore.projects.filter(p => p.category === selectedCategory.value)
})
</script>

<template>
  <div class="min-h-screen pt-20 px-4">
    <div class="section-container py-12">
      <h1 class="text-4xl font-bold mb-8 gradient-text">Projects</h1>

      <div class="flex flex-wrap gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-lg transition-all',
            selectedCategory === category
              ? 'bg-primary text-white'
              : 'bg-surface text-gray-400 hover:text-white'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
          v-for="project in filteredProjects"
          :key="project.id"
          :to="`/projects/${project.slug}`"
          class="glass-card overflow-hidden group cursor-pointer"
        >
          <div class="aspect-video bg-surface flex items-center justify-center">
            <img
              v-if="project.thumbnail"
              :src="project.thumbnail"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div v-else class="text-gray-600">
              <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 mb-4 line-clamp-2">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech_stack?.slice(0, 3)"
                :key="tech"
                class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
