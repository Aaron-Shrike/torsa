<template>
	<div class="seccion-iniciar-sesion">
		<b-container class="contenedor-iniciar-sesion">
			<b-row class="contenedor-iniciar-sesion" align-v="center" align-h="center">
				<b-col cols="12">
					<div class="logo-torsa logo-iniciar-sesion">
						<img src="@/assets/logo-torsa.png" alt="Torsa Perú">
					</div>
					<b-card
						tag="div"
						class="mb-2 card-formulario"
					>
						<b-card-text>
							<h2 class="titulo-formulario">Bienvenido</h2>
							<p class="subtitulo-formulario">Ingresa tus datos</p>
							<b-form @submit.prevent="enviarDatosFormulario">
								<b-input-group
									id="input-group-1"
								>
									<b-input-group-prepend 
										is-text
										:class="{
											'is-invalid': $v.form.dni.$dirty && $v.form.dni.$error,
											'is-valid': $v.form.dni.$dirty && !$v.form.dni.$invalid
										}"
									>
										<b-icon icon="person-fill"></b-icon>
									</b-input-group-prepend>
									<b-form-input
										id="input-1"
										v-model="$v.form.dni.$model"
										class="input-formulario"
										type="number"
										:state="estadoValidacion('dni')"
										placeholder="DNI"
										required
									></b-form-input>
									<b-form-invalid-feedback
										id="input-1-live-feedback"
									>
										<div v-if="!$v.form.dni.required">
											El número de DNI es requerido
										</div>
										<div v-if="!$v.form.dni.minLength || !$v.form.dni.maxLength">
											El número de DNI no es válido
										</div>
									</b-form-invalid-feedback>
								</b-input-group>
							
								<b-input-group 
									id="input-group-2" 
								>
									<b-input-group-prepend 
										is-text
										:class="{
											'is-invalid': $v.form.contrasenia.$dirty && $v.form.contrasenia.$error,
											'is-valid': $v.form.contrasenia.$dirty && !$v.form.contrasenia.$invalid
										}"
									>
										<b-icon icon="lock-fill"></b-icon>
									</b-input-group-prepend>
									<b-form-input
										id="input-2"
										v-model="$v.form.contrasenia.$model"
										class="input-formulario"
										type="password"
										:state="estadoValidacion('contrasenia')"
										placeholder="Contraseña"
										required
									></b-form-input>
									<b-form-invalid-feedback
										id="input-1-live-feedback"
										
									>
										<div v-if="!$v.form.contrasenia.required">
											La contraseña es requerida
										</div>
									</b-form-invalid-feedback>
								</b-input-group>
							
								<b-button block type="submit" class="boton boton-principal mt-2">Ingresar</b-button>
							</b-form>
						</b-card-text>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
	data: () =>  ({
		form: {
			dni: '',
			contrasenia: '',
		},
	}),
	validations: {
		form: {
			dni: {
				required,
				minLength: minLength(8),
				maxLength: maxLength(8)
			},
			contrasenia: {
				required,
			},
		},
	},
	methods: {
		estadoValidacion(name) {
			const { $dirty, $error } = this.$v.form[name];
			return $dirty ? !$error : null;
		},
		enviarDatosFormulario(){
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
									this.mensajeDeError(data.mensaje)
								}
							}).catch(() => {
								this.mensajeDeError()
							});
					}).catch(() => {
						this.mensajeDeError()
					})
			}
		},
		resetearFormulario(){
			this.form.dni = ''
			this.form.contrasenia = ''
		},
		mensajeDeError(mensaje = 'Error al conectar al servidor.'){
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
	.seccion-iniciar-sesion{
		height: 100vh;
		min-height: 100vh;
		background-color: var(--color-bg-principal);
		padding: 0 0 20px 0;
	}

	.contenedor-iniciar-sesion{
		height: 100%;
	}

	.logo-iniciar-sesion{
		max-width: 450px;
		margin: 0 auto;
	}

	.card.card-formulario{
		background-color: var(--color-blanco);
		box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
		border-radius: var(--redondeado-1);
		border: 0;
		max-width: 465px;
		min-height: 364px;
		margin: 0 auto;
	}
	.card-formulario .card-body{
		padding: 30px;
	}

	h2.titulo-formulario{
		font-size: 36px;
		text-align: center;
	}
	
	p.subtitulo-formulario{
		font-size: 21px;
		font-weight: 600;
		color: var(--color-subtitulo);
		text-align: center;
	}
</style>