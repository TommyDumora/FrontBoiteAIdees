import { createRouter, createWebHistory } from 'vue-router'
import ListIdeas from '../views/ListIdeas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListIdeas
    }
  ]
})

export default router
