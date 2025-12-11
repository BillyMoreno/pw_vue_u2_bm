<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadrado() }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ calculaCuadrado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ calculaCuadrado }}</p> <!-- Repetido varias veces para observar el comportamiento de la propiedad computada -->
    <p>{{ numero }} <sup>3</sup> = {{ calculaCubo }}</p>
    <div>
      <button v-on:click="incrementar">+ 1</button>
      <button @:click="decrementar">- 1</button>
      <button v-show="mostrar">test</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  data() { // Agregado el bloque data, propiedades reactivas
    return {
      numero: this.inicio,
      titulo: 'Contador'
    }
  },

  methods: { // Agregado el bloque methods, otra opcion de option API 
    obtenerCuadrado() {
      console.log('Calculando el cuadrado de', this.numero);
      return this.numero * this.numero; // cuando usamos propiedad reactiva, usamos this.
    },
    obtenerCubo() {
      console.log('Calculando el cubo de', this.numero);
      return this.numero * this.numero * this.numero; // cuando usamos propiedad reactiva, usamos this.
    }, 
    incrementar() {
      console.log(this.title);
      this.numero++;
    },
    decrementar() {
      this.numero--;
    }
  },

  computed: { // Agregado el bloque computed
    calculaCuadrado() {
      console.log('entro a propiedad computada');
      return this.numero * this.numero; // cuando usamos propiedad reactiva, usamos this.
    },
    calculaCubo() {
      console.log('entro a propiedad computada del cubo');
      return this.numero * this.numero * this.numero; // cuando usamos propiedad reactiva, usamos this.
    }
  }, 
  //props: ['title', 'inicio', 'mostrar'] declaracion basica de props
  props: {
    title: {
      type: String,
      required: true
    },
    inicio: {
      type: Number,
      default: 99,
      validator: function(value) {
        return value >= 0 && value <= 100; // el valor debe ser mayor o igual a 0 y menor o igual a 1000
      }
    },
    mostrar: {
      type: Boolean,
      default: true
    }
    // otra forma de declarar props con validaciones
    // tipos de datos: String, Number, Boolean, Array, Object, Date, Function, Symbol, BigInt
  }
}
</script>

<style></style>