import { createPinia } from 'pinia';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VCalendar, {
  componentPrefix: 'vc', // Use <vc-calendar /> instead of <v-calendar />
});

app.mount('#app');
