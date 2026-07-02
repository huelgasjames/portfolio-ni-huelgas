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
            class="text-gray-400 hover:text-white transition-colors"
            :aria-label="link.platform"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path v-if="link.platform === 'GitHub'" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              <path v-else-if="link.platform === 'LinkedIn'" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.202V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              <path v-else-if="link.platform === 'Facebook'" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              <path v-else d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
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
