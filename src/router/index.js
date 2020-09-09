import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
 path: '/', name:'directory', component: Home,
      children: [
        { path: '/following', name:'Followed', component: () => import(/* webpackChunkName: "profile" */ '../views/followed') },
        { path: '/Browse', name:'Browse', component: () => import(/* webpackChunkName: "profile" */ '../views/browse') },
]
 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
