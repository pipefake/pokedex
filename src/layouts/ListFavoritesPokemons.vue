<template>
  <v-layout>
    <v-container max-width="800px">
      <v-flex class="ma-8">
        <v-text-field
          :loading="loading"
          append-inner-icon="mdi-magnify"
          density="compact"
          v-model="search"
          label="Search"
          variant="solo"
          hide-details
          single-line
        ></v-text-field>
      </v-flex>

      <v-row>
        <v-col
          v-for="pokemon in filteredPokemones"
          :key="pokemon.id_pokemon"
          cols="12"
        >
          <DetallePokemon :pokemon="pokemon" />
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
  
  <script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import DetallePokemon from "../components/DetallePokemon.vue";

export default {
  data() {
    return {
      search: "",
      estadoCarga: false,
      pokemones: [],
    };
  },
  components: {
    DetallePokemon,
  },
  computed: {
    ...mapState(["favorites"]),

    filteredPokemones() {
      if (!this.search) return this.favorites;
      return this.favorites.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },

  methods: {
    ...mapActions(["agregarPokemonFavorito"]),

    añadirFavorito(pokemon) {
      this.agregarPokemonFavorito(pokemon);
    },

    isFavorito(pokemonName) {
      return this.favorites.some((fav) => fav.name === pokemonName);
    },

    cargarDatosPokemones() {
      this.estadoCarga = true;
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=5")
        .then((response) => {
          this.pokemones = response.data.results;
          console.log(response.data.results);
        })
        .catch((error) => console.error("Error cargando Pokemones:", error))
        .finally(() => (this.estadoCarga = false));
    },
  },

  mounted() {
    this.cargarDatosPokemones();
  },
};
</script>
  
  <style scoped>
.v-card {
  transition: 0.3s ease-in-out;
}
.v-card:hover {
  transform: scale(1.01);
}
</style>