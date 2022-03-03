<template>
<div class="contenedor">
    <div class="contenido">
        <div class="card">
            <h1 class="card-title titulo">Solicitudes Registradas</h1>

            <div class="card-body">
                <h3 class="card-title subTitle" v-show="date">Hoy día: {{ date }} </h3>
                
                <table class="table table-hover table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>Nombre Socio</th>
                            <th>Monto</th>
                            <th>Motivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="solicitud in solicitudes" :key="solicitud.id">
                            <td>{{solicitud.apePaterno}} {{solicitud.apeMaterno}}, {{solicitud.nombre}}</td>
                            <td>{{solicitud.monto}}</td>
                            <td>{{solicitud.motivo}}</td>
                        </tr>
                    </tbody>
                </table>
            
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
            date: '',
            solicitudes: []
        }
    },
    computed: {
        ...mapState('iniciarSesion', ['usuario'])
    },
    created() {
<<<<<<< HEAD
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8000";
        axios
            .get("/api/listarSolicitudesDia/solicitud")
=======
        axios.get("/api/listarSolicitudesDia/"+this.usuario.codUsuario)
>>>>>>> 9529a684fb0ec488ffda55d9ce2b9f5fa8aa9466
            .then((response) => {
                let data = response.data;
                if (response.status === 200) {
                    for (var i = 0; i < data.length; i++) {
                        this.solicitudes.push(data[i]);
                    }
                } else {
                    console.log("error interno");
                }
        })
        .catch(() => {
            console.log("error al conectar con el servidor");
        });
    },
    methods: {
        printDate: function () {
            return new Date().toLocaleDateString();
        },
    },
    mounted: function () {
        this.date = this.printDate();
    },
}

</script>