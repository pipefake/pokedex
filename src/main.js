import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routerVue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

app.use(router);

app.use(vuetify);

app.mount('#app');



