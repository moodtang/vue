import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/login/Index'
import NavBar from '../views/index/NavBar'
import mainIndex from '../views/index/Index'
import Login from '../views/login/Login'
import Registr from  '../views/regesiter/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
     path: '/login',
     name: 'Login',
      component: Login
   },
    {
      path: '/navBar',
      name: 'NavBar',
      component: NavBar
    },
    {
      path: '/mainIndex',
      name: 'Index',
      component: mainIndex
    },
    {
      path: '/register',
      name: 'Register',
      component: Registr
    },

  ]
})
