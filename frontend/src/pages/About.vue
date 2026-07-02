<script setup>
import { usePortfolioStore } from '../stores/portfolio'

const portfolioStore = usePortfolioStore()
</script>

<template>
  <div class="min-h-screen pt-20 px-4">
    <div class="section-container py-12">
      <h1 class="text-4xl font-bold mb-8 gradient-text">About Me</h1>
      <div v-if="portfolioStore.profile" class="glass-card p-8 mb-12">
        <p class="text-lg text-gray-300">{{ portfolioStore.profile.bio }}</p>
      </div>

      <h2 class="text-3xl font-bold mb-6">Skills</h2>
      <div v-if="Object.keys(portfolioStore.skills).length > 0" class="space-y-8 mb-12">
        <div v-for="(skillsList, category) in portfolioStore.skills" :key="category" class="glass-card p-6">
          <h3 class="text-xl font-bold mb-4 capitalize">{{ category }}</h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in skillsList"
              :key="skill.id"
              class="px-4 py-2 bg-primary/20 text-primary rounded-lg"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">Experience</h2>
      <div v-if="portfolioStore.experiences.length > 0" class="space-y-6 mb-12">
        <div v-for="exp in portfolioStore.experiences" :key="exp.id" class="glass-card p-6">
          <h3 class="text-xl font-bold">{{ exp.title }}</h3>
          <p class="text-primary">{{ exp.company }}</p>
          <p class="text-gray-400 text-sm mb-4">
            {{ exp.start_date }} - {{ exp.current ? 'Present' : exp.end_date }}
          </p>
          <p v-if="exp.description" class="text-gray-300">{{ exp.description }}</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">Certifications</h2>
      <div v-if="portfolioStore.certifications.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="cert in portfolioStore.certifications" :key="cert.id" class="glass-card p-6">
          <h3 class="text-xl font-bold">{{ cert.title }}</h3>
          <p class="text-primary">{{ cert.organization }}</p>
          <p class="text-gray-400 text-sm">{{ cert.issue_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
