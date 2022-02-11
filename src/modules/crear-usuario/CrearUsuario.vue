<template>
  <form action="#" v-on:submit.prevent="procesar()" style="margin-top: 20px;margin-bottom: 20px">
    <b-container>
      <b-card title="Registrar Usuario" style="text-align: center">
        <b-row>
          <b-col>
            <b-card title="Datos Personales">
              <div class="form-group">
                <label>Nombre</label>
                <b-form-input type="text" class="form-control" :state="estadoValidacion('nombre')" placeholder="Ingrese Nombre" v-model="$v.usuario.nombre.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.nombre.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.nombre.maxLength" class="valid">Maximo 40 Caracteres</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Apellido Paterno</label>
                <b-form-input type="text" class="form-control" :state="estadoValidacion('apPaterno')" placeholder="Ingrese Apellido Paterno" v-model="$v.usuario.apPaterno.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.apPaterno.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.apPaterno.maxLength" class="valid">Maximo 40 Caracteres</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Apellido Materno</label>
                <b-form-input type="text" class="form-control" :state="estadoValidacion('apMaterno')" placeholder="Ingrese Apellido Materno" v-model="$v.usuario.apMaterno.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.apMaterno.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.apMaterno.maxLength" class="valid">Maximo 40 Caracteres</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>DNI</label>
                <b-form-input type="number" class="form-control" :state="estadoValidacion('dni')" placeholder="Ingrese DNI" v-model="$v.usuario.dni.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.dni.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.dni.maxLength" class="valid">Maximo 8 Digitos</small>
                  <small v-if="!$v.usuario.dni.minLength" class="valid">Minimo 8 Digitos</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Fecha de Nacimiento</label>
                <b-form-input type="date" class="form-control" id="datetime" :state="estadoValidacion('fechNacimiento')" v-model="$v.usuario.fechNacimiento.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.fechNacimiento.required" class="valid">Campo Obligatorio</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Teléfono</label>
                <b-form-input type="number" class="form-control" :state="estadoValidacion('telefono')" placeholder="Ingrese Teléfono" v-model="$v.usuario.telefono.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.telefono.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.telefono.maxLength" class="valid">Maximo 9 Digitos</small>
                  <small v-if="!$v.usuario.telefono.minLength" class="valid">MInimo 9 Digitos</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Dirección</label>
                <b-form-input type="text" class="form-control" :state="estadoValidacion('direccion')" placeholder="Ingrese Dirección" v-model="$v.usuario.direccion.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.direccion.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.direccion.maxLength" class="valid">Maximo 50 Caracteres</small>
                </b-form-invalid-feedback>
              </div>
            </b-card>
          </b-col>
          <hr>
          <b-col>
            <b-card title="Datos Usuario">
              <div class="form-group">
                <label>Correo electrónico</label>
                <b-form-input type="email" class="form-control" id="inputEmail4" :state="estadoValidacion('correo')" placeholder="Ingrese Correo electrónico" v-model="$v.usuario.correo.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.correo.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.correo.email" class="valid">Formato Incorrecto</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Cargo</label>
                <b-form-select class="form-select" :state="estadoValidacion('cargo')" v-model="$v.usuario.cargo.$model">
                  <option value="">Seleccione una opción</option>
                  <option>Promotor</option>
                  <option>Recepcionista</option>
                  <option>Encargado de Registro de Crédito</option>
                  <option>Encargado de Control</option>
                  <option>Cobrador</option>
                  <option>Cajero</option>
                </b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.cargo.required" class="valid">Opcion Invalida</small>
                </b-form-invalid-feedback>
              </div>
            </b-card>
            <hr>
            <b-card title="Datos Contacto Emergencia">
              <div class="form-group">
                <label>Nombre</label>
                <b-form-input type="text" class="form-control" :state="estadoValidacion('nombreEmerg')" placeholder="Ingrese Nombres completos" v-model="$v.usuario.nombreEmerg.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.nombreEmerg.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.nombreEmerg.maxLength" class="valid">Maximo 60 Caracteres</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Dirección</label>
                <b-form-input type="text" class="form-control" :state="estadoValidacion('direccionEmerg')" placeholder="Ingrese Dirección" v-model="$v.usuario.direccionEmerg.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.direccionEmerg.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.direccionEmerg.maxLength" class="valid">Maximo 50 Caracteres</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Teléfono</label>
                <b-form-input type="number" class="form-control" :state="estadoValidacion('telefonoEmerg')" placeholder="Ingrese Teléfono" v-model="$v.usuario.telefonoEmerg.$model"></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.telefonoEmerg.required" class="valid">Campo Obligatorio</small>
                  <small v-if="!$v.usuario.telefonoEmerg.maxLength" class="valid">Maximo 9 Digitos</small>
                  <small v-if="!$v.usuario.telefonoEmerg.minLength" class="valid">Minimo 9 Digitos</small>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Parentesco</label>
                <b-form-select class="form-select" :state="estadoValidacion('parentescoEmerg')" v-model="$v.usuario.parentescoEmerg.$model">
                  <option value="">Seleccione una opción</option>
                  <option>Padre</option>
                  <option>Madre</option>
                  <option>Hermano</option>
                  <option>Hermana</option>
                  <option>Tío</option>
                  <option>Tía</option>
                </b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <small v-if="!$v.usuario.parentescoEmerg.required" class="valid">Opcion Invalida</small>
                </b-form-invalid-feedback>
              </div>
            </b-card>
            <hr>
            <div>
              <b-button variant="outline-primary" type="submit" pill block>Registrar</b-button>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </form>

