import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/b',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/check',
    name: 'check',
    component: () => import(/* webpackChunkName: "about" */ '../views/check.vue')
  },
  {
    path: '/',
    name: 'sample',
    component: () => import(/* webpackChunkName: "about" */ '../views/SampleProject.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilePage.vue')
  },
  {
    path: '/expertise',
    name: 'expertise',
    component: () => import(/* webpackChunkName: "about" */ '../views/Expertise.vue')
  },
  {
    path: '/interview',
    name: 'interview',
    component: () => import(/* webpackChunkName: "about" */ '../views/Interview.vue')
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: () => import(/* webpackChunkName: "about" */ '../views/Thankyou.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "about" */ '../views/error.vue')
  },
  {
    path: '/prof',
    name: 'prof',
    component: () => import(/* webpackChunkName: "about" */ '../views/prof.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
