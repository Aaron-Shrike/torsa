<template>
<div class="contenedor">
    <div class="contenido lista">
        <div class="card">
            <h1 class="card-title titulo">SOLICITUDES DE HOY DIA</h1>

            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                        <thead class="thead-dark">
                            <tr>
                                <th>N°</th>
                                <th>Socio</th>
                                <th>Monto</th>
                                <th>Motivo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(solicitud,index) in solicitudes" :key="index">
                                <td>{{index+1}}</td>
                                <td>{{solicitud.apePaterno}} {{solicitud.apeMaterno}}, {{solicitud.nombre}}</td>
                                <td>{{solicitud.monto}}</td>
                                <td>{{solicitud.motivo}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="mensaje-error" v-if="!haySolicitudes">* No hay Solicitudes Registradas el día de hoy *</p>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from "axios";
import { mapState } from 'vuex';

export default {
    data() {
        return{
            solicitudes: [],
            haySolicitudes: false
        }
    },
    computed: {
        ...mapState('iniciarSesion', ['usuario'])
    },
    created() {
        axios.get("/api/listarSolicitudesDia/"+this.usuario.codUsuario)
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