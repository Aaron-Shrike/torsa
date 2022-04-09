<template>
<div class="contenedor">
    <div class="contenido listaAnular">
        <div class="card">
            <h1 class="card-title titulo">ANULAR SOLICITUD DE CRÉDITO</h1>

            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered tablaSolicitudes">
                    <thead class="thead-dark">
                        <tr>
                            <th>N°</th>
                            <th>Código</th>
                            <th>Dni</th>
                            <th>Socio</th>
                            <th>Teléfono</th>
                            <th>Monto</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(solicitud,index) in solicitudes" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{solicitud.codSolicitud}}</td>
                            <td>{{solicitud.dni}}</td>
                            <td>{{solicitud.apePaterno}} {{solicitud.apeMaterno}}, {{solicitud.nombre}}</td>
                            <td>{{solicitud.telefono}}</td>
                            <td class="monto">{{'S/. '+solicitud.monto}}</td>
                            <td><button type="button" @click="anular(solicitud.dni,index)" class="btn btn-danger btn-anular">Anular</button></td>
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
            haySolicitudes: false,
        }
    },
    computed: {
        ...mapState('iniciarSesion', ['usuario'])
    },
    mounted() {
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
    methods: {
        anular(dni,index)
        {
            const botones = document.querySelectorAll(".btn-anular");
            var codigo = this.solicitudes[index].codSolicitud;
            this.$swal.fire(
                {
                    title: '¿Está seguro que desea anular la solicitud de crédito con código '+codigo+'?',
                    text: 'Ingrese el Motivo:',
                    //icon: 'info',
                    input: 'textarea',
                    inputPlaceholder: 'Motivo',
                    showCancelButton: true,
                    confirmButtonText: 'SI',
                    cancelButtonText: 'NO',
                    customClass: "swalConfirmacion",
                    inputValidator: texto =>
                    {
                        // Si el valor es válido, debes regresar undefined. Si no, una cadena
                        if (!texto)
                        {
                            return "Debe ingresar el Motivo";
                        }
                        else
                        {
                            return undefined;
                        }
                    }
                }
            )
            .then((result) => 
            {
                if (result.isConfirmed)         //Anular
                {
                    botones[index].classList.add('ocultar');   //Ocultar el botón
                    // var codigo = this.solicitudes[index].codSolicitud;
                    let motivo=result.value; //Motivo
                    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
                    axios.post("/api/anularSolicitudPVC/"+codigo)
                        .then((response) =>
                        {
                          if (response.status === 200)
                          {
                            console.log(motivo);
                            this.$swal("La solicitud fue anulada","","success");
                          }
                          else
                          {
                            this.$swal("La solicitud no fue anulada","","error");
                          }
                        })
                        .catch(() =>
                        {
                          this.$swal("Hubo un error al solicitar la petición en el servidor","","error");
                        });
                }
            })
        },

    },
}

</script>

<style>
 .mensaje-error{
    color: var(--color-error);
}
.listaAnular{
    width: 80%;
}
.swalConfirmacion{
    width: 470px !important;
    padding: 10px 0px !important;
    border-top: 16px solid var(--color-informacion) !important;
}
.swalConfirmacion .swal2-confirm, .swalConfirmacion .swal2-cancel{
    width: 80px !important;
    height: 45px !important;
    min-height: 40px !important;
    font-size: 1em !important;
    border: 0 !important;
    border-radius: 0.25em !important;
}
.swalConfirmacion .swal2-confirm{
    background: var(--color-si) !important;
} 
.swalConfirmacion .swal2-cancel{
    background: var(--color-no) !important;
}
.swalConfirmacion .swal2-textarea{
    font-family: var(--fuente-secundaria) !important;
    color: var(--color-subtitulo) !important;
}
.ocultar{
    visibility: hidden;
}
.monto{
    min-width: 135px;
    text-align: right !important;
}
.tablaSolicitudes{
    text-align: center;
}
.tablaSolicitudes td:nth-child(4){
    text-align: left !important;
    min-width: 200px;
}

</style>