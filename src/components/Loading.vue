<template>
  <v-flex v-if="isLoading" class="loader-overlay">
    <v-img
      :src="imgLoader"
      alt="Pokébola"
      max-width="100"
      max-height="100"
      class="pokeball"
    />
  </v-flex>
</template>
  
  
<script>
import { mapState } from "vuex";
export default {
  name: "LoadingComponent",
  data() {
    return {
      imgLoader: require("../assets/Loader.png"),
    };
  },
  computed: {
    ...mapState(["isLoading"]),
  },
};
</script>
  
  <style scoped>
.pokeball {
  animation: shakePokeball 0.7s ease-in-out infinite;
}
.loader-overlay {
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  position: fixed;
}

@keyframes shakePokeball {
  0% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-8px) translateY(0);
  }
  50% {
    transform: translateX(8px) translateY(0);
  }
  75% {
    transform: translateX(-8px) translateY(0);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
</style>