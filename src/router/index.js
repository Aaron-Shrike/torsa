import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiereAutenticacion)) {
        if (store.state.iniciarSesion.autenticado) {
            next();
        } else {
            next({ name: "IniciarSesion" });
        }
    } else {
        next();
    }
});

export default router
