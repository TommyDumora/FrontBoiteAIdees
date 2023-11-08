import { createRouter, createWebHistory } from 'vue-router'
import ListIdeas from '../views/ListIdeas.vue'
import ViewIdea from '../views/ViewIdea.vue'
import UpdateIdea from '../views/UpdateIdea.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list-ideas',
      component: ListIdeas
    },
    {
      path: '/view-idea/:ideaId',
      name: 'view-idea',
      component: ViewIdea
    },
    {
      path: '/update-idea/:ideaId',
      name: 'update-idea',
      component: UpdateIdea
    }
  ]
})

export default router
