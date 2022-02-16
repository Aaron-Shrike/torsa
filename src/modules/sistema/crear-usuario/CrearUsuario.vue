<template>
  <div class="contenedor">

  <div class=" contenido" id="div-retroceder">
      <label class="retroceder" @click="retrocederCard1" v-if="estadoRetroceder1">Regresar</label>
      <label class="retroceder" @click="retrocederCard2" v-if="estadoRetroceder2">Regresar</label>
  </div>

    <form class="contenido">
      <div class="card">
        <h1 class="card-title titulo">Registrar Usuario</h1>

        <div class="card-body" v-if="card1">
          <h3 class="card-title subTitle">Datos Personales</h3>
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Nombre"
              v-model="datosPersonales.nombre"
              :state="ValidarDatosPersonales('nombre')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPersonales.nombre.required">El Nombre es requerido</div>
              <div v-if="!$v.datosPersonales.nombre.maxLength">El Nombre no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Paterno</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Apellido Paterno"
              v-model="datosPersonales.apellidoPaterno"
              :state="ValidarDatosPersonales('apellidoPaterno')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPersonales.apellidoPaterno.required">El Apellido Paterno es requerido</div>
              <div v-if="!$v.datosPersonales.apellidoPaterno.maxLength">El Apellido Paterno no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Materno</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Apellido Materno"
              v-model="datosPersonales.apellidoMaterno"
              :state="ValidarDatosPersonales('apellidoMaterno')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPersonales.apellidoMaterno.required">El Apellido Materno es requerido</div>
              <div v-if="!$v.datosPersonales.apellidoMaterno.maxLength">El Apellido Materno no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Fecha de Nacimiento</label>
            <b-form-input
              type="date"
              class="form-control input-formulario"
              v-model="datosPersonales.fechaNacimiento"
              :state="ValidarDatosPersonales('fechaNacimiento')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPersonales.fechaNacimiento.required">La Fecha de Nacimiento es requerido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Teléfono</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="Teléfono"
              v-model="datosPersonales.telefono"
              :state="ValidarDatosPersonales('telefono')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPersonales.telefono.required">El Teléfono es requerido</div>
              <div v-if="!$v.datosPersonales.telefono.maxLength || !$v.datosPersonales.telefono.minLength">El Teléfono no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Dirección</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Dirección"
              v-model="datosPersonales.direccion"
              :state="ValidarDatosPersonales('direccion')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPersonales.direccion.required">La Dirección es requerida</div>
              <div v-if="!$v.datosPersonales.direccion.maxLength">La Dirección no es válida</div>
            </b-form-invalid-feedback>
          </div>
          <b-button block class="boton boton-principal" @click="procesar1">Continuar</b-button>
        </div>

        <div class="card-body" v-if="card2">
          <h3 class="card-title subTitle">Datos del Usuario</h3>
          <div class="form-group">
            <label for="formGroupExampleInput">DNI</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="DNI"
              v-model="datosUsuario.dni"
              :state="ValidarDatosUsuario('dni')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosUsuario.dni.required">El DNI es requerido</div>
              <div v-if="!$v.datosUsuario.dni.maxLength || !$v.datosUsuario.dni.minLength">El DNI no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Correo electrónico</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Correo electrónico"
              v-model="datosUsuario.correo"
              :state="ValidarDatosUsuario('correo')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosUsuario.correo.required">El correo electrónico es requerido</div>
              <div v-if="!$v.datosUsuario.correo.email">El correo electrónico no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Repetir Correo electrónico</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Correo electrónico"
              v-model="datosUsuario.correoRepetido"
              :state="ValidarDatosUsuario('correoRepetido')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosUsuario.correoRepetido.required">El correo electrónico es requerido</div>
              <div v-if="!$v.datosUsuario.correoRepetido.email">El correo electrónico no es válido</div>
              <div v-if="!$v.datosUsuario.correoRepetido.sameAs">El correo electrónico no coincide</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Cargo</label>
            <b-form-select
              class="form-control input-formulario"
              v-model="datosUsuario.cargo"
              :state="ValidarDatosUsuario('cargo')">
              <option value="">Seleccione una opción</option>
              <option>Promotor</option>
              <option>Recepcionista</option>
              <option>Encargado de Registro de Crédito</option>
              <option>Encargado de Control</option>
              <option>Cobrador</option>
              <option>Cajero</option>
            </b-form-select>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosUsuario.cargo.required">El Cargo es requerido</div>
            </b-form-invalid-feedback>
          </div>
          <b-button block class="boton boton-principal" @click="procesar2">Continuar</b-button>
        </div>

        <div class="card-body" v-if="card3">
          <h3 class="card-title subTitle">Contacto de Emergencia</h3>
          <div class="form-group">
            <label for="formGroupExampleInput">Nombres Completos</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Nombres Completos"
              v-model="contactoEmergencia.nombreEmergencia"
              :state="ValidarContactoEmergencia('nombreEmergencia')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.contactoEmergencia.nombreEmergencia.required">El Nombre Completo es requerido</div>
              <div v-if="!$v.contactoEmergencia.nombreEmergencia.maxLength">El Nombre Completo no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Teléfono</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="Teléfono"
              v-model="contactoEmergencia.telefonoEmergencia"
              :state="ValidarContactoEmergencia('telefonoEmergencia')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.contactoEmergencia.telefonoEmergencia.required">El Teléfono es requerido</div>
              <div v-if="!$v.contactoEmergencia.telefonoEmergencia.maxLength || !$v.contactoEmergencia.telefonoEmergencia.minLength">El Teléfono no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Parentesco</label>
            <b-form-select
              class="form-control input-formulario"
              v-model="contactoEmergencia.parentescoEmergencia"
              :state="ValidarContactoEmergencia('parentescoEmergencia')">
              <option value="">Seleccione una opción</option>
              <option>Padre</option>
              <option>Madre</option>
              <option>Hermano</option>
              <option>Hermana</option>
              <option>Tío</option>
              <option>Tía</option>
            </b-form-select>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.contactoEmergencia.parentescoEmergencia.required">El Parentesco es requerido</div>
            </b-form-invalid-feedback>
          </div>
          <b-button block class="boton boton-principal" @click="procesar3">Registrar</b-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  required,
  maxLength,
  minLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      card1: true,
      card2: false,
      card3: false,
      estadoRetroceder1: false,
      estadoRetroceder2: false,
      datosPersonales: {
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        fechaNacimiento: "",
        telefono: "",
        direccion: "",
      },
      datosUsuario: {
        dni: "",
        correo: "",
        correoRepetido: "",
        cargo: "",
      },
      contactoEmergencia: {
        nombreEmergencia: "",
        telefonoEmergencia: "",
        parentescoEmergencia: "",
      },
    };
  },
  methods: {
    ValidarDatosPersonales(name) {
      const { $dirty, $error } = this.$v.datosPersonales[name];
      return $dirty ? !$error : null;
    },
    ValidarDatosUsuario(name) {
      const { $dirty, $error } = this.$v.datosUsuario[name];
      return $dirty ? !$error : null;
    },
    ValidarContactoEmergencia(name) {
      const { $dirty, $error } = this.$v.contactoEmergencia[name];
      return $dirty ? !$error : null;
    },
    retrocederCard1(){
      this.estadoRetroceder1 = false;
      this.card2 = false;
      this.card1 = true;
    },
    retrocederCard2(){
      this.estadoRetroceder2 = false;
      this.card3 = false;
      this.estadoRetroceder1 = true;
      this.card2 = true;
    },
    procesar1() {
      this.$v.datosPersonales.$touch();
      if (!this.$v.datosPersonales.$anyError) {
        this.card1 = false;
        this.card2 = true;
        this.estadoRetroceder1 = true;
      }
    },
    procesar2() {
      this.$v.datosUsuario.$touch();
      if (!this.$v.datosUsuario.$anyError) {
        this.estadoRetroceder1 = false,
        this.card2 = false;
        this.estadoRetroceder2 = true,
        this.card3 = true;
      }
    },
    procesar3() {
      this.$v.contactoEmergencia.$touch();
      if (!this.$v.contactoEmergencia.$anyError) {
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
          "Usuario Registrado",
          "Para inciar sesion porfavor verique su correo electronico",
          "success"
        );
        console.log(this.datosPersonales + this.datosUsuario + this.contactoEmergencia);
      }
    },
    mensajeDeError(mensaje = "Error al conectar al servidor.") {
      this.$swal("Error!", mensaje, "error");
    },
  },
  validations: {
    datosPersonales: {
      nombre: {
        required,
        maxLength: maxLength(40),
      },
      apellidoPaterno: {
        required,
        maxLength: maxLength(40),
      },
      apellidoMaterno: {
        required,
        maxLength: maxLength(40),
      },
      fechaNacimiento: {
        required,
      },
      telefono: {
        required,
        maxLength: maxLength(9),
        minLength: minLength(9),
      },
      direccion: {
        required,
        maxLength: maxLength(50),
      },
    },
    datosUsuario: {
      dni: {
        required,
        maxLength: maxLength(8),
        minLength: minLength(8),
      },
      correo: {
        required,
        email,
      },
      correoRepetido: {
        required,
        email,
        sameAs: sameAs(function() {return this.datosUsuario.correo;}) 
      },
      cargo: {
        required,
      },
    },
    contactoEmergencia: {
      nombreEmergencia: {
        required,
        maxLength: maxLength(50),
      },
      telefonoEmergencia: {
        required,
        maxLength: maxLength(9),
        minLength: minLength(9),
      },
      parentescoEmergencia: {
        required,
      },
    },
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-principal);
  padding: 40px 0 40px 0;
}
.contenido {
  width: 45%;
  background-color: var(--background-contenedor);
  margin: 0 auto;
  border-radius: 30px;
  min-width: 400px;
}
.card-body {
  padding: 20px 50px 30px 50px !important;
  font-family: var(--fuente-secundaria);
  color: var(--color-subtitulo);
}
.card-title {
  text-align: center !important;
  margin: 40px 0px 0px 0px !important;
}
.titulo {
  color: var(--color-titulo-principal) !important;
  font-weight: 800;
  font-size: 36px;
  font-family: var(--fuente-principal);
}
.subTitle {
  margin: 0px 0px 30px 0px !important;
  font-family: var(--fuente-secundaria);
  font-weight: 600;
  color: var(--color-subtitulo);
  font-size: 21px;
}
.card {
  background-color: var(--color-blanco) !important;
  border-radius: var(--redondeado-1) !important;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1) !important;
}
.form-group {
  margin-bottom: 25px !important;
}
.form-control.input-formulario {
  height: 45px;
  font-size: 16px;
}
.form-control {
  padding: 0.375rem 1.5rem !important;
}
.btn.boton-principal {
  height: 45px;
  font-size: 22px;
}

#div-retroceder .contenido{
  margin-left: 20px;
}
#div-retroceder{
  background: transparent;
}
.retroceder{
  margin-left: 30px;
  cursor: pointer;
  font-family: var(--fuente-secundaria);
  font-weight: 600;
  color: var( --color-principal);
  font-size: 15px;
}
</style>