import Vue from 'vue'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routeInstance = new Vue({
  data () {
    return {
      currentRoute: []
    }
  }
})

Vue.prototype.$matchedRoutes = routeInstance

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(res => {
  NProgress.done()
})
