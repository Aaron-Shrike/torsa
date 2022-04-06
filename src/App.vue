<template>
    <div id="app">
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

        --color-error: #D9251B;
        --color-informacion: #2F86EB;
        --color-correcto: #47D764;
        --color-peligro: #FF9F46;

        --color-si: #2F86EB;
        --color-no: #D9251B;
    }

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
    body { 
        font-size: 16px;
        background-color: var(--color-bg-principal) !important;
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
        font-size: 48px;
    }
    h2 {
        font-size: 36px;
    }
    h3 {
        font-size: 32px;
    }
    h4 {
        font-size: 28px;
    }

    h5 {
        font-size: 24px;
    }

    h6{
        font-size: 20px;
    }

    img {
        max-width: 100%;
        height: 100%;
    }

    .btn.boton{
        border-radius: var(--redondeado-1);
        border: 0;
        min-height: 54px;
        font-weight: 700;
        font-size: 24px;
        padding: 10px 30px;
    }
    .btn.boton-principal{
        background-color: var(--color-principal);
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

    .btn.boton-transparente{
        color: var(--color-principal);
    }
    .btn.boton-transparente:hover{
        opacity: .92;
        color: var(--color-principal);
    }
    .btn.boton-transparente:focus{
        color: var(--color-principal);
        box-shadow: none;
    }
    .btn.boton-transparente:not(:disabled):not(.disabled):active{
        color: var(--color-principal);
        box-shadow: none;
    }
    .btn.boton-transparente:not(:disabled):not(.disabled):active:focus{
        box-shadow: none;
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
        padding: 0.375rem 1.2rem;
        border: 1px solid var(--color-inputs);
        border-radius: var(--redondeado-1);
        height: 45px;
        font-weight: 600;
        font-size: 16px;
    }
    .input-group .form-control.input-formulario.is-invalid{
        border-color: #dc3545;
    }
    .input-group .form-control.input-formulario.is-valid{
        border-color: #28a745;
    }
    .form-control.input-formulario::placeholder{
        color: var(--color-inputs);
    }
    textarea.form-control.input-formulario{
        height: 100px;
        resize: none;
    }

    .swal2-popup{
        width: 375px !important;
        /* min-height: 425px !important; */
        border-radius: var(--redondeado-1) !important;
    }
    .swal2-icon-error.swal2-popup{
        border-top: 16px  solid var(--color-error);
    }
    .swal2-icon-success.swal2-popup{
        border-top: 16px  solid var(--color-correcto);
    }
    .swal2-icon-info.swal2-popup{
        border-top: 16px  solid var(--color-informacion);
    }

    .swal2-popup .swal2-actions{
        width: 100%;
    }

    .swal2-popup .swal2-styled.swal2-confirm,
    .swal2-popup .swal2-styled.swal2-deny,
    .swal2-popup .swal2-styled.swal2-cancel {
        border-radius: var(--redondeado-1);
        font-size: 24px;
        font-weight: 700;
        min-height: 54px;
        max-width: 100%;
    }

    .swal2-icon-error .swal2-styled.swal2-confirm {
        background-color: var(--color-error);
    }
    .swal2-icon-error .swal2-styled.swal2-confirm:focus {
        box-shadow: 0 0 0 3px rgba(var(--color-error),.5);
    }
    .swal2-icon-success .swal2-styled.swal2-confirm {
        background-color: var(--color-correcto);
    }
    .swal2-icon-success .swal2-styled.swal2-confirm:focus {
        box-shadow: 0 0 0 3px rgba(var(--color-correcto),.5);
    }
    .swal2-icon-info .swal2-styled.swal2-confirm {
        background-color: var(--color-informacion);
    }
    .swal2-icon-info .swal2-styled.swal2-confirm:focus {
        box-shadow: 0 0 0 3px rgba(var(--color-informacion),.5);
    }
    .swal2-icon-warning .swal2-styled.swal2-confirm {
        background-color: var(--color-peligro);
    }
    .swal2-icon-warning .swal2-styled.swal2-confirm:focus {
        box-shadow: 0 0 0 3px rgba(var(--color-peligro),.5);
    }

    .swal2-icon-error .swal2-styled.swal2-confirm,
    .swal2-icon-success .swal2-styled.swal2-cancel,
    .swal2-icon-warning .swal2-styled.swal2-cancel {
        background-color: var(--color-error);
    }
    .swal2-icon-error .swal2-styled.swal2-confirm:focus,
    .swal2-icon-success .swal2-styled.swal2-cancel:focus,
    .swal2-icon-warning .swal2-styled.swal2-cancel:focus {
        box-shadow: 0 0 0 3px rgba(var(--color-error),.5);
    }

    .swal2-popup .swal2-title{
        font-size: 21px;
        font-weight: 900;
        color: var(--color-titulo-principal);
    }
    .swal2-popup .swal2-html-container{
        font-size: 17px;
        font-weight: 500;
        color: var(--color-subtitulo);
    }
</style>
