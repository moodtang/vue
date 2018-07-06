import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie

//  顶端进度条 用来做安全验证，安全过滤
//permision judge function

function hasPermission(roles, permissionRoles) {
/*  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)*/

    return true; //  默认全部具有访问权限，暂时不做权限处理， lyx
}

const whiteList = ['/login', '/authredirect', '/navBar','/mainIndex']// no redirect whitelist


const roles = ['admin','editor','develop']
store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
  router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
  next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
})

router.beforeEach((to, from, next)=> {

 /*   console.log("int beforeEach");*/
    NProgress.start()
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
/*      console.log("write ok");*/
 /*     next({path: '/login'});*/
      next();
      NProgress.done() // finish progress bar
    }
  })

/*
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if ( true ) { // determine if there has token ， 如果具有token， if getToken() 暂时没有和后端连接，所以不做token相关的操作
    /!* has token*!/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (true) { // 判断当前用户是否已拉取完user_info信息 //store.getters.roles.length === 0
/!*        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
         /!* const roles = res.data.roles *!/// note: roles must be a array! such as: ['editor','develop']
/!*          const roles = ['editor','develop']
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })*!/
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })*!/

        const roles = ['editor','develop']
        store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
          router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
        })


      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()//
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
        // 可删 ↑
      }
    }
  } else {
    /!* has no token*!/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})
*/


router.afterEach(() => {
  NProgress.done() // finish progress bar
})
