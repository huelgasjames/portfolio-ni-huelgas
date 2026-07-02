<script setup>
import { usePortfolioStore } from '../stores/portfolio'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const portfolioStore = usePortfolioStore()
const selectedCategory = ref('All')
const activeSection = ref('hero')
const scrollProgress = ref(0)
const mobileMenuOpen = ref(false)
const descriptionIndex = ref(0)
const descriptionInterval = ref(null)
const expandedExperienceIds = ref([])

const categories = ['All', ...new Set(portfolioStore.projects.map(p => p.category).filter(Boolean))]

const descriptions = computed(() => {
  return portfolioStore.profile?.descriptions || [portfolioStore.profile?.bio || '']
})

const currentDescription = computed(() => {
  if (!descriptions.value.length) return ''
  return descriptions.value[descriptionIndex.value % descriptions.value.length]
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return portfolioStore.projects
  return portfolioStore.projects.filter(p => p.category === selectedCategory.value)
})

const nextDescription = () => {
  if (!descriptions.value.length) return
  descriptionIndex.value = (descriptionIndex.value + 1) % descriptions.value.length
}

const prevDescription = () => {
  if (!descriptions.value.length) return
  descriptionIndex.value = (descriptionIndex.value - 1 + descriptions.value.length) % descriptions.value.length
}

const isExpandedExperience = (id) => expandedExperienceIds.value.includes(id)

const toggleExperience = (id) => {
  if (isExpandedExperience(id)) {
    expandedExperienceIds.value = expandedExperienceIds.value.filter(item => item !== id)
  } else {
    expandedExperienceIds.value = [...expandedExperienceIds.value, id]
  }
}

const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileMenuOpen.value = false
  }
}

const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (window.scrollY / scrollHeight) * 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  descriptionInterval.value = setInterval(() => {
    nextDescription()
  }, 7000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (descriptionInterval.value) clearInterval(descriptionInterval.value)
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Scroll Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-white to-gray-400 z-[60] transition-all duration-150" :style="{ width: scrollProgress + '%' }"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/10">
      <div class="section-container py-4">
        <div class="flex items-center justify-between">
          <button @click="scrollToSection('hero')" class="flex items-center gap-2 hover:scale-105 transition-transform">
            <img src="/images/HueLogo.png" alt="HueLogo" class="w-10 h-10 rounded-full object-cover" />
          </button>
          <div class="hidden md:flex items-center gap-8">
            <button 
              v-for="section in sections.slice(0, 6)"
              :key="section"
              @click="scrollToSection(section)"
              :class="[
                'relative text-sm font-medium transition-colors capitalize',
                activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'
              ]"
            >
              {{ section === 'hero' ? 'Home' : section }}
              <span 
                v-if="activeSection === section"
                class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-gray-400 rounded-full"
              ></span>
            </button>
          </div>
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
          <div class="flex flex-col gap-4">
            <button 
              v-for="section in sections"
              :key="section"
              @click="scrollToSection(section)"
              :class="[
                'text-left text-sm font-medium capitalize transition-colors',
                activeSection === section ? 'text-white' : 'text-gray-400'
              ]"
            >
              {{ section === 'hero' ? 'Home' : section }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="moving-dot dot-1 bg-white/20"></div>
        <div class="moving-dot dot-2 bg-white/20"></div>
        <div class="moving-dot dot-3 bg-white/20"></div>
        <div class="moving-dot dot-4 bg-white/20"></div>
        <div class="moving-dot dot-5 bg-white/20"></div>
        <div class="moving-dot dot-6 bg-white/20"></div>
        <div class="moving-dot dot-7 bg-white/20"></div>
        <div class="moving-dot dot-8 bg-white/20"></div>
        <div class="moving-dot dot-9 bg-white/20"></div>
        <div class="moving-dot dot-10 bg-white/20"></div>
        <div class="moving-dot dot-11 bg-white/20"></div>
        <div class="moving-dot dot-12 bg-white/20"></div>
        <div class="moving-dot dot-13 bg-white/20"></div>
        <div class="moving-dot dot-14 bg-white/20"></div>
        <div class="moving-dot dot-15 bg-white/20"></div>
        <div class="moving-dot dot-16 bg-white/20"></div>
        <div class="moving-dot dot-17 bg-white/20"></div>
        <div class="moving-dot dot-18 bg-white/20"></div>
        <div class="moving-dot dot-19 bg-white/20"></div>
        <div class="moving-dot dot-20 bg-white/20"></div>
        <div class="particle-cluster"></div>
      </div>
      <div class="section-container text-center relative z-10">
        <div class="animate-fade-in">
          <div class="mb-6 inline-block">
            <span class="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20">
              Available for opportunities
            </span>
          </div>
          <div class="mb-8">
            <img 
              v-if="portfolioStore.profile?.avatar"
              :src="portfolioStore.profile.avatar"
              :alt="portfolioStore.profile.name"
              class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-2xl shadow-primary/20"
            />
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            <span class="gradient-text">{{ portfolioStore.profile?.name || 'John Doe' }}</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {{ portfolioStore.profile?.title || 'Full Stack Developer' }}
          </p>
          <p v-if="portfolioStore.profile" class="text-lg text-gray-500 mb-6 max-w-3xl mx-auto leading-relaxed">
            {{ currentDescription }}
          </p>
          <div class="flex items-center justify-center gap-3 mb-8">
            <button
              v-for="(description, index) in descriptions"
              :key="index"
              @click="descriptionIndex = index"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="descriptionIndex === index ? 'bg-white shadow-lg shadow-white/20 scale-110' : 'bg-white/30 hover:bg-white/60'
              "
              :aria-label="`Select description ${index + 1}`"
            ></button>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button @click="scrollToSection('projects')" class="btn-primary">
              View My Work
            </button>
            <button @click="scrollToSection('contact')" class="btn-secondary">
              Get In Touch
            </button>
            <a 
              href="/JamesHuelgas Resume.pdf" 
              download 
              class="btn-secondary flex items-center justify-center gap-2"
              aria-label="Download Resume"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
        </div>

        <!-- Social Links -->
        <div v-if="portfolioStore.socialLinks.length > 0" class="mt-8 flex justify-center gap-6">
          <a
            v-for="link in portfolioStore.socialLinks"
            :key="link.id"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 text-2xl"
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
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="glass-card p-6 text-center animate-slide-up hover:scale-105 transition-transform duration-300">
            <div class="text-4xl font-bold gradient-text mb-2">
              {{ portfolioStore.projects.length }}+
            </div>
            <div class="text-gray-400 text-sm font-medium">Projects Delivered</div>
          </div>
          <div class="glass-card p-6 text-center animate-slide-up hover:scale-105 transition-transform duration-300" style="animation-delay: 0.1s">
            <div class="text-4xl font-bold gradient-text mb-2">
              {{ Object.keys(portfolioStore.skills).reduce((acc, cat) => acc + portfolioStore.skills[cat].length, 0) }}+
            </div>
            <div class="text-gray-400 text-sm font-medium">Technologies</div>
          </div>
          <div class="glass-card p-6 text-center animate-slide-up hover:scale-105 transition-transform duration-300" style="animation-delay: 0.2s">
            <div class="text-4xl font-bold gradient-text mb-2">
              {{ portfolioStore.experiences.length }}+
            </div>
            <div class="text-gray-400 text-sm font-medium">Years Experience</div>
          </div>
          <div class="glass-card p-6 text-center animate-slide-up hover:scale-105 transition-transform duration-300" style="animation-delay: 0.3s">
            <div class="text-4xl font-bold gradient-text mb-2">
              100%
            </div>
            <div class="text-gray-400 text-sm font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-8 gradient-text text-center">About Me</h2>
        <div v-if="portfolioStore.profile" class="glass-card p-8 mb-12 max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div class="flex-shrink-0">
              <img 
                v-if="portfolioStore.profile.avatar"
                :src="portfolioStore.profile.avatar"
                :alt="portfolioStore.profile.name"
                class="w-40 h-40 rounded-2xl object-cover border-4 border-white/30 shadow-xl"
              />
            </div>
            <div class="flex-1">
              <p class="text-lg text-gray-300 leading-relaxed mb-6">{{ portfolioStore.profile.bio }}</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-gray-400">{{ portfolioStore.profile.location || 'San Francisco, CA' }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a :href="`mailto:${portfolioStore.profile.email}`" class="text-gray-400 hover:text-white transition-colors">{{ portfolioStore.profile.email }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-4 bg-surface/50">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-12 text-center gradient-text">Skills</h2>
        <div v-if="Object.keys(portfolioStore.skills).length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div v-for="(skillsList, category) in portfolioStore.skills" :key="category" class="glass-card p-6 hover:border-white/50 transition-colors">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold capitalize">{{ category }}</h3>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="skill in skillsList"
                :key="skill.id"
                class="flex items-center gap-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <img :src="`/icons/${skill.icon}.svg`" :alt="skill.name" class="w-6 h-6" onerror="this.style.display='none'" />
                <span class="text-sm text-gray-300">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 px-4">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-12 text-center gradient-text">Experiences</h2>
        <div v-if="portfolioStore.experiences.length > 0" class="max-w-4xl mx-auto">
          <div class="relative border-l-2 border-white/30 ml-4">
            <div v-for="(exp, index) in portfolioStore.experiences" :key="exp.id" class="relative pl-8 pb-12 last:pb-0">
              <div class="absolute left-0 top-0 w-4 h-4 bg-white rounded-full -translate-x-[9px] border-4 border-background"></div>
              <div class="glass-card p-6 hover:border-white/50 transition-colors">
                <div class="mb-3">
                  <h3 class="text-xl font-bold">{{ exp.title }}</h3>
                </div>
                <p class="text-lg text-gray-300 mb-2">{{ exp.company }}</p>
                <p class="text-gray-400 text-sm mb-4">
                  {{ new Date(exp.start_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }} - {{ exp.current ? 'Present' : new Date(exp.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}
                </p>
                <p v-if="exp.description" class="text-gray-400 mb-4">
                  <span v-if="!isExpandedExperience(exp.id)">
                    {{ exp.description.length > 120 ? exp.description.slice(0, 120) + '...' : exp.description }}
                  </span>
                  <span v-else>
                    {{ exp.description }}
                  </span>
                </p>
                <div v-if="isExpandedExperience(exp.id) && exp.responsibilities && exp.responsibilities.length > 0" class="space-y-2 mb-4">
                  <p class="text-sm font-medium text-gray-300">Responsibilities:</p>
                  <ul class="list-disc list-inside space-y-1 text-sm text-gray-400">
                    <li v-for="responsibility in exp.responsibilities" :key="responsibility">{{ responsibility }}</li>
                  </ul>
                </div>
                <div v-if="isExpandedExperience(exp.id) && exp.achievements && exp.achievements.length > 0" class="space-y-2 mb-4">
                  <p class="text-sm font-medium text-gray-300">Key Achievements:</p>
                  <ul class="space-y-1">
                    <li v-for="achievement in exp.achievements" :key="achievement" class="text-sm text-gray-400 flex items-start gap-2">
                      <svg class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                <button
                  @click="toggleExperience(exp.id)"
                  class="text-sm font-medium text-primary hover:text-white transition-colors"
                >
                  {{ isExpandedExperience(exp.id) ? 'Show less' : 'See more...' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4 bg-surface/50">
      <div class="section-container">
        <h2 class="text-4xl font-bold mb-4 text-center gradient-text">Featured Projects</h2>
        <p class="text-gray-400 text-center mb-8 max-w-2xl mx-auto">A selection of projects showcasing my expertise in building scalable, user-centric applications</p>

        <div class="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-4 py-2 rounded-lg transition-all text-sm font-medium',
              selectedCategory === category
                ? 'bg-gray-300 text-black shadow-lg shadow-gray-500/20'
                : 'bg-surface text-gray-400 hover:text-white hover:bg-surface/80'
            ]"
          >
            {{ category }}
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="glass-card overflow-hidden group cursor-pointer hover:border-whitesition-all duration-300 hover:scale-[1.02]"
          >
            <div class="aspect-video bg-surface flex items-center justify-center relative overflow-hidden">
              <img
                v-if="project.thumbnail"
                :src="project.thumbnail"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div v-else class="text-gray-600">
                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div class="flex gap-3">
                  <a v-if="project.live_url" :href="project.live_url" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Live Demo
                  </a>
                  <a v-if="project.github_url" :href="project.github_url" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-surface text-white rounded-lg text-sm font-medium hover:bg-surface/80 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-xl font-bold">{{ project.title }}</h3>
                <span v-if="project.featured" class="px-2 py-1 bg-white/20 text-white rounded text-xs font-medium">Featured</span>
              </div>
              <p class="text-gray-400 mb-4 line-clamp-2 text-sm">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.tech_stack?.slice(0, 4)"
                  :key="tech"
                  class="px-2 py-1 bg-white/10 text-white rounded text-xs font-medium"
                >
                  {{ tech }}
                </span>
              </div>
              <div v-if="project.features && project.features.length > 0" class="space-y-1">
                <p class="text-xs text-gray-500 font-medium">Key Features:</p>
                <div class="flex flex-wrap gap-1">
                  <span v-for="feature in project.features.slice(0, 2)" :key="feature" class="text-xs text-gray-400 flex items-center gap-1">
                    <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 bg-surface/50">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4 gradient-text">Let's Work Together</h2>
          <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a :href="`mailto:${portfolioStore.profile.email}`" class="glass-card p-6 hover:border-white/50 transition-all hover:scale-105 group">
              <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-bold mb-2">Email</h3>
              <p class="text-gray-400 text-sm">{{ portfolioStore.profile.email }}</p>
            </a>
            <div class="glass-card p-6 hover:border-white/50 transition-all hover:scale-105 group cursor-pointer" @click="scrollToSection('projects')">
              <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 class="font-bold mb-2">Projects</h3>
              <p class="text-gray-400 text-sm">View my work</p>
            </div>
            <a href="/JamesHuelgas Resume.pdf" download class="glass-card p-6 hover:border-white/50 transition-all hover:scale-105 group">
              <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="font-bold mb-2">Resume</h3>
              <p class="text-gray-400 text-sm">Download CV</p>
            </a>
          </div>

          <a :href="`mailto:${portfolioStore.profile.email}`" class="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Me a Message
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 bg-surface/50 border-t border-white/10">
      <div class="section-container">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-center md:text-left">
            <p class="text-gray-400">
              © {{ new Date().getFullYear() }} {{ portfolioStore.profile?.name || 'John Doe' }}. All rights reserved.
            </p>
          </div>
          <div v-if="portfolioStore.socialLinks.length > 0" class="flex justify-center gap-6">
            <a
              v-for="link in portfolioStore.socialLinks"
              :key="link.id"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
              :aria-label="link.platform"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path v-if="link.platform === 'GitHub'" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                <path v-else-if="link.platform === 'LinkedIn'" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.202V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                <path v-else-if="link.platform === 'Twitter'" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                <path v-else d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
