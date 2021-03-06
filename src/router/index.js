import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})
//*next必须写两次
router.beforeEach((to, from, next) => {
  if(to.path==='/login')return next()
  const token = window.sessionStorage.getItem('token')
  if(!token)return next('/login')
  next()
})
export default router
