import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import HomePage from './views/HomePage.vue'
import RegisterPage from './views/RegisterPage.vue'
import CheckPage from './views/CheckPage.vue'
import DashboardPage from './views/DashboardPage.vue'
import PetPage from './views/PetPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/registration', component: RegisterPage },
    { path: '/check/:id', component: CheckPage },
    { path: '/dashboard', component: DashboardPage },
    { path: '/pet/:id', component: PetPage }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
