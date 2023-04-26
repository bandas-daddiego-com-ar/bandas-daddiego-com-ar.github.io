import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Metronome from '../views/Metronome.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/:band',
      name: 'metronome',
      component: Metronome
    }
  ]
})

export default router
