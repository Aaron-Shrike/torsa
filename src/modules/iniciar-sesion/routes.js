import IniciarSesion from '@/modules/iniciar-sesion/IniciarSesion.vue'
import Prueba from '@/modules/iniciar-sesion/Prueba.vue'

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
    },
    {
        path: '/prueba',
        name: 'Prueba',
        component: Prueba,
    },
]