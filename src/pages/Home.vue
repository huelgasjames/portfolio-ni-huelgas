<script setup>
import { usePortfolioStore } from '../stores/portfolio'
import { RouterLink } from 'vue-router'

const portfolioStore = usePortfolioStore()
</script>

<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/10">
      <div class="section-container py-4">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="text-2xl font-bold gradient-text">
            JH
          </RouterLink>
          <div class="hidden md:flex items-center gap-8">
            <RouterLink to="/" class="text-gray-400 hover:text-white transition-colors">Home</RouterLink>
            <RouterLink to="/about" class="text-gray-400 hover:text-white transition-colors">About</RouterLink>
            <RouterLink to="/projects" class="text-gray-400 hover:text-white transition-colors">Projects</RouterLink>
            <RouterLink to="/blog" class="text-gray-400 hover:text-white transition-colors">Blog</RouterLink>
            <RouterLink to="/contact" class="btn-primary">Contact</RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center pt-20 px-4">
      <div class="section-container text-center">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            <span class="gradient-text">{{ portfolioStore.profile?.name || 'John Doe' }}</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {{ portfolioStore.profile?.title || 'Full Stack Developer' }}
          </p>
          <p v-if="portfolioStore.profile" class="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            {{ portfolioStore.profile.bio }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/projects" class="btn-primary">
              View My Work
            </RouterLink>
            <RouterLink to="/contact" class="btn-secondary">
              Get In Touch
            </RouterLink>
          </div>
        </div>

        <!-- Social Links -->
        <div v-if="portfolioStore.socialLinks.length > 0" class="mt-16 flex justify-center gap-6">
          <a
            v-for="link in portfolioStore.socialLinks"
            :key="link.id"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors text-2xl"
            v-html="link.icon"
          />
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="py-20 px-4 bg-surface/50">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-card p-8 text-center animate-slide-up">
            <div class="text-4xl font-bold gradient-text mb-2">
              {{ portfolioStore.projects.length }}+
            </div>
            <div class="text-gray-400">Projects Completed</div>
          </div>
          <div class="glass-card p-8 text-center animate-slide-up" style="animation-delay: 0.1s">
            <div class="text-4xl font-bold gradient-text mb-2">
              {{ Object.keys(portfolioStore.skills).length }}+
            </div>
            <div class="text-gray-400">Skills</div>
          </div>
          <div class="glass-card p-8 text-center animate-slide-up" style="animation-delay: 0.2s">
            <div class="text-4xl font-bold gradient-text mb-2">
              {{ portfolioStore.experiences.length }}+
            </div>
            <div class="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="py-20 px-4">
      <div class="section-container">
        <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in portfolioStore.projects.filter(p => p.featured).slice(0, 3)"
            :key="project.id"
            class="glass-card overflow-hidden group cursor-pointer animate-scale-in"
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
          </div>
        </div>
        <div class="text-center mt-12">
          <RouterLink to="/projects" class="btn-secondary">
            View All Projects
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 bg-surface/50 border-t border-white/10">
      <div class="section-container text-center">
        <p class="text-gray-400">
          © {{ new Date().getFullYear() }} {{ portfolioStore.profile?.name || 'John Doe' }}. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
