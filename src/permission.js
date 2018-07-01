import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
//  顶端进度条 用来做安全验证，安全过滤
//permision judge function


const whiteList = ['/login', '/authredirect', '/navBar','/mainIndex']// no redirect whitelist
router.beforeEach((to, from, next)=> {

    console.log("int beforeEach");
    NProgress.start()
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      console.log("write ok");
      next({path: '/mainIndex'});
      NProgress.done() // finish progress bar
    }
  }


)
router.afterEach(() => {
  NProgress.done() // finish progress bar
})
