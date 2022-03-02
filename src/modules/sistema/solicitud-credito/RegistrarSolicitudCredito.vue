<template>
    <div>
        <!-- Buscar Socio ------------------------------------------------------------- -->
        <section class="seccion-buscar-socio">
            <b-container class="contenedor-socio">
                <b-row class="">
                    <b-col cols="12">
                        <div class="card card-formulario-buscar">
                            <h2 class="card-title titulo">Buscar Socio Habilitado</h2>
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
                                <b-button block class="boton boton-principal" @click="BuscarSocio">Buscar</b-button>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!-- Socio ------------------------------------------------------------- -->
        <section class="seccion-socio ocultar-informacion">
            <b-container class="contenedor-socio">
                <b-row class="">
                    <b-col cols="12">
                        <div class="boton-regresar">
                            <b-button @click.prevent="RegresarBuscarSocio" variant="link" class="boton boton-transparente">
                                <b-icon icon="arrow-left" aria-hidden="true"></b-icon> Regresar
                            </b-button>
                        </div>
                        <div class="card card-formulario">
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
                                    v-model="datosSocio.apePaterno"
                                    :state="ValidarDatosSocio('apePaterno')"
                                    :disabled="disabled_input == 1">
                                    </b-form-input>
                                    <b-form-invalid-feedback id="input-1-live-feedback">
                                    <div v-if="!$v.datosSocio.apePaterno.required">El Apellido Paterno es requerido</div>
                                    <div v-if="!$v.datosSocio.apePaterno.maxLength">El Apellido Paterno no es válido</div>
                                    </b-form-invalid-feedback>
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Apellido Materno</label>
                                    <b-form-input
                                    type="text"
                                    class="form-control input-formulario"
                                    placeholder="Apellido Materno"
                                    v-model="datosSocio.apeMaterno"
                                    :state="ValidarDatosSocio('apeMaterno')"
                                    :disabled="disabled_input == 1">
                                    </b-form-input>
                                    <b-form-invalid-feedback id="input-1-live-feedback">
                                    <div v-if="!$v.datosSocio.apeMaterno.required">El Apellido Materno es requerido</div>
                                    <div v-if="!$v.datosSocio.apeMaterno.maxLength">El Apellido Materno no es válido</div>
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
                                    v-model="datosSocio.fecNacimiento"
                                    :state="ValidarDatosSocio('fecNacimiento')"
                                    :disabled="disabled_input == 1">
                                    </b-form-input>
                                    <b-form-invalid-feedback id="input-1-live-feedback">
                                    <div v-if="!$v.datosSocio.fecNacimiento.required">La Fecha de Nacimiento es requerido</div>
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
                            
                                <b-button 
                                    block 
                                    class="boton boton-principal mt-2 boton-block-icon"
                                    @click="ValidarSocio" 
                                    v-if="socioHabilitado"
                                >
                                    Continuar 
                                    <b-icon 
                                        icon="chevron-right" 
                                        aria-hidden="true" 
                                        class="icon-derecha-boton"
                                    ></b-icon>
                                </b-button>
                                <b-button block class="boton boton-principal noHabilitado" v-if="!socioHabilitado">Socio no habilitado</b-button>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!-- Garante 01 -------------------------------------------------------- -->
		<section class="seccion-garante seccion-garante-1 ocultar-informacion">
            <b-container class="contenedor-garante">
                <b-row align-v="center" align-h="center">
                    <b-col cols="12">
                        <div class="boton-regresar">
                            <b-button @click.prevent="RegresarSocio" variant="link" class="boton boton-transparente">
                                <b-icon icon="arrow-left" aria-hidden="true"></b-icon> Regresar
                            </b-button>
                        </div>
                        <b-overlay
                            :show="efectoCargandoFormulario"
                            rounded="lg"
                            class="overlay-formulario"
                        >
                            <b-card
                                tag="div"
                                class="mb-2 card-formulario"
                            >
                                <b-card-text>
                                    <h2 class="titulo-formulario">Ingresar Garante</h2>
                                    <p class="subtitulo-formulario">Datos del primer garante</p>
                                    <b-form @submit.prevent="ValidarDatosGarante1">
                                        <b-form-group
                                            id="input-group-4"
                                        >
                                            <b-form-input
                                                id="input-4"
                                                v-model="datosGarante1.dni"
                                                class="input-formulario"
                                                type="number"
                                                :state="EstadoValidacionGarante1('dni')"
                                                placeholder="DNI"
                                                @blur="VerificarDniGarante1"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-4-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.dni.required">
                                                    Debe ingresar el número de DNI
                                                </div>
                                                <div v-if="!$v.datosGarante1.dni.minLength">
                                                    Número de DNI muy corto
                                                </div>
                                                <div v-if="!$v.datosGarante1.dni.maxLength">
                                                    Número de DNI muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                        
                                        <b-form-group
                                            id="input-group-1"
                                        >
                                            <b-form-input
                                                id="input-1"
                                                v-model="datosGarante1.apePaterno"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante1('apePaterno')"
                                                placeholder="Apellido Paterno"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-1-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.apePaterno.required">
                                                    Debe ingresar el Apellido Paterno
                                                </div>
                                                <div v-if="!$v.datosGarante1.apePaterno.maxLength">
                                                    Apellido Paterno muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-2"
                                        >
                                            <b-form-input
                                                id="input-2"
                                                v-model="datosGarante1.apeMaterno"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante1('apeMaterno')"
                                                placeholder="Apellido Materno"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-2-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.apeMaterno.required">
                                                    Debe ingresar el Apellido Materno
                                                </div>
                                                <div v-if="!$v.datosGarante1.apeMaterno.maxLength">
                                                    Apellido Materno muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-3"
                                        >
                                            <b-form-input
                                                id="input-3"
                                                v-model="datosGarante1.nombre"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante1('nombre')"
                                                placeholder="Nombres"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-3-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.nombre.required">
                                                    Debe ingresar el(los) Nombre(s)
                                                </div>
                                                <div v-if="!$v.datosGarante1.nombre.maxLength">
                                                    Nombre(s) muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-5"
                                        >
                                            <b-form-input
                                                id="input-5"
                                                v-model="datosGarante1.telefono"
                                                class="input-formulario"
                                                type="tel"
                                                :state="EstadoValidacionGarante1('telefono')"
                                                placeholder="Teléfono/Celular"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-5-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.telefono.required">
                                                    Debe ingresar el número de Teléfono
                                                </div>
                                                <div v-if="!$v.datosGarante1.telefono.numeric">
                                                    Número de Teléfono no válido
                                                </div>
                                                <div v-if="!$v.datosGarante1.telefono.minLength">
                                                    Número de Teléfono muy corto
                                                </div>
                                                <div v-if="!$v.datosGarante1.telefono.maxLength">
                                                    Número de Teléfono muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-6"
                                        >
                                            <b-form-input
                                                id="input-6"
                                                v-model="datosGarante1.domicilio"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante1('domicilio')"
                                                placeholder="Domicilio"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-6-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.domicilio.required">
                                                    Debe ingresar el Domicilio
                                                </div>
                                                <div v-if="!$v.datosGarante1.domicilio.maxLength">
                                                    Domicilio muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-overlay
                                            :show="efectoCargandoBoton"
                                            rounded
                                            opacity="0.6"
                                            class="d-block"
                                        >
                                            <b-button 
                                                :disabled="efectoCargandoBoton"
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
                        </b-overlay>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!-- Garante 02 -------------------------------------------------------- -->
        <section class="seccion-garante seccion-garante-2 ocultar-informacion">
            <b-container class="contenedor-garante">
                <b-row align-v="center" align-h="center">
                    <b-col cols="12">
                        <div class="boton-regresar">
                            <b-button @click.prevent="RegresarGarante1" variant="link" class="boton boton-transparente">
                                <b-icon icon="arrow-left" aria-hidden="true"></b-icon> Regresar
                            </b-button>
                        </div>
                        <b-overlay
                            :show="efectoCargandoFormulario"
                            rounded="lg"
                            class="overlay-formulario"
                        >
                            <b-card
                                tag="div"
                                class="mb-2 card-formulario"
                            >
                                <b-card-text>
                                    <h2 class="titulo-formulario">Ingresar Garante</h2>
                                    <p class="subtitulo-formulario">Datos del segundo garante</p>
                                    <b-form @submit.prevent="ValidarDatosGarante2">
                                        <b-form-group
                                            id="input-group-4"
                                        >
                                            <b-form-input
                                                id="input-4"
                                                v-model="datosGarante2.dni"
                                                class="input-formulario"
                                                type="number"
                                                :state="EstadoValidacionGarante2('dni')"
                                                placeholder="DNI"
                                                @blur="VerificarDniGarante2"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-4-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante2.dni.required">
                                                    Debe ingresar el número de DNI
                                                </div>
                                                <div v-if="!$v.datosGarante2.dni.minLength">
                                                    Número de DNI muy corto
                                                </div>
                                                <div v-if="!$v.datosGarante2.dni.maxLength">
                                                    Número de DNI muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-1"
                                        >
                                            <b-form-input
                                                id="input-1"
                                                v-model="datosGarante2.apePaterno"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante2('apePaterno')"
                                                placeholder="Apellido Paterno"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-1-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante2.apePaterno.required">
                                                    Debe ingresar el Apellido Paterno
                                                </div>
                                                <div v-if="!$v.datosGarante2.apePaterno.maxLength">
                                                    Apellido Paterno muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-2"
                                        >
                                            <b-form-input
                                                id="input-2"
                                                v-model="datosGarante2.apeMaterno"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante2('apeMaterno')"
                                                placeholder="Apellido Materno"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-2-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante2.apeMaterno.required">
                                                    Debe ingresar el Apellido Materno
                                                </div>
                                                <div v-if="!$v.datosGarante2.apeMaterno.maxLength">
                                                    Apellido Materno muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-3"
                                        >
                                            <b-form-input
                                                id="input-3"
                                                v-model="datosGarante2.nombre"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante2('nombre')"
                                                placeholder="Nombres"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-3-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante2.nombre.required">
                                                    Debe ingresar el(los) Nombre(s)
                                                </div>
                                                <div v-if="!$v.datosGarante2.nombre.maxLength">
                                                    Nombre(s) muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-5"
                                        >
                                            <b-form-input
                                                id="input-5"
                                                v-model="datosGarante2.telefono"
                                                class="input-formulario"
                                                type="tel"
                                                :state="EstadoValidacionGarante2('telefono')"
                                                placeholder="Teléfono/Celular"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-5-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante2.telefono.required">
                                                    Debe ingresar el número de Teléfono
                                                </div>
                                                <div v-if="!$v.datosGarante2.telefono.numeric">
                                                    Número de Teléfono no válido
                                                </div>
                                                <div v-if="!$v.datosGarante2.telefono.minLength">
                                                    Número de Teléfono muy corto
                                                </div>
                                                <div v-if="!$v.datosGarante2.telefono.maxLength">
                                                    Número de Teléfono muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-6"
                                        >
                                            <b-form-input
                                                id="input-6"
                                                v-model="datosGarante2.domicilio"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante2('domicilio')"
                                                placeholder="Domicilio"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-6-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante2.domicilio.required">
                                                    Debe ingresar el Domicilio
                                                </div>
                                                <div v-if="!$v.datosGarante2.domicilio.maxLength">
                                                    Domicilio muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-overlay
                                            :show="efectoCargandoBoton"
                                            rounded
                                            opacity="0.6"
                                            class="d-block"
                                        >
                                            <b-button 
                                                :disabled="efectoCargandoBoton"
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
                        </b-overlay>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!-- Solicitud de Credito ---------------------------------------------- -->
        <section class="seccion-solicitud ocultar-informacion">
            <b-container class="contenedor-iniciar-sesion">
                <b-row align-v="center" align-h="center">
                    <b-col cols="12">
                        <div class="boton-regresar">
                            <b-button @click.prevent="RegresarGrante2" variant="link" class="boton boton-transparente">
                                <b-icon icon="arrow-left" aria-hidden="true"></b-icon> Regresar
                            </b-button>
                        </div>
                        <b-overlay
                            :show="efectoCargandoFormulario"
                            rounded="lg"
                            class="overlay-formulario"
                        >
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
                                                v-model="datosSolicitud.monto"
                                                class="input-formulario"
                                                type="number"
                                                :state="EstadoValidacionSolicitud('monto')"
                                                placeholder="Monto"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-1-live-feedback"
                                            >
                                                <div v-if="!$v.datosSolicitud.monto.required">
                                                    Debe ingresar el Monto
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-2"
                                        >
                                            <b-form-textarea
                                                id="input-2"
                                                v-model="datosSolicitud.motivo"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionSolicitud('motivo')"
                                                placeholder="Motivo"
                                            ></b-form-textarea>
                                            <b-form-invalid-feedback
                                                id="input-2-live-feedback"
                                            >
                                                <div v-if="!$v.datosSolicitud.motivo.required">
                                                    Debe ingresar el Motivo
                                                </div>
                                                <div v-if="!$v.datosGarante1.telefono.maxLength">
                                                    Motivo muy largo
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>
                                    
                                        <b-overlay
                                            :show="efectoCargandoBoton"
                                            rounded
                                            opacity="0.6"
                                            class="d-block"
                                        >
                                            <b-button 
                                                :disabled="efectoCargandoBoton"
                                                block 
                                                type="submit" 
                                                class="boton boton-principal mt-2 boton-block-icon"
                                            >
                                                Registrar Solicitud de Crédito
                                            </b-button>
                                        </b-overlay>
                                    </b-form>
                                </b-card-text>
                            </b-card>
                        </b-overlay>
                    </b-col>
                </b-row>
            </b-container>
        </section>
	</div>
