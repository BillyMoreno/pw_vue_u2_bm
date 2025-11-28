<template>
    <div>
        <label for="id_nombre">Nombre</label>
        <input v-model="nombre" id="id_nombre" type="text" />
        <p>{{ nombre }}</p>

        <label for="id_apellido">Apellido</label>
        <input v-model="apellido" type="text" id="id_apellido">

        <button v-on:click="imprimirNombre()">Imprimir Nombre</button>
        <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>

        <h1>{{ arreglo[0] }}</h1>
        <ul>
            <li v-show="nombre !== null" v-for="{ nombre, apellido } in arreglo" :key="nombre">
                {{ nombre }} - {{ apellido }}
            </li>
        </ul>

        <h2>Tabla</h2>
        <table border="2">
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
            </tr>
            <tr v-for="estudiante in arreglo"
            :key="estudiante">
                <td>{{ estudiante.nombre }}</td>
                <td>{{ estudiante.apellido }}</td>
            </tr>
        </table>

    </div>
</template>


<script>
export default {
    data() {
        return {
            nombre: "null",
            apellido: "null",
            arreglo: [],
        };
    },
    methods: {
        imprimirNombre() {
            console.log(this.nombre);
        },
        agregarEstudiante() {
            const estu = {
                nombre: this.nombre,
                apellido: this.apellido
            }
            console.log("Estudiante agregado: ", estu)
            this.arreglo.push(estu);
        },
        limpiarFormulario() {
            this.nombre = null;
            this.apellido = null;
        },
    }
};
</script>

<style></style>