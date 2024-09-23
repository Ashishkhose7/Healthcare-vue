import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
});

import App from './App.vue'
const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, { theme: {
    preset: Aura
} });
app.use(vuetify)

app.mount('#app')
