<template>

    <div class="pokemon-container">
        <img :src="srcImagen"
            alt="No se puede renderizar">
    </div>

</template>

<script>
import { computed } from 'vue'

export default {

    props: {
        pokemonId: {
            type: Number, 
            requierd: true,
        }
    
    },
    computed: {
        srcImagen(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    }

}

</script>

<style>
    
img {
    height: 200px;
}

.pokemon-container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

</style>