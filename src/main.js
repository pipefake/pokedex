import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routerVue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import "material-design-icons-iconfont/dist/material-design-icons.css";
import '@mdi/font/css/materialdesignicons.css';
// Import Vuex store
import store from './store/index';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
});

const app = createApp(App);

app.use(router); // Use Vue Router
app.use(store);  // Use Vuex Store
app.use(vuetify); // Use Vuetify

app.mount('#app');
