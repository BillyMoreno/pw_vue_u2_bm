<template>
  <div>
    <!--<ContadorView/>-->
    <!--<DirectivasView/>-->
    <PreguntaView/>
  </div>
</template>

<script>
import ContadorView from './view/ContadorView.vue';
import DirectivasView from './view/DirectivasView.vue';
import PreguntaView from './view/PreguntaView.vue';

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
