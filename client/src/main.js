import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import HomePage from './views/HomePage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
