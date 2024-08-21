import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import { setupI18n } from './i18n'
import VueCameraLib from 'vue-camera-lib'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const i18n = setupI18n()
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueCameraLib)
app.use(head)

app.mount('#app')
