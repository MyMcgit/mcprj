import Vue from 'vue'
import VueRouter from 'vue-router'
import ShouyeView from '../views/ShouyeView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'shouye',
    component: ShouyeView
  },
  {
    path: '/ques',
    name: 'ques',
    component: () => import(/* webpackChunkName: "about" */ '../views/QuesView.vue')
  },
  {
    path: '/vedio',
    name: 'vedio',
    component: () => import(/* webpackChunkName: "about" */ '../views/VedioView.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyView.vue'),
  
  },
  {
    path: 'login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
