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
                  @blur="ValidarDNI"
                  ref="dni"
                  min="11111111"
                  max="99999999"
                  onkeypress="return event.charCode >=48 && event.charCode <=57"
                  :disabled="disabledDNI">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosUsuario.dni.required">Debe ingresar el número de DNI</div>
                  <div v-if="!$v.datosUsuario.dni.numeric">Número de DNI no válido</div>
                  <div v-if="!$v.datosUsuario.dni.minLength">Número de DNI muy corto</div>
                  <div v-if="!$v.datosUsuario.dni.maxLength">Número de DNI muy largo</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Apellido Paterno</label>
                <b-form-input
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Apellido Paterno"
                  v-model="$v.datosPersonales.apellidoPaterno.$model"
                  :state="ValidarDatosPersonales('apellidoPaterno')"
                  :disabled="campoInhabilitado">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.apellidoPaterno.required">Debe ingresar el Apellido Paterno</div>
                  <div v-if="!$v.datosPersonales.apellidoPaterno.maxLength">Apellido Paterno muy largo</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Apellido Materno</label>
                <b-form-input
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Apellido Materno"
                  v-model="$v.datosPersonales.apellidoMaterno.$model"
                  :state="ValidarDatosPersonales('apellidoMaterno')"
                  :disabled="campoInhabilitado">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.apellidoMaterno.required">Debe ingresar el Apellido Materno</div>
                  <div v-if="!$v.datosPersonales.apellidoMaterno.maxLength">Apellido Materno muy largo</div>
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
                  :state="ValidarDatosPersonales('nombre')"
                  :disabled="campoInhabilitado">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.nombre.required">Debe ingresar el(los) Nombre(s)</div>
                  <div v-if="!$v.datosPersonales.nombre.maxLength">Nombre(s) muy largo</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Fecha de Nacimiento</label>
                <b-form-input
                  type="date"
                  min="1900-01-01" 
                  :max="fechaMaxima"
                  class="form-control input-formulario"
                  v-model="$v.datosPersonales.fechaNacimiento.$model"
                  :state="ValidarDatosPersonales('fechaNacimiento')"
                  :disabled="usuarioEncontrado"
                  ref="fechaNac"
                  @blur="fechaIngresadaManual">
                </b-form-input>
                <div class="Div-validar" v-if="fechaIngresadaMayor">Fecha de Nacimiento no válido</div>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.fechaNacimiento.required">Debe ingresar la Fecha de Nacimiento</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Teléfono</label>
                <b-form-input
                  type="number"
                  class="form-control input-formulario"
                  placeholder="Teléfono/Celular"
                  v-model="$v.datosPersonales.telefono.$model"
                  :state="ValidarDatosPersonales('telefono')"
                  onkeypress="return event.charCode >=48 && event.charCode <=57"
                  :disabled="usuarioEncontrado">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.telefono.required">Debe ingresar el número de Teléfono</div>
                  <div v-if="!$v.datosPersonales.telefono.numeric">Número de Teléfono no válido</div>
                  <div v-if="!$v.datosPersonales.telefono.minLength">Número de Teléfono muy corto</div>
                  <div v-if="!$v.datosPersonales.telefono.maxLength">Número de Teléfono muy largo</div>
                </b-form-invalid-feedback>
              </div>

              <div class="form-group">
                <label>Departamento</label>
                <b-form-select
                  class="form-control input-formulario"
                  v-model="$v.datosPersonales.departamento.$model"
                  :state="ValidarDatosPersonales('departamento')"
                  :options="arregloDepartamentosUsuario"
                  @change="CargarProvinciasUsuario"
                  :disabled="usuarioEncontrado">
                  <template #first>
                  <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                  </template>

                </b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.departamento.required">Debe seleccionar su departamento</div>
                </b-form-invalid-feedback>
              </div>

              <div class="form-group">
                <label>Provincia</label>
                <b-form-select
                  class="form-control input-formulario"
                  v-model="$v.datosPersonales.provincia.$model"
                  :state="ValidarDatosPersonales('provincia')"
                  :options="arregloProvinciasUsuario"
                  @change="CargarDistritosUsuario"
                  :disabled="usuarioEncontrado">
                  <template #first>
                  <option value="null" disabled>- Seleccionar -</option>
                  </template>

                </b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.provincia.required">Debe seleccionar su provincia</div>
                </b-form-invalid-feedback>
              </div>

              <div class="form-group">
                <label>Distrito</label>
                <b-form-select
                  class="form-control input-formulario"
                  v-model="$v.datosPersonales.distrito.$model"
                  :state="ValidarDatosPersonales('distrito')"
                  :options="arregloDistritosUsuario"
                  :disabled="usuarioEncontrado">
                  <template #first>
                  <option value="null" disabled>- Seleccionar -</option>
                  </template>

                </b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.distrito.required">Debe seleccionar su distrito</div>
                </b-form-invalid-feedback>
              </div>

              <div class="form-group">
                <label>Domicilio</label>
                <b-form-input
                  type="text"
                  class="form-control input-formulario"
                  placeholder="Domicilio"
                  v-model="$v.datosPersonales.domicilio.$model"
                  :state="ValidarDatosPersonales('domicilio')"
                  :disabled="usuarioEncontrado">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosPersonales.domicilio.required">Debe ingresar el Domicilio</div>
                  <div v-if="!$v.datosPersonales.domicilio.maxLength">Domicilio muy largo</div>
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
                  <div v-if="!$v.datosUsuario.correo.required">Debe ingresar el correo electrónico</div>
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
                  <div v-if="!$v.datosUsuario.correoRepetido.required">Debe ingresar el correo electrónico</div>
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
                  <option value="" disabled>- Seleccionar -</option>
                  <option v-for="(cgr, cargos) in tcargos" v-bind:key="cargos" v-bind:value="cargos + 1">{{ cgr.descripcion }}</option>
                </b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.datosUsuario.cargo.required">Debe seleccionar el Cargo</div>
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
                  <div v-if="!$v.contactoEmergencia.nombreEmergencia.required">Debe ingresar el Nombre Completo</div>
                  <div v-if="!$v.contactoEmergencia.nombreEmergencia.maxLength">Nombre Completo muy largo</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Teléfono</label>
                <b-form-input
                  type="number"
                  class="form-control input-formulario"
                  placeholder="Teléfono/Celular"
                  v-model="$v.contactoEmergencia.telefonoEmergencia.$model"
                  :state="ValidarContactoEmergencia('telefonoEmergencia')"
                  onkeypress="return event.charCode >=48 && event.charCode <=57">
                </b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.contactoEmergencia.telefonoEmergencia.required">Debe ingresar el Número de Teléfono</div>
                  <div v-if="!$v.contactoEmergencia.telefonoEmergencia.numeric">Número de Teléfono no válido</div>
                  <div v-if="!$v.contactoEmergencia.telefonoEmergencia.minLength">Número de Teléfono muy corto</div>
                  <div v-if="!$v.contactoEmergencia.telefonoEmergencia.maxLength">Número de Teléfono muy largo</div>
                </b-form-invalid-feedback>
              </div>
              <div class="form-group">
                <label>Parentesco</label>
                <b-form-select
                  class="form-control input-formulario"
                  v-model="$v.contactoEmergencia.parentescoEmergencia.$model"
                  :state="ValidarContactoEmergencia('parentescoEmergencia')">
                  <option value="" disabled>- Seleccionar -</option>
                  <option>Hermana</option>
                  <option>Hermano</option>
                  <option>Madre</option>
                  <option>Padre</option>
                  <option>Tía</option>
                  <option>Tío</option>
                  <option>Otros</option>
                </b-form-select>
                <b-form-invalid-feedback id="input-1-live-feedback">
                  <div v-if="!$v.contactoEmergencia.parentescoEmergencia.required">Debe seleccionar el Parentesco</div>
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
  numeric,
} from "vuelidate/lib/validators";
import axios from "axios";
export default {
  data() {
    return {
      tcargos: [],
      arregloDepartamentosUsuario: [],
      arregloProvinciasUsuario: [],
      arregloDistritosUsuario: [],
      fechaMaxima: '',
      fechaValor: '',
      fechaIngresadaMayor: false,
      show: false,
      usuarioEncontrado: true,
      campoInhabilitado: true,
      disabledDNI: false,
      datosPersonales: {
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        fechaNacimiento: "",
        telefono: "",
        departamento: null,
        provincia: null,
        distrito: null,
        domicilio: "",
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
  mounted(){
    this.FechasParaDatePicker()
    this.CargarDepartamentosUsuario()
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
        .post("/api/validarEmail", data)
        .then((response) => 
        {
          let respuesta = response.data;
          if (response.status === 200) 
          {
            if (respuesta === 1) 
            {
              this.$v.datosUsuario.correo.$model = "";
              this.$swal("El Correo electrónico ya se encuentra registrado","","error");
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
                this.$swal("El DNI ya se encuentra registrado","","error");
                this.$refs.dni.focus();
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
                      "e4652f29c9a1be56275f17d9feeb76702edf14a81aa81e65fdff7b4b6cdca243"
                  ).then((response) => 
                  {
                    let res = response.data;
                    console.log(res.success);
                    if (res.success) 
                    {
                      this.disabledDNI=true;
                      //this.$swal("DNI Encontrado","No es necesario ingresar nombres y apellidos del trabajador","success");
                      this.$v.datosPersonales.nombre.$model =
                        res.data["nombres"];
                      this.$v.datosPersonales.apellidoPaterno.$model =
                        res.data["apellido_paterno"];
                      this.$v.datosPersonales.apellidoMaterno.$model =
                        res.data["apellido_materno"];
                      this.show = false;
                      this.usuarioEncontrado=false;
                    } 
                    else 
                    {
                      this.MensajeDeError(res.message);
                      this.$v.datosUsuario.dni.$model = "";
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
    fechaIngresadaManual(){
      if(this.$refs.fechaNac.value>this.fechaMaxima){
        this.fechaIngresadaMayor=true;
        this.$refs.fechaNac.$el.classList.add('is-invalid')
        
      }else{
        this.fechaIngresadaMayor=false;
        this.$refs.fechaNac.$el.classList.remove('is-invalid')
      }
    },
    FechasParaDatePicker()
    {
      let hoy = new Date();
      let anio = hoy.getFullYear()-18
      let mes = `${(hoy.getMonth()+1)}`.padStart(2,'0')
      let dia = `${(hoy.getDate())}`.padStart(2,'0')
            
      let fecha = `${anio}-${mes}-${dia}`
      this.fechaMaxima = fecha

      anio -= 70;
      mes = `${(hoy.getMonth()+7)}`.padStart(2,'0')
      dia = 15;

      fecha = `${anio}-${mes}-${dia}`
      this.fechaValor = fecha
    },
    CargarDepartamentosUsuario()
    {
      axios.get('/api/obtener-departamentos')
      .then((respuesta) => 
      {
        let data = respuesta.data

        if(respuesta.status == 200 && typeof data.error === 'undefined')
        {
          let departamentos = []
          data.forEach(element => {
          let obj = {
            value: element.codDepartamento, 
            text: element.nombre
          }
          departamentos.push(obj)
          });
          this.arregloDepartamentosUsuario = departamentos
        }
        else
        {
          console.log("No se pudo cargar los departamentos.")
        }
      })
      .catch(() => 
      {
        console.log("No se pudo cargar los departamentos.")
        })
    },
    CargarProvinciasUsuario()
    {
      axios.defaults.baseURL = process.env.VUE_APP_API_URL;
      axios.get('/api/obtener-provincias/' + this.datosPersonales.departamento)
      .then((respuesta) => 
      {
        let data = respuesta.data

        if(respuesta.status == 200 && typeof data.error === 'undefined')
        {
          let array = []
          data.forEach(element => {
            let obj = {
              value: element.codProvincia, 
              text: element.nombre
            }
            array.push(obj)
          });
          this.arregloProvinciasUsuario = array
        }
        else
        {
          console.log("No se pudo cargar las provincias.")
        }
      })
      .catch(() => 
      {
        console.log("No se pudo cargar las provincias.")
        })
    },
    CargarDistritosUsuario()
    {
      axios.defaults.baseURL = process.env.VUE_APP_API_URL;
      axios.get('/api/obtener-distritos/'+this.datosPersonales.provincia)
      .then((respuesta) => 
      {
        let data = respuesta.data
        
        if(respuesta.status == 200 && typeof data.error === 'undefined')
        {
          let array = []
          data.forEach(element => {
            let obj = {
              value: element.codDistrito, 
              text: element.nombre
            }
          array.push(obj)
          });
          this.arregloDistritosUsuario = array
        }
        else
        {
          console.log("No se pudo cargar los distritos.")
        }
      })
      .catch(() => 
      {
        console.log("No se pudo cargar los distritos.")
      })
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

    indexCargo(posicion){
      var pos=0;
      switch(posicion){
        case 1: pos=4; break;
        case 2: pos=3; break;
        case 3: pos=1; break;
        case 4: pos=2; break;
      }
      return pos;
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
        domicilio: this.datosPersonales.domicilio,
        codDistrito: this.datosPersonales.distrito,
        correo: this.datosUsuario.correo,
        codTipoCargo: this.indexCargo(this.datosUsuario.cargo),
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
              this.$swal("Usuario Registrado","Se ha enviado la contraseña de su cuenta de usuario a su correo electrónico","success");
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
      this.$swal(mensaje,"", "error");
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
        numeric,
      },
      departamento: {
        required,
      },
      provincia: {
        required,
      },
      distrito: {
        required,
      },
      domicilio: {
        required,
        maxLength: maxLength(50),
      },
    },
    datosUsuario: {
      dni: {
        required,
        maxLength: maxLength(8),
        minLength: minLength(8),
        numeric,
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
        numeric,
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
.Div-validar{
  color: #DC3545;
  font: 12.8px Poppins, sans-serif;
  margin-top: 5px;
}
</style>