<script setup>
import { usePortfolioStore } from '../stores/portfolio'
import { ref } from 'vue'

const portfolioStore = usePortfolioStore()
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const submitting = ref(false)
const success = ref(false)

async function submitForm() {
  submitting.value = true
  try {
    await portfolioStore.submitContactForm(form.value)
    success.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    console.error('Failed to submit form:', error)
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen pt-20 px-4">
    <div class="section-container py-12">
      <h1 class="text-4xl font-bold mb-8 gradient-text">Contact Me</h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
          <p class="text-gray-400 mb-8">
            Feel free to reach out if you'd like to collaborate on a project or just have a chat!
          </p>

          <div v-if="portfolioStore.profile" class="space-y-4">
            <div class="glass-card p-4">
              <p class="text-gray-400">Email</p>
              <p class="text-white">{{ portfolioStore.profile.email }}</p>
            </div>
          </div>

          <div v-if="portfolioStore.socialLinks.length > 0" class="mt-8">
            <h3 class="text-xl font-bold mb-4">Social Links</h3>
            <div class="flex gap-4">
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
        </div>

        <div class="glass-card p-8">
          <div v-if="success" class="mb-6 p-4 bg-green-500/20 text-green-400 rounded-lg">
            Message sent successfully!
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block text-sm font-medium mb-2">Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                required
                class="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Message</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                class="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary resize-none"
              />
            </div>
            <button
              type="submit"
              :disabled="submitting"
              class="btn-primary w-full"
            >
              {{ submitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
