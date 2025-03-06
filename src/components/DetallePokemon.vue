<template>
  <v-card
    @click="dialog = true"
    class="d-flex align-center pa-3"
    style="height: 60px"
  >
    <v-row>
      <v-col cols="9">
        <span class="lato-regular">{{ pokemon.name }}</span>
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <v-btn class="pa-0" rounded elevation-0 color="#F5F5F5">
          <v-icon color="#ECA539" size="25">mdi-star</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
  <v-dialog v-model="dialog">
    <h1>Hola!</h1>
  </v-dialog>
</template>
<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>