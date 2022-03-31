<template>
    <div>
        <!-- Buscar Socio ------------------------------------------------------------- -->
        <section class="seccion-buscar-socio">
            <b-container class="contenedor-socio contenedor-buscar">
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
                                    <!-- <label for="formGroupExampleInput">DNI</label> -->
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
                                    <!-- <label for="formGroupExampleInput">Apellido Paterno</label> -->
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
                                    <!-- <label for="formGroupExampleInput">Apellido Materno</label> -->
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
                                    <!-- <label for="formGroupExampleInput">Nombre</label> -->
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
                                    <!-- <label for="formGroupExampleInput">Fecha de Nacimiento</label> -->
                                    <b-form-input
                                    type="date"
                                    min="1900-01-01" 
                                    :max="fechaMaxima"
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
                                    <!-- <label for="formGroupExampleInput">Teléfono</label> -->
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
                                
                                        <b-form-group
                                            id="input-group-7"
                                            label="Departamento:"
                                            label-for="input-7"
                                        >
                                            <b-form-select 
                                                id="input-7"
                                                v-model="datosSocio.departamento" 
                                                :options="arregloDepartamentosSocio"
                                                class="input-formulario"
                                                :state="ValidarDatosSocio('departamento')"
                                                @change="CargarProvinciasSocio"
                                            >
                                                <template #first>
                                                    <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                                                </template>
                                            </b-form-select>
                                            <b-form-invalid-feedback
                                                id="input-7-live-feedback"
                                            >
                                                <div v-if="!$v.datosSocio.departamento.required">
                                                    Debe seleccionar su departamento
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-8"
                                            label="Provincia:"
                                            label-for="input-8"
                                        >
                                            <b-form-select 
                                                id="input-8"
                                                v-model="datosSocio.provincia" 
                                                :options="arregloProvinciasSocio"
                                                class="input-formulario"
                                                :state="ValidarDatosSocio('provincia')"
                                                @change="CargarDistritosSocio"
                                            >
                                                <template #first>
                                                    <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                                                </template>
                                            </b-form-select>
                                            <b-form-invalid-feedback
                                                id="input-8-live-feedback"
                                            >
                                                <div v-if="!$v.datosSocio.provincia.required">
                                                    Debe seleccionar su provincia
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-9"
                                            label="Distrito:"
                                            label-for="input-9"
                                        >
                                            <b-form-select 
                                                id="input-9"
                                                v-model="datosSocio.distrito" 
                                                :options="arregloDistritosSocio"
                                                class="input-formulario"
                                                :state="ValidarDatosSocio('distrito')"
                                            >
                                                <template #first>
                                                    <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                                                </template>
                                            </b-form-select>
                                            <b-form-invalid-feedback
                                                id="input-9-live-feedback"
                                            >
                                                <div v-if="!$v.datosSocio.distrito.required">
                                                    Debe seleccionar su distrito
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                <div class="form-group">
                                    <!-- <label for="formGroupExampleInput">Domicilio</label> -->
                                    <b-form-input
                                    type="text"
                                    class="form-control input-formulario"
                                    placeholder="Domicilio"
                                    v-model="datosSocio.domicilio"
                                    :state="ValidarDatosSocio('domicilio')"
                                    :disabled="disabled_input_NoHabilitado == 1">
                                    </b-form-input>
                                    <b-form-invalid-feedback id="input-1-live-feedback">
                                    <div v-if="!$v.datosSocio.domicilio.required">Debe ingresar el Domicilio</div>
                                    <div v-if="!$v.datosSocio.domicilio.maxLength">Domicilio muy largo</div>
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
                                            id="input-group-1"
                                        >
                                            <b-form-input
                                                id="input-1"
                                                v-model="datosGarante1.dni"
                                                class="input-formulario"
                                                type="number"
                                                :state="EstadoValidacionGarante1('dni')"
                                                placeholder="DNI"
                                                @blur="VerificarDniGarante1"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-1-live-feedback"
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
                                            id="input-group-2"
                                        >
                                            <b-form-input
                                                id="input-2"
                                                v-model="datosGarante1.apePaterno"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante1('apePaterno')"
                                                placeholder="Apellido Paterno"
                                                :disabled="garante1Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-2-live-feedback"
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
                                            id="input-group-3"
                                        >
                                            <b-form-input
                                                id="input-3"
                                                v-model="datosGarante1.apeMaterno"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante1('apeMaterno')"
                                                placeholder="Apellido Materno"
                                                :disabled="garante1Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-3-live-feedback"
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
                                            id="input-group-4"
                                        >
                                            <b-form-input
                                                id="input-4"
                                                v-model="datosGarante1.nombre"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante1('nombre')"
                                                placeholder="Nombres"
                                                :disabled="garante1Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-4-live-feedback"
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
                                                type="date"
                                                min="1900-01-01" 
                                                :max="fechaMaxima"
                                                class="input-formulario"
                                                v-model="datosGarante1.fecNacimiento"
                                                :state="EstadoValidacionGarante1('fecNacimiento')"
                                                placeholder="Fecha de Nacimiento"
                                                :disabled="garante1Encontrado"
                                            >
                                            </b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-5-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.nombre.required">
                                                    Debe ingresar la Fecha de Nacimiento
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-6"
                                        >
                                            <b-form-input
                                                id="input-6"
                                                v-model="datosGarante1.telefono"
                                                class="input-formulario"
                                                type="tel"
                                                :state="EstadoValidacionGarante1('telefono')"
                                                placeholder="Teléfono/Celular"
                                                :disabled="garante1Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-6-live-feedback"
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
                                            id="input-group-7"
                                            label="Departamento:"
                                            label-for="input-7"
                                        >
                                            <b-form-select 
                                                id="input-7"
                                                v-model="datosGarante1.departamento" 
                                                :options="arregloDepartamentosGarante1"
                                                class="input-formulario"
                                                :state="EstadoValidacionGarante1('departamento')"
                                                @change="CargarProvinciasGarante1"
                                            >
                                                <template #first>
                                                    <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                                                </template>
                                            </b-form-select>
                                            <b-form-invalid-feedback
                                                id="input-7-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.departamento.required">
                                                    Debe seleccionar su departamento
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-8"
                                            label="Provincia:"
                                            label-for="input-8"
                                        >
                                            <b-form-select 
                                                id="input-8"
                                                v-model="datosGarante1.provincia" 
                                                :options="arregloProvinciasGarante1"
                                                class="input-formulario"
                                                :state="EstadoValidacionGarante1('provincia')"
                                                @change="CargarDistritosGarante1"
                                            >
                                                <template #first>
                                                    <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                                                </template>
                                            </b-form-select>
                                            <b-form-invalid-feedback
                                                id="input-8-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.provincia.required">
                                                    Debe seleccionar su provincia
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-9"
                                            label="Distrito:"
                                            label-for="input-9"
                                        >
                                            <b-form-select 
                                                id="input-9"
                                                v-model="datosGarante1.distrito" 
                                                :options="arregloDistritosGarante1"
                                                class="input-formulario"
                                                :state="EstadoValidacionGarante1('distrito')"
                                            >
                                                <template #first>
                                                    <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                                                </template>
                                            </b-form-select>
                                            <b-form-invalid-feedback
                                                id="input-9-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.distrito.required">
                                                    Debe seleccionar su distrito
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-10"
                                        >
                                            <b-form-input
                                                id="input-10"
                                                v-model="datosGarante1.domicilio"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante1('domicilio')"
                                                placeholder="Domicilio"
                                                :disabled="garante1Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-10-live-feedback"
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
                                            id="input-group-1"
                                        >
                                            <b-form-input
                                                id="input-1"
                                                v-model="datosGarante2.dni"
                                                class="input-formulario"
                                                type="number"
                                                :state="EstadoValidacionGarante2('dni')"
                                                placeholder="DNI"
                                                @blur="VerificarDniGarante2"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-1-live-feedback"
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
                                            id="input-group-2"
                                        >
                                            <b-form-input
                                                id="input-2"
                                                v-model="datosGarante2.apePaterno"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante2('apePaterno')"
                                                placeholder="Apellido Paterno"
                                                :disabled="garante2Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-2-live-feedback"
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
                                            id="input-group-3"
                                        >
                                            <b-form-input
                                                id="input-3"
                                                v-model="datosGarante2.apeMaterno"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante2('apeMaterno')"
                                                placeholder="Apellido Materno"
                                                :disabled="garante2Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-3-live-feedback"
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
                                            id="input-group-4"
                                        >
                                            <b-form-input
                                                id="input-4"
                                                v-model="datosGarante2.nombre"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante2('nombre')"
                                                placeholder="Nombres"
                                                :disabled="garante2Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-4-live-feedback"
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
                                                type="date"
                                                min="1900-01-01" 
                                                :max="fechaMaxima"
                                                class="input-formulario"
                                                v-model="datosGarante2.fecNacimiento"
                                                :state="EstadoValidacionGarante2('fecNacimiento')"
                                                placeholder="Fecha de Nacimiento"
                                                :disabled="garante2Encontrado"
                                            >
                                            </b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-5-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante1.nombre.required">
                                                    Debe ingresar la Fecha de Nacimiento
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-6"
                                        >
                                            <b-form-input
                                                id="input-6"
                                                v-model="datosGarante2.telefono"
                                                class="input-formulario"
                                                type="tel"
                                                :state="EstadoValidacionGarante2('telefono')"
                                                placeholder="Teléfono/Celular"
                                                :disabled="garante2Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-6-live-feedback"
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
                                            id="input-group-7"
                                            label="Departamento:"
                                            label-for="input-7"
                                        >
                                            <b-form-select 
                                                id="input-7"
                                                v-model="datosGarante2.departamento" 
                                                :options="arregloDepartamentosGarante2"
                                                class="input-formulario"
                                                :state="EstadoValidacionGarante2('departamento')"
                                                @change="CargarProvinciasGarante2"
                                            >
                                                <template #first>
                                                    <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                                                </template>
                                            </b-form-select>
                                            <b-form-invalid-feedback
                                                id="input-7-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante2.departamento.required">
                                                    Debe seleccionar su departamento
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-8"
                                            label="Provincia:"
                                            label-for="input-8"
                                        >
                                            <b-form-select 
                                                id="input-8"
                                                v-model="datosGarante2.provincia" 
                                                :options="arregloProvinciasGarante2"
                                                class="input-formulario"
                                                :state="EstadoValidacionGarante2('provincia')"
                                                @change="CargarDistritosGarante2"
                                            >
                                                <template #first>
                                                    <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                                                </template>
                                            </b-form-select>
                                            <b-form-invalid-feedback
                                                id="input-8-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante2.provincia.required">
                                                    Debe seleccionar su provincia
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-9"
                                            label="Distrito:"
                                            label-for="input-9"
                                        >
                                            <b-form-select 
                                                id="input-9"
                                                v-model="datosGarante2.distrito" 
                                                :options="arregloDistritosGarante2"
                                                class="input-formulario"
                                                :state="EstadoValidacionGarante2('distrito')"
                                            >
                                                <template #first>
                                                    <b-form-select-option :value="null" disabled>- Seleccionar -</b-form-select-option>
                                                </template>
                                            </b-form-select>
                                            <b-form-invalid-feedback
                                                id="input-9-live-feedback"
                                            >
                                                <div v-if="!$v.datosGarante2.distrito.required">
                                                    Debe seleccionar su distrito
                                                </div>
                                            </b-form-invalid-feedback>
                                        </b-form-group>

                                        <b-form-group
                                            id="input-group-10"
                                        >
                                            <b-form-input
                                                id="input-10"
                                                v-model="datosGarante2.domicilio"
                                                class="input-formulario"
                                                type="text"
                                                :state="EstadoValidacionGarante2('domicilio')"
                                                placeholder="Domicilio"
                                                :disabled="garante2Encontrado"
                                            ></b-form-input>
                                            <b-form-invalid-feedback
                                                id="input-10-live-feedback"
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
                                                <div v-if="!$v.datosSolicitud.motivo.maxLength">
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
                                                Registrar
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
        // usuarioPrueba: { //Se creó este Socio para poder verificar si se cumplen las condiciones
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
        garante1Encontrado: false,
        garante2Encontrado: true,
        fechaMaxima: '',
        fechaValor: '',
        arregloDepartamentosGarante1: [],
        arregloProvinciasGarante1: [],
        arregloDistritosGarante1: [],
        arregloDepartamentosGarante2: [],
        arregloProvinciasGarante2: [],
        arregloDistritosGarante2: [],
        arregloDepartamentosSocio: [],
        arregloProvinciasSocio: [],
        arregloDistritosSocio: [],
        datosSocio: {
            codSocio: '',
            dni: '',
            apePaterno: '',
            apeMaterno: '',
            nombre: '',
            fecNacimiento: '',
            telefono: '',
            departamento: null,
            provincia: null,
            distrito: null,
            domicilio: '',
            activo: '',
        },
		datosGarante1: {
            codGarante: '',
			apePaterno: '',
			apeMaterno: '',
			nombre: '',
            fecNacimiento: '',
			dni: '',
			telefono: '',
            departamento: null,
            provincia: null,
            distrito: null,
			domicilio: '',
		},
		datosGarante2: {
            codGarante: '',
			apePaterno: '',
			apeMaterno: '',
			nombre: '',
            fecNacimiento: '',
			dni: '',
			telefono: '',
            departamento: null,
            provincia: null,
            distrito: null,
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
    mounted() {
        this.FechasParaDatePicker()
        this.CargarDepartamentosSocio()
        this.CargarDepartamentosGarante1()
        this.CargarDepartamentosGarante2()
    },
	methods: {
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
        CargarDepartamentosGarante1()
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
                        this.arregloDepartamentosGarante1 = departamentos
                    }
                    else
                    {
                        console.error("No se pudo cargar los departamentos.")
                    }
                })
                .catch(() => 
                {
                    console.error("No se pudo cargar los departamentos.")
                })
        },
        CargarProvinciasGarante1()
        {
            axios.get('/api/obtener-provincias/' + this.datosGarante1.departamento)
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
                        this.arregloProvinciasGarante1 = array
                    }
                    else
                    {
                        console.error("No se pudo cargar las provincias.")
                    }
                })
                .catch(() => 
                {
                    console.error("No se pudo cargar las provincias.")
                })
        },
        CargarDistritosGarante1()
        {
            axios.get('/api/obtener-distritos/'+this.datosGarante1.provincia)
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
                        this.arregloDistritosGarante1 = array
                    }
                    else
                    {
                        console.error("No se pudo cargar los distritos.")
                    }
                })
                .catch(() => 
                {
                    console.error("No se pudo cargar los distritos.")
                })
        },
        CargarDepartamentosGarante2()
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
                        this.arregloDepartamentosGarante2 = departamentos
                    }
                    else
                    {
                        console.error("No se pudo cargar los departamentos.")
                    }
                })
                .catch(() => 
                {
                    console.error("No se pudo cargar los departamentos.")
                })
        },
        CargarProvinciasGarante2()
        {
            axios.get('/api/obtener-provincias/' + this.datosGarante2.departamento)
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
                        this.arregloProvinciasGarante2 = array
                    }
                    else
                    {
                        console.error("No se pudo cargar las provincias.")
                    }
                })
                .catch(() => 
                {
                    console.error("No se pudo cargar las provincias.")
                })
        },
        CargarDistritosGarante2()
        {
            axios.get('/api/obtener-distritos/'+this.datosGarante2.provincia)
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
                        this.arregloDistritosGarante2 = array
                    }
                    else
                    {
                        console.error("No se pudo cargar los distritos.")
                    }
                })
                .catch(() => 
                {
                    console.error("No se pudo cargar los distritos.")
                })
        },
        CargarDepartamentosSocio()
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
                        this.arregloDepartamentosSocio = departamentos
                    }
                    else
                    {
                        console.error("No se pudo cargar los departamentos.")
                    }
                })
                .catch(() => 
                {
                    console.error("No se pudo cargar los departamentos.")
                })
        },
        CargarProvinciasSocio()
        {
            axios.get('/api/obtener-provincias/' + this.datosSocio.departamento)
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
                        this.arregloProvinciasSocio = array
                    }
                    else
                    {
                        console.error("No se pudo cargar las provincias.")
                    }
                })
                .catch(() => 
                {
                    console.error("No se pudo cargar las provincias.")
                })
        },
        CargarDistritosSocio()
        {
            axios.get('/api/obtener-distritos/'+this.datosSocio.provincia)
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
                        this.arregloDistritosSocio = array
                    }
                    else
                    {
                        console.error("No se pudo cargar los distritos.")
                    }
                })
                .catch(() => 
                {
                    console.error("No se pudo cargar los distritos.")
                })
        },
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
            this.datosSocio.departamento = data.codDepartamento
            this.datosSocio.provincia = data.codProvincia
            this.datosSocio.distrito = data.codDistrito
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
                                this.datosSocio.departamento = null
                                this.datosSocio.provincia = null
                                this.datosSocio.distrito = null
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
            this.$v.datosGarante1.dni.$touch();

            if(!this.$v.datosGarante1.dni.$error)
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
                                this.AgregarDatosGarante1(data)
                            }
                            else
                            {
                                // if(data.error == true)
                                // {
                                    this.MensajeDeAviso(data.mensaje)
                                // }
                                this.LimpiarDatosGarante1()
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
            }
        },
        AgregarDatosGarante1(data)
        {
            this.datosGarante1.codGarante = data.codSocio
            this.datosGarante1.apePaterno = data.apePaterno
            this.datosGarante1.apeMaterno = data.apeMaterno
            this.datosGarante1.nombre = data.nombre
            this.datosGarante1.fecNacimiento = data.fecNacimiento
            this.datosGarante1.telefono = data.telefono
            this.datosGarante1.departamento = data.codDepartamento
            this.datosGarante1.provincia = data.codProvincia
            this.datosGarante1.distrito = data.codDistrito
            this.datosGarante1.domicilio = data.domicilio
            this.garante1Encontrado = true
        },
        LimpiarDatosGarante1()
        {
            this.datosGarante1.codGarante = ""
            this.datosGarante1.apePaterno = ""
            this.datosGarante1.apeMaterno = ""
            this.datosGarante1.fecNacimiento = ""
            this.datosGarante1.nombre = ""
            this.datosGarante1.telefono = ""
            this.datosGarante1.departamento = null
            this.datosGarante1.provincia = null
            this.datosGarante1.distrito = null
            this.datosGarante1.domicilio = ""
            this.garante1Encontrado = false
        },
        VerificarDniGarante2()
        {
            this.$v.datosGarante2.dni.$touch();

            if(!this.$v.datosGarante2.dni.$error)
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
                                    this.AgregarDatosGarante2(data)
                                }
                                else
                                {
                                    // if(data.error == true)
                                    // {
                                        this.MensajeDeAviso(data.mensaje)
                                    // }
                                    this.LimpiarDatosGarante2()
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
                    this.MensajeDeError("El garante ya ha sido ingresado para esta solicitud.")
                }
            }
        },
        AgregarDatosGarante2(data)
        {
            this.datosGarante2.codGarante = data.codSocio
            this.datosGarante2.apePaterno = data.apePaterno
            this.datosGarante2.apeMaterno = data.apeMaterno
            this.datosGarante2.nombre = data.nombre
            this.datosGarante2.fecNacimiento = data.fecNacimiento
            this.datosGarante2.telefono = data.telefono
            this.datosGarante2.departamento = data.codDepartamento
            this.datosGarante2.provincia = data.codProvincia
            this.datosGarante2.distrito = data.codDistrito
            this.datosGarante2.domicilio = data.domicilio
            this.garante2Encontrado = true
        },
        LimpiarDatosGarante2()
        {
            this.datosGarante2.codGarante = ""
            this.datosGarante2.apePaterno = ""
            this.datosGarante2.apeMaterno = ""
            this.datosGarante2.nombre = ""
            this.datosGarante2.fecNacimiento = ""
            this.datosGarante2.telefono = ""
            this.datosGarante2.departamento = null
            this.datosGarante2.provincia = null
            this.datosGarante2.distrito = null
            this.datosGarante2.domicilio = ""
            this.garante2Encontrado = false
        },
		ValidarDatosGarante1()
        {
			this.$v.datosGarante1.$touch();

			if(!this.$v.datosGarante1.$anyError)
            { 
                if(this.datosGarante1.codGarante == "")
                {
                    this.efectoCargandoFormulario = true

                    axios.get('/api/validar-telefono/'+this.datosGarante1.telefono)
                        .then((respuesta) => 
                        {
                            let data = respuesta.data

                            if(respuesta.status == 200 && data == 0)
                            {
                                this.ActivarFormularioGarante2()
                                this.OcultarFormularioGarante1()
                            }
                            else
                            {
                                this.MensajeDeAviso("El Teléfono ya se encuentra registrado.")
                                this.datosGarante1.telefono = ""
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
                    this.ActivarFormularioGarante2()
                    this.OcultarFormularioGarante1()
                }
			}
		},
		ValidarDatosGarante2()
        {
			this.$v.datosGarante2.$touch();

			if(!this.$v.datosGarante2.$anyError)
            { 
                if(this.datosGarante2.codGarante == "")
                {
                    if(this.datosGarante1.telefono != this.datosGarante2.telefono)
                    {
                        this.efectoCargandoFormulario = true

                        axios.get('/api/validar-telefono/'+this.datosGarante2.telefono)
                            .then((respuesta) => 
                            {
                                let data = respuesta.data

                                if(respuesta.status == 200 && data == 0)
                                {
                                    this.ActivarFormularioSolicitud()
                                    this.OcultarFormularioGarante2()
                                }
                                else
                                {
                                    this.MensajeDeAviso("El Teléfono ya se encuentra registrado.")
                                    this.datosGarante2.telefono = ""
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
                        this.datosGarante2.telefono = ""
                        this.MensajeDeError("El teléfono ya ha sido ingresado en el primer garante.")
                    }
                }
                else
                {
                    this.ActivarFormularioSolicitud()
                    this.OcultarFormularioGarante2()
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
                this.datosSolicitud.codUsuario = this.usuario.codUsuario

                let datos = {
                    socio: this.datosSocio,
                    garante1: this.datosGarante1,
                    garante2: this.datosGarante2,
                    solicitud: this.datosSolicitud,
                }
                
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
            this.garante1Encontrado = false
            this.garante2Encontrado = false

            this.datosSocio = {
                codSocio: '',
                dni: '',
                apePaterno: '',
                apeMaterno: '',
                nombre: '',
                fecNacimiento: '',
                telefono: '',
                departamento: null,
                provincia: null,
                distrito: null,
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
                departamento: null,
                provincia: null,
                distrito: null,
                domicilio: '',
            }
            this.datosGarante2 = {
                codGarante: '',
                apePaterno: '',
                apeMaterno: '',
                nombre: '',
                dni: '',
                telefono: '',
                departamento: null,
                provincia: null,
                distrito: null,
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
			fecNacimiento: {
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
			fecNacimiento: {
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
    .contenedor-buscar{
        width: 50% !important;
        min-width: 450px !important;
    }
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