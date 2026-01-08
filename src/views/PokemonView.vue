<template>

    <PokemonImage :pokemon-id="25"/>
    <PokemonOpciones />

</template>

<script>

import PokemonImage from '../components/PokemonImage.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';

export default {
    components: {
        PokemonImage,
        PokemonOpciones,
    }


}

</script>

<style></style>