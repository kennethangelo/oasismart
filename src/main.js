import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS files
// Automatically import it globally into the project
// import './assets/styles/main.css'
import './assets/styles/style.scss'

createApp(App).use(router).mount('#app')
