// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import Vue from 'vue'
import App from './App'
import router from './router'
import './permission'  // permission control
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './icons' // icon
import '@/styles/index.scss' // 用于修改全局样式
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import  VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/display.css';
import store from './store'
import * as filters from './filters' // global filters

Vue.config.productionTip = false;


/*
// register global utility filters. 暂时不是很清楚这个是用来干嘛的
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
*/



Vue.use(Element, {
  size: 'medium', // set element-ui default size
});
Vue.use(VueLazyload ,{
  error:  '/static/img/v-lazy/error.png',
  loading: '/static/img/v-lazy/loading.png',

});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
