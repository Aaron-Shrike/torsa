import Vue from 'vue'
import VueRouter from 'vue-router'

import { IniciarSesionRoutes } from '@/modules/iniciar-sesion/routes.js'
import { SistemaRoutes } from '../modules/sistema/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'IniciarSesion'}
  },
  ...IniciarSesionRoutes,
  ...SistemaRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
