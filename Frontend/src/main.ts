import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';

import App from './App.vue'
import router from './router'

import './assets/reset.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
