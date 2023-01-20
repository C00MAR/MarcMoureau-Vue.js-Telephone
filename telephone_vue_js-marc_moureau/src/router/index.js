import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import ClavierView from '../views/ClavierView.vue'
import JournalView from '../views/JournalView.vue'

const routes = [
  {
    path: '/',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
