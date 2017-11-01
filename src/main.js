import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/style.css';

Vue.use(ElementUI)

Vue.prototype.$ajax = axios.create({
  baseURL: '/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})