import Vue from 'vue'
import Router from 'vue-router'

// Router Modules
Vue.use(Router)

// BASIC_ROUTES
export const BASIC_ROUTES = [
  {
    path: '/(index)?',
    component: () => import('@/views/720yun/')
  },
  {
    path: '/404',
    name: 'notFind',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/500',
    name: 'serveError',
    component: () => import('@/views/error-page/500'),
    hidden: true
  }
]

export const ASYNC_ROUTES = [
  {
    noAuth: true,
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-active',
  routes: BASIC_ROUTES
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