</template>
<script>
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
import axios from 'axios'

import { mapState } from 'vuex'
export default {
    data: () =>  ({
        socioHabilitado: true,
        disabled_input: 0,
        disabled_input_NoHabilitado: 0,
        dniBuscar: "",
        titulo: "",
        // usuarioPrueba: { //Se creó este Usuario para poder verificar si se cumplen las condiciones
        //     codigo: "1",
        //     dni: "12345678",
        //     apePaterno: "Rios",
        //     apeMaterno: "Tapia",
        //     nombre: "Carlos",
        //     fecNacimiento: "1990-05-15",
        //     telefono: "979875512",
        //     domicilio: "Amarantos 123",
        //     activo: "1",
        // },

        efectoCargandoBoton: false,
        efectoCargandoFormulario: false,
        datosSocio: {
            codSocio: '',
            dni: '',
            apePaterno: '',
            apeMaterno: '',
            nombre: '',
            fecNacimiento: '',
            telefono: '',
            domicilio: '',
            activo: '',
        },
		datosGarante1: {
            codGarante: '',
			apePaterno: '',
			apeMaterno: '',
			nombre: '',
			dni: '',
			telefono: '',
			domicilio: '',
		},
		datosGarante2: {
            codGarante: '',
			apePaterno: '',
			apeMaterno: '',
			nombre: '',
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
    computed: {
        ...mapState('iniciarSesion', ['usuario']),
    },
	methods: {
        RegresarBuscarSocio()
        {
            this.ActivarFormularioBuscarSocio()
            this.OcultarFormularioSocio()
            this.socioHabilitado = true
            this.disabled_input = 0
            this.disabled_input_NoHabilitado = 0
        },
        RegresarSocio()
        {
            this.ActivarFormularioSocio()
            this.OcultarFormularioGarante1()
        },
        RegresarGarante1()
        {
            this.ActivarFormularioGarante1()
            this.OcultarFormularioGarante2()
        },
        RegresarGrante2()
        {
            this.ActivarFormularioGarante2()
            this.OcultarFormularioSolicitud()
        },
        NextCardSocio() 
        {
            this.datosSocio.dni = this.dniBuscar;
            document.querySelector(".seccion-buscar-socio").classList.add("ocultar-informacion");
            this.ActivarFormularioSocio();
        },
        AgregarDatosSocio(data) 
        {
            this.datosSocio.codSocio = data.codSocio
            this.datosSocio.apePaterno = data.apePaterno
            this.datosSocio.apeMaterno = data.apeMaterno
            this.datosSocio.nombre = data.nombre
            this.datosSocio.fecNacimiento = data.fecNacimiento
            this.datosSocio.telefono = data.telefono
            this.datosSocio.domicilio = data.domicilio
        },
        BuscarSocio() 
        {
            this.$v.dniBuscar.$touch();
            if (!this.$v.dniBuscar.$anyError) 
            {
                //Hacer un buscar y que retorne los datos del usuario (en caso exista), sino que retorne un null
                axios.get('/api/buscar-garante-habilitado/'+this.dniBuscar)
                    .then((respuesta) => 
                    {
                        let data = respuesta.data

                        if(respuesta.status == 200 && typeof data.error === 'undefined' && typeof data.activo != 'undefined')
                        {
                            // this.$swal("Socio encontrado", "", "success");
                            this.titulo = "Socio encontrado";

                            this.NextCardSocio(); //Pasa al card Socio

                            this.socioHabilitado = (data.activo == "1") ? true : false

                            if (this.socioHabilitado) 
                            {
                                //Socio habilitado
                                this.disabled_input = (this.disabled_input + 1) % 2; //Inhabilita los inputs necesarios
                                this.AgregarDatosSocio(data); //Se agrega los datos a los inputs
                            } 
                            else 
                            {
                                //Socio no habilitado
                                this.disabled_input = (this.disabled_input + 1) % 2; //Inhabilita los inputs
                                this.disabled_input_NoHabilitado = (this.disabled_input_NoHabilitado + 1) % 2; //Inhabilita los inputs
                                this.AgregarDatosSocio(data);
                            }
                        }
                        else
                        {
                            if(data.error == true)
                            {
                                this.MensajeDeAviso(data.mensaje)
                                this.dniBuscar = ""
                            }
                            else
                            {
                                this.datosSocio.codSocio = ""
                                this.datosSocio.apePaterno = ""
                                this.datosSocio.apeMaterno = ""
                                this.datosSocio.nombre = ""
                                this.datosSocio.fecNacimiento = ""
                                this.datosSocio.telefono = ""
                                this.datosSocio.domicilio = ""
                                // this.$swal("Socio No encontrado", "", "error");
                                this.titulo = "Ingresar nuevo socio"
                                this.NextCardSocio();
                            }
                        }
                    })
                    .catch(() => 
                    {
                        this.MensajeDeError()
                    })
            }
        },
        ValidarSocio() 
        {
            this.$v.datosSocio.$touch();
            if (!this.$v.datosSocio.$anyError) {  //Si es todo correcto se pasa al siguiente card
                this.OcultarFormularioSocio();
                this.ActivarFormularioGarante1();
            }
        },
        VerificarDniGarante1()
        {
            if(this.datosSocio.dni != this.datosGarante1.dni)
            {
                this.efectoCargandoFormulario = true

                axios.get('/api/buscar-garante-habilitado/'+this.datosGarante1.dni)
                    .then((respuesta) => 
                    {
                        let data = respuesta.data

                        if(respuesta.status == 200 && typeof data.error === 'undefined')
                        {
                            this.datosGarante1.codGarante = data.codSocio
                            this.datosGarante1.apePaterno = data.apePaterno
                            this.datosGarante1.apeMaterno = data.apeMaterno
                            this.datosGarante1.nombre = data.nombre
                            this.datosGarante1.telefono = data.telefono
                            this.datosGarante1.domicilio = data.domicilio
                        }
                        else
                        {
                            this.MensajeDeAviso(data.mensaje)
                            this.datosGarante1.codGarante = ""
                            this.datosGarante1.apePaterno = ""
                            this.datosGarante1.apeMaterno = ""
                            this.datosGarante1.nombre = ""
                            this.datosGarante1.telefono = ""
                            this.datosGarante1.domicilio = ""
                        }
                    })
                    .catch(() => 
                    {
                        this.MensajeDeError()
                    })
                    .finally(()=>
                    {
                        this.efectoCargandoFormulario = false
                    });
            }
            else
            {
                this.datosGarante1.dni = ""
                this.MensajeDeError("El socio no puede ser garante de su solicitud.")
            }
        },
        VerificarDniGarante2()
        {
            if(this.datosGarante1.dni != this.datosGarante2.dni)
            {
                if(this.datosSocio.dni != this.datosGarante2.dni)
                {
                    this.efectoCargandoFormulario = true

                    axios.get('/api/buscar-garante-habilitado/'+this.datosGarante2.dni)
                        .then((respuesta) => 
                        {
                            let data = respuesta.data

                            if(respuesta.status == 200 && typeof data.error === 'undefined')
                            {
                                this.datosGarante2.codGarante = data.codSocio
                                this.datosGarante2.apePaterno = data.apePaterno
                                this.datosGarante2.apeMaterno = data.apeMaterno
                                this.datosGarante2.nombre = data.nombre
                                this.datosGarante2.telefono = data.telefono
                                this.datosGarante2.domicilio = data.domicilio
                            }
                            else
                            {
                                this.MensajeDeAviso(data.mensaje)
                                this.datosGarante2.codGarante = ""
                                this.datosGarante2.apePaterno = ""
                                this.datosGarante2.apeMaterno = ""
                                this.datosGarante2.nombre = ""
                                this.datosGarante2.telefono = ""
                                this.datosGarante2.domicilio = ""
                            }
                        })
                        .catch(() => 
                        {
                            this.MensajeDeError()
                        })
                        .finally(()=>
                        {
                            this.efectoCargandoFormulario = false
                        });
                }
                else
                {
                    this.datosGarante2.dni = ""
                    this.MensajeDeError("El socio no puede ser garante de su solicitud.")
                }
            }
            else
            {
                this.datosGarante2.dni = ""
                this.MensajeDeError("El garante ya ha sido registrado para esta solicitud.")
            }
        },
		ValidarDatosGarante1()
        {
			this.$v.datosGarante1.$touch();

			if(!this.$v.datosGarante1.$anyError)
            { 
                if(this.datosSocio.dni != this.datosGarante1.dni)
                {
                    this.ActivarFormularioGarante2()
                    this.OcultarFormularioGarante1()
                }
				else
                {
                    this.datosGarante1.dni = ""
                    this.MensajeDeError("El socio no puede ser garante de su solicitud.")
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
                        this.ActivarFormularioSolicitud()
                        this.OcultarFormularioGarante2()
                    }
                    else
                    {
                        this.datosGarante2.dni = ""
                        this.MensajeDeError("El socio no puede ser garante de su solicitud.")
                    }
                }
				else
                {
                    this.datosGarante2.dni = ""
                    this.MensajeDeError("El garante ya ha sido registrado para esta solicitud.")
                }
			}
		},
        ValidarDatosSolicitud()
        {
            this.$v.datosSolicitud.$touch();

			if(!this.$v.datosSolicitud.$anyError)
            { 
                this.efectoCargandoBoton = true
                this.datosSolicitud.codSocio = this.datosSocio.codSocio
                this.datosSolicitud.codUsuario = this.usuario.codigo

                let datos = {
                    socio: this.datosSocio,
                    garante1: this.datosGarante1,
                    garante2: this.datosGarante2,
                    solicitud: this.datosSolicitud,
                }
                console.log(datos)
                axios.post('/api/registrar-solicitud', datos)
                    .then((respuesta) => 
                    {
                        let data = respuesta.data

                        if(respuesta.status == 200 && typeof data.error === 'undefined')
                        {
                            this.ActivarFormularioBuscarSocio()
                            this.OcultarFormularioSolicitud()

                            this.LimpiarFormularios()
                            
                            this.$swal({
                                title: "Solicitud de Crédito registrada",
                                icon: 'success',
                                confirmButtonText: 'Aceptar',
                            })
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
                        this.efectoCargandoBoton = false
                    });
			}
        },
        LimpiarFormularios()
        {
            this.socioHabilitado = false
            this.disabled_input = 0
            this.disabled_input_NoHabilitado = 0
            this.dniBuscar = ""
            this.titulo = "",

            this.datosSocio = {
                codSocio: '',
                dni: '',
                apePaterno: '',
                apeMaterno: '',
                nombre: '',
                fecNacimiento: '',
                telefono: '',
                domicilio: '',
                activo: ''
            }
            this.datosGarante1 = {
                codGarante: '',  
                apePaterno: '',
                apeMaterno: '',
                nombre: '',
                dni: '',
                telefono: '',
                domicilio: '',
            }
            this.datosGarante2 = {
                codGarante: '',
                apePaterno: '',
                apeMaterno: '',
                nombre: '',
                dni: '',
                telefono: '',
                domicilio: '',
            }
            this.datosSolicitud = {
                codUsuario: '',
                codSocio: '',
                monto: '',
                motivo: '',
            }

            this.$v.dniBuscar.$reset()
            this.$v.datosSocio.$reset()
            this.$v.datosGarante1.$reset()
            this.$v.datosGarante2.$reset()
            this.$v.datosSolicitud.$reset()
        },
        MensajeDeError(mensaje = 'Error al conectar al servidor.')
        {
			this.$swal({
				title: mensaje,
				icon: 'error',
				confirmButtonText: 'Aceptar',
			})
		},
        MensajeDeAviso(mensaje)
        {
			this.$swal({
				title: mensaje,
				icon: 'info',
				confirmButtonText: 'Aceptar',
			})
		},
        ValidarDNIBuscar() 
        {
            const { $dirty, $error } = this.$v.dniBuscar;
            return $dirty ? !$error : null;
        },
        ValidarDatosSocio(name) 
        {
            const { $dirty, $error } = this.$v.datosSocio[name];
            return $dirty ? !$error : null;
        },
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
        ActivarFormularioBuscarSocio() {
            document.querySelector(".seccion-buscar-socio").classList.add("mostrar-informacion");
            document.querySelector(".seccion-buscar-socio").classList.remove("ocultar-informacion");
        },
        ActivarFormularioSocio() {
            document.querySelector(".seccion-socio").classList.add("mostrar-informacion");
            document.querySelector(".seccion-socio").classList.remove("ocultar-informacion");
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
        OcultarFormularioBuscarSocio() {
            document.querySelector(".seccion-buscar-socio").classList.remove("mostrar-informacion");
            document.querySelector(".seccion-buscar-socio").classList.add("ocultar-informacion");
        },
        OcultarFormularioSocio() {
            document.querySelector(".seccion-socio").classList.remove("mostrar-informacion");
            document.querySelector(".seccion-socio").classList.add("ocultar-informacion");
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
            apePaterno: {
                required,
                maxLength: maxLength(40),
            },
            apeMaterno: {
                required,
                maxLength: maxLength(40),
            },
            nombre: {
                required,
                maxLength: maxLength(40),
            },
            fecNacimiento: {
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
		datosGarante1: {
			apePaterno: {
				required,
                maxLength: maxLength(50)
			},
			apeMaterno: {
				required,
                maxLength: maxLength(50)
			},
			nombre: {
				required,
                maxLength: maxLength(50)
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
                maxLength: maxLength(100)
			},
		},
		datosGarante2: {
			apePaterno: {
				required,
                maxLength: maxLength(50)
			},
			apeMaterno: {
				required,
                maxLength: maxLength(50)
			},
			nombre: {
				required,
                maxLength: maxLength(50)
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
                maxLength: maxLength(100)
			},
		},
        datosSolicitud: {
			monto: {
				required,
			},
			motivo: {
				required,
                maxLength: maxLength(65535)
			},
		}
	},
}
</script>
<style>
    .btn.boton-principal.noHabilitado {
        background-color: #da251c;
    }
    .card-formulario-buscar{
        margin-top: 54px !important;
    }
	.overlay-formulario{
		max-width: 465px;
		margin: 0 auto;
	}
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