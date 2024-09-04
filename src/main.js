import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "./assets/main.css";
import Button from "primevue/button";
import Rating from "primevue/rating";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
});

app.component("Button", Button);
app.component("Rating", Rating);
app.mount("#app");
