import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/Movies'
import Pictures from '@/components/Pictures'
import News from '@/components/News'
import Imgs from '@/components/imgs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Movies
    },
    {
      path: '/movies',
      component: Movies
    },
    {
      path: '/pictures',
      component: Pictures
    },
    {
      path: '/music',
      component: News
    },
    {
      path: '/books',
      component: Imgs
    }
  ]
})
