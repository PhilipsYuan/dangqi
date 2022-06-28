import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:index',
      name: 'detail',
      component: detail
    }
  ]
})
