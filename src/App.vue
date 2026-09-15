<template>
  <q-layout view="hHh lpR fFf">

    <!-- CABECERA -->
    <q-header elevated class="bg-red-9 text-white">
      <q-toolbar>

        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="cursor-pointer flex items-center" @click="$router.push('/')">
          🍔 <span class="q-ml-sm">Menú Digital</span>
        </q-toolbar-title>

        <!-- ACCESOS RÁPIDOS EN PANTALLAS GRANDES -->
        <div class="gt-sm q-gutter-xs">
          <q-btn flat no-caps label="Inicio" to="/" exact active-class="bg-red-10" />
          <q-btn flat no-caps label="Hamburguesas" to="/hamburguesas" active-class="bg-red-10" />
          <q-btn flat no-caps label="Perros" to="/perros" active-class="bg-red-10" />
          <q-btn flat no-caps label="Pizzas" to="/pizzas" active-class="bg-red-10" />
          <q-btn flat no-caps label="Bebidas" to="/bebidas" active-class="bg-red-10" />
          <q-btn flat no-caps label="Postres" to="/postres" active-class="bg-red-10" />
          <q-btn flat no-caps label="Promociones" to="/promociones" active-class="bg-red-10" />
          <q-btn flat no-caps label="Nosotros" to="/nosotros" active-class="bg-red-10" />
        </div>

      </q-toolbar>
    </q-header>


    <!-- MENÚ LATERAL -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :width="280"
    >

      <q-list padding>

        <q-item-label header class="text-weight-bold text-red-9">
          MENÚ PRINCIPAL
        </q-item-label>

        <q-item
          clickable
          v-ripple
          to="/"
          exact
          active-class="bg-red-1 text-red-9 text-weight-bold"
          @click="leftDrawerOpen = false"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            Inicio
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item
          clickable
          v-ripple
          to="/hamburguesas"
          active-class="bg-red-1 text-red-9 text-weight-bold"
          @click="leftDrawerOpen = false"
        >
          <q-item-section avatar>
            <q-icon name="lunch_dining" />
          </q-item-section>

          <q-item-section>
            Hamburguesas
          </q-item-section>
        </q-item>


        <q-item
          clickable
          v-ripple
          to="/perros"
          active-class="bg-red-1 text-red-9 text-weight-bold"
          @click="leftDrawerOpen = false"
        >
          <q-item-section avatar>
            <q-icon name="restaurant" />
          </q-item-section>

          <q-item-section>
            Perros
          </q-item-section>
        </q-item>


        <q-item
          clickable
          v-ripple
          to="/pizzas"
          active-class="bg-red-1 text-red-9 text-weight-bold"
          @click="leftDrawerOpen = false"
        >
          <q-item-section avatar>
            <q-icon name="local_pizza" />
          </q-item-section>

          <q-item-section>
            Pizzas
          </q-item-section>
        </q-item>


        <q-item
          clickable
          v-ripple
          to="/bebidas"
          active-class="bg-red-1 text-red-9 text-weight-bold"
          @click="leftDrawerOpen = false"
        >
          <q-item-section avatar>
            <q-icon name="local_drink" />
          </q-item-section>

          <q-item-section>
            Bebidas
          </q-item-section>
        </q-item>


        <q-item
          clickable
          v-ripple
          to="/postres"
          active-class="bg-red-1 text-red-9 text-weight-bold"
          @click="leftDrawerOpen = false"
        >
          <q-item-section avatar>
            <q-icon name="cake" />
          </q-item-section>

          <q-item-section>
            Postres
          </q-item-section>
        </q-item>


        <q-item
          clickable
          v-ripple
          to="/promociones"
          active-class="bg-red-1 text-red-9 text-weight-bold"
          @click="leftDrawerOpen = false"
        >
          <q-item-section avatar>
            <q-icon name="local_offer" />
          </q-item-section>

          <q-item-section>
            Promociones
          </q-item-section>
        </q-item>


        <q-separator spaced />


        <q-item
          clickable
          v-ripple
          to="/nosotros"
          active-class="bg-red-1 text-red-9 text-weight-bold"
          @click="leftDrawerOpen = false"
        >
          <q-item-section avatar>
            <q-icon name="groups" />
          </q-item-section>

          <q-item-section>
            Nosotros
          </q-item-section>
        </q-item>

      </q-list>

    </q-drawer>


    <!-- CONTENIDO -->
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
