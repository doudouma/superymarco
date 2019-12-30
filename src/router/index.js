import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/pages/index'
// import search from '@/pages/search'

Vue.use(Router)

// 修复router 多次点击bug
// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => (require(['@/pages/index'], resolve))

    },
    {
      path: '/search',
      name: 'search',
      component: resolve => (require(['@/pages/search'], resolve))

    }
  ]
})
