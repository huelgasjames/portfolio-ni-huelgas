<script setup>
import { onMounted } from 'vue'
import { usePortfolioStore } from './stores/portfolio'
import SinglePage from './components/SinglePage.vue'

const portfolioStore = usePortfolioStore()

onMounted(() => {
  portfolioStore.fetchAll()
})
</script>

<template>
  <div class="min-h-screen bg-background text-white">
    <SinglePage />
  </div>
</template>
