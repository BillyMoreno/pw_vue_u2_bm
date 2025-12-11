<template>
  <div>
    <Contador title="Contador 1" v-bind:inicio="1+0" :mostrar="true"/>
    <Contador title="Contador 2" inicio="200" :mostrar="false"/>
  </div>
</template>

<script>
import Contador from '../components/Contador.vue';

export default {
  name: 'ContadorView',
  components: {
    Contador
  }
}
</script>

<style></style>