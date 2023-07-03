import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/productsGroup',
    name: 'productsGroup',
    component: () => import('../views/productsGroupView.vue')
  },
  {
    path: '/productDetails',
    name: 'productDetails',
    component: () => import('../views/productDetailsView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/newsView.vue')
  },
  {
    path: '/newsDetails',
    name: 'newsDetails',
    component: () => import('../views/newsDetailsView.vue')
  },
  {
    path: '/ChairmanSpeech',
    name: 'ChairmanSpeech',
    component: () => import('../views/ChairmanSpeech.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contactView.vue')
  },
  {
    path: '/HR',
    name: 'HR',
    component: () => import('../views/humanResources.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
