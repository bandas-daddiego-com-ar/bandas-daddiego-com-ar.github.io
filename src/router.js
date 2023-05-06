import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './views/Main.vue';
import SongList from './views/SongList.vue';
import Metronome from './views/Metronome.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/list/:listIndex',
      name: 'songlist',
      component: SongList,
    },
    {
      path: '/metronome',
      name: 'metronome',
      component: Metronome,
    },
  ],
});

export default router;
