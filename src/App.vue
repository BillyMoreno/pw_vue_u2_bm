<template>
  <div>
    <!--<ContadorView/>-->
    <!--<DirectivasView/>-->
    <PreguntaView/>
  </div>
</template>

<script>
import ContadorView from './views/ContadorView.vue';
import DirectivasView from './views/DirectivasView.vue';
import PreguntaView from './views/PreguntaView.vue';

export default {
  name: 'App',
  components: {
    ContadorView,
    DirectivasView,
    PreguntaView,
  }
}
</script>

<style>

</style>
