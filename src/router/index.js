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
    props: true,
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/productsGroup/:id',
    name: 'productsGroup',
    props: true,
    component: () => import('../views/productsGroupView.vue')
  },
  {
    path: '/productDetails/:id',
    name: 'productDetails',
    props: true,
    component: () => import('../views/productDetailsView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/newsView.vue')
  },
  {
    path: '/newsDetails/:id',
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
    path: '/humanResources',
    name: 'humanResources',
    component: () => import('../views/humanResources.vue')
  },
  {
    path: '/commonQuestions',
    name: 'commonQuestions',
    component: () => import('../views/commonQuestions.vue')
  },
  {
    path: '/downloadSource',
    name: 'downloadSource',
    component: () => import('../views/downloadSource.vue')
  },
  {
    path: '/searchView/:key',
    name: 'searchView',
    component: () => import('../views/searchView.vue')
  },
  {
    path: '/B2B',
    name: 'B2B',
    component: () => import('../views/B2bView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
