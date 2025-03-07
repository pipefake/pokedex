<template>
  <v-card class="d-flex align-center pa-3 ma-0" style="height: 60px">
    <v-row>
      <v-col class="d-flex align-center" @click="dialog = true" cols="9">
        <span class="lato-regular">{{ pokemon_name }}</span>
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <!-- Componente FavoriteButton -->
        <FavoriteButton :pokemon_name="pokemon_name" />
      </v-col>
    </v-row>
  </v-card>

  <v-dialog class="d-flex justify-center align-center" v-model="dialog">
    <v-card min-width="310" max-width="570">
      <v-img color="surface-variant" :height="200" :src="img_fondo" cover>
        <v-toolbar color="transparent">
          <div class="position-absolute top-0 right-0 p-2">
            <v-btn @click="dialog = false" icon="$menu">
              <v-icon color="#FFFFFF" size="26">mdi-close-circle</v-icon>
            </v-btn>
          </div>
        </v-toolbar>
        <div
          class="position-absolute"
          style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
        >
          <v-img
            :src="pokemon.image"
            :alt="pokemon.name"
            color="transparent"
            :height="200"
            :width="200"
            contain
          ></v-img>
        </div>
      </v-img>

      <v-card-text>
        <div class="mb-4">
          <div class="pa-3 lato-regular" color="#5E5E5E">
            <strong>Name:</strong> {{ pokemon.name }}
          </div>
          <v-divider></v-divider>
          <div class="pa-3 lato-regular" color="#5E5E5E">
            <strong>Weight:</strong> {{ pokemon.weight }}
          </div>
          <v-divider></v-divider>
          <div class="pa-3 lato-regular" color="#5E5E5E">
            <strong>Height:</strong> {{ pokemon.height }}
          </div>
          <v-divider></v-divider>
          <div class="pa-3 lato-regular" color="#5E5E5E">
            <strong>Types:</strong>
            {{ pokemon.types.map((type) => type.type.name).join(", ") }}
          </div>
        </div>
        <div class="d-flex ma-0 align-center justify-center" md-4 sm-12 xs-12>
          <v-btn
            rounded
            min-height="45px"
            class="text-white mr-8 text-none"
            color="#F22539"
            @click="copiarInformacion"
          >
            Share to my friends
          </v-btn>
          <FavoriteButton :pokemon_name="pokemon_name" />
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
import api from "@/utils/AxiosInstance.js";
import FavoriteButton from "@/components/FavoriteButton.vue";

export default {
  props: {
    pokemon_name: {
      type: String,
      required: true,
    },
  },
  components: {
    FavoriteButton,
  },
  data() {
    return {
      dialog: false,
      pokemon: {
        name: null,
        weight: null,
        height: null,
        types: [],
        image: null, // Aquí almacenamos la URL de la imagen
      },
      img_fondo: require("../assets/FondoDetalle.png"),
    };
  },
  methods: {
    ...mapActions(["agregarPokemonFavorito", "eliminarPokemonFavorito"]),
    async consultarPokemon() {
      try {
        const response = await api.get(`/api/v2/pokemon/${this.pokemon_name}`);
        this.pokemon.name = this.pokemon_name;
        this.pokemon.weight = response.data.weight;
        this.pokemon.height = response.data.height;
        this.pokemon.types = response.data.types;
        this.pokemon.image = response.data.sprites.front_default;
      } catch (error) {
        console.error("Error loading Pokemon:", error);
      }
    },
    copiarInformacion() {
      navigator.clipboard.writeText(
        `Name: ${this.pokemon.name}, Weight: ${this.pokemon.weight}, Height: ${
          this.pokemon.height
        }, Types: ${this.pokemon.types
          .map((type) => type.type.name)
          .join(", ")}`
      );
    },

    añadirFavorito(pokemon_name) {
      const isFavorite = this.favorites.some(
        (pokemon) => pokemon === pokemon_name
      );

      if (!isFavorite) {
        this.agregarPokemonFavorito(pokemon_name);
      } else if (isFavorite) {
        console.log("Ya está!");
        this.eliminarPokemonFavorito(pokemon_name);
      }
    },
  },
  mounted() {
    this.consultarPokemon(); // Fetch Pokemon info when the component is mounted
  },
  computed: {
    ...mapState(["favorites"]),
    isFavorite() {
      return this.favorites.some((pokemon) => pokemon === this.pokemon_name);
    },
  },
};
</script>
