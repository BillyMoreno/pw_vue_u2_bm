<template>

    <div>
        <img v-if="imagen" :src="imagen" alt="No se puede cargar">
        <div class="oscuro">

        </div>

        <div class="pregunta-container">
            <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
            <p>Recuerda terminar con el signo de interrogacion (?)</p>
            <h2>{{ pregunta }}</h2>
            <h1>{{ respuesta }}</h1>

        </div>

    </div>

</template>

<script>

import { consumirApiFacade } from '../clients/YesNoClient.js'

export default {
    data() {
        return {
            pregunta: null,
            respuesta: null,
            imagen: null,
        };
    },
    /* Cuando la propiedad reactiva cambie guarda el nuevo por el viejo y asi sucesivamente */
    watch: {
        pregunta(value) {

            if (value.includes('?')) {
                //Llamar al api
                this.respuesta = 'Pensando...'
                this.consumir();
            }

        },
    },
    methods: {
        async consumir() {
            const resp = await consumirApiFacade();
            console.log('Respuesta Final');
            this.imagen = resp.image;
            console.log(resp);
            console.log(resp.answer);
            this.respuesta = resp.answer;
        }
    }
};

</script>

<style>
img,
.oscuro {
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;

}

.oscuro {
    background-color: rgba(0, 0, 0, 0.4);
}

.pregunta-container {
    position: relative;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* centra verticalmente el contenido */
    height: 100vh;
    /* reemplaza el margin-top */
}

input {
    width: 200px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus {
    outline: none;

}

p {
    font-size: 20px;
}

h2 {
    margin-top: 150px;
}
</style>
