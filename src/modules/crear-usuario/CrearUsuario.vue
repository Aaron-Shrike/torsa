<template>
<form action="#" v-on:submit.prevent="procesar()" class="contenedor">
    <h2 classs="clsTitulo">Registrar Usuario</h2>

    <div class="contenido">
      <div class="datos-personales">
        <div class="contenedor-DP">
          <h3>Datos Personales</h3>
          <div class="form-group">
            <label>Nombre</label>
            <b-form-input type="text" class="form-control" placeholder="Nombre" v-model="usuario.nombre"></b-form-input>
            <div v-if="submited && !$v.usuario.nombre.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.nombre.maxLength" class="valid">Este campo debe tener maximo 40 caracteres</div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Paterno</label>
            <b-form-input type="text" class="form-control" placeholder="Apellido Paterno" v-model="usuario.apPaterno"></b-form-input>
            <div v-if="submited && !$v.usuario.apPaterno.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.apPaterno.maxLength" class="valid">Este campo debe tener maximo 40 caracteres</div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Materno</label>
            <b-form-input type="text" class="form-control" placeholder="Apellido Materno" v-model="usuario.apMaterno"></b-form-input>
            <div v-if="submited && !$v.usuario.apMaterno.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.apMaterno.maxLength" class="valid">Este campo debe tener maximo 40 caracteres</div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">DNI</label>
            <b-form-input type="number" class="form-control" placeholder="DNI" v-model="usuario.dni"></b-form-input>
            <div v-if="submited && !$v.usuario.dni.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.dni.maxLength" class="valid">Este campo debe tener 8 caracteres</div>
            <div v-if="submited && !$v.usuario.dni.minLength" class="valid">Este campo debe tener 8 caracteres</div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Fecha de Nacimiento</label>
            <b-form-input type="date" class="form-control" id="datetime"  v-model="usuario.fechNacimiento"></b-form-input>
            <div v-if="submited && !$v.usuario.fechNacimiento.required" class="valid">Este campo es obligatorio</div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Teléfono</label>
            <b-form-input type="number" class="form-control" placeholder="Teléfono" v-model="usuario.telefono"></b-form-input>
            <div v-if="submited && !$v.usuario.telefono.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.telefono.maxLength" class="valid">Este campo debe tener 9 caracteres</div>
            <div v-if="submited && !$v.usuario.telefono.minLength" class="valid">Este campo debe tener 9 caracteres</div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Dirección</label>
            <b-form-input type="text" class="form-control" placeholder="Dirección" v-model="usuario.direccion"></b-form-input>
            <div v-if="submited && !$v.usuario.direccion.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.direccion.maxLength" class="valid">Este campo debe tener maximo 50 caracteres</div>
          </div>
        </div>
      </div>

      <div class="columna">
        <div class="datos-usuario">
          <h3>Datos del Usuario</h3>
          <div class="form-group">
            <label for="inputEmail4">Correo electrónico</label>
            <b-form-input type="email" class="form-control" id="inputEmail4" placeholder="Correo electrónico" v-model="usuario.correo"></b-form-input>
            <div v-if="submited && !$v.usuario.correo.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.correo.email" class="valid">Este campo debe tener el formato correcto</div>
          </div>
          <div class="form-group">
            <label for="inputState">Cargo</label>
            <b-form-select class="form-select" v-model="usuario.cargo">
              <option value="">Seleccione una opción</option>
              <option>Promotor</option>
              <option>Recepcionista</option>
              <option>Encargado de Registro de Crédito</option>
              <option>Encargado de Control</option>
              <option>Cobrador</option>
              <option>Cajero</option>
            </b-form-select>
            <div v-if="submited && !$v.usuario.cargo.required" class="valid">Debe seleccionar una opción válida</div>
          </div>
        </div>

        <div class="datos-emergencia">
          <h3>Contacto de Emergencia</h3>
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <b-form-input type="text" class="form-control" placeholder="Nombres completos" v-model="usuario.nombreEmerg"></b-form-input>
            <div v-if="submited && !$v.usuario.nombreEmerg.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.nombreEmerg.maxLength" class="valid">Este campo debe tener maximo 60 caracteres</div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Dirección</label>
            <b-form-input type="text" class="form-control" placeholder="Dirección" v-model="usuario.direccionEmerg"></b-form-input>
            <div v-if="submited && !$v.usuario.direccionEmerg.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.direccionEmerg.maxLength" class="valid">Este campo debe tener maximo 50 caracteres</div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Teléfono</label>
            <b-form-input type="number" class="form-control" placeholder="Teléfono" v-model="usuario.telefonoEmerg"></b-form-input>
            <div v-if="submited && !$v.usuario.telefonoEmerg.required" class="valid">Este campo es obligatorio</div>
            <div v-if="submited && !$v.usuario.telefonoEmerg.maxLength" class="valid">Este campo debe tener 9 caracteres</div>
            <div v-if="submited && !$v.usuario.telefonoEmerg.minLength" class="valid">Este campo debe tener 9 caracteres</div>
          </div>
          <div class="form-group">
            <label for="inputState">Parentesco</label>
            <b-form-select class="form-select" v-model="usuario.parentescoEmerg">
              <option value="">Seleccione una opción</option>
              <option>Padre</option>
              <option>Madre</option>
              <option>Hermano</option>
              <option>Hermana</option>
              <option>Tío</option>
              <option>Tía</option>
            </b-form-select>
            <div v-if="submited && !$v.usuario.parentescoEmerg.required" class="valid">Debe seleccionar una opción válida</div>
          </div>
        </div>
        <b-button variant="primary" type="submit" class="btnRegistrar">Registrar</b-button>
      </div>
    </div>
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
    procesar(){
      this.submited=true;
      this.$v.$touch();
      if(this.$v.$invalid){
        return false;
      }
      alert('correcto xd');
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
 :root{
    --background-contenedor:rgb(229, 221, 240);
    --color-titulo:rgb(95, 43, 148);
    --borde-contenedor:rgb(40, 125, 130);
}
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