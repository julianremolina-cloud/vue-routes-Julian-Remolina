import Perros from "../views/Perros.vue"
import Bebidas from "../views/Bebidas.vue"
import Pizzas from "../views/Pizzas.vue"
import Hamburguesas from "../views/Hamburguesas.vue"
import Postres from "../views/Postres.vue"
import Promociones from "../views/Promociones.vue"
import Nosotros from "../views/Nosotros.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/perros",
    component: Perros
  },
  {
    path: "/bebidas",
    component: Bebidas
  },
  {
    path: "/pizzas",
    component: Pizzas
  },
  {
    path: "/hamburguesas",
    component: Hamburguesas
  },
  {
    path: "/postres",
    component: Postres
  },
  {
    path: "/promociones",
    component: Promociones
  },
  {
    path: "/nosotros",
    component: Nosotros
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
