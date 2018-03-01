import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Parameters from '@/components/Parameters'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/parameters',
      name: 'Parameters',
      component: Parameters
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
