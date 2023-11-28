import { createRouter, createWebHistory } from 'vue-router'
import ListIdeas from '../views/ListIdeas.vue'
import ViewIdea from '../views/ViewIdea.vue'
import UpdateIdea from '../views/UpdateIdea.vue'
import AddIdea from '../views/AddIdea.vue'
import Auth from '../views/Auth.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ListIdeas',
      component: ListIdeas
    },
    {
      path: '/view-idea/:ideaId',
      name: 'ViewIdea',
      component: ViewIdea
    },
    {
      path: '/update-idea/:ideaId',
      name: 'UpdateIdea',
      component: UpdateIdea
    },
    {
      path: '/add-idea',
      name: 'AddIdea',
      component: AddIdea
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

export default router
