<script setup>
import { usePortfolioStore } from '../stores/portfolio'
import { computed, ref } from 'vue'

const portfolioStore = usePortfolioStore()
const certificateFiles = computed(() => portfolioStore.certificateFiles)
const currentIndex = ref(0)

const currentCertificate = computed(() => certificateFiles.value[currentIndex.value] || null)

const prevCertificate = () => {
  if (!certificateFiles.value.length) return
  currentIndex.value = (currentIndex.value - 1 + certificateFiles.value.length) % certificateFiles.value.length
}

const nextCertificate = () => {
  if (!certificateFiles.value.length) return
  currentIndex.value = (currentIndex.value + 1) % certificateFiles.value.length
}

const selectCertificate = index => {
  currentIndex.value = index
}

const encodePdfUrl = filePath =>
  filePath
    .split('/')
    .map((segment, index) => (index === 0 && segment === '' ? '' : encodeURIComponent(segment)))
    .join('/')
</script>

<template>
  <div class="min-h-screen pt-20 px-4 bg-background text-white">
    <div class="section-container py-12">
      <div class="flex flex-col gap-6 mb-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-4xl font-bold mb-2 gradient-text">Certificates</h1>
          <p class="text-gray-400 max-w-2xl">All certificates are shown in a single view-only carousel. Use the arrows or dots to browse every PDF.</p>
        </div>
        <router-link to="/" class="btn-secondary">Back to home</router-link>
      </div>

      <div v-if="certificateFiles.length > 0" class="glass-card overflow-hidden border border-white/10">
        <div class="grid gap-6 lg:grid-cols-[1.2fr_1fr] p-6">
          <div class="space-y-6">
            <div class="rounded-3xl bg-surface border border-white/10 p-8 flex items-center justify-center">
              <div class="text-center">
                <p class="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Certificate {{ currentIndex + 1 }} of {{ certificateFiles.length }}</p>
                <h3 class="text-2xl font-semibold">{{ currentCertificate?.title }}</h3>
                <p class="text-gray-400 mt-3 text-sm break-all">{{ currentCertificate?.file.split('/').pop() }}</p>
              </div>
            </div>

            <div class="grid gap-3 sm:grid-cols-2 items-center">
              <div>
                <p class="text-gray-400 uppercase tracking-[0.25em] text-sm mb-2">View</p>
                <a
                  v-if="currentCertificate"
                  :href="encodePdfUrl(currentCertificate.file)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-secondary"
                >
                  Open certificate in browser
                </a>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <button @click="prevCertificate" class="btn-secondary px-4 py-2" aria-label="Previous certificate">Prev</button>
                <button @click="nextCertificate" class="btn-secondary px-4 py-2" aria-label="Next certificate">Next</button>
              </div>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-2">
              <button
                v-for="(cert, index) in certificateFiles"
                :key="cert.id"
                @click="selectCertificate(index)"
                :class="[
                  'w-3 h-3 rounded-full transition-all duration-200',
                  currentIndex === index ? 'bg-white shadow-lg shadow-white/30 scale-110' : 'bg-white/30 hover:bg-white/60'
                ]"
                :aria-label="`Select certificate ${index + 1}`"
              ></button>
            </div>
          </div>

          <div class="rounded-3xl overflow-hidden border border-white/10 bg-slate-950/70">
            <div class="p-4 border-b border-white/10 bg-surface">
              <p class="text-sm uppercase tracking-[0.25em] text-gray-400">Preview</p>
            </div>
            <div class="h-[520px] bg-black/5">
              <iframe
                v-if="currentCertificate"
                :src="encodePdfUrl(currentCertificate.file)"
                class="w-full h-full"
                :title="`${currentCertificate.title} certificate preview`"
              ></iframe>
              <div v-else class="flex h-full items-center justify-center p-6 text-center text-gray-400">
                No certificate selected.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-gray-400 text-center py-20">
        No certificates available yet.
      </div>
    </div>
  </div>
</template>
