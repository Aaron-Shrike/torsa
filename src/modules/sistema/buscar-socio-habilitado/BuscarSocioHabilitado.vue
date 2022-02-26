<template>
  <div class="contenedor">
    <form class="contenido">
      <section class="card seccion-buscar">
        <h1 class="card-title titulo">Buscar Socio Habilitado</h1>
        <div class="card-body">
          <h3 class="card-title subTitle">Ingrese el DNI del Socio</h3>
          <div class="form-group">
            <label for="formGroupExampleInput">DNI</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="DNI"
              v-model="dniBuscar"
              :state="ValidarDNIBuscar()">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.dniBuscar.required">El DNI es requerido</div>
              <div v-if="!$v.dniBuscar.maxLength || !$v.dniBuscar.minLength">El DNI no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <b-button block class="boton boton-principal" @click="buscarSocio">Buscar</b-button>
        </div>
      </section>

      <!-- ------------------------------------------------------------------------------------------------------- -->

      <section class="card seccion-socio ocultar-informacion">
        <h1 class="card-title titulo">{{ titulo }}</h1>
        <div class="card-body">
          <h3 class="card-title subTitle">Datos del Socio</h3>
          <div class="form-group">
            <label for="formGroupExampleInput">DNI</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="DNI"
              v-model="datosSocio.dni"
              :state="ValidarDatosSocio('dni')"
              disabled>
              <b-form-invalid-feedback id="input-1-live-feedback">
                <div v-if="!$v.datosSocio.dni.required">El DNI es requerido</div>
                <div v-if="!$v.datosSocio.dni.maxLength || !$v.datosSocio.dni.minLength">El DNI no es válido</div>
              </b-form-invalid-feedback>
            </b-form-input>
          </div>

          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Paterno</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Apellido Paterno"
              v-model="datosSocio.apellidoPaterno"
              :state="ValidarDatosSocio('apellidoPaterno')"
              :disabled="disabled_input == 1">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSocio.apellidoPaterno.required">El Apellido Paterno es requerido</div>
              <div v-if="!$v.datosSocio.apellidoPaterno.maxLength">El Apellido Paterno no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Materno</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Apellido Materno"
              v-model="datosSocio.apellidoMaterno"
              :state="ValidarDatosSocio('apellidoMaterno')"
              :disabled="disabled_input == 1">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSocio.apellidoMaterno.required">El Apellido Materno es requerido</div>
              <div v-if="!$v.datosSocio.apellidoMaterno.maxLength">El Apellido Materno no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Nombre"
              v-model="datosSocio.nombre"
              :state="ValidarDatosSocio('nombre')"
              :disabled="disabled_input == 1">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSocio.nombre.required">El Nombre es requerido</div>
              <div v-if="!$v.datosSocio.nombre.maxLength">El Nombre no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Fecha de Nacimiento</label>
            <b-form-input
              type="date"
              class="form-control input-formulario"
              v-model="datosSocio.fechaNacimiento"
              :state="ValidarDatosSocio('fechaNacimiento')"
              :disabled="disabled_input == 1">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSocio.fechaNacimiento.required">La Fecha de Nacimiento es requerido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Teléfono</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="Teléfono"
              v-model="datosSocio.telefono"
              :state="ValidarDatosSocio('telefono')"
              :disabled="disabled_input_NoHabilitado == 1">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSocio.telefono.required">El Teléfono es requerido</div>
              <div v-if="!$v.datosSocio.telefono.maxLength || !$v.datosSocio.telefono.minLength">El Teléfono no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Domicilio</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Domicilio"
              v-model="datosSocio.domicilio"
              :state="ValidarDatosSocio('domicilio')"
              :disabled="disabled_input_NoHabilitado == 1">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSocio.domicilio.required">La Dirección es requerida</div>
              <div v-if="!$v.datosSocio.domicilio.maxLength">La Dirección no es válida</div>
            </b-form-invalid-feedback>
          </div>
          <b-button block class="boton boton-principal" @click="validarSocio" v-if="socioHabilitado">Continuar</b-button>
          <b-button block class="boton boton-principal noHabilitado" v-if="!socioHabilitado">Socio no habilitado</b-button>
        </div>
      </section>
      
      <!-- ------------------------------------------------------------------------------------------------------- -->

      <section class="card seccion-garante1 ocultar-informacion">
          <div class="contenido" id="div-retroceder">
              <label class="retroceder" @click="retrocederCard1">
                  <b-icon icon="arrow-left" aria-hidden="true"></b-icon>Regresar</label>
            </div>

        <h1 class="card-title titulo">{{ titulo }}</h1>
        <div class="card-body">
          <h3 class="card-title subTitle">Datos del Primer Garante</h3>
          <div class="form-group">
            <label for="formGroupExampleInput">DNI</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="DNI"
              v-model="datosPrimerGarante.dni"
              :state="ValidarDatosPrimerGarante('dni')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPrimerGarante.dni.required">El DNI es requerido</div>
              <div v-if="!$v.datosPrimerGarante.dni.maxLength || !$v.datosPrimerGarante.dni.minLength">El DNI no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Paterno</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Apellido Paterno"
              v-model="datosPrimerGarante.apellidoPaterno"
              :state="ValidarDatosPrimerGarante('apellidoPaterno')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPrimerGarante.apellidoPaterno.required">El Apellido Paterno es requerido</div>
              <div v-if="!$v.datosPrimerGarante.apellidoPaterno.maxLength">El Apellido Paterno no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Materno</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Apellido Materno"
              v-model="datosPrimerGarante.apellidoMaterno"
              :state="ValidarDatosPrimerGarante('apellidoMaterno')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPrimerGarante.apellidoMaterno.required">El Apellido Materno es requerido</div>
              <div v-if="!$v.datosPrimerGarante.apellidoMaterno.maxLength">El Apellido Materno no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Nombre"
              v-model="datosPrimerGarante.nombre"
              :state="ValidarDatosPrimerGarante('nombre')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPrimerGarante.nombre.required">El Nombre es requerido</div>
              <div v-if="!$v.datosPrimerGarante.nombre.maxLength">El Nombre no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Teléfono</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="Teléfono"
              v-model="datosPrimerGarante.telefono"
              :state="ValidarDatosPrimerGarante('telefono')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPrimerGarante.telefono.required">El Teléfono es requerido</div>
              <div v-if="!$v.datosPrimerGarante.telefono.maxLength || !$v.datosPrimerGarante.telefono.minLength">El Teléfono no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Domicilio</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Domicilio"
              v-model="datosPrimerGarante.domicilio"
              :state="ValidarDatosPrimerGarante('domicilio')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosPrimerGarante.domicilio.required">La Dirección es requerida</div>
              <div v-if="!$v.datosPrimerGarante.domicilio.maxLength">La Dirección no es válida</div>
            </b-form-invalid-feedback>
          </div>
          <b-button block class="boton boton-principal" @click="validarGarante1">Continuar</b-button>
        </div>
      </section>

      <!-- ------------------------------------------------------------------------------------------------------- -->

      <section class="card seccion-garante2 ocultar-informacion">
          <div class="contenido" id="div-retroceder">    
              <label class="retroceder" @click="retrocederCard2">
                  <b-icon icon="arrow-left" aria-hidden="true"></b-icon>Regresar</label>
            </div>

        <h1 class="card-title titulo">{{ titulo }}</h1>
        <div class="card-body">
          <h3 class="card-title subTitle">Datos del Segundo Garante</h3>
          <div class="form-group">
            <label for="formGroupExampleInput">DNI</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="DNI"
              v-model="datosSegundoGarante.dni"
              :state="ValidarDatosSegundoGarante('dni')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSegundoGarante.dni.required">El DNI es requerido</div>
              <div v-if="!$v.datosSegundoGarante.dni.maxLength || !$v.datosSegundoGarante.dni.minLength">El DNI no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Paterno</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Apellido Paterno"
              v-model="datosSegundoGarante.apellidoPaterno"
              :state="ValidarDatosSegundoGarante('apellidoPaterno')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSegundoGarante.apellidoPaterno.required">El Apellido Paterno es requerido</div>
              <div v-if="!$v.datosSegundoGarante.apellidoPaterno.maxLength">El Apellido Paterno no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Apellido Materno</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Apellido Materno"
              v-model="datosSegundoGarante.apellidoMaterno"
              :state="ValidarDatosSegundoGarante('apellidoMaterno')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSegundoGarante.apellidoMaterno.required">El Apellido Materno es requerido</div>
              <div v-if="!$v.datosSegundoGarante.apellidoMaterno.maxLength">El Apellido Materno no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Nombre"
              v-model="datosSegundoGarante.nombre"
              :state="ValidarDatosSegundoGarante('nombre')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSegundoGarante.nombre.required">El Nombre es requerido</div>
              <div v-if="!$v.datosSegundoGarante.nombre.maxLength">El Nombre no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Teléfono</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="Teléfono"
              v-model="datosSegundoGarante.telefono"
              :state="ValidarDatosSegundoGarante('telefono')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSegundoGarante.telefono.required">El Teléfono es requerido</div>
              <div v-if="!$v.datosSegundoGarante.telefono.maxLength ||!$v.datosSegundoGarante.telefono.minLength">El Teléfono no es válido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Domicilio</label>
            <b-form-input
              type="text"
              class="form-control input-formulario"
              placeholder="Domicilio"
              v-model="datosSegundoGarante.domicilio"
              :state="ValidarDatosSegundoGarante('domicilio')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosSegundoGarante.domicilio.required">La Dirección es requerida</div>
              <div v-if="!$v.datosSegundoGarante.domicilio.maxLength">La Dirección no es válida</div>
            </b-form-invalid-feedback>
          </div>
          <b-button block class="boton boton-principal" @click="validarGarante2">Continuar</b-button>
          </div>
      </section>

      <!-- ------------------------------------------------------------------------------------------------------- -->

      <section class="card seccion-credito ocultar-informacion">
          <div class="contenido" id="div-retroceder">
              <label class="retroceder" @click="retrocederCard3">
                  <b-icon icon="arrow-left" aria-hidden="true"></b-icon>Regresar</label>
            </div>

        <h1 class="card-title titulo">{{ titulo }}</h1>
        <div class="card-body">
          <h3 class="card-title subTitle">Ingrese los datos</h3>
          <div class="form-group">
            <label for="formGroupExampleInput">Monto</label>
            <b-form-input
              type="number"
              class="form-control input-formulario"
              placeholder="Monto"
              v-model="datosCredito.monto"
              :state="ValidarDatosCredito('monto')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">
              <div v-if="!$v.datosCredito.monto.required">El Monto es requerido</div>
            </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Motivo</label>
            <b-form-textarea
              type="text"
              class="form-control input-formulario textAreaMotivo"
              placeholder="Motivo"
              v-model="datosCredito.motivo"
              :state="ValidarDatosCredito('motivo')">
            </b-form-textarea>
          </div>
          <b-button block class="boton boton-principal" @click="procesar">Registrar Solicitud de Crédito</b-button>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import { required, maxLength, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      socioHabilitado: true,
      disabled_input: 0,
      disabled_input_NoHabilitado: 0,
      titulo: "",
      estadoRetroceder1: false,
      estadoRetroceder2: false,
      estadoRetroceder3: false,
      dniBuscar: "",

      datosSocio: {
        dni: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        nombre: "",
        fechaNacimiento: "",
        telefono: "",
        domicilio: "",
      },
      datosPrimerGarante: {
        dni: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        nombre: "",
        fechaNacimiento: "",
        telefono: "",
        domicilio: "",
      },
      datosSegundoGarante: {
        dni: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        nombre: "",
        fechaNacimiento: "",
        telefono: "",
        domicilio: "",
      },
      datosCredito: {
        monto: "",
        motivo: "",
      },

      usuario: { //Se creó este Usuario para poder verificar si se cumplen las condiciones
        dni: "12345678",
        apPaterno: "Rios",
        apMaterno: "Tapia",
        nombre: "Carlos",
        fecha: "1990-05-15",
        telefono: "979875512",
        domicilio: "Amarantos 123",
      },
    };
  },
  methods: {
    ValidarDNIBuscar() {
      const { $dirty, $error } = this.$v.dniBuscar;
      return $dirty ? !$error : null;
    },
    ValidarDatosSocio(name) {
      const { $dirty, $error } = this.$v.datosSocio[name];
      return $dirty ? !$error : null;
    },
    ValidarDatosPrimerGarante(name) {
      const { $dirty, $error } = this.$v.datosPrimerGarante[name];
      return $dirty ? !$error : null;
    },
    ValidarDatosSegundoGarante(name) {
      const { $dirty, $error } = this.$v.datosSegundoGarante[name];
      return $dirty ? !$error : null;
    },
    ValidarDatosCredito(name) {
      const { $dirty, $error } = this.$v.datosCredito[name];
      return $dirty ? !$error : null;
    },

    OcultarFormularioSocio() {
      document.querySelector(".seccion-socio").classList.remove("mostrar-informacion");
      document.querySelector(".seccion-socio").classList.add("ocultar-informacion");
    },
    OcultarFormularioGarante1() {
      document.querySelector(".seccion-garante1").classList.remove("mostrar-informacion");
      document.querySelector(".seccion-garante1").classList.add("ocultar-informacion");
    },
    OcultarFormularioGarante2() {
      document.querySelector(".seccion-garante2").classList.remove("mostrar-informacion");
      document.querySelector(".seccion-garante2").classList.add("ocultar-informacion");
    },
    OcultarFormularioCredito() {
      document.querySelector(".seccion-credito").classList.remove("mostrar-informacion");
      document.querySelector(".seccion-credito").classList.add("ocultar-informacion");
    },
    ActivarFormularioSocio() {
      document.querySelector(".seccion-socio").classList.remove("ocultar-informacion");
      document.querySelector(".seccion-socio").classList.add("mostrar-informacion");
    },
    ActivarFormularioGarante1() {
      document.querySelector(".seccion-garante1").classList.remove("ocultar-informacion");
      document.querySelector(".seccion-garante1").classList.add("mostrar-informacion");
    },
    ActivarFormularioGarante2() {
      document.querySelector(".seccion-garante2").classList.remove("ocultar-informacion");
      document.querySelector(".seccion-garante2").classList.add("mostrar-informacion");
    },
    ActivarFormularioCredito() {
      document.querySelector(".seccion-credito").classList.remove("ocultar-informacion");
      document.querySelector(".seccion-credito").classList.add("mostrar-informacion");
    },

    retrocederCard1() {
      this.titulo = "Socio encontrado";
      this.estadoRetroceder1 = false;
      this.OcultarFormularioGarante1();
      this.ActivarFormularioSocio();
    },
    retrocederCard2() {
      this.titulo = "Ingresar Garante";
      this.estadoRetroceder2 = false;
      this.OcultarFormularioGarante2();
      this.estadoRetroceder1 = true;
      this.ActivarFormularioGarante1();
    },
    retrocederCard3() {
      this.titulo = "Ingresar Garante";
      this.estadoRetroceder3 = false;
      this.OcultarFormularioCredito();
      this.estadoRetroceder2 = true;
      this.ActivarFormularioGarante2();
    },

    buscarSocio() {
      this.$v.dniBuscar.$touch();
      if (!this.$v.dniBuscar.$anyError) {
        //Hacer un buscar y que retorne los datos del usuario (en caso exista), sino que retorne un null

        if (this.dniBuscar == this.usuario.dni) {   //Se debe reemplazar el (usuario.dni)por el dni real del socio, (dniBuscar es del input)
          //Socio encontrado 

          this.nextCardSocio(); //Pasa al card Socio

          this.$swal("Usuario encontrado", "", "success");
          this.titulo = "Socio encontrado";
         
          this.socioHabilitado = true; //El socio está o no habilitado para crédito

          if (this.socioHabilitado) {
            //Socio habilitado
            this.disabled_input = (this.disabled_input + 1) % 2; //Inhabilita los inputs necesarios
            this.agregarDatosSocio(); //Se agrega los datos a los inputs
          } else {
            //Socio no habilitado
            this.disabled_input = (this.disabled_input + 1) % 2; //Inhabilita los inputs
            this.disabled_input_NoHabilitado = (this.disabled_input_NoHabilitado + 1) % 2; //Inhabilita los inputs
            this.agregarDatosSocio();
          }
        } else {
          this.$swal("Usuario No encontrado", "", "error");
          (this.titulo = "Ingresar nuevo socio"), this.nextCardSocio();
        }
      }
    },

    nextCardSocio() {
      this.datosSocio.dni = this.dniBuscar;
      document.querySelector(".seccion-buscar").classList.add("ocultar-informacion");
      this.ActivarFormularioSocio();
    },
    agregarDatosSocio() {
      this.datosSocio.apellidoPaterno = this.usuario.apPaterno;
      this.datosSocio.apellidoMaterno = this.usuario.apMaterno;
      this.datosSocio.nombre = this.usuario.nombre;
      this.datosSocio.fechaNacimiento = this.usuario.fecha;
      this.datosSocio.telefono = this.usuario.telefono;
      this.datosSocio.domicilio = this.usuario.domicilio;
    },
    validarSocio() {
      this.$v.datosSocio.$touch();
      if (!this.$v.datosSocio.$anyError) {  //Si es todo correcto se pasa al siguiente card
        this.titulo = "Ingresar Garante";
        this.OcultarFormularioSocio();
        this.ActivarFormularioGarante1();
        this.estadoRetroceder1 = true;
      }
    },
    validarGarante1() {
      this.$v.datosPrimerGarante.$touch();
      if (!this.$v.datosPrimerGarante.$anyError) {
        if (this.datosSocio.dni != this.datosPrimerGarante.dni) {
          this.titulo = "Ingresar Garante";
          this.estadoRetroceder1 = false, this.OcultarFormularioGarante1();
          this.estadoRetroceder2 = true, this.ActivarFormularioGarante2();
        } else {
          this.$swal("Error", "El Usuario no puede ser un garante", "error");
        }
      }
    },
    validarGarante2() {
      this.$v.datosSegundoGarante.$touch();
      if (!this.$v.datosSegundoGarante.$anyError) {
        if (this.datosSocio.dni != this.datosSegundoGarante.dni) {
          if (this.datosPrimerGarante.dni != this.datosSegundoGarante.dni) {
            this.titulo = "Datos del Crédito";
            this.estadoRetroceder2 = false;
            this.OcultarFormularioGarante2();
            this.estadoRetroceder3 = true;
            this.ActivarFormularioCredito();
          } else {
            this.$swal("Error","El Seguno Garante no puede ser el mismo que el Primer Garante","error");
          }
        } else {
          this.$swal("Error", "El Usuario no puede ser un garante", "error");
        }
      }
    },
    procesar() {
      this.$v.datosCredito.$touch();
      if (!this.$v.datosCredito.$anyError) {
        this.$swal("Solicitud de Crédito Registrada", "", "success");
      }
    },
    mensajeDeError(mensaje = "Error al conectar al servidor.") {
      this.$swal("Error!", mensaje, "error");
    },
  },

  validations: {
    dniBuscar: {
      required,
      maxLength: maxLength(8),
      minLength: minLength(8),
    },
    datosSocio: {
      dni: {
        required,
        maxLength: maxLength(8),
        minLength: minLength(8),
      },
      apellidoPaterno: {
        required,
        maxLength: maxLength(40),
      },
      apellidoMaterno: {
        required,
        maxLength: maxLength(40),
      },
      nombre: {
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
      domicilio: {
        required,
        maxLength: maxLength(50),
      },
    },

    datosPrimerGarante: {
      dni: {
        required,
        maxLength: maxLength(8),
        minLength: minLength(8),
      },
      apellidoPaterno: {
        required,
        maxLength: maxLength(40),
      },
      apellidoMaterno: {
        required,
        maxLength: maxLength(40),
      },
      nombre: {
        required,
        maxLength: maxLength(40),
      },
      telefono: {
        required,
        maxLength: maxLength(9),
        minLength: minLength(9),
      },
      domicilio: {
        required,
        maxLength: maxLength(50),
      },
    },

    datosSegundoGarante: {
      dni: {
        required,
        maxLength: maxLength(8),
        minLength: minLength(8),
      },
      apellidoPaterno: {
        required,
        maxLength: maxLength(40),
      },
      apellidoMaterno: {
        required,
        maxLength: maxLength(40),
      },
      nombre: {
        required,
        maxLength: maxLength(40),
      },
      telefono: {
        required,
        maxLength: maxLength(9),
        minLength: minLength(9),
      },
      domicilio: {
        required,
        maxLength: maxLength(50),
      },
    },

    datosCredito: {
      monto: {
        required,
      },
      motivo: {
        required,
      },
    },
  },
};

</script>
<style>
.btn.boton-principal.noHabilitado {
  background-color: #da251c;
}
.textAreaMotivo {
  height: 90px !important;
}
.ocultar-informacion {
  display: none !important;
}
.mostrar-informacion {
  animation: mostrando 400ms linear 0s 1 normal forwards !important;
}

@keyframes mostrando {
  0% {
    transform: scale(0.2);
  }
  50% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
    display: block !important;
  }
}
</style>