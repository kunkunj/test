import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  base:'/dist/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import('@/view/index')
    },
    {
      path: '/index',
      name: 'index',
      component: ()=>import('@/view/index')
    },
    {
      path: '/kill',
      name: 'kill',
      component: ()=>import('@/view/kill/kill')
    },
    {
      path: '/info',
      name: 'info',
      component: ()=>import('@/view/info/info')
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: ()=>import('@/view/delivery/delivery')
    },
    {
      path: '/positionDetail',
      name: 'positionDetail',
      component: ()=>import('@/view/position-detail/positionDetail')
    },
  ]
})
