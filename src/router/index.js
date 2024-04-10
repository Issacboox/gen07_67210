import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
