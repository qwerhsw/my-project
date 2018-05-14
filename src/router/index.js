import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import setting from '@/components/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/setting',
          name: 'setting',
          component: setting
        }
      ]
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: home
    // },
    // {
    //   path: '/setting',
    //   name: 'setting',
    //   component: setting
    }
  ]
})
