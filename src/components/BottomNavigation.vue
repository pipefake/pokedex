<template>
  <v-layout
    class="overflow-visible bottom"
    style="position: fixed !important; height: 56px; width: 100vw; bottom: 0px"
  >
    <v-row col="12">
      <v-row md-4 sm-12 xs-12> </v-row>
      <v-row md-4 sm-12 xs-12>
        <v-btn
          class="text-white"
          :color="selected === '1' ? '#F22539' : '#BFBFBF'"
          @click="setSelected('1')"
        >
          <v-icon color="white">mdi-format-list-bulleted</v-icon>
          All
        </v-btn>
      </v-row>
      <v-row md-4 sm-12 xs-12>
        <v-btn
          class="text-white"
          :color="selected === '2' ? '#F22539' : '#BFBFBF'"
          @click="setSelected('2')"
        >
          <v-icon color="white">mdi-star</v-icon>
          Favorites
        </v-btn>
      </v-row>
      <v-row md-4 sm-12 xs-12> </v-row>
    </v-row>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      selected: "1",
    };
  },
  methods: {
    setSelected(id_seleccion) {
      this.selected = id_seleccion;
      this.$emit("switch", this.selected);
    },
  },
};
</script>
<style scoped>
.bottom {
  position: initial !important;
}
.v-btn {
  border-radius: 20px;
  font-weight: bold;
  text-transform: none;
  transition: background 0.3s, color 0.3s;
  width: 80%;
  height: 40px !important;
  padding: 0;
  margin: 0;
}
</style>