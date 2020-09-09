import Vue from 'vue'
import VueRouter from 'vue-router'
import Directory from '../views/directory'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/directory',
    name: 'directory',
    component: Directory
  },
  {
    path: '/directory',
    name: 'Directory',

    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/directory'),
    children: [
      {
        path: '',
        name: 'Following',
        component: () =>
          import(
            /* webpackChunkName: "profile" */ '../views/directory/following'
          )
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
