import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/home')
const Classfy = ()=> import('../views/classfy/classfy')
const mine = ()=> import('../views/mine/mine')
const shopCar = ()=> import('../views/shopCar/shopCar')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path: '/classfy',
    name: 'classfy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component:Classfy
  },
  {
    path:'/mine',
    name:'mine',
    component:mine
  },
  ,
  {
    path:'/shopcar',
    name:'shopcar',
    component:shopCar
  },
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
