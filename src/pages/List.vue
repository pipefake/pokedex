<template>
  <v-layout>
    <ListPokemons v-if="this.mostrarlista === 1" />

    <BottomNavigation @switch="switchList" />
  </v-layout>
</template>

<script>
import BottomNavigation from "../components/BottomNavigation.vue";
import ListPokemons from "../layouts/ListPokemons.vue";

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
