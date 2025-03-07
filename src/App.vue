<template>
  <div id="app">
    <Loading/>
    <router-view />
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  components: {
    Loading,
  },
};
</script>