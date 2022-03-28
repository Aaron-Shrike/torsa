import ListarSolicitudesPVC from '@/modules/sistema/listar-solicitudes-pvc/ListarSolicitudesPVC.vue'
import SolicitudPVC from '@/modules/sistema/listar-solicitudes-pvc/SolicitudPVC.vue'

export const ListarSolicitudesPVCRoutes = [
    {
        path: 'solicitudes-pendientes-verificacion-crediticia',
        name: 'ListarSolicitudesPVC',
        component: ListarSolicitudesPVC,
    },
    {
        path: 'solicitud-pendientes-verificacion-crediticia/:codigo',
        name: 'SolicitudPVC',
        component: SolicitudPVC,
    },
]