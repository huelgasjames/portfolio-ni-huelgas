<script setup>
import { onMounted } from 'vue'
import { usePortfolioStore } from './stores/portfolio'

const portfolioStore = usePortfolioStore()

onMounted(() => {
  portfolioStore.fetchAll()
})
</script>

<template>
  <div class="min-h-screen bg-background text-white relative">
    <div
      v-if="portfolioStore.loading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <img
        src="/images/HueLogo.png"
        alt="Loading logo"
        class="w-32 h-32 rounded-full object-cover hue-logo-shadow animate-hue-pulse"
        style="transform-origin:center center;"
      />
    </div>

    <router-view />
  </div>
</template>
