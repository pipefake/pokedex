<template>
  <v-container max-width="800px">
    <!-- Search Component -->
    <Buscador @buscador="actualizarSearch" />

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
        <DetallePokemon :pokemon_name="pokemon.name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import api from "@/utils/AxiosInstance.js";
import Buscador from "../components/Buscador.vue";
import DetallePokemon from "../components/DetallePokemon.vue";
import EmptyList from "../components/EmptyList.vue";

export default {
  name: "AllPokemonsComponent",
  components: {
    Buscador,
    DetallePokemon,
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
    ...mapState(["favorites"]),
    filteredPokemones() {
      if (!this.search) return this.pokemones; // No search, return all pokemons
      return this.pokemones.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(this.search.toLowerCase()) // Filter by name
      );
    },
  },

  methods: {
    actualizarSearch(value) {
      this.search = value; // Update search term
    },

    async cargarDatosPokemones() {
      this.estadoCarga = true; // Set loading state to true
      try {
        const response = await api.get("/api/v2/pokemon?limit=10"); // Fetch Pokémon data
        this.pokemones = response.data.results; // Set pokemons
        this.estadoCarga = false; // Set loading state to false
      } catch (error) {
        console.error("Error cargando Pokemones:", error);
        this.estadoCarga = false; // In case of error, stop loading
      }
    },
  },

  mounted() {
    this.cargarDatosPokemones(); // Load Pokémon data when component is mounted
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
