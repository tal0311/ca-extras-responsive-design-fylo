import { createRouter, createWebHistory } from 'vue-router'
import responsiveApp from '../views/responsiveApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: responsiveApp
    },
  
  ]
})

export default router
