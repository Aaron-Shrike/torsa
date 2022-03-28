<template>
    <div class="pagina-solicitud">
        <!-- Socio ------------------------------------------------------------- -->
        <section class="seccion-socio">
            <b-container class="contenedor-socio">
                <b-row align-v="center" align-h="center">
                    <b-col>
                        <b-card
                            tag="div"
                            class="mb-3 card-formulario card-ancho"
                        >
                            <b-card-text>
                                <h2 class="titulo-formulario mb-2">Información Personal</h2>
                                <p class="mb-1">Nombre completo: <b>{{datosSocio.apePaterno}} {{datosSocio.apeMaterno}}, {{datosSocio.nombre}}</b></p>
                                <p class="mb-1">Número de DNI: <b>{{datosSocio.dni}}</b></p>
                                <p class="mb-1">Fecha Nacimiento: <b>{{datosSocio.fecNacimiento}}</b></p>
                                <p class="mb-0">Teléfono: <b>{{datosSocio.telefono}}</b></p>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!-- Domicilio -------------------------------------------------------- -->
		<section class="seccion-domicilio">
            <b-container class="contenedor-domicilio">
                <b-row align-v="center" align-h="center">
                    <b-col>
                        <b-card
                            tag="div"
                            class="mb-3 card-formulario card-ancho"
                        >
                            <b-card-text>
                                <h2 class="titulo-formulario mb-2">Docimicilio</h2>
                                <p class="mb-1">
                                    Dirección: <b>{{datosSocio.domicilio}}. 
                                    {{datosSocio.departamento}} - {{datosSocio.provincia}} - {{datosSocio.distrito}}</b>
                                </p>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!-- Garantes -------------------------------------------------------- -->
        <section class="seccion-garantes">
            <b-container class="contenedor-garantes">
                <b-row align-v="center" align-h="center">
                    <b-col>
                        <b-card
                            tag="div"
                            class="mb-3 card-formulario card-ancho"
                        >
                            <b-card-text>
                                <h2 class="titulo-formulario mb-2">Garantes</h2>
                                <b-row cols="1" cols-md="2">
                                    <b-col>
                                        <p class="mb-2 subtitulo-formulario">Garante 1</p>
                                        <p class="mb-1">Nombre completo: <b>{{datosGarante1.apePaterno}} {{datosGarante2.apeMaterno}}, {{datosGarante2.nombre}}</b></p>
                                        <p class="mb-1">Número de DNI: <b>{{datosGarante1.dni}}</b></p>
                                        <p class="mb-0">Teléfono: <b>{{datosGarante1.telefono}}</b></p>
                                    </b-col>
                                    <b-col>
                                        <p class="mb-2 subtitulo-formulario">Garante 2</p>
                                        <p class="mb-1">Nombre completo: <b>{{datosGarante2.apePaterno}} {{datosGarante2.apeMaterno}}, {{datosGarante2.nombre}}</b></p>
                                        <p class="mb-1">Número de DNI: <b>{{datosGarante2.dni}}</b></p>
                                        <p class="mb-0">Teléfono: <b>{{datosGarante2.telefono}}</b></p>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!-- Verificaciones ---------------------------------------------- -->
        <section class="seccion-verificaciones">
            <b-container class="contenedor-verificaciones">
                <b-row align-v="center" align-h="center">
                    <b-col>
                        <b-card
                            tag="div"
                            class="mb-3 card-formulario card-ancho"
                        >
                            <b-card-text>
                                <h2 class="titulo-formulario mb-2">Verificaciones</h2>
                                <table class="table table-hover table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Verificación</th>
                                            <th>Detalles</th>
                                            <th>Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(verificacion, index) in verificaciones" :key="index">
                                            <td>{{verificacion.descripcion}}</td>
                                            <td>{{verificacion.detalle}}</td>
                                            <td>
                                                <b-form-checkbox 
                                                    class="input-formulario"
                                                    v-model="datosVerificacion[verificacion.modelo]"
                                                    switch
                                                    size="lg"
                                                >
                                                    
                                                </b-form-checkbox>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <b-row>
                                    <b-col class="d-flex justify-content-end">
                                        <b-button
                                            class="boton-principal"
                                            @click="EnviarDatosVerificaciones"
                                        >
                                            Confirmar verificaciones
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!-- Confirmacion -->
        <div v-if="verificacionesListas" class="seccion-confirmar">
            <b-container class="contenedor-verificaciones">
                <b-row cols="1" cols-md="2" align-v="center" align-h="center">
                    <b-col class="d-md-flex justify-content-center">
                        <b-overlay
                            :show="efectoCargandoBotonAceptar"
                            rounded
                            opacity="0.6"
                        >
                            <b-button
                                block
                                :disabled="efectoCargandoBotonAceptar"
                                class="boton boton-principal"
                                @click="AceptarSplicitud"
                            >
                                Aprobar
                            </b-button>
                        </b-overlay>
                    </b-col>

                    <b-col class="mt-2 mt-md-0 d-md-flex justify-content-center">
                        <b-overlay
                            :show="efectoCargandoBotonRechazar"
                            rounded
                            opacity="0.6"
                        >
                            <b-button
                                block
                                :disabled="efectoCargandoBotonRechazar"
                                class="boton boton-principal"
                                @click="RechazarSolicitud"
                            >
                                Rechazar
                            </b-button>
                        </b-overlay>
                    </b-col>
                </b-row>
            </b-container>
        </div>
	</div>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import axios from 'axios'

import { mapState } from 'vuex'
export default {
    data: () =>  ({
        efectoCargandoBoton: false,
        efectoCargandoFormulario: false,
        verificacionesListas: true,
        efectoCargandoBotonAceptar: false,
        efectoCargandoBotonRechazar: false,
        verificaciones: [
            {
                descripcion: 'Verificación de deudas Bancarias',
                detalle: '',
                modelo: 'v1'
            },
            {
                descripcion: 'Verificación de deudas con SUNAT',
                detalle: '',
                modelo: 'v2'
            },
            {
                descripcion: 'Verificación de deudas en Inforcorp',
                detalle: '',
                modelo: 'v3'
            },
        ],
        datosVerificacion: {
            codSolicitud: '',
            v1: '',
            v2: '',
            v3: '',
        },
        datosSocio: {},
        datosGarante1: {},
        datosGarante2: {},
	}),
    computed: {
        ...mapState('iniciarSesion', ['usuario']),
    },
    mounted() {
        this.CargarDatos()
    },
	methods: {
        CargarDatos()
        {
            axios.post('/api/consultarDetalleSolicitud/'+ this.$route.params.codigo)
                .then((respuesta) => 
                {
                    let data = respuesta.data

                    if(respuesta.status == 200 && typeof data.error === 'undefined')
                    {
                        this.datosSocio = data[0]
                        this.datosGarante1 = data[1][0]
                        this.datosGarante2 = data[1][1]
                        // this.datosVerificacion = data.
                        // this.verificacionesListas = data.
                    }
                    else
                    {
                        console.log("error del sistema")
                    }
                })
                .catch(() => 
                {
                    console.log("no hay sistema")
                })
                .finally(() =>
                {
                    this.efectoCargandoBoton = false
                });
        },
        EnviarDatosVerificaciones()
        {
            this.datosVerificacion.codSolicitud = this.datosSocio.codSolicitud
            
            axios.post('/api/verificaciones-solicitud', this.datosVerificacion)
                .then((respuesta) => 
                {
                    let data = respuesta.data

                    if(respuesta.status == 200 && typeof data.error === 'undefined')
                    {
                        this.$swal({
                            title: "Verificaciones registradas",
                            icon: 'success',
                            confirmButtonText: 'Aceptar',
                        })
                    }
                    else
                    {
                        this.MensajeDeError(data.mensaje)
                    }
                })
                .catch(() => 
                {
                    this.MensajeDeError()
                })
                .finally(() =>
                {
                    this.efectoCargandoBoton = false
                });
        },
        AceptarSolicitud()
        {

        },
        RechazarSolicitud()
        {

        },
        MensajeDeError(mensaje = 'Error al conectar al servidor.')
        {
			this.$swal({
				title: mensaje,
				icon: 'error',
				confirmButtonText: 'Aceptar',
			})
		},
        MensajeDeAviso(mensaje)
        {
			this.$swal({
				title: mensaje,
				icon: 'info',
				confirmButtonText: 'Aceptar',
			})
		},
	},
    validations: {
        dniBuscar: {
            required,
            maxLength: maxLength(8),
            minLength: minLength(8),
        },
	},
}
</script>
<style>
    .pagina-solicitud{
        padding: 30px;
    }
    .card-ancho{
        max-width: none !important; 
        min-height: auto !important;
    }
</style>