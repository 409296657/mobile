import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage/MainPage'
import User from '@/pages/user/user'
import Order from '@/pages/Order/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },
  ]
})
