<template>
    <div class="seccion-solicitudes-pvd">
        <b-container>
            <b-row>
                <b-col>
                    <b-card
                        tag="div"
                        class="card-formulario card-ancho">
                        <b-card-text>
                            <h1 class="text-center titulo my-3">
                                SOLICITUDES PENDIENTES DE VERIFICACIÓN DE DATOS</h1>
                            <div class="table-responsive">
                                <table class="table table-hover table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>N°</th>
                                            <th>Código</th>
                                            <th>DNI</th>
                                            <th>Socio</th>
                                            <th>Fecha</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(solicitud,index) in solicitudes" :key="index">
                                            <td>{{index+1}}</td>
                                            <td>{{solicitud.codSolicitud}}</td>
                                            <td>{{solicitud.dni}}</td>
                                            <td>{{solicitud.apePaterno}} {{solicitud.apeMaterno}}, {{solicitud.nombre}}</td>
                                            <td>{{solicitud.formatoFecha}}</td>
                                            <td>
                                                <b-button 
                                                    block 
                                                    class="boton-principal"
                                                    :to="{name: 'SolicitudPVD', params: {codigo: solicitud.codSolicitud}}">
                                                    Ver Detalle
                                                </b-button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="mensaje-error text-center" v-if="!haySolicitudes">* No hay solicitudes pendientes de verificación de datos *</p>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return{
            solicitudes: [
                /*
                {
                    codSolicitud: '123',
                    dni: '12345678',
                    nombre: 'prueba',
                    apePaterno: 'ape',
                    apeMaterno: 'ape',
                    formatoFecha: '10/12/2022',
                },
                */
            ],
            haySolicitudes: false,
        }
    },
    created() {
        axios.post("/api/solicitud-pendiente-verificacion-datos")
            .then((response) => 
            {
                let data = response.data;
                if (response.status === 200) 
                {
                    if(data.length > 0)
                    {
                        this.haySolicitudes = true

                        for (var i = 0; i < data.length; i++) 
                        {
                            this.solicitudes.push(data[i]);
                        }
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
}

</script>

<style>
    .seccion-solicitudes-pvd{
        padding: 30px 0;
    }
</style>