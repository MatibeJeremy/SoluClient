import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Welcome.vue')
  },
  {
    path: '/signin',
    name: 'LogIn',
    component: () => import('../components/SignIn.vue')
  },
  {
    path: '/dashboard',
    name: 'Dash',
    component: () => import('../components/TasksList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router