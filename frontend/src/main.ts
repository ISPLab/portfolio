import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1,
    loading: '/loading-placeholder.png',
    error: '/error-placeholder.png'
})

app.mount('#app') 