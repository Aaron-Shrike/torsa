
export const IniciarSesionStore = {
    namespaced: true,
    state: {
        autenticado: false,
        usuario: {},
    },
    mutations: {
        EditarIniciarSesion(state, payload){
            state.autenticado = true
            state.usuario = payload
        },
        EditarCerrarSesion(state){
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