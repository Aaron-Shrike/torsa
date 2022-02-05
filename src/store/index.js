import Vue from 'vue'
import Vuex from 'vuex'

import { IniciarSesionStore } from '@/modules/iniciar-sesion/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    iniciarSesion: { ...IniciarSesionStore }
  }
})
