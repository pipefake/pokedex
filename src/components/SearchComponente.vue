<template>
  <!-- Input Search Value -->
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
      @input="searchActivator"
    ></v-text-field>
  </v-flex>
</template>

<script>
export default {
  name: "SearchComponente",
  data() {
    return {
      search: "", // Start with an empty value
      loading: false, // Star with loading false
    };
  },
  methods: {
    searchActivator() {
      // Emit search value
      this.$emit("search", this.search);
    },
  },
};
</script>

<style scoped>
</style>
