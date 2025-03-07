import axios from "axios";
import store from "@/store/index";

const api = axios.create({

  baseURL: "https://pokeapi.co",
});

api.interceptors.request.use(
  (config) => {
    //Al llamar esta instancia en un componente se muestra el estado de carga en la app
    store.commit("setLoading", true);
    return config;
  },
  (error) => {
    store.commit("setLoading", false);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {

    //Simulación de estado de carga en la app de 1.5 segundo de espera
    setTimeout(() => {
      store.commit("setLoading", false);
    }, 1500);

    //Cambiar en producción
    // store.commit("setLoading", false);
    return response;
  },
  (error) => {
    //Si hay un error en el axios, también desactivamos el estado
    store.commit("setLoading", false);
    return Promise.reject(error);
  }
);

export default api;