<template>
  <v-flex class="ma-8">
    <v-text-field
      :loading="loading"
      density="compact"
      v-model="search"
      label="Search"
      variant="solo"
      hide-details
      single-line
      prepend-inner-icon="mdi-magnify"
      @input="activadorBuscador"
    ></v-text-field>
  </v-flex>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      search: "", // Inicializamos con una cadena vacía
      loading: false, // Puedes agregar el estado de loading si lo necesitas
    };
  },
  methods: {
    activadorBuscador() {
      // Emitimos el valor actualizado de search
      this.$emit("buscador", this.search);
    },
  },
};
</script>

<style scoped>
</style>
