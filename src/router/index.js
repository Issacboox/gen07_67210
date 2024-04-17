import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Auth/Login.vue'
import Register from '@/views/Auth/Register.vue'
import Pos from '@/views/POS/MainView.vue'
import AllOrder from '@/views/POS/AllOrder.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path:'',
    name:'toolbar',
    component: () => import('../views/Toolbar.vue'),
    children:[
      {
        path:'/me',
        name:'me',
        component: () => import('../views/MeView.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/pos',
        name: 'pos',
        component: Pos
      },
      {
        path: '/orderAll',
        name: 'orderAll',
        component: AllOrder
      },
      {
        path:'/apicon',
        name:'apicon',
        component: () => import('../views/Apicon.vue')
      },
      {
        path:'/simple',
        name:'simple',
        component: () => import('../views/SimpleView.vue')
      },
      {
        path:'/grading',
        name:'grading',
        component: () => import('../views/GradeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
