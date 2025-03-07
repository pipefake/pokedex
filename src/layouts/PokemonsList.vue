<template>
  <!-- ListAll Layout -->
  <v-container max-width="800px">
    <!-- Search Component -->
    <SearchComponente @search="updateSearch" />

    <!-- Empty List State -->
    <v-row v-if="!estadoCarga && filteredPokemones.length === 0">
      <EmptyList />
    </v-row>

    <!-- Displaying Pokemons -->
    <v-row v-if="!estadoCarga && filteredPokemones.length > 0">
      <v-col
        v-for="pokemon in filteredPokemones"
        :key="pokemon.id_pokemon"
        cols="12"
      >
        <PokemoDetails :pokemon_name="pokemon.name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import api from "@/utils/AxiosInstance.js";

//Components
import SearchComponente from "../components/SearchComponente.vue";
import PokemoDetails from "../components/DetailPokemon.vue";
import EmptyList from "../components/EmptyList.vue";

export default {
  name: "AllPokemonsComponent",
  props: {
    tipo_lista: {
      type: Number,
      required: true,
    },
  },
  components: {
    SearchComponente,
    PokemoDetails,
    EmptyList,
  },
  data() {
    return {
      search: "", // Search input
      estadoCarga: false, // Loading state
      pokemones: [], // Pokemon data
    };
  },

  computed: {
    //State Favorites
    ...mapState(["favorites"]),

    //Filters
    filteredPokemones() {
      let filtered = this.pokemones;

      // If tipo_lista is 2, filter the pokemones based on favorites
      if (this.tipo_lista === 2) {
        filtered = filtered.filter((pokemon) =>
          this.favorites.includes(pokemon.name)
        );
      }

      // Apply the search filter
      if (this.search) {
        filtered = filtered.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      return filtered;
    },
  },

  methods: {
    updateSearch(value) {
      this.search = value; // Update search term
    },

    async cargarDatosPokemones() {
      this.estadoCarga = true; // Set loading state to true
      try {
        const response = await api.get("/api/v2/pokemon?limit=10"); // Fetch Pokémon data
        this.pokemones = response.data.results; // Set pokemons with api response
        this.estadoCarga = false; // Set loading state to false
      } catch (error) {
        console.error("Error cargando Pokemones:", error);
        this.estadoCarga = false; // In case of error, stop loading
      }
    },
  },

  mounted() {
    this.cargarDatosPokemones(); // Load Pokemon data when component is mounted
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
