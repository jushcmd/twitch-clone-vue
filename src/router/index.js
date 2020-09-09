import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Directory from '../views/directory'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/directory/followed',
    name: 'following',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/directory/following')
  },
  {
    path: '/browse',
    name: 'Browse',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/directory')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
