import './assets/index.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import Projects from './pages/ProjectsPage.vue'
import Hatgeon from './pages/Hatgeon.vue'
import Favourites from './pages/Favourites.vue'

const routes = [
  {
    path: '/projects/:tagid?',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/hatgeon',
    name: 'Hatgeon',
    component: Hatgeon
  },
  {
    path: '/fav',
    name: 'Favourites',
    component: Favourites
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')

window.scrollTo(0, 0)
