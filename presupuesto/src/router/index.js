import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../components/Bienvenida.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/panell',
    name: 'panell',
    component: () => import(/* webpackChunkName: "Panell" */ '../components/Panell.vue')
  },
  {
    path: '/baseInput',
    name: 'baseInput',
    component: () => import(/* webpackChunkName: "baseInput" */ '../components/BaseInput.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
