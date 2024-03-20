import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueApexCharts from "vue3-apexcharts";


createApp(App).use(VueApexCharts).use(store).use(router).mount('#app')
