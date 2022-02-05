import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'animate.css';
import VueSplide from '@splidejs/vue-splide';
import VueNumber from 'vue-number-animation'

createApp(App).use(store).use(router).use( VueSplide ).use(VueNumber).mount('#app')


