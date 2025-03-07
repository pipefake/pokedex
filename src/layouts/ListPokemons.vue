<template>
  <v-container max-width="800px">
    <Buscador @buscador="actualizarSearch" />

    <v-row>
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
import DetallePokemon from "../components/DetallePokemon";

export default {
  name: "AllPokemonsComponent",
  components: {
    Buscador,
    DetallePokemon,
  },
  data() {
    return {
      search: "",
      estadoCarga: false,
      pokemones: [],
      loading: true,
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
    actualizarSearch(value) {
      console.log(value);
      this.search = value;
    },

    async cargarDatosPokemones() {
      this.estadoCarga = true;
      try {
        const response = await api.get("/api/v2/pokemon?limit=10");
        this.pokemones = response.data.results;
        console.log(response.data.results);
        this.estadoCarga = false;
      } catch (error) {
        console.error("Error cargando Pokemones:", error);
        this.estadoCarga = false;
      }
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
