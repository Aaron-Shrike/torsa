<template>
    <div class="pagina-solicitud">
        <!-- Solicitud ------------------------------------------------------------- -->
        <section class="seccion-solicitud">
            <b-container class="contenedor-socio">
                <b-row align-v="center" align-h="center">
                    <b-col>
                        <b-card
                            tag="div"
                            class="mb-3 card-formulario card-ancho"
                        >
                            <b-card-text>
                                <h2 class="titulo-formulario mb-2">Solicitud</h2>
                                <p class="mb-1">Código: <b>{{datosSocio.codSolicitud}}</b></p>
                                <p class="mb-1">Monto: <b>S/. {{datosSocio.monto}}</b></p>
                                <p class="mb-1">Motivo: <b>{{datosSocio.motivo}}</b></p>
                                <p class="mb-0">Fecha: <b>{{datosSocio.formatoFecha}}</b></p>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </section>
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
                                <h2 class="titulo-formulario mb-2">Socio</h2>
                                <p class="mb-1">DNI: <b>{{datosSocio.dni}}</b></p>
                                <p class="mb-1">Nombre: <b>{{datosSocio.apePaterno}} {{datosSocio.apeMaterno}}, {{datosSocio.nombre}}</b></p>
                                <p class="mb-1">Fecha Nacimiento: <b>{{datosSocio.formatoFechaNacimiento}}</b></p>
                                <p class="mb-1">Teléfono: <b>{{datosSocio.telefono}}</b></p>
                                <p class="mb-0">Domicilio: <b>{{datosSocio.domicilio}}. 
                                    {{datosSocio.distrito}} - {{datosSocio.provincia}} - {{datosSocio.departamento}}</b></p>
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
                                        <p class="mb-1">DNI: <b>{{datosGarante1.dni}}</b></p>
                                        <p class="mb-1">Nombre: <b>{{datosGarante1.apePaterno}} {{datosGarante2.apeMaterno}}, {{datosGarante2.nombre}}</b></p>
                                        <p class="mb-0">Teléfono: <b>{{datosGarante1.telefono}}</b></p>
                                    </b-col>
                                    <b-col>
                                        <p class="mb-2 subtitulo-formulario">Garante 2</p>
                                        <p class="mb-1">DNI: <b>{{datosGarante2.dni}}</b></p>
                                        <p class="mb-1">Nombre: <b>{{datosGarante2.apePaterno}} {{datosGarante2.apeMaterno}}, {{datosGarante2.nombre}}</b></p>
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
                                            <!-- <th>Detalles</th> -->
                                            <th>Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(verificacion, index) in verificaciones" :key="index">
                                            <td>{{verificacion.descripcion}}</td>
                                            <!-- <td>{{verificacion.detalle}}</td> -->
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
                                        <b-overlay
                                            :show="efectoCargandoBoton"
                                            rounded
                                            opacity="0.6"
                                        >
                                            <b-button
                                                class="boton-principal"
                                                @click="EnviarDatosVerificaciones"
                                            >
                                                Confirmar verificaciones
                                            </b-button>
                                        </b-overlay>
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
                                @click="AceptarSolicitud"
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
import axios from 'axios'

export default {
    data: () =>  ({
        efectoCargandoBoton: false,
        efectoCargandoFormulario: false,
        verificacionesListas: false,
        efectoCargandoBotonAceptar: false,
        efectoCargandoBotonRechazar: false,
        verificaciones: [
            {
                descripcion: 'No tiene deudas Bancarias',
                // detalle: '',
                modelo: 'v1'
            },
            {
                descripcion: 'No tiene deudas con SUNAT',
                // detalle: '',
                modelo: 'v2'
            },
            {
                descripcion: 'No tiene deudas en Inforcorp',
                // detalle: '',
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

                        let verificaciones = data[2]
                        this.datosVerificacion.v1 = (verificaciones.v1 == 1) ? true : false
                        this.datosVerificacion.v2 = (verificaciones.v2 == 1) ? true : false
                        this.datosVerificacion.v3 = (verificaciones.v3 == 1) ? true : false

                        if(this.datosVerificacion.v1 && this.datosVerificacion.v2 && this.datosVerificacion.v3){
                            this.verificacionesListas = true
                        }
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
        },
        EnviarDatosVerificaciones()
        {
            this.efectoCargandoBoton = true

            this.datosVerificacion.codSolicitud = this.datosSocio.codSolicitud
            
            axios.post('/api/verificaciones-solicitud', this.datosVerificacion)
                .then((respuesta) => 
                {
                    let data = respuesta.data

                    if(respuesta.status == 200 && typeof data.error === 'undefined')
                    {
                        if(this.datosVerificacion.v1 && this.datosVerificacion.v2 && this.datosVerificacion.v3)
                        {
                            this.verificacionesListas = true
                        }
                        else
                        {
                            this.verificacionesListas = false
                        }

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