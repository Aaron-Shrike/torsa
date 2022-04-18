import Sistema from '@/modules/sistema/Sistema.vue'
import InicioPagina from '@/modules/sistema/pages/InicioPagina.vue'

import { CrearUsuarioRoutes } from '@/modules/sistema/crear-usuario/routes.js'
import { SolicitudCreditoRoutes } from '@/modules/sistema/solicitud-credito/routes.js'
import { BuscarSocioHabilitadoRoutes } from '@/modules/sistema/buscar-socio-habilitado/routes.js'
//import { ListarSolicitudesRegistradasRoutes } from '@/modules/sistema/listar-solicitudes-registradas/routes.js'
import { AnularSolicitudCreditoRoutes } from '@/modules/sistema/anular-solicitud-credito/routes.js'
import { ListarSolicitudesPVCRoutes } from '@/modules/sistema/listar-solicitudes-pvc/routes.js'
import { ListarSolicitudesPVDRoutes } from '@/modules/sistema/listar-solicitudes-pvd/routes.js'
import { ListarSolicitudesPACRoutes } from '@/modules/sistema/listar-solicitudes-pac/routes.js'

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
            //...ListarSolicitudesRegistradasRoutes,
            ...AnularSolicitudCreditoRoutes,
            ...ListarSolicitudesPVCRoutes,
            ...ListarSolicitudesPVDRoutes,
            ...ListarSolicitudesPACRoutes,
        ],
        meta: {
            requiereAutenticacion: true
        },
    },
]