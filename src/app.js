import './bootstrap/axios.js'
import router from './bootstrap/router.js'
import appComponent from './bootstrap/app.js'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

// noinspection JSCheckFunctionSignatures
const app = createApp(appComponent)

app.use(createPinia())
app.use(router)
app.mount('#app')
