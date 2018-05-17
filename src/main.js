// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

import vueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import './api/http'
import vuex from 'vuex'
import store from './store'
// import utils from './assets/js/util'
// import { prefix } from 'api/common'
// import { getEpsCompany, getAvailableExpress, getRegionData, getExpressSetting, getAddress } from 'api/global'

Vue.use(vueRouter)
Vue.use(ElementUI)
Vue.use(vuex)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    //console.log("1111")// 判断该路由是否需要登录权限
    //console.log(store.state.token)// 判断该路由是否需要登录权限
    // var strorage = localStorage.getItem(prefix + 'token');
    // if (!isEmptyObject(strorage)) { // 通过vuex state获取当前的token是否存在
    //   getExpressSetting();
    //   getAddress();
    //   getRegionData();
    //   getAvailableExpress();
    //   getEpsCompany();
    //   next();
    // } else {
    //   next({
    //     path: '/Login',
    //     query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //   })
    // }
  } else {
    next();
  }
})
function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
