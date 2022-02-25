<template>
    <div>
		<section class="seccion-garante seccion-garante-1">
            <b-container class="contenedor-garante">
                <b-row class="contenedor-iniciar-sesion" align-v="center" align-h="center">
                    <b-col cols="12">
                        <div class="boton-regresar">
                            <b-button variant="link" class="boton boton-transparente">
                                <b-icon icon="arrow-left" aria-hidden="true"></b-icon> Regresar
                            </b-button>
                        </div>
                        <b-card
                            tag="div"
                            class="mb-2 card-formulario"
                        >
                            <b-card-text>
                                <h2 class="titulo-formulario">Ingresar Garante</h2>
                                <p class="subtitulo-formulario">Datos del primer garante</p>
                                <b-form @submit.prevent="ValidarDatosGarante1">
                                    <b-form-group
                                        id="input-group-1"
                                    >
                                        <b-form-input
                                            id="input-1"
                                            v-model="$v.datosGarante1.apePaterno.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante1('apePaterno')"
                                            placeholder="Apellido Paterno"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-1-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante1.apePaterno.required">
                                                El Apellido Paterno es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-2"
                                    >
                                        <b-form-input
                                            id="input-2"
                                            v-model="$v.datosGarante1.apeMaterno.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante1('apeMaterno')"
                                            placeholder="Apellido Materno"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-2-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante1.apeMaterno.required">
                                                El Apellido Materno es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-3"
                                    >
                                        <b-form-input
                                            id="input-3"
                                            v-model="$v.datosGarante1.nombres.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante1('nombres')"
                                            placeholder="Nombres"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-3-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante1.nombres.required">
                                                El Nombre(s) es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-4"
                                    >
                                        <b-form-input
                                            id="input-4"
                                            v-model="$v.datosGarante1.dni.$model"
                                            class="input-formulario"
                                            type="number"
                                            :state="EstadoValidacionGarante1('dni')"
                                            placeholder="DNI"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-4-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante1.dni.required">
                                                El número de DNI es requerido
                                            </div>
                                            <div v-if="!$v.datosGarante1.dni.minLength || !$v.datosGarante1.dni.maxLength">
                                                El número de DNI no es válido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-5"
                                    >
                                        <b-form-input
                                            id="input-5"
                                            v-model="$v.datosGarante1.telefono.$model"
                                            class="input-formulario"
                                            type="tel"
                                            :state="EstadoValidacionGarante1('telefono')"
                                            placeholder="Teléfono/Celular"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-5-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante1.telefono.required">
                                                El número de Teléfono es requerido
                                            </div>
                                            <div v-if="!$v.datosGarante1.telefono.minLength || !$v.datosGarante1.telefono.maxLength || !$v.datosGarante1.telefono.numeric">
                                                El número de Teléfono no es válido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-6"
                                    >
                                        <b-form-input
                                            id="input-6"
                                            v-model="$v.datosGarante1.domicilio.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante1('domicilio')"
                                            placeholder="Domicilio"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-6-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante1.domicilio.required">
                                                El Domicilio es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-overlay
                                        :show="efectoCargando"
                                        rounded
                                        opacity="0.6"
                                        class="d-block"
                                    >
                                        <b-button 
                                            :disabled="efectoCargando"
                                            block 
                                            type="submit" 
                                            class="boton boton-principal mt-2 boton-block-icon"
                                        >
                                            Continuar 
                                            <b-icon 
                                                icon="chevron-right" 
                                                aria-hidden="true" 
                                                class="icon-derecha-boton"
                                            ></b-icon>
                                        </b-button>
                                    </b-overlay>
                                </b-form>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section class="seccion-garante seccion-garante-2 ocultar-informacion">
            <b-container class="contenedor-garante">
                <b-row class="contenedor-iniciar-sesion" align-v="center" align-h="center">
                    <b-col cols="12">
                        <div class="boton-regresar">
                            <b-button @click.prevent="RegresarGarante1" variant="link" class="boton boton-transparente">
                                <b-icon icon="arrow-left" aria-hidden="true"></b-icon> Regresar
                            </b-button>
                        </div>
                        <b-card
                            tag="div"
                            class="mb-2 card-formulario"
                        >
                            <b-card-text>
                                <h2 class="titulo-formulario">Ingresar Garante</h2>
                                <p class="subtitulo-formulario">Datos del segundo garante</p>
                                <b-form @submit.prevent="ValidarDatosGarante2">
                                    <b-form-group
                                        id="input-group-1"
                                    >
                                        <b-form-input
                                            id="input-1"
                                            v-model="$v.datosGarante2.apePaterno.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante2('apePaterno')"
                                            placeholder="Apellido Paterno"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-1-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante2.apePaterno.required">
                                                El Apellido Paterno es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-2"
                                    >
                                        <b-form-input
                                            id="input-2"
                                            v-model="$v.datosGarante2.apeMaterno.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante2('apeMaterno')"
                                            placeholder="Apellido Materno"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-2-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante2.apeMaterno.required">
                                                El Apellido Materno es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-3"
                                    >
                                        <b-form-input
                                            id="input-3"
                                            v-model="$v.datosGarante2.nombres.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante2('nombres')"
                                            placeholder="Nombres"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-3-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante2.nombres.required">
                                                El Nombre(s) es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-4"
                                    >
                                        <b-form-input
                                            id="input-4"
                                            v-model="$v.datosGarante2.dni.$model"
                                            class="input-formulario"
                                            type="number"
                                            :state="EstadoValidacionGarante2('dni')"
                                            placeholder="DNI"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-4-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante2.dni.required">
                                                El número de DNI es requerido
                                            </div>
                                            <div v-if="!$v.datosGarante2.dni.minLength || !$v.datosGarante2.dni.maxLength">
                                                El número de DNI no es válido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-5"
                                    >
                                        <b-form-input
                                            id="input-5"
                                            v-model="$v.datosGarante2.telefono.$model"
                                            class="input-formulario"
                                            type="tel"
                                            :state="EstadoValidacionGarante2('telefono')"
                                            placeholder="Teléfono/Celular"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-5-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante2.telefono.required">
                                                El número de Teléfono es requerido
                                            </div>
                                            <div v-if="!$v.datosGarante2.telefono.minLength || !$v.datosGarante2.telefono.maxLength || !$v.datosGarante1.telefono.numeric">
                                                El número de Teléfono no es válido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-6"
                                    >
                                        <b-form-input
                                            id="input-6"
                                            v-model="$v.datosGarante2.domicilio.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante2('domicilio')"
                                            placeholder="Domicilio"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-6-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante2.domicilio.required">
                                                El Domicilio es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-overlay
                                        :show="efectoCargando"
                                        rounded
                                        opacity="0.6"
                                        class="d-block"
                                    >
                                        <b-button 
                                            :disabled="efectoCargando"
                                            block 
                                            type="submit" 
                                            class="boton boton-principal mt-2 boton-block-icon"
                                        >
                                            Continuar 
                                            <b-icon 
                                                icon="chevron-right" 
                                                aria-hidden="true" 
                                                class="icon-derecha-boton"
                                            ></b-icon>
                                        </b-button>
                                    </b-overlay>
                                </b-form>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section class="seccion-solicitud ocultar-informacion">
            <b-container class="contenedor-iniciar-sesion">
                <b-row class="contenedor-iniciar-sesion" align-v="center" align-h="center">
                    <b-col cols="12">
                        <div class="boton-regresar">
                            <b-button @click.prevent="RegresarGrante2" variant="link" class="boton boton-transparente">
                                <b-icon icon="arrow-left" aria-hidden="true"></b-icon> Regresar
                            </b-button>
                        </div>
                        <b-card
                            tag="div"
                            class="mb-2 card-formulario"
                        >
                            <b-card-text>
                                <div class="logo-torsa logo-iniciar-sesion">
                                    <img src="@/assets/logo-torsa.png" alt="Torsa Perú">
                                </div>
                                <h2 class="titulo-formulario">Datos de crédito</h2>
                                <p class="subtitulo-formulario">Ingresa los datos</p>
                                <b-form @submit.prevent="ValidarDatosSolicitud">
                                    <b-form-group
                                        id="input-group-1"
                                    >
                                        <b-form-input
                                            id="input-1"
                                            v-model="$v.datosSolicitud.monto.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionSolicitud('monto')"
                                            placeholder="Monto"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-1-live-feedback"
                                        >
                                            <div v-if="!$v.datosSolicitud.monto.required">
                                                El monto es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-2"
                                    >
                                        <b-form-input
                                            id="input-2"
                                            v-model="$v.datosSolicitud.motivo.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionSolicitud('motivo')"
                                            placeholder="Motivo"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-2-live-feedback"
                                        >
                                            <div v-if="!$v.datosSolicitud.motivo.required">
                                                El motivo es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                
                                    <b-overlay
                                        :show="efectoCargando"
                                        rounded
                                        opacity="0.6"
                                        class="d-block"
                                    >
                                        <b-button 
                                            :disabled="efectoCargando"
                                            block 
                                            type="submit" 
                                            class="boton boton-principal mt-2 boton-block-icon"
                                        >
                                            Registrar Solicitud 
                                        </b-button>
                                    </b-overlay>
                                </b-form>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </section>
	</div>
