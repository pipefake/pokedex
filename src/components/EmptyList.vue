<template>
  <!-- EmptyList -->
  <v-col class="justify-center">
    <v-row class="justify-center ma-3">
      <h2 style="font-size: 36px" class="lato-bold">Uh-oh!</h2>
    </v-row>
    <v-row class="justify-center ma-6">
      <p class="lato-light">You look lost on your journey!.</p>
    </v-row>
    <!-- Exit Button -->
    <v-row class="justify-center ma-3">
      <v-btn rounded class="ma-4" color="#F22539" flat @click="redirectToPage"
        >Go back home</v-btn
      >
    </v-row>
  </v-col>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    redirectToPage() {
      this.$router.push("/");
    },
  },
  computed: {},
};
</script>
<style scoped>
</style>
