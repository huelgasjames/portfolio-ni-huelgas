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
                class="text-gray-400 hover:text-white transition-colors text-2xl"
                v-html="link.icon"
              />
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
