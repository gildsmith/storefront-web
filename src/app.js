import './bootstrap/axios.js'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import appComponent from './bootstrap/app.js'
import i18n from './bootstrap/i18n.js'
import router from './bootstrap/router.js'

// noinspection JSCheckFunctionSignatures
const app = createApp(appComponent)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.mount('#app')
