import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import HomePage from './views/HomePage.vue'
import RegisterPage from './views/RegisterPage.vue'
import CheckPage from './views/CheckPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/registration', component: RegisterPage },
    { path: '/check', component: CheckPage }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
