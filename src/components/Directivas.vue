<template>
    <div>
        <!-- Directiva v-model es una propiedad reactiva que enlaza el valor del input con la data "nombre" -->
        <p v-if="nombre.length > 0">Hola {{ nombre }}, bienvenido a Vue.js</p>
        <label for="id_nombre">Nombre</label>
        <input id="id_nombre" type="text" v-model="nombre" />      
        <label for="id_apellido">Apellido</label>
        <input id="id_apellido" type="text" v-model="apellido" /><br>
        <button @click="imprimirNombre">Imprimir Nombre</button>
        <button @click="agregarEstudiante">Agregar Estudiante</button>

        <hr>
        <label for="id_nombre">Nombre</label>
        <input id="id_nombre1" type="text">
        <label for="id_apellido">Apellido</label>
        <input v-on:keypress.enter="agregarEstudiante1" id="id_apellido1" type="text">
        <hr>

        <ul>
            <li v-for="(estudiante, index) in arreglo" :key="index">
                {{ estudiante.nombre }} {{ estudiante.apellido }}
            </li>
        </ul>

        <h3>{{ arreglo.length }}</h3>
        
        <h2>Tabla de los estudiantes</h2>
        <table border="2" cellpadding="5" cellspacing="0">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(estudiante, index) in arreglo" :key="index">
                    <td>{{ estudiante.nombre }}</td>
                    <td>{{ estudiante.apellido }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Directivas',
    data() {
        return {
            nombre: '',
            apellido: '',
            arreglo: []
        }
    },
    methods: {
        imprimirNombre() {
            console.log(this.nombre);
        },

        agregarEstudiante() {
            const estudiante = {
                nombre: this.nombre,
                apellido: this.apellido
            }
            if (this.nombre.trim() === '' || this.apellido.trim() === '') {
                console.log("Nombre o apellido vacíos, no se agrega el estudiante.");
                return;
            }
            this.arreglo.push(estudiante);
            console.log("Estudiante agregado:", estudiante);
            this.limpiarFormulario(this.nombre, this.apellido);
            console.log(this.arreglo);
        },

        agregarEstudiante1(event) {
            if (event.key === 'Enter') {
                const nombreInput = document.getElementById('id_nombre1');
                const apellidoInput = document.getElementById('id_apellido1');
                const nombre = nombreInput.value.trim();
                const apellido = apellidoInput.value.trim();

                if (nombre === '' || apellido === '') {
                    console.log("Nombre o apellido vacíos, no se agrega el estudiante.");
                    return;
                }

                const estudiante = {
                    nombre: nombre,
                    apellido: apellido
                };

                this.arreglo.push(estudiante);
                console.log("Estudiante agregado:", estudiante);

                // Limpiar los campos de entrada
                this.limpiarFormulario(nombreInput, apellidoInput);
            }
        },

        limpiarFormulario(nombre, apellido) {
            this.nombre = '';
            this.apellido = '';
        }

    }
}
</script>

<style>
    
</style>