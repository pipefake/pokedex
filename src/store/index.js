import { createStore } from 'vuex'; // Use createStore instead of createVuexStore
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  key: 'datos_pokemon_app',
  storage: window.localStorage,
});

export default createStore({
  state: {
    favorites: [],
  },
  mutations: {
    agregarFavorito(state, pokemon) {
      const exists = state.favorites.some(fav => fav.name === pokemon.name);
      if (!exists) {
        state.favorites.push(pokemon);
      }
    },
    eliminarFavorito(state, pokemonName) {
      state.favorites = state.favorites.filter(fav => fav.name !== pokemonName);
    },
  },
  actions: {
    agregarPokemonFavorito({ commit }, pokemon) {
      commit('agregarFavorito', pokemon);
    },
    eliminarPokemonFavorito({ commit }, pokemonName) {
      commit('eliminarFavorito', pokemonName);
    },
  },
  plugins: [vuexLocal.plugin],
});
