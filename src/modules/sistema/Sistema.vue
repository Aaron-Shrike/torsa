<template>
    <div>
        <b-navbar toggleable="md" type="dark" class="barra-navegacion">
            <b-navbar-toggle v-b-toggle.sidebar-backdrop class="icono-menu" target="none"></b-navbar-toggle>

            <b-navbar-brand :to="{name: 'Sistema'}" class="ml-4">Torsa Perú</b-navbar-brand>
        </b-navbar>

        <b-sidebar
            id="sidebar-backdrop"
            title="Menú de opciones"
            backdrop-variant="dark"
            backdrop
            shadow
        >
            <div class="px-3 py-2">
                <b-list-group>
                    <b-list-group-item :to="{name: 'RegistrarSolicitudCredito'}" v-if="usuario.tipoUsuario == 'Promotor'">
                        Registrar Solicitud de Crédito
                    </b-list-group-item>
                    <!--
                    <b-list-group-item :to="{name: 'ListarSolicitudesRegistradas'}" v-if="usuario.tipoUsuario == 'Promotor'">
                        Listar Solicitudes Registradas
                    </b-list-group-item>
                    -->
                    <b-list-group-item :to="{name: 'AnularSolicitudCredito'}" v-if="usuario.tipoUsuario == 'Promotor'">
                        Anular Solicitud de Crédito
                    </b-list-group-item>

                    <b-list-group-item :to="{name: 'ListarSolicitudesPVC'}" v-if="usuario.tipoUsuario == 'Recepcionista'">
                        Listar Solicitudes Pendientes de Verificación Crediticia
                    </b-list-group-item>
                    
                    <b-list-group-item :to="{name: 'CrearUsuario'}" v-if="usuario.tipoUsuario == 'Administrador'">
                        Crear Usuario
                    </b-list-group-item>

                    <b-list-group-item button @click.prevent="CerrarSesion">
                        Cerrar Sesión
                    </b-list-group-item>
                </b-list-group>
            </div>
        </b-sidebar>
        <router-view></router-view>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    data: () =>  ({
		
	}),
    computed:{
        ...mapState('iniciarSesion', ['usuario']),
    },
    methods: {
        ...mapMutations('iniciarSesion', ['EditarCerrarSesion']),
        CerrarSesion()
        {
            this.EditarCerrarSesion();
            this.$router.push({ name: "IniciarSesion"})
        }
    }
}
</script>
<style>
    .barra-navegacion{
        background-color: var(--color-principal);
    }
    .icono-menu{
        display: block !important;
    }
</style>