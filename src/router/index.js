import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import SongList from '../views/SongList.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/:songListIndex',
      name: 'songlist',
      component: SongList
    }
  ]
})

export default router
