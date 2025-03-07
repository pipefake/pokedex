<template>
  <!-- List view -->
  <v-layout class="pa-5">
    <ListPokemons :tipo_lista="this.mostrarlista" />
    <BottomNavigation @switch="switchList" />
  </v-layout>
</template>

<script>
//Components
import BottomNavigation from "../components/BottomNavigation.vue";
import ListPokemons from "../layouts/PokemonsList.vue";

export default {
  name: "ListComponent",
  data() {
    return {
      mostrarlista: 1, // show all pokemons first
    };
  },
  components: {
    BottomNavigation,
    ListPokemons,
  },
  methods: {
    //change list (all=1 - favorites =2)
    switchList(id_seleccion) {
      this.mostrarlista = id_seleccion;
    },
  },
};
</script>

<style scoped>
</style>