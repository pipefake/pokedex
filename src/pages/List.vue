<template>
    <v-layout>
        <h1>mostrar{{this.mostrarlista}}</h1>
        <BottomNavigation @switch="switchList"/>
    </v-layout>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue';

export default {
    name: 'ListComponent',
    data() {
        return {
            mostrarlista: 'all', // Estado inicial
        };
    },
    components: {
        BottomNavigation,
    },
    methods: {
        switchList(id_seleccion) {
            this.mostrarlista = id_seleccion; 
        },
    },
};
</script>

<style scoped>
</style>
