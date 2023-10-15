import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import axios from 'axios'

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL
createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
