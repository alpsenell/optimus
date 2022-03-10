import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Foo from "./components/Foo";
import MainPage from "./components/MainPage";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  { path: '/', component: MainPage },
];
const availableCities = ['istanbul', 'izmir', 'ankara', 'sirnak', 'hatay', 'antalya'];

availableCities.forEach(city => routes.push({ path: `/${city}`, component: Foo }));

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.prototype.axios = axios;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
