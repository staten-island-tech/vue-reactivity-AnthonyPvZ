import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { reactive } from 'vue'

export const store = reactive({
    count: 0,
    increment() {
        this.count++
        this.innerHTML = "yay"
    }
})