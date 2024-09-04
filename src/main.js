import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "./assets/main.css";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
});

// app.mount("#app");
app.mount("#app");
