<template>
    <div>
        <b-navbar toggleable="md" type="dark" class="barra-navegacion">
            <b-navbar-toggle v-b-toggle.sidebar-backdrop class="icono-menu" target="none"></b-navbar-toggle>

            <b-navbar-brand href="#" class="ml-4">Torsa Perú</b-navbar-brand>

            <!-- <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse> -->
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
                    <b-list-group-item :to="{name: 'RegistrarSolicitudCredito'}">
                        Registrar Solicitud de Crédito
                    </b-list-group-item>
                    <!-- <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item> -->
                    <b-list-group-item :to="{name: 'CrearUsuario'}">
                        Crear Usuario
                    </b-list-group-item>
                </b-list-group>
            </div>
        </b-sidebar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
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