import Vue from 'vue'
import Router from 'vue-router'
import routes from './routesMaker'

Vue.use(Router)
// let route = routes
export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes
})