</template>
<script>
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
    data: () =>  ({
        efectoCargando: false,
        datosSocio: {
            dni: '87654321',
        },
		datosGarante1: {
			apePaterno: '',
			apeMaterno: '',
			nombres: '',
			dni: '',
			telefono: '',
			domicilio: '',
		},
		datosGarante2: {
			apePaterno: '',
			apeMaterno: '',
			nombres: '',
			dni: '',
			telefono: '',
			domicilio: '',
		},
		datosSolicitud: {
            codUsuario: '',
            codSocio: '',
			monto: '',
			motivo: '',
		},
	}),
	validations: {
		datosGarante1: {
			apePaterno: {
				required,
			},
			apeMaterno: {
				required,
			},
			nombres: {
				required,
			},
			dni: {
				required,
				minLength: minLength(8),
				maxLength: maxLength(8)
			},
			telefono: {
				required,
                numeric,
				minLength: minLength(6),
				maxLength: maxLength(9)
			},
			domicilio: {
				required,
			},
		},
		datosGarante2: {
			apePaterno: {
				required,
			},
			apeMaterno: {
				required,
			},
			nombres: {
				required,
			},
			dni: {
				required,
				minLength: minLength(8),
				maxLength: maxLength(8)
			},
			telefono: {
				required,
                numeric,
				minLength: minLength(6),
				maxLength: maxLength(9)
			},
			domicilio: {
				required,
			},
		},
        datosSolicitud: {
			monto: {
                numeric,
				required,
			},
			motivo: {
				required,
			},
		},
	},
	methods: {
		EstadoValidacionGarante1(name) 
        {
			const { $dirty, $error } = this.$v.datosGarante1[name];
			return $dirty ? !$error : null;
		},
		EstadoValidacionGarante2(name) 
        {
			const { $dirty, $error } = this.$v.datosGarante2[name];
			return $dirty ? !$error : null;
		},
		EstadoValidacionSolicitud(name) 
        {
			const { $dirty, $error } = this.$v.datosSolicitud[name];
			return $dirty ? !$error : null;
		},
        ActivarFormularioGarante1()
        {
            document.querySelector('.seccion-garante-1').classList.add('mostrar-informacion')
            document.querySelector('.seccion-garante-1').classList.remove('ocultar-informacion')
        },
        ActivarFormularioGarante2()
        {
            document.querySelector('.seccion-garante-2').classList.add('mostrar-informacion')
            document.querySelector('.seccion-garante-2').classList.remove('ocultar-informacion')
        },
        ActivarFormularioSolicitud()
        {
            document.querySelector('.seccion-solicitud').classList.add('mostrar-informacion')
            document.querySelector('.seccion-solicitud').classList.remove('ocultar-informacion')
        },
        OcultarFormularioGarante1()
        {
            document.querySelector('.seccion-garante-1').classList.add('ocultar-informacion')
            document.querySelector('.seccion-garante-1').classList.remove('mostrar-informacion')
        },
        OcultarFormularioGarante2()
        {
            document.querySelector('.seccion-garante-2').classList.add('ocultar-informacion')
            document.querySelector('.seccion-garante-2').classList.remove('mostrar-informacion')
        },
        OcultarFormularioSolicitud()
        {
            document.querySelector('.seccion-solicitud').classList.add('ocultar-informacion')
            document.querySelector('.seccion-solicitud').classList.remove('mostrar-informacion')
        },
        RegresarBuscarSocio()
        {
            this.efectoCargando = false
            //activar busca socio
            this.OcultarFormularioGarante1()
        },
        RegresarGarante1()
        {
            this.efectoCargando = false
            this.ActivarFormularioGarante1()
            this.OcultarFormularioGarante2()
        },
        RegresarGrante2()
        {
            this.efectoCargando = false
            this.ActivarFormularioGarante2()
            this.OcultarFormularioSolicitud()
        },
		ValidarDatosGarante1()
        {
			this.$v.datosGarante1.$touch();

			if(!this.$v.datosGarante1.$anyError)
            { 
                if(this.datosSocio.dni != this.datosGarante1.dni)
                {
                    this.efectoCargando = true
                    setTimeout(()=>{
                        this.ActivarFormularioGarante2()
                        this.OcultarFormularioGarante1()
                        this.efectoCargando = false
                    }, 1000)
                    // axios.post('/api/varificar-garante', this.datosGarante1.dni)
                    //     .then((respuesta) => 
                    //     {
                    //         let data = respuesta.data

                    //         if(respuesta.status == 200 && typeof data.error === 'undefined')
                    //         {
                                // this.ActivarFormularioGarante2()
                                // this.OcultarFormularioGarante1()
                        //     }
                        //     else
                        //     {
                        //         this.MensajeDeError(data.mensaje)
                        //     }
                        // })
                        // .catch(() => 
                        // {
                        //     this.MensajeDeError()
                        // })
                        // .finally(()=>
                        // {
                        //     this.efectoCargando = false
                        // });
                }
				else
                {
                    this.MensajeDeError("El dni del primer garante coincide con el dni del socio")
                }
			}
		},
		ValidarDatosGarante2()
        {
			this.$v.datosGarante2.$touch();

			if(!this.$v.datosGarante2.$anyError)
            { 
                if(this.datosGarante1.dni != this.datosGarante2.dni)
                {
                    if(this.datosSocio.dni != this.datosGarante2.dni)
                    {
                        // axios.post('/api/varificar-garante', this.datosGarante2.dni)
                        //     .then((respuesta) => 
                        //     {
                        //         let data = respuesta.data

                        //         if(respuesta.status == 200 && typeof data.error === 'undefined')
                        //         {
                                    this.ActivarFormularioSolicitud()
                                    this.OcultarFormularioGarante2()
                            //     }
                            //     else
                            //     {
                            //         this.MensajeDeError(data.mensaje)
                            //     }
                            // })
                            // .catch(() => 
                            // {
                            //     this.MensajeDeError()
                            // });
                            // .finally(()=>
                            // {
                            //     this.efectoCargando = false
                            // });
                    }
                    else
                    {
                        this.MensajeDeError("El dni del segundo garante coincide con el dni del socio")
                    }
                }
				else
                {
                    this.MensajeDeError("El dni del segundo garante coincide con el dni del primer garante")
                }
			}
		},
        ValidarDatosSolicitud()
        {
            this.$v.datosSolicitud.$touch();

			if(!this.$v.datosSolicitud.$anyError)
            { 
                axios.post('/api/registrar-solicitud', this.datosSolicitud)
                    .then((respuesta) => 
                    {
                        let data = respuesta.data

                        if(respuesta.status == 200 && typeof data.error === 'undefined')
                        {
                            //registrar solicitud
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
                        this.efectoCargando = false
                    });
			}
        },
		MensajeDeError(mensaje = 'Error al conectar al servidor.')
        {
			this.$swal({
				title: mensaje,
				icon: 'error',
				confirmButtonText: 'Aceptar',
			})
		}
	}
}
</script>
<style>
    .boton-regresar{
        max-width: 465px;
		margin: 0 auto;
    }
    .boton-block-icon{
        position: relative;
    }
    .icon-derecha-boton{
        position: absolute;
        right: 15px;
        top: 14px;
    }
    .ocultar-informacion{
        display: none;
    }
    .mostrar-informacion{
        animation: mostrando 400ms linear 0s 1 normal forwards;
    }
    @keyframes mostrando {
        0%{
            transform: scale(.2);
        }
        50%{
            transform: scale(.6);
        }
        100%{
            transform: scale(1);
            display: block !important;
        }
    }
</style>