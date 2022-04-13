import ListarSolicitudesPVD from '@/modules/sistema/listar-solicitudes-pvd/ListarSolicitudesPVD.vue'
import SolicitudPVD from '@/modules/sistema/listar-solicitudes-pvd/SolicitudPVD.vue'

export const ListarSolicitudesPVDRoutes = [
    {
        path: 'solicitudes-pendientes-verificacion-datos',
        name: 'ListarSolicitudesPVD',
        component: ListarSolicitudesPVD,
    },
    {
        path: 'solicitud-pendientes-verificacion-datos/:codigo',
        name: 'SolicitudPVD',
        component: SolicitudPVD,
    },
]