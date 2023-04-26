import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router/router'
import './assets/main.css'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
