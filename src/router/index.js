import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/login/Index'
import NavBar from '../views/index/NavBar'
import mainIndex from '../views/index/Index'
/*import Function from '../views/index/Function'*/

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
     name: 'Index',
      component: Index
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

  ]
})
