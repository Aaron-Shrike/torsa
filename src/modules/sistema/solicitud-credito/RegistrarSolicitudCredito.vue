<template>
    <div>
		<section class="seccion-garante">
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
                                <b-form @submit.prevent="ValidarDatosGarante">
                                    <b-form-group
                                        id="input-group-1"
                                    >
                                        <b-form-input
                                            id="input-1"
                                            v-model="$v.datosGarante1.apellidoPaterno.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante1('apellidoPaterno')"
                                            placeholder="Apellido Paterno"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-1-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante1.apellidoPaterno.required">
                                                El Apellido Paterno es requerido
                                            </div>
                                        </b-form-invalid-feedback>
                                    </b-form-group>

                                    <b-form-group
                                        id="input-group-2"
                                    >
                                        <b-form-input
                                            id="input-2"
                                            v-model="$v.datosGarante1.apellidoMaterno.$model"
                                            class="input-formulario"
                                            type="text"
                                            :state="EstadoValidacionGarante1('apellidoMaterno')"
                                            placeholder="Apellido Materno"
                                            required
                                        ></b-form-input>
                                        <b-form-invalid-feedback
                                            id="input-2-live-feedback"
                                        >
                                            <div v-if="!$v.datosGarante1.apellidoMaterno.required">
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
                                
                                    <b-button block type="submit" class="boton boton-principal mt-2 boton-block-icon">
                                        Siguiente <b-icon icon="chevron-right" scale=".8" aria-hidden="true" class="icon-derecha-boton"></b-icon>
                                    </b-button>
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
		datosGarante1: {
			apellidoPaterno: '',
			apellidoMaterno: '',
			nombres: '',
			dni: '',
			telefono: '',
			domicilio: '',
		},
	}),
	validations: {
		datosGarante1: {
			apellidoPaterno: {
				required,
			},
			apellidoMaterno: {
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
	},
	methods: {
		EstadoValidacionGarante1(name) {
			const { $dirty, $error } = this.$v.datosGarante1[name];
			return $dirty ? !$error : null;
		},
		ValidarDatosGarante(){
			this.$v.form.$touch();

			if(!this.$v.form.$anyError){ 
				axios.get('/sanctum/csrf-cookie')
					.then(() => {
						axios.post('/api/iniciar-sesion', this.form)
							.then((respuesta) => {
								let data = respuesta.data

								if(respuesta.status == 200 && typeof data.error === 'undefined')
								{
									//obtener los datos del usuario
									//Redirigirme segun su rol
									console.log("Inicio de sision correcto")
								}
								else
								{
									this.MensajeDeError(data.mensaje)
								}
							}).catch(() => {
								this.MensajeDeError()
							});
					}).catch(() => {
						this.MensajeDeError()
					})
			}
		},
		MensajeDeError(mensaje = 'Error al conectar al servidor.'){
			this.$swal(
				'Error!',
				mensaje,
				'error'
			)
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
        top: 8px;
    }
</style>