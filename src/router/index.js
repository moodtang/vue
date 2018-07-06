import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)


/* 没有角色分别的路由*/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/Login'), hidden: true},
  {path: '/404', component: () => import('@/views/errorPage/404'), hidden: true},
  {path: '/401', component: () => import('@/views/errorPage/401'), hidden: true},
  {path: '/index', component: () => import('@/views/index/Index'), hidden: true},
  {path: '/register', component: () => import('@/views/regesiter/register'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/Index'),
      name: 'dashboard',
      meta: {title: '首页', icon: 'index', noCache: true}
    }]
  },
  {
    path: '/monitorCenter',
    meta: {title: '监测中心', icon: 'monitor', noCache: true},
    component: Layout,
    redirect: '/monitorCenter/deviceMap',
    alwaysShow: true, // will always show the root menu
    roles: ['admin', 'editor'], // you can set roles in root nav
    children: [{
      path: 'deviceMap',
      component: () => import('@/views/monitorCenter/DeviceMap'),
      name: 'DeviceMap',
       meta: { title: '设备地图' }
    },
      {
        path: 'instantData',
        component: () => import('@/views/monitorCenter/InstantData'),
        name: 'InstantData',
        meta: { title: '实时数据' }
      }]
  },
  {
    path: '/dataManage',
    meta: {title: '数据管理', icon: 'data', noCache: true},
    alwaysShow: true, // will always show the root menu
    roles: ['admin', 'editor'], // you can set roles in root nav
    component: Layout,
    redirect: '/dataManage/historyData',
    children: [{
      path: 'historyData',
      component: () => import('@/views/dataManage/HistoryData'),
      name: 'HistoryData',
      meta: { title: '历史数据' }
    },
      {
        path: 'echartsData',
        component: () => import('@/views/dataManage/EchartsData'),
        name: 'EchartsData',
        meta: { title: '图表' }
      }]
  },

  {
    path: '/deviceManage',
    meta: {title: '设备管理', icon: 'tab', noCache: true},
    alwaysShow: true, // will always show the root menu
    roles: ['admin', 'editor'],// you can set roles in root nav
    component: Layout,
    redirect: '/deviceManage/addDevice',
    children: [{
      path: 'addDevice',
      component: () => import('@/views/deviceManage/AddDevice'),
      name: 'AddDevice',
      meta: { title: '添加设备' }
    },
      {
        path: 'deviceList',
        component: () => import('@/views/deviceManage/DeviceList'),
        name: 'DeviceList',
        meta: { title: '设备列表' }
      }]
  },
  {
    path: '/triggerManage',
    meta: {title: '触发器管理', icon: 'documentation', noCache: true},
    alwaysShow: true, // will always show the root menu
    roles: ['admin', 'editor'],// you can set roles in root nav
    component: Layout,
    redirect: '/triggerManage/addTrigger',
    children: [{
      path: 'addTrigger',
      component: () => import('@/views/triggerManage/AddTrigger'),
      name: 'addTrigger',
      meta: { title: '添加触发器' }
    },
      {
        path: 'triggerList',
        component: () => import('@/views/triggerManage/Trigger'),
        name: 'TriggerList',
        meta: { title: '触发器列表' }
      }]
  },
  {
    path: '/userCenter',
    component: Layout,
    redirect: '/UserCenter/index',
    children: [{
      path: 'index',
      component: () => import('@/views/userCenter/UserCenter'),
      name: 'userCenter',
      meta: { title: 'UserCenter', icon: 'user', noCache: true }
    }]
  },

]

export const asyncRouterMap = []
export default new Router({
  /*routes: [
    {
      path: '',
      name: 'layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/navBar',
      name: 'NavBar',
      component: NavBar,
      hidden: true
    },
    {
      path: '/mainIndex',
      name: 'Index',
      component: mainIndex,
      hidden: true
    },
    {
      path: '/register',
      name: 'Register',
      component: Registr,
      hidden: true,

    },

    /!*  测试所用伪造数据*!/
    {
      path: '/pageOne',
      redirect: '/PageOne/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('../components/PageOne'),
          meta: {
            title: 'pageTwo',
            icon: 'documentation',
            noCache: true
          }
        }
      ]
    },
    {
      path: '/pageTwo',
      redirect: '/PageTwo/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('../components/PageTwo'),
          name: "pageTwo",
          meta: {
            title: 'pageTwo',
            icon: 'documentation',
            noCache: true
          }
        }
      ]
    },
    {
      path: '/pageThree',
      redirect: '/PageThree/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('../components/Three'),
          name: "pageThree",
          meta: {
            title: 'pageThree',
            icon: 'documentation',
            noCache: true
          }
        }
      ]
    }

  ]*/
  routes:constantRouterMap
})
