// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import router from './router'
import App from './App'

import weiPhoto from 'wei-photo'
import elementui from 'element-ui'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

import './permission'
import '@/styles/common.css'
import '@/styles/animate.css'
import 'wei-photo/style/index.css'

const i18n = new VueI18n({
  locale: window.localStorage.getItem('language') || 'zh_CN',
  messages: {
    'zh_CN': require('@/languages/zh_CN.json'),
    'en': require('@/languages/en.json'),
    'jp': require('@/languages/jp.json')
  }
})
Vue.use(weiPhoto)
Vue.use(VueI18n, Cookies)
Vue.use(elementui, {
  size: 'medium',
  zIndex: 3000
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios

let vm = new Vue({
  router,
  i18n,
  el: '#app',
  render: h => h(App)
})

Vue.use({ vm })
