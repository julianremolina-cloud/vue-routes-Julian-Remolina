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

        <q-toolbar-title>
          🍔 Menú Digital
        </q-toolbar-title>

      </q-toolbar>
    </q-header>


    <!-- MENÚ LATERAL -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :width="280"
    >

      <q-list padding>

        <q-item-label header>
          MENÚ
        </q-item-label>


        <q-item
          clickable
          v-ripple
          to="/hamburguesas"
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
