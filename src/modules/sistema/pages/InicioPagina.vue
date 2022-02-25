<template>
    <div>
        <b-container>
            <h1>Bienvenido al Sistema</h1>
            <p>{{usuario.nombre}} {{usuario.apePaterno}} {{usuario.apeMaterno}} - DNI: {{usuario.dni}}</p>
        </b-container>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data: () =>  ({
		
	}),
    computed:{
        ...mapState('iniciarSesion', ['usuario']),
    },
}
</script>
<style>
    
</style>