import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

// Persistencia en localStorage
const vuexLocal = new VuexPersistence({
  key: "datos_pokemon_app",
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    favorites: [], // Aquí se almacenarán los favoritos
  },

  mutations: {
    // Agregar un pokemon a la lista de favoritos
    agregarFavorito(state, pokemon) {
      // Verificar si el pokemon ya está en favoritos
      const exists = state.favorites.some(fav => fav.name === pokemon.name);
      if (!exists) {
        state.favorites.push(pokemon);
      }
    },
    
    // Eliminar un pokemon de los favoritos
    eliminarFavorito(state, pokemonName) {
      state.favorites = state.favorites.filter(fav => fav.name !== pokemonName);
    },
  },

  actions: {
    // Ejecutar para agregar un favorito
    agregarPokemonFavorito({ commit }, pokemon) {
      commit("agregarFavorito", pokemon);
    },

    // Ejecutar para eliminar un pokemon de los favoritos
    eliminarPokemonFavorito({ commit }, pokemonName) {
      commit("eliminarFavorito", pokemonName);
    }
  },

  plugins: [vuexLocal.plugin] // Persistencia en localStorage
});
