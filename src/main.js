import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Toast from "vue-toastification";
import VueFileAgent from 'vue-file-agent';
import 'vue-file-agent/dist/vue-file-agent.css';

import { abilitiesPlugin } from '@casl/vue';
import ability from './ability';

Vue.use(abilitiesPlugin, ability, {
  useGlobalProperties: true
})

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueFileAgent)

import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-toastification/dist/index.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.use(Toast, {
  maxToasts: 3,
  newestOnTop: true,
  position: "top-center",
  timeout: 1500,
  hideProgressBar: true,
});

Vue.config.productionTip = false

new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')
