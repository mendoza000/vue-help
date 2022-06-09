import { createRouter, createWebHistory } from 'vue-router'
import Registro from '../views/RegistroView.vue'

const routes = [
  {
    path: '/',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/prestamista',
    name: 'Prestamista',
    component: () => import('../views/PrestamistaView.vue')
  },
  {
    path: '/prestatario',
    name: 'Prestatario',
    component: () => import('../views/PrestatarioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
