import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueLazyload from 'vue-lazyload'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueLazyload, {
  // options
  preLoad: 1.3,
  error: 'error-image.jpg',
  loading: 'loading-image.jpg',
  attempt: 1
})
app.mount('#app') 