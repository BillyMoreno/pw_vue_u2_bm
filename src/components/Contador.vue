<template>
  <div>
    <h1>{{ tit }}</h1>
    <p>{{ 1 + 1 }} <sup>2</sup> = {{ obtenerCuadrado() }} </p>
    <p>{{ numero }} <sup>2</sup> = {{ calculaCuadrado }} </p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCubo() }} </p>
    <p>{{ numero }} <sup>2</sup> = {{ calcularCubo }} </p>


    <div>
      <button @:click="incremetar()">+1</button>
      <button v-on:click="decrementar()">-1</button>
      <button v-show="mostrar">Prueba</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero: this.inicio,
      titulo: 'Contador',
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log('Entro a obtener cuadrado');
      return this.numero * this.numero;
    },
    obtenerCubo() {
      return this.numero * this.numero * this.numero;
    },
    incremetar(){
      console.log(this.tit);
      this.numero++;
    },
    decrementar(){
      console.log(this.tit)
      this.numero--;
    },
  },
  computed: {
    calculaCuadrado() {
      console.log('Entro a propiedad computada');
      return this.numero * this.numero;
    },
    calcularCubo() {
      console.log('Entro a propiedad computada');
      return this.numero * this.numero;
    },
  },
  //varibales q puede instanciar dsd el componente padre
  /*props: ["tit", "inicio", "mostrar"],*/
  props: {
    tit: String,
    inicio: {
      type: Number,
      default: 99,
      validator(value){
        return value > 10;
      }
    },
    mostrar: Boolean
  },
  /*String, Number, Boolean, Array, Object, Date, Function, BigInt*/
};
</script>

<style></style>