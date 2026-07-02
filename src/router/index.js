import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../pages/Projects.vue')
  },
  {
    path: '/projects/:slug',
    name: 'ProjectDetail',
    component: () => import('../pages/ProjectDetail.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/Blog.vue')
  },
  {
    path: '/blog/:slug',
    name: 'BlogDetail',
    component: () => import('../pages/BlogDetail.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