</template>

<script>


import {required,email,maxLength,minLength} from 'vuelidate/lib/validators';
export default {
  name: "registrarUsuario",
  props: {
    msg: String,
  },
  data() {
    return {
      submited: false,
      este: false,
      usuario: {
        nombre: '',
        apPaterno: '',
        apMaterno: '',
        dni: '',
        fechNacimiento: '',
        sexMasculino: '',
        sexFemenino: '',
        telefono: '',
        direccion: '',
        correo: '',
        cargo: '',
        nombreEmerg: '',
        direccionEmerg: '',
        telefonoEmerg: '',
        parentescoEmerg: '',
      }
    }
  },

  methods: {
    async procesar(){
      this.submited=true;
      console.log(this.usuario)
      this.$v.$touch();
      if(this.$v.$invalid){
        return false;
      }
        /*await this.axios.post('/Registrar',this.usuario)
        .then(response => {
          let data = response.data

          if(response.status === 200)
          {
            //Registra al usuario, muestra un mensaje y limpia los campos
          }
          else
          {
            this.mensajeDeError(data.mensaje)
          }
        }).catch(() => {
              this.mensajeDeError()
        });*/
        this.$swal(
            'Usuario Registrado',
            'Para inciar sesion porfavor verique su correo electronico',
            'success'
        );
        console.log(this.usuario);

    },
    estadoValidacion(aux) {
      const { $dirty, $error } = this.$v.usuario[aux];
      return $dirty ? !$error : null;
    },
    mensajeDeError(mensaje = 'Error al conectar al servidor.'){
      this.$swal(
          'Error!',
          mensaje,
          'error'
      )
    }
  },
  validations:{
    usuario:{
      nombre:{
        required,
        maxLength:maxLength(40),
      },
      apPaterno:{
        required,
        maxLength:maxLength(40),
      },
      apMaterno:{
        required,
        maxLength:maxLength(40),
      },
      dni:{
        required,
        maxLength:maxLength(8),
        minLength:minLength(8)
      },
      fechNacimiento:{
        required
      },
      telefono:{
        required,
        maxLength:maxLength(9),
        minLength:minLength(9)
      },
      direccion:{
        required,
        maxLength:maxLength(50),
      },
      correo:{
        required,
        email
      },
      cargo:{
        required
      },
      nombreEmerg:{
        required,
        maxLength:maxLength(60),
      },
      direccionEmerg:{
        required,
        maxLength:maxLength(50),
      },
      telefonoEmerg:{
        required,
        maxLength:maxLength(9),
        minLength:minLength(9)
      },
      parentescoEmerg:{
        required
      }
    }
  }
}
</script>

<style>  
.contenedor{
    width: 90vw;
    background-color: var(--background-contenedor);
    margin: 35px auto;
    border-radius: 30px;
    padding: 50px 0 10px 0;
}
.contenedor h2{
    font-family: 'Asap', sans-serif,'Arial Narrow', Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    color: var(--color-titulo);
}
.contenido{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 30px;
    margin: 40px 60px 40px 60px;
}
.contenido h3{
    font-family: 'Gothic A1', sans-serif, 'Arial';
    font-weight: 600;
    font-size: 18px;
    position: absolute;
    margin-top: -43px;
    margin-left: -5px;
}
.datos-personales{
    width: 47%;
    min-width: 350px;
}
.datos-personales .contenedor-DP,.datos-usuario, .datos-emergencia{
    background-color: var(--color-1);
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    padding: 20px 25px 30px 25px;
    border: solid var(--borde-contenedor) 2px;
    border-radius: 15px;
}
.columna{
    display: flex;
    flex-direction: column;
    grid-gap: 50px;
    justify-content: space-around;
    width: 47%;
    min-width: 350px;
}
.btnRegistrar{
    width: 30%;
    min-width: 130px;
    height: 35px;
    font-weight: 500;
    margin-top: -15px;
    align-self: flex-end;
    position: relative;
    right: 25px;
}
.btnRegistrar:active{
    transform: translateY(3px);
}
.valid{
  color: rgb(223, 14, 14);
}
@media only screen and (max-width:950px){
    .datos-personales{ width: 100%; min-width: 350px;}
    .columna{ width: 100%; min-width: 350px; grid-gap:50px }
    .contenido{ grid-gap: 50px; }
    .contenedor h2 { font-size: 30px;}
    .btnRegistrar {width: 20%;}
}

</style>