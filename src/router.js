// definir las rutas que apuntaran a los componentes
import app from "./App.vue";

import RegistroPage from "./views/RegistroView.vue";
import LoginPage from "./views/LoginView.vue";
import PrestamistaPage from "./views/PrestamistaView.vue";
import PrestatarioPage from "./views/PrestatarioView.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";

const routes = [
  { path: "/", name: "Registro", component: RegistroPage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/prestamista", name: "prestamista", component: PrestamistaPage },
  { path: "/prestatario", name: "prestatario", component: PrestatarioPage },
  {
    path: "/Prestamista",
    component: PrestamistaPage,
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
createApp(app).use(router).mount("#app");
