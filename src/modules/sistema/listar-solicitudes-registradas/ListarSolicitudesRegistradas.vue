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
                            <th>DNI</th>
                            <th>Apellidos</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="solicitud in solicitudes" :key="solicitud.id">
                            <td>{{solicitud.dni}}</td>
                            <td>{{solicitud.apellidos}}</td>
                            <td>{{solicitud.nombre}}</td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return{
            date: '',
            solicitudes: [
                { dni: '12345678', apellidos: 'Rojas Rojas', nombre: 'Frank'},
                { dni: '98765432', apellidos: 'Lopez Lopez', nombre: 'Victor'},
                { dni: '63524141', apellidos: 'Rios Cubas', nombre: 'Lisa'},
            ]
        }
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