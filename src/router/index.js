import Vue from 'vue'
import Router from 'vue-router'
import joke from '@/components/page/joke'
import news from '@/components/page/news'
import imgs from '@/components/page/imgs'
import home from '@/components/page/home'
import today from '@/components/page/today'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: joke
    },
    {
      path: '/joke',
      component: joke
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/imgs',
      component: imgs
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/today',
      component: today
    }
    
  ]
})
