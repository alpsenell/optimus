import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import CityDetail from "./components/CityDetails";
import MainPage from "./components/MainPage";
import MyHeader from "./components/MyHeader";
import Toaster from "./components/Toaster";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  {
    path: '/',
    component: MyHeader,
    children: [
        { path: '/', component: MainPage },
        { path: '/:cityName', component: CityDetail }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.prototype.$toaster = new Vue(Toaster).$mount();

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'Istanbul',
    temperature: 0,
    feelsLike: 0,
    condition: '',
    humidity: 0
  },
  mutations: {
    changeCity (state, value) {
      state.name = value;
    },
    setCityInformation(state, payload) {
      const {
        temp_c,
        feelslike_c,
        humidity,
        condition: { text }
      } = payload;

      state.temperature = temp_c;
      state.feelsLike = feelslike_c;
      state.humidity = humidity;
      state.condition = text;
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
