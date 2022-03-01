
export const IniciarSesionStore = {
    namespaced: true,
    state: {
        autenticado: false,
        // usuario: {},
        usuario: {
            codigo: '1',
            dni: '73976711',
            nombre: 'Aarón',
            apePaterno: 'Rojas',
            apeMaterno: 'Vera',
            tipoUsuario: 'Promotor'
        },
    },
    mutations: {
        EditarIniciarSesion(state, payload)
        {
            state.autenticado = true
            state.usuario = payload
        },
        EditarCerrarSesion(state)
        {
            state.autenticado = false
            state.usuario = null
        }
    },
    actions: {
        // ActionIniciarSesion({commit}){
        //     commit("EditarInicioSesion", response.data)
        // },
    },
}