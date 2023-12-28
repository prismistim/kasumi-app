import { createApp } from 'vue'
import { createHead } from '@unhead/vue'

import './assets/style.css'
import App from './App.vue'

createApp(App).use(createHead()).mount('#app')
