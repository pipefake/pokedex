<template>
  <v-btn
    class="pa-0"
    icon="$menu"
    elevation-0
    color="#F5F5F5"
    @click="añadirFavorito"
    >
    <v-icon v-if="isFavorite" color="#ECA539" size="27">mdi-star</v-icon>
    <v-icon size="27" v-else>mdi-star-outline</v-icon>
  </v-btn>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    pokemon_name: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["favorites"]),
    isFavorite() {
      return this.favorites.some((pokemon) => pokemon === this.pokemon_name);
    },
  },
  methods: {
    ...mapActions(["agregarPokemonFavorito", "eliminarPokemonFavorito"]),

    añadirFavorito() {
      const isFavorite = this.favorites.some(
        (pokemon) => pokemon === this.pokemon_name
      );

      if (!isFavorite) {
        this.agregarPokemonFavorito(this.pokemon_name);
      } else {
        console.log("Ya está!");
        this.eliminarPokemonFavorito(this.pokemon_name);
      }
    },
  },
};
</script>
