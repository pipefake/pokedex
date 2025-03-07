import { createStore } from 'vuex'; // Use createStore instead of createVuexStore
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  key: 'datos_pokemon_app',
  storage: window.localStorage,
});

export default createStore({
  state: {
    favorites: [],
    isLoading: false,
  },
  mutations: {
    agregarFavorito(state, pokemon) {
      const exists = state.favorites.some(fav => fav === pokemon);
      if (!exists) {
        state.favorites.push(pokemon);
      }
    },
    eliminarFavorito(state, pokemon) {
      state.favorites = state.favorites.filter(fav => fav !== pokemon);
    },
    setLoading(state, status) {
      state.isLoading = status;
    },
  },
  actions: {
    agregarPokemonFavorito({ commit }, pokemon) {
      commit('agregarFavorito', pokemon);
    },
    eliminarPokemonFavorito({ commit }, pokemon) {
      commit('eliminarFavorito', pokemon);
    },
  },
  plugins: [vuexLocal.plugin],
});
