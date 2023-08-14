import { createApp } from 'vue';
import {createPinia} from "pinia";
import './style.css';
import 'flowbite';
import 'preline'
import router from './router';
import App from './App.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import i18n from "./i18n.js";
import Vue3Marquee from 'vue3-marquee'

const pinia = createPinia()
const app = createApp(App);
app.use(pinia)
app.use(router);
app.use(i18n)
app.use(Toast)
app.use(Vue3Marquee)
app.component('dashboard-layout', DashboardLayout);
app.mount('#app');

export default app;
