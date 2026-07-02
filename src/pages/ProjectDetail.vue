<script setup>
import { useRoute } from 'vue-router'
import { usePortfolioStore } from '../stores/portfolio'
import { onMounted, ref } from 'vue'

const route = useRoute()
const portfolioStore = usePortfolioStore()
const project = ref(null)

onMounted(() => {
  project.value = portfolioStore.getProjectBySlug(route.params.slug)
})
</script>

<template>
  <div class="min-h-screen pt-20 px-4">
    <div v-if="project" class="section-container py-12">
      <h1 class="text-4xl font-bold mb-4 gradient-text">{{ project.title }}</h1>
      <p class="text-xl text-gray-400 mb-8">{{ project.description }}</p>

      <div v-if="project.thumbnail" class="mb-8">
        <img :src="project.thumbnail" :alt="project.title" class="w-full rounded-2xl" />
      </div>

      <div class="glass-card p-6 mb-8">
        <h2 class="text-2xl font-bold mb-4">About This Project</h2>
        <div v-if="project.content" class="text-gray-300 prose prose-invert max-w-none" v-html="project.content" />
      </div>

      <div v-if="project.tech_stack && project.tech_stack.length > 0" class="glass-card p-6 mb-8">
        <h2 class="text-2xl font-bold mb-4">Tech Stack</h2>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="tech in project.tech_stack"
            :key="tech"
            class="px-4 py-2 bg-primary/20 text-primary rounded-lg"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div v-if="project.features && project.features.length > 0" class="glass-card p-6 mb-8">
        <h2 class="text-2xl font-bold mb-4">Features</h2>
        <ul class="list-disc list-inside text-gray-300 space-y-2">
          <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>

      <div class="flex gap-4">
        <a
          v-if="project.github_url"
          :href="project.github_url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          View on GitHub
        </a>
        <a
          v-if="project.live_url"
          :href="project.live_url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>
