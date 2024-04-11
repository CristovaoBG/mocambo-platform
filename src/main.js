import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import MainPage from './views/MainPage.vue'
import Galery from './views/GaleryView.vue'
import InfoPage from './views/InfoView.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/galeria', name: "galeria", component: Galery },
    { path: '/informacoes', name: "info", component: InfoPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).use(bootstrap).mount('#app')