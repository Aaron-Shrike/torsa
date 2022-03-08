<template>
  <div class="contenedor">
    <form class="contenido">
      <b-overlay :show="show" rounded="sm">

        <section class="seccion-datosPersonales">
          <div class="card" :aria-hidden="show ? 'true' : null">
            <h1 class="card-title titulo">Registrar Usuario</h1>
            <div class="card-body">
              <h3 class="card-title subTitle">Datos Personales</h3>
              <div class="form-group">
                <label>DNI</label>
                <b-form-input
                  type="number"
                  class="form-control input-formulario"
                  placeholder="DNI"
                  v-model="$v.datosUsuario.dni.$model"
                  :state="ValidarDatosUsuario('dni')"
                  @blur="ValidarDNI">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosUsuario.dni.required">El DNI es requerido</div>
                  <div v-if="!$v.datosUsuario.dni.maxLength || !$v.datosUsuario.dni.minLength">El DNI no es válido</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Nombre</label>
                <b-form-input
                  name="nombre"
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Nombre"
                  v-model="$v.datosPersonales.nombre.$model"
                  :state="ValidarDatosPersonales('nombre')">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.nombre.required">El Nombre es requerido</div>
                  <div v-if="!$v.datosPersonales.nombre.maxLength">El Nombre no es válido</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Apellido Paterno</label>
                <b-form-input
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Apellido Paterno"
                  v-model="$v.datosPersonales.apellidoPaterno.$model"
                  :state="ValidarDatosPersonales('apellidoPaterno')">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.apellidoPaterno.required">El Apellido Paterno es requerido</div>
                  <div v-if="!$v.datosPersonales.apellidoPaterno.maxLength">El Apellido Paterno no es válido</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Apellido Materno</label>
                <b-form-input
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Apellido Materno"
                  v-model="$v.datosPersonales.apellidoMaterno.$model"
                  :state="ValidarDatosPersonales('apellidoMaterno')">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.apellidoMaterno.required">El Apellido Materno es requerido</div>
                  <div v-if="!$v.datosPersonales.apellidoMaterno.maxLength">El Apellido Materno no es válido</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Fecha de Nacimiento</label>
                <b-form-input
                  type="date"
                  class="form-control input-formulario"
                  v-model="$v.datosPersonales.fechaNacimiento.$model"
                  :state="ValidarDatosPersonales('fechaNacimiento')">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.fechaNacimiento.required">La Fecha de Nacimiento es requerido</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Teléfono</label>
                <b-form-input
                  type="number"
                  class="form-control input-formulario"
                  placeholder="Teléfono"
                  v-model="$v.datosPersonales.telefono.$model"
                  :state="ValidarDatosPersonales('telefono')">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.telefono.required">El Teléfono es requerido</div>
                  <div v-if="!$v.datosPersonales.telefono.maxLength || !$v.datosPersonales.telefono.minLength">El Teléfono no es válido</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Dirección</label>
                <b-form-input
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Dirección"
                  v-model="$v.datosPersonales.direccion.$model"
                  :state="ValidarDatosPersonales('direccion')">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.direccion.required">La Dirección es requerida</div>
                  <div v-if="!$v.datosPersonales.direccion.maxLength">La Dirección no es válida</div>
                </b-form-invalid-feedback>
              </div>
              <b-button block class="boton boton-principal" @click="Procesar1">Continuar</b-button>
            </div>
          </div>
        </section>

        <!-- --------------------------------------------------------------------------------------------------------- -->

        <section class="seccion-datosUsuario ocultar-informacion">
          <div class="contenido" id="div-retroceder">
            <label class="retroceder" @click="RetrocederCard1">
              <b-icon icon="arrow-left" aria-hidden="true"></b-icon>Regresar</label>
          </div>

          <div class="card" :aria-hidden="show ? 'true' : null">
            <h1 class="card-title titulo">Registrar Usuario</h1>
            <div class="card-body">
              <h3 class="card-title subTitle">Datos del Usuario</h3>
              <div class="form-group">
                <label>Correo electrónico</label>
                <b-form-input
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Correo electrónico"
                  v-model="$v.datosUsuario.correo.$model"
                  :state="ValidarDatosUsuario('correo')"
                  @blur="ValidarEmail">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosUsuario.correo.required">El correo electrónico es requerido</div>
                  <div v-if="!$v.datosUsuario.correo.email">El correo electrónico no es válido</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Repetir Correo electrónico</label>
                <b-form-input
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Correo electrónico"
                  v-model="$v.datosUsuario.correoRepetido.$model"
                  :state="ValidarDatosUsuario('correoRepetido')">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosUsuario.correoRepetido.required">El correo electrónico es requerido</div>
                  <div v-if="!$v.datosUsuario.correoRepetido.email">El correo electrónico no es válido</div>
                  <div v-if="!$v.datosUsuario.correoRepetido.sameAs">El correo electrónico no coincide</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Cargo</label>
                <b-form-select
                  class="form-control input-formulario"
                  v-model="$v.datosUsuario.cargo.$model"
                  :state="ValidarDatosUsuario('cargo')">
                  <option value="">Seleccione una opción</option>
                  <option v-for="(cgr, cargos) in tcargos" v-bind:key="cargos" v-bind:value="cargos + 1">{{ cgr.descripcion }}</option>
                </b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosUsuario.cargo.required">El Cargo es requerido</div>
                </b-form-invalid-feedback>
              </div>
              <b-button block class="boton boton-principal" @click="Procesar2">Continuar</b-button>
            </div>
          </div>
        </section>

        <!-- --------------------------------------------------------------------------------------------------------- -->

        <section class="seccion-contactoEmergencia ocultar-informacion">
          <div class="card" :aria-hidden="show ? 'true' : null">
            <h1 class="card-title titulo">Registrar Usuario</h1>

            <div class="contenido" id="div-retroceder">
              <label class="retroceder" @click="RetrocederCard2">
                <b-icon icon="arrow-left" aria-hidden="true"></b-icon>Regresar</label>
            </div>

            <div class="card-body">
              <h3 class="card-title subTitle">Contacto de Emergencia</h3>
              <div class="form-group">
                <label>Nombres Completos</label>
                <b-form-input
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Nombres Completos"
                  v-model="$v.contactoEmergencia.nombreEmergencia.$model"
                  :state="ValidarContactoEmergencia('nombreEmergencia')">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.contactoEmergencia.nombreEmergencia.required">El Nombre Completo es requerido</div>
                  <div v-if="!$v.contactoEmergencia.nombreEmergencia.maxLength">El Nombre Completo no es válido</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Teléfono</label>
                <b-form-input
                  type="number"
                  class="form-control input-formulario"
                  placeholder="Teléfono"
                  v-model="$v.contactoEmergencia.telefonoEmergencia.$model"
                  :state="ValidarContactoEmergencia('telefonoEmergencia')">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.contactoEmergencia.telefonoEmergencia.required">El Teléfono es requerido</div>
                  <div v-if="!$v.contactoEmergencia.telefonoEmergencia.maxLength || !$v.contactoEmergencia.telefonoEmergencia.minLength">El Teléfono no es válido</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Parentesco</label>
                <b-form-select
                  class="form-control input-formulario"
                  v-model="$v.contactoEmergencia.parentescoEmergencia.$model"
                  :state="ValidarContactoEmergencia('parentescoEmergencia')">
                  <option value="">Seleccione una opción</option>
                  <option>Hermana</option>
                  <option>Hermano</option>
                  <option>Madre</option>
                  <option>Padre</option>
                  <option>Tía</option>
                  <option>Tío</option>
                  <option>Otros</option>
                </b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.contactoEmergencia.parentescoEmergencia.required">El Parentesco es requerido</div>
                </b-form-invalid-feedback>
              </div>
              <b-button block class="boton boton-principal" @click="Procesar3">Registrar</b-button>
            </div>
          </div>
        </section>
      </b-overlay>
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
import axios from "axios";
export default {
  data() {
    return {
      tcargos: [],
      show: false,
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
  created() {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    axios
      .get("/api/tipocargo")
      .then((response) => 
      {
        let data = response.data;
        if (response.status === 200) 
        {
          for (var i = 0; i < data.length; i++) 
          {
            this.tcargos.push(data[i]);
          }
        } 
        else 
        {
          console.log("error interno");
        }
      })
      .catch(() => 
      {
        console.log("error al conectar con el servidor");
      });
  },
  methods: {
    ValidarEmail() 
    {
      var data = {
        correo: this.datosUsuario.correo,
      };
      //if (this.$v.datosUsuario.correo.email){
      this.show = true;
      axios.defaults.baseURL = process.env.VUE_APP_API_URL;
      axios
        .post("/api/validarEmail/", data)
        .then((response) => 
        {
          let respuesta = response.data;
          if (response.status === 200) 
          {
            if (respuesta === 1) 
            {
              this.$v.datosUsuario.correo.$model = "";
              this.$swal("Correo En Uso","El Correo electrónico ya se encuentra registrado","error");
              this.show = false;
            } 
            else 
            {
              // this.$swal("Email Validado","Email listo para usarse","success");
              this.show = false;
            }
          } 
          else 
          {
            this.MensajeDeError(respuesta.mensaje);
            this.show = false;
          }
        })
        .catch(() => 
        {
          this.MensajeDeError();
          this.show = false;
        });
      //}
    },
    ValidarDNI() 
    {
      var data = {
        dni: this.datosUsuario.dni,
      };
      if (this.datosUsuario.dni.length === 8) 
      {
        this.show = true;
        axios.defaults.baseURL = process.env.VUE_APP_API_URL;
        axios.post("/api/validarDNI", data).then((response) => 
        {
            let respuesta = response.data;
            if (response.status === 200) 
            {
              if (respuesta === 1) 
              {
                this.$v.datosUsuario.dni.$model = "";
                this.$swal("DNI En uso","El DNI ya se encuentra registrado","error");
                this.show = false;
              } 
              else 
              {
                axios.defaults.baseURL = "";
                axios.defaults.withCredentials = false;
                axios.get(
                    "https://apiperu.dev/api/dni/" +
                      this.datosUsuario.dni +
                      "?api_token=" +
                      "8a24b3f591fabc8aedf751a710d73de43a9761da5e2bf5ce73c83a892d66dd28"
                  ).then((response) => 
                  {
                    let res = response.data;
                    console.log(res.success);
                    if (res.success) 
                    {
                      this.$swal("DNI Encontrado","No es necesario ingresar nombres y apellidos del trabajador","success");
                      this.$v.datosPersonales.nombre.$model =
                        res.data["nombres"];
                      this.$v.datosPersonales.apellidoPaterno.$model =
                        res.data["apellido_paterno"];
                      this.$v.datosPersonales.apellidoMaterno.$model =
                        res.data["apellido_materno"];
                      this.show = false;
                    } 
                    else 
                    {
                      this.MensajeDeError(res.message);
                      this.show = false;
                    }
                  })
                  .catch(() => 
                  {
                    this.MensajeDeError();
                    this.show = false;
                  });
              }
            } 
            else 
            {
              this.MensajeDeError(respuesta.mensaje);
              this.show = false;
            }
          })
          .catch(() => 
          {
            this.MensajeDeError();
            this.show = false;
          });
      }
      axios.defaults.withCredentials = false;
    },
    ValidarDatosPersonales(name) 
    {
      const { $dirty, $error } = this.$v.datosPersonales[name];
      return $dirty ? !$error : null;
    },
    ValidarDatosUsuario(name) 
    {
      const { $dirty, $error } = this.$v.datosUsuario[name];
      return $dirty ? !$error : null;
    },
    ValidarContactoEmergencia(name) 
    {
      const { $dirty, $error } = this.$v.contactoEmergencia[name];
      return $dirty ? !$error : null;
    },
    RetrocederCard1() 
    {
      this.OcultarFormularioDatosUsuario();
      this.ActivarFormularioDatosPersonales();
    },
    RetrocederCard2() 
    {
      this.OcultarFormularioContactoEmergencia();
      this.ActivarFormularioDatosUsuario();
    },

    OcultarFormularioDatosPersonales() 
    {
      document.querySelector(".seccion-datosPersonales").classList.remove("mostrar-informacion");
      document.querySelector(".seccion-datosPersonales").classList.add("ocultar-informacion");
    },

    OcultarFormularioDatosUsuario() 
    {
      document.querySelector(".seccion-datosUsuario").classList.remove("mostrar-informacion");
      document.querySelector(".seccion-datosUsuario").classList.add("ocultar-informacion");
    },
    OcultarFormularioContactoEmergencia() 
    {
      document.querySelector(".seccion-contactoEmergencia").classList.remove("mostrar-informacion");
      document.querySelector(".seccion-contactoEmergencia").classList.add("ocultar-informacion");
    },
    ActivarFormularioDatosPersonales() 
    {
      document.querySelector(".seccion-datosPersonales").classList.remove("ocultar-informacion");
      document.querySelector(".seccion-datosPersonales").classList.add("mostrar-informacion");
    },
    ActivarFormularioDatosUsuario() 
    {
      document.querySelector(".seccion-datosUsuario").classList.remove("ocultar-informacion");
      document.querySelector(".seccion-datosUsuario").classList.add("mostrar-informacion");
    },
    ActivarFormularioContactoEmergencia() 
    {
      document.querySelector(".seccion-contactoEmergencia").classList.remove("ocultar-informacion");
      document.querySelector(".seccion-contactoEmergencia").classList.add("mostrar-informacion");
    },

    Procesar1() 
    {
      this.$v.datosPersonales.$touch();
      this.$v.datosUsuario.dni.$touch();
      if (!this.$v.datosPersonales.$anyError) 
      {
        this.OcultarFormularioDatosPersonales();
        this.ActivarFormularioDatosUsuario();
      }
    },
    Procesar2() 
    {
      this.$v.datosUsuario.$touch();
      if (!this.$v.datosUsuario.$anyError) 
      {
        this.OcultarFormularioDatosUsuario();
        this.ActivarFormularioContactoEmergencia();
      }
    },
    LimpiarCampos() 
    {
      this.$router.push({ name: "Sistema" });
    },
    GenerateP() 
    {
      var pass = "";
      var str =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz0123456789@#$";

      for (var i = 1; i <= 8; i++) 
      {
        var char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }

      return pass;
    },
    Procesar3() 
    {
      var contrasena = this.GenerateP();
      var data = {
        nombreC: this.contactoEmergencia.nombreEmergencia,
        numero: this.contactoEmergencia.telefonoEmergencia,
        parentesco: this.contactoEmergencia.parentescoEmergencia,
        nombreT: this.datosPersonales.nombre,
        apePaterno: this.datosPersonales.apellidoPaterno,
        apeMaterno: this.datosPersonales.apellidoMaterno,
        fecNacimiento: this.datosPersonales.fechaNacimiento,
        telefono: this.datosPersonales.telefono,
        domicilio: this.datosPersonales.direccion,
        correo: this.datosUsuario.correo,
        codTipoCargo: this.datosUsuario.cargo,
        dni: this.datosUsuario.dni,
        contrasenia: contrasena,
        activo: 1,
      };
      this.$v.contactoEmergencia.$touch();
      if (!this.$v.contactoEmergencia.$anyError) 
      {
        this.show = true;
        axios.defaults.baseURL = process.env.VUE_APP_API_URL;
        axios
          .post("/api/nuevo", data)
          .then((response) => 
          {
            let data = response.data;
            console.log(data)
            if (response.status === 200 && data == 'Correo Electronico Enviado')
            {
              this.$swal("Usuario Registrado","Para inciar sesion porfavor verique su correo electronico","success");
              this.LimpiarCampos();
              this.show = false;
            } 
            else 
            {
              this.MensajeDeError('ERROR OCURRIDO EN EL SERVIDOR');
              this.show = false;
            }
          })
          .catch(() => 
          {
            this.MensajeDeError();
            this.show = false;
          });
      }
    },
    MensajeDeError(mensaje = "Error al conectar al servidor.") 
    {
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
        sameAs: sameAs(function () {
          return this.datosUsuario.correo;
        }),
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
  padding: 50px 0 40px 0;
}
.contenido {
  width: 45%;
  background-color: var(--color-bg-principal) !important;
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

#div-retroceder .contenido {
  margin-left: 20px;
}
#div-retroceder {
  background: transparent;
  position: absolute;
  top: -45px;
}
.retroceder {
  margin: 0 0 0 30px;
  cursor: pointer;
  font-family: var(--fuente-secundaria);
  font-weight: 600;
  color: var(--color-principal);
  font-size: 25px;
}
</style>