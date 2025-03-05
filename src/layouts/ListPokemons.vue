<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-card-text>
        <v-text-field
          :loading="loading"
          append-inner-icon="mdi-magnify"
          density="compact"
          v-model="search"
          label="Buscar Pokémones"
          variant="solo"
          hide-details
          single-line
        ></v-text-field>
      </v-card-text>
    </v-card>

    <v-row>
      <v-col
        v-for="pokemon in filteredPokemones"
        :key="pokemon.id_pokemon"
        cols="12"
      >
        <v-card class="d-flex align-center pa-3" style="height: 60px">
          <v-row>
            <v-col cols="9">
              <span>{{ pokemon.name }}</span>
            </v-col>
            <v-col cols="3">
              <v-btn @click="añadirFavorito(pokemon.id_pokemon)">
                <v-icon
                  v-if="favoritos.includes(pokemon.id_pokemon)"
                  color="yellow"
                  >mdi-star</v-icon
                >
                <v-icon v-else>mdi-star-outline</v-icon>
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

export default {
  data() {
    return {
      search: "",
      estadoCarga: false,
      favoritos: [],
      pokemones: [],
    };
  },
  methods: {
    añadirFavorito(id_pokemon) {
      const index = this.favoritos.indexOf(id_pokemon);
      if (index === -1) {
        this.favoritos.push(id_pokemon);
      } else {
        this.favoritos.splice(index, 1);
      }
    },
    cargarDatosPokemones() {
      this.estadoCarga = true;
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=5")
        .then((response) => {
          this.pokemones = response.data.results.map((pokemon, index) => ({
            id_pokemon: index + 1,
            name: pokemon.name,
          }));
        })
        .catch((error) => console.error("Error cargando Pokemones:", error))
        .finally(() => (this.estadoCarga = false));
    },
  },
  mounted() {
    this.cargarDatosPokemones();
  },
  computed: {
    filteredPokemones() {
      if (!this.search) return this.pokemones;
      return this.pokemones.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: 0.3s ease-in-out;
}
.v-card:hover {
  transform: scale(1.05);
}
</style>
