<template>
<div class="contenedor">
    <div class="contenido listaAnular">
        <div class="card">
            <h1 class="card-title titulo">ANULAR SOLICITUD DE CRÉDITO</h1>

            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>N°</th>
                            <th>Dni</th>
                            <th>Socio</th>
                            <th>Monto</th>
                            <th>Motivo</th>
                            <th>Teléfono</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(solicitud,index) in solicitudes" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{solicitud.dni}}</td>
                            <td>{{solicitud.apePaterno}} {{solicitud.apeMaterno}}, {{solicitud.nombre}}</td>
                            <td>{{solicitud.monto}}</td>
                            <td>{{solicitud.motivo}}</td>
                            <td>{{solicitud.telefono}}</td>
                            <td><button type="button" @click="anular(solicitud.dni,index)" class="btn btn-primary btn-anular">Anular</button></td>
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
    methods: {
        anular(dni,index)
        {
            const btns = document.querySelectorAll(".btn-anular");
            this.$swal.fire(
                {
                    title: '¿Está seguro que desea anular ésta solicitud de crédito?',
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonText: 'SI',
                    cancelButtonText: 'NO',
                    customClass: "swalConfirmacion",
                }
            )
            .then((result) => 
            {
                if (result.isConfirmed)         //Anular
                {
                    console.log('SI');
                    console.log('DNI: ' + dni); //DNI de la fila seleccionada

                    btns[index].classList.add('ocultar');   //Ocultar el botón
              } 
                else                            //No Anular
                {
                    console.log('NO');
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
    width: 85%;
}
.swalConfirmacion{
    width: 470px !important;
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
.ocultar{
    visibility: hidden;
}
@media only screen and (max-width: 1000px){ 
.listaAnular{
	width: 90% !important;
    }
}
</style>