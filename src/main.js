import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './eig8lom.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import MainPage from './views/MainPage.vue'

const routes = [
    { path: '/', component: MainPage },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

createApp(App).use(router).use(bootstrap).mount('#app')