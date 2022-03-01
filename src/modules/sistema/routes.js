import Sistema from '@/modules/sistema/Sistema.vue'
import InicioPagina from '@/modules/sistema/pages/InicioPagina.vue'

import { CrearUsuarioRoutes } from '@/modules/sistema/crear-usuario/routes.js'
import { SolicitudCreditoRoutes } from '@/modules/sistema/solicitud-credito/routes.js'
import { BuscarSocioHabilitadoRoutes } from '@/modules/sistema/buscar-socio-habilitado/routes.js'

export const SistemaRoutes = [
    {
        path: '/sistema',
        component: Sistema,
        children: [
            { 
                path: '', 
                name: 'Sistema',
                component: InicioPagina 
            },
            ...CrearUsuarioRoutes,
            ...SolicitudCreditoRoutes,
            ...BuscarSocioHabilitadoRoutes,
        ],
        // meta: {
        //     requiereAutenticacion: true
        // },
    },
]