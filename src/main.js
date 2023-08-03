import { createApp } from 'vue';
import './style.css';
import 'flowbite';
import 'preline'
import router from './router';
import App from './App.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'



const app = createApp(App);
app.use(router);
app.use(Toast)
app.component('dashboard-layout', DashboardLayout);
app.mount('#app');

export default app;
