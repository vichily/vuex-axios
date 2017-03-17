import Vue from 'vue'
import Router from 'vue-router'

import main from '@/components/page/main'
import login from '@/components/login'

import joke from '@/components/page/joke'
import news from '@/components/page/news'
import imgs from '@/components/page/imgs'
import home from '@/components/page/home'
import today from '@/components/page/today'
import JokeList from '@/components/JokeList'
import addJoke from '@/components/addJoke'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/main',
      component: main,
      children:[
        {
          path: '/main',
          component: main
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
        },
        {
          path: '/addJoke',
          component: addJoke
        },
        {
          path: '/JokeList',
          component: JokeList
        }
      ]
    }
  ]
})
