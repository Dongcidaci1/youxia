import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../components/home/Home"
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
    {
      path:"/city",
      name:'city',
      component:()=>import('../components/city/City.vue')
    },
    {
      path:"/detail",
      name:'detail',
      component:()=>import('../components/detail/Detail.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
