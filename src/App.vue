<template>
  <div>
    <!--<ContadorView/>-->
    <DirectivasView/>
  </div>
</template>

<script>
import ContadorView from './views/ContadorView.vue';
import DirectivasView from './views/DirectivasView.vue';


export default {
  name: 'App',
  components: {
    ContadorView,
    DirectivasView,
  }
}
</script>

<style>

</style>
