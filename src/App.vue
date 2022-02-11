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
    :root {
        --fuente-principal: 'Montserrat', sans-serif;
        --fuente-secundaria: 'Poppins', sans-serif;

        --color-bg-principal: #F2F6FA;
        --color-principal: #573cb7;
        --color-blanco: #ffffff;
        --color-titulo-principal: #29166C;
        --color-subtitulo: #526D94;
        --color-inputs: #B1BDCE;

        --redondeado-1: 16px;

        --background-contenedor:rgb(229, 221, 240);
        --color-titulo:rgb(95, 43, 148);
        --borde-contenedor:rgb(40, 125, 130);
    }

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
    body { 
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--fuente-principal);
        font-weight: 800 !important; 
        color: var(--color-titulo-principal);
    }

    p {
        font-family: var(--fuente-secundaria);
    }

    h1 {
        font-size: 4.8rem;
    }
    h2 {
        font-size: 3.6rem;
    }
    h3 {
        font-size: 3.2rem;
    }
    h4 {
        font-size: 2.8rem;
    }

    h5 {
        font-size: 2.4rem;
    }

    h6{
        font-size: 2rem;
    }

    img {
        max-width: 100%;
        height: 100%;
    }

    .btn.boton-principal{
        background-color: var(--color-principal);
        border-radius: var(--redondeado-1);
        border: 0;
        height: 54px;
        font-weight: 700;
        font-size: 24px;
    }
    .btn.boton-principal:hover{
        opacity: .92;
        background-color: var(--color-principal);
    }
    .btn.boton-principal:focus{
        background-color: var(--color-principal);
        box-shadow: 0 0 0 0.2rem rgba(87,60,183, .5);
    }
    .btn.boton-principal:not(:disabled):not(.disabled):active{
        background-color: var(--color-principal);
        box-shadow: 0 0 0 0.2rem rgba(87,60,183, .5);
    }
    .btn.boton-principal:not(:disabled):not(.disabled):active:focus{
        box-shadow: 0 0 0 0.2rem rgba(87,60,183, .5);
    }

    .input-group{
        margin-bottom: 1rem;
    }
    .input-group .input-group-prepend .input-group-text{
        border-top-left-radius: var(--redondeado-1) !important;
        border-bottom-left-radius: var(--redondeado-1) !important;
        border-right: 0 !important;
        color: var(--color-inputs);
        border: 1px solid var(--color-inputs);
        background-color: var(--color-blanco);
        font-size: 24px;
    }
    .input-group .input-group-prepend.is-valid .input-group-text{
        border-color: #28a745;
    }
    .input-group .input-group-prepend.is-invalid .input-group-text{
        border-color: #dc3545;
    }
    
    .input-group .form-control.input-formulario{
        border-left: 0 !important;
        border-top-right-radius: var(--redondeado-1) !important;
        border-bottom-right-radius: var(--redondeado-1) !important;
    }

    .form-control.input-formulario{
        border: 1px solid var(--color-inputs);
        border-radius: var(--redondeado-1);
        height: 54px;
        font-weight: 600;
        font-size: 18px;
    }
    .form-control.input-formulario::placeholder{
        color: var(--color-inputs);
    }
</style>
