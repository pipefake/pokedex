<template>
  <!-- List view -->
  <v-layout class="pa-5">
    <ListPokemons :tipo_lista="this.mostrarlista" />
    <BottomNavigation @switch="switchList" />
  </v-layout>
</template>

<script>
import BottomNavigation from "../components/BottomNavigation.vue";
import ListPokemons from "../layouts/PokemonsList.vue";
// import ListFavoritesPokemons from "../layouts/ListFavoritesPokemons.vue";

export default {
  name: "ListComponent",
  data() {
    return {
      mostrarlista: 1, // Estado inicial
    };
  },
  components: {
    BottomNavigation,
    ListPokemons,
    // ListFavoritesPokemons,
  },
  methods: {
    switchList(id_seleccion) {
      this.mostrarlista = id_seleccion;
    },
  },
};
</script>

<style scoped>
</style>