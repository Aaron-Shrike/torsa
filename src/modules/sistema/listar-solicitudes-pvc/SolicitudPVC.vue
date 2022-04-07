<template>
    <div class="pagina-solicitud">
        <b-overlay
            :show="efectoCargandoPagina"
            rounded
            opacity="0.8"
        >
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
                                                <th>Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(verificacion, index) in verificaciones" :key="index">
                                                <td>{{verificacion.descripcion}}</td>
                                                <td>
                                                    <b-form-checkbox 
                                                        class="input-formulario"
                                                        v-model="datosVerificacion[verificacion.modelo]"
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
            <!-- Botones Confirmacion o Rechazar -->
            <div class="seccion-confirmar">
                <b-container class="contenedor-botones">
                    <b-row cols="1" cols-md="2" align-v="center" align-h="center">
                        <b-col v-if="verificacionesListas" class="d-md-flex justify-content-center">
                            <b-overlay
                                :show="efectoCargandoBotonAprobar"
                                rounded
                                opacity="0.6"
                            >
                                <b-button
                                    block
                                    :disabled="efectoCargandoBotonAprobar"
                                    class="boton boton-principal"
                                    @click="ConfirmarAprobarSolicitud"
                                >
                                    Aprobar
                                </b-button>
                            </b-overlay>
                        </b-col>
            
                        <b-col class="mt-2 mt-md-0 d-md-flex justify-content-center">
                            <div>
                                <b-button
                                    block
                                    class="boton boton-principal"
                                    @click="ModalRechazarSolicitud"
                                >
                                    Rechazar
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </b-overlay>
        <!-- Modal - Rechazar Solicitud -->
        <b-modal
            id="modal-prevent-closing"
            size="md" 
            centered
            v-model="mostrarModalRechazar"
            ref="modal-rechazo"
            @show="LimpiarFormularioRechazar"
            @hidden="LimpiarFormularioRechazar"
            @ok="RechazarSolicitud"
            no-close-on-backdrop
            no-close-on-esc
            hide-header-close
            header-class="justify-content-center"
        >
            <template #modal-title>
                <div class="text-center">
                    Rechazar Solicitud de<br>
                    {{datosSocio.nombre}} {{datosSocio.apePaterno}} {{datosSocio.apeMaterno}}
                </div>
            </template>

            <form ref="form">
                <b-form-group
                    id="input-group-2"
                    label="Motivo:"
                    label-for="input-2"
                    class="mb-0"
                >
                    <b-form-textarea
                        id="input-2"
                        v-model="datosRechazar.motivo"
                        class="input-formulario"
                        :state="EstadoValidacion('motivo')"
                        placeholder="Motivo"
                    ></b-form-textarea>
                    <b-form-invalid-feedback
                        id="input-2-live-feedback"
                    >
                        <div v-if="!$v.datosRechazar.motivo.required">
                            Debe ingresar un motivo
                        </div>
                        <div v-if="!$v.datosRechazar.motivo.mixLength">
                            Motivo muy corto
                        </div>
                        <div v-if="!$v.datosRechazar.motivo.maxLength">
                            Motivo demasiado largo
                        </div>
                    </b-form-invalid-feedback>
                </b-form-group>
            </form>

            <template #modal-footer="{ ok, cancel }">
                <b-overlay
                    :show="efectoCargandoBotonModal"
                    rounded
                    opacity="0.6"
                >
                    <b-button class="boton-principal" @click="ok()">
                        Rechazar
                    </b-button>
                </b-overlay>
                <b-button variant="danger" @click="cancel()">
                    Cancelar
                </b-button>
            </template>
        </b-modal>
	</div>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
    data: () =>  ({
        efectoCargandoPagina: true,
        efectoCargandoBoton: false,
        verificacionesListas: false,
        efectoCargandoBotonAprobar: false,
        mostrarModalRechazar: false,
        efectoCargandoBotonModal: false,
        verificaciones: [
            {
                descripcion: 'No tiene deudas Bancarias',
                modelo: 'v1'
            },
            {
                descripcion: 'No tiene deudas con SUNAT',
                modelo: 'v2'
            },
            {
                descripcion: 'No tiene deudas en Inforcorp',
                modelo: 'v3'
            },
        ],
        datosVerificacion: {
            codSolicitud: '',
            v1: '',
            v2: '',
            v3: '',
        },
        datosRechazar: {
            codSolicitud: '',
            motivo: ''
        },
        datosSocio: {},
        datosGarante1: {},
        datosGarante2: {},
	}),
    mounted() {
        this.CargarDatos()
    },
	methods: {
        EstadoValidacion(name) 
		{
			const { $dirty, $error } = this.$v.datosRechazar[name];
			return $dirty ? !$error : null;
		},
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
                        this.efectoCargandoPagina = false
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
        ConfirmarAprobarSolicitud()
        {
            this.$swal(
            {
				title: "¿Desea aprobar la solicitud?",
				icon: 'warning',
				confirmButtonText: 'Aprobar',
				cancelButtonText: 'Cancelar',
                showCancelButton: true,
			})
            .then((result) => {
                if (result.isConfirmed) 
                {
                    this.AprobarSolicitud()
                }
            })
        },
        AprobarSolicitud()
        {
            this.efectoCargandoBotonAprobar = true

            let datos = {
                codSolicitud: this.datosSocio.codSolicitud
            }
            
            axios.post('/api/aprobar-solicitud-pvc', datos)
                .then((respuesta) => 
                {
                    let data = respuesta.data

                    if(respuesta.status == 200 && typeof data.error === 'undefined')
                    {
                        this.$swal(
                        {
                            title: "Verificación crediticia aprobada correctamente.",
                            icon: 'success',
                            confirmButtonText: 'Aceptar',
                        })
                        .then((result) => 
                        {
                            if (result.isConfirmed) {
                                this.$router.push({ name: "ListarSolicitudesPVC"})
                            }
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
                    this.efectoCargandoBotonAprobar = false
                });
        },
        ModalRechazarSolicitud()
        {
            this.mostrarModalRechazar = true
        },
        RechazarSolicitud()
        {
            this.efectoCargandoBotonModal = true

            this.datosRechazar.codSolicitud = this.datosSocio.codSolicitud
            
            axios.post('/api/rechazar-solicitud-pvc', this.datosRechazar)
                .then((respuesta) => 
                {
                    let data = respuesta.data

                    if(respuesta.status == 200 && typeof data.error === 'undefined')
                    {
                        this.$swal({
                            title: "Solicitud rechazada correctamente.",
                            icon: 'success',
                            confirmButtonText: 'Aceptar',
                        })
                        .then((result) => 
                        {
                            if (result.isConfirmed) 
                            {
                                this.$router.push({ name: "ListarSolicitudesPVC"})
                            }
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
                    this.efectoCargandoBotonModal = false
                });
        },
        LimpiarFormularioRechazar()
        {
            this.datosRechazar = {
                codSolicitud: '',
                motivo: '',
            }
            this.$v.datosRechazar.$reset()
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
		datosRechazar: {
			motivo: {
				required,
                minLength: minLength(3),
                maxLength: maxLength(70)
			},
		},
    }
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