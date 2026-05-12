import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    meta: { title: 'ALAYED HOSES FACTORY' },
    props: true,
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/productsGroup/:id',
    name: 'productsGroup',
    meta: { title: 'ALAYED HOSES FACTORY' },
    props: true,
    component: () => import('../views/productsGroupView.vue')
  },
  {
    path: '/productDetails/:id',
    name: 'productDetails',
    meta: { title: 'ALAYED HOSES FACTORY' },
    props: true,
    component: () => import('../views/productDetailsView.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/newsView.vue')
  },
  {
    path: '/newsDetails/:id',
    name: 'newsDetails',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/newsDetailsView.vue')
  },
  {
    path: '/ChairmanSpeech',
    name: 'ChairmanSpeech',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/ChairmanSpeech.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/contactView.vue')
  },
  {
    path: '/humanResources',
    name: 'humanResources',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/humanResources.vue')
  },
  {
    path: '/commonQuestions',
    name: 'commonQuestions',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/commonQuestions.vue')
  },
  {
    path: '/downloadSource',
    name: 'downloadSource',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/downloadSource.vue')
  },
  {
    path: '/searchView/:key',
    name: 'searchView',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/searchView.vue')
  },
  {
    path: '/B2B',
    name: 'B2B',
    meta: { title: 'ALAYED HOSES FACTORY' },
    component: () => import('../views/B2bView.vue')
  },
]




const router = createRouter({
  history: createWebHistory(),
  routes
})


router.afterEach(() => {
  window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
})

export default router 

