<template>
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
        <v-card
          @click="dialog = true"
          class="d-flex align-center pa-3"
          style="height: 60px"
        >
          <v-row>
            <v-col cols="9">
              <span>{{ pokemon.name }}</span>
            </v-col>
            <v-col cols="3" class="d-flex justify-end">
              <v-btn
                class="pa-0"
                rounded
                elevation-0
                color="#F5F5F5"
                @click="añadirFavorito(pokemon)"
              >
                <v-icon
                  v-if="favorites.some((fav) => fav.name === pokemon.name)"
                  color="#ECA539"
                  size="25"
                  >mdi-star</v-icon
                >
                <v-icon size="25" v-else>mdi-star-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      search: "",
      estadoCarga: false,
      pokemones: [],
    };
  },

  computed: {
    ...mapState(["favorites"]),

    filteredPokemones() {
      if (!this.search) return this.pokemones;
      return this.pokemones.filter((pokemon) =>
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
        .get("https://pokeapi.co/api/v2/pokemon?limit=15")
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