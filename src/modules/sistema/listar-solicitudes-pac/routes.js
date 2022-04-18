import ListarSolicitudesPAC from '@/modules/sistema/listar-solicitudes-pac/ListarSolicitudesPAC.vue'
import SolicitudPAC from '@/modules/sistema/listar-solicitudes-pac/SolicitudPAC.vue'

export const ListarSolicitudesPACRoutes = [
    {
        path: 'solicitudes-pendientes-aprobacion-crediticia',
        name: 'ListarSolicitudesPAC',
        component: ListarSolicitudesPAC,
    },
    {
        path: 'solicitud-pendiente-aprobacion-crediticia/:codigo',
        name: 'SolicitudPAC',
        component: SolicitudPAC,
    },
]