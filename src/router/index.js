import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeNewView from '../views/HomeNewView.vue'
import FinalView from '../views/FinalView.vue'
import Details from '../views/DetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new',
    name: 'homenew',
    component: HomeNewView
  },
  {
    path: '/final',
    name: 'final',
    component: FinalView
  },
  {
    path:'/posts/:id',
    name : 'details',
    component: Details,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
