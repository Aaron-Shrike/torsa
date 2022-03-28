<template>
<div class="contenedor">
    <div class="contenido lista">
        <div class="card">
            <h1 class="card-title titulo">SOLICITUDES PENDIENTES DE VERIFICACIÓN CREDITICIA</h1>

            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                        <thead class="thead-dark">
                            <tr>
                                <th>N°</th>
                                <th>DNI</th>
                                <th>Socio</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(solicitud,index) in solicitudes" :key="index">
                                <td>{{index+1}}</td>
                                <td>{{solicitud.dni}}</td>
                                <td>{{solicitud.apePaterno}} {{solicitud.apeMaterno}}, {{solicitud.nombre}}</td>
                                <td>{{solicitud.fecha}}</td>
                                <td>
                                    <b-button 
										block 
										class="boton-principal"
                                        :to="{name: 'SolicitudPVC', params: {codigo: solicitud.codSolicitud}}"
									>
										Ver Detalle
									</b-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="mensaje-error" v-if="!haySolicitudes">* No hay solicitudes pendientes de verificación crediticia *</p>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from "axios";

export default {
    data() {
        return{
            solicitudes: [
                // {
                //     codSolicitud: '123',
                //     dni: '12345678',
                //     nombre: 'prueba',
                //     apePaterno: 'ape',
                //     apeMaterno: 'ape',
                //     formatoFecha: '10/12/2022',
                // }
            ],
            haySolicitudes: false
        }
    },
    created() {
        axios.post("/api/solicitud-pendiente-verificacion-crediticia")
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
.mensaje-error{
    color: var(--color-error);
}
.lista{
    width: 70%;
}
</style>