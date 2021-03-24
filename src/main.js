// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import router from './router'
import App from './App'

import weiPhoto from 'wei-photo'

import './permission'
import '@/styles/common.css'
import '@/styles/animate.css'
import 'wei-photo/style/index.css'

Vue.use(weiPhoto)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

let vm = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

Vue.use({ vm })
