import { createApp } from 'vue';
import './style.css';
import 'flowbite';
import router from './router';
import App from './App.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';

const app = createApp(App);
app.use(router);
app.component('dashboard-layout', DashboardLayout);
app.mount('#app');

export default app;
