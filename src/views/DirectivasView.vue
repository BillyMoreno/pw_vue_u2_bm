<template>
  <div class="view-container">
    <h2>Directivas vista</h2>
    <Directivas />
  </div>
</template>

<script>
import Directivas from '../components/Directivas.vue';

export default {
  name: 'DirectivasView',
  components: {
    Directivas
  }
}</script>

<style scoped>
  .view-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: xxx-large;
    color: #1f970a;
  }
</style>