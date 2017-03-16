import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/Movies'
import Pictures from '@/components/Pictures'
import News from '@/components/News'
import Imgs from '@/components/imgs'
import Home from '@/components/home'
import addJoke from '@/components/addJoke'
import JokeList from '@/components/JokeList'

Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/home',
      component: Home
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
})
