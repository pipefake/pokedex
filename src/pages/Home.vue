<template>
    <v-layout class="layout-home">
        <v-col class="d-flex flex-column justify-center align-center">
            <v-img
            class="mb-9"
            width="360"
            max-height="350"
            aspect-ratio="1/1"
            cover
            :src="imagen_portala"
            ></v-img>
            <h1 class="lato-bold ma-2">{{titulo}}</h1>
            <div class="text-container">
                <p class="lato-regular ma-3">{{ descripcion }}</p>
            </div>
            <v-btn 
            rounded
            class="ma-4"
            color="#F22539"
            flat
            @click="redirectToPage">Get stared</v-btn>
        </v-col>
    </v-layout>
</template>
<script>
export default {
    name: 'HomeComponent',
    data(){
        return{
            //Se inicializan los siguientes parametros para no quemar el texto en el código
            titulo:'Welcome to Pokédex',
            descripcion:'The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.',
            imagen_portala: require('../assets/Pokemon_portada.png'),
        };
    },
    methods: {
        //Función para redireccionar a la ruta /list donde se listaran los pokemones
        redirectToPage(){
            this.$router.push('/list');
        }
    }
}
</script>
<style scoped>
.text-container {
    max-width: 520px;
    word-wrap: break-word;
    white-space: normal;
    text-align: center;
}
@media (max-width: 600px) {
    .text-container {
        max-width: 300px; /* Reduce el ancho en móviles */
    }
}
.layout-home{
    height: 100vh;
}
</style>