<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="primary">
      <b-navbar-brand href="#">Torsa Peru</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <div>
              <b-button variant="info" type="submit" block style="background-color: white"><router-link to="/iniciar-sesion" style="text-decoration: none">Iniciar Sesion</router-link></b-button>
            </div>
          </b-nav-item>
          <b-nav-item>
            <div>
              <b-button variant="info" type="submit" block style="background-color: white"><router-link to="/crear-usuario" style="text-decoration: none">Registrar</router-link></b-button>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
.selector-for-some-widget {
  box-sizing: content-box;
}
</style>
