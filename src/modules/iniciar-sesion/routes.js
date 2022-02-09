import IniciarSesion from '@/modules/iniciar-sesion/IniciarSesion.vue'

export const IniciarSesionRoutes = [
    {
        path: '/iniciar-sesion',
        name: 'IniciarSesion',
        component: IniciarSesion,
    },
    {
        path: '/cerrar-sesion',
        name: 'CerrarSesion',
        component: IniciarSesion,
    }
]