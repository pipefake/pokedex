import axios from "axios";
import store from "@/store/index";

const api = axios.create({

  baseURL: "https://pokeapi.co",
});

api.interceptors.request.use(
  (config) => {
    //When use this instance set loading status true
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

    //Loading status simulation of 1.5 segs
    setTimeout(() => {
      store.commit("setLoading", false);
    }, 1500);

    //Production
    // store.commit("setLoading", false);
    return response;
  },
  (error) => {
    //If there is an axios mistake set status false
    store.commit("setLoading", false);
    return Promise.reject(error);
  }
);

export default api;