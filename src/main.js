// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import Bmob from 'hydrogen-js-sdk'
import store from './store/'
import { Button, Select, Dialog, Input,
  Option } from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
Vue.component(Option.name, Option)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  loading: require('./assets/loading.png'),
  attempt: 1
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// 初始化 SDK版本 2.0.0 以下保留之前的初始化方法
Bmob.initialize('06065f1d58796ac8', '595430')

// 挂载到全局使用
Vue.prototype.Bmob = Bmob
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
