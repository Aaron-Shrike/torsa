<template>
	<div class="seccion-iniciar-sesion">
		<b-container class="contenedor-iniciar-sesion">
			<b-row class="contenedor-iniciar-sesion" align-v="center">
				<b-col md="6">
					<h1>Torsa Perú</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis reiciendis unde officia, magnam voluptas! Expedita cumque vitae possimus eaque eius delectus nostrum error tempora quasi! Voluptates tenetur expedita quod.</p>
				</b-col>
				<b-col md="6">
					<b-card
						tag="div"
						class="mb-2"
					>
						<b-card-text>
							<b-form @submit.prevent="enviarDatosFormulario">
								<b-form-group
								id="input-group-1"
								label="DNI:"
								label-for="input-1"
								>
								<b-form-input
									id="input-1"
									v-model="$v.form.dni.$model"
									type="number"
									:state="estadoValidacion('dni')"
									placeholder="Ingrese su número de DNI"
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
								</b-form-group>
							
								<b-form-group 
								id="input-group-2" 
								label="Contraseña:" 
								label-for="input-2"
								>
								<b-form-input
									id="input-2"
									v-model="$v.form.contrasenia.$model"
									type="password"
									:state="estadoValidacion('contrasenia')"
									placeholder="Ingrese su contraseña"
									required
								></b-form-input>
								<b-form-invalid-feedback
									id="input-1-live-feedback"
									
								>
									<div v-if="!$v.form.contrasenia.required">
									La contraseña es requerida
									</div>
								</b-form-invalid-feedback>
								</b-form-group>
							
								<b-button type="submit" variant="primary">Ingresar</b-button>
								<b-button class="ml-1" type="reset" variant="danger" @click="resetearFormulario">Resetear</b-button>
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
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

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
						axios.post('/iniciar-sesion', this.form)
							.then((respuesta) => {
								let data = respuesta.data

								if(respuesta.status == 200 && typeof data.error === 'undefined')
								{
									//obtener los datos del usuario
									//Redirigirme segun su rol
									
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
	}
	.contenedor-iniciar-sesion{
		height: 100%;
	}
</style>