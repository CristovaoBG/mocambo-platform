import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './eig8lom.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).mount('#app')
document.dispatchEvent(new Event('render-event'))
