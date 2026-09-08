<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h3 text-weight-bold">
          🍕 Pizzas
        </div>
      </div>
    </q-img>

    <div class="q-pa-lg">

      <div class="text-h4 text-weight-bold">
        Pizzas
      </div>

      <div class="text-subtitle1 q-mt-sm q-mb-lg">
        Pizzas recién horneadas con masa artesanal,
        queso derretido e ingredientes seleccionados.
      </div>

      <div class="row q-col-gutter-lg">

        <!-- PIZZA 1 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Pizza Hawaiana
              </div>

              <div class="text-grey-7 q-mt-sm">
                Jamón, piña, queso mozzarella
                y salsa de tomate.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $22.000
              </div>

              <q-badge color="orange">
                Más pedido
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- PIZZA 2 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Pizza Pepperoni
              </div>

              <div class="text-grey-7 q-mt-sm">
                Pepperoni, queso mozzarella
                y salsa de tomate.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $24.000
              </div>

              <q-badge color="red">
                Favorita
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- PIZZA 3 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Pizza Vegetariana
              </div>

              <div class="text-grey-7 q-mt-sm">
                Champiñones, pimentón, cebolla,
                tomate, aceitunas y queso.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $23.000
              </div>

              <q-badge color="green">
                Vegetariana
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- PIZZA 4 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Pizza Carnes
              </div>

              <div class="text-grey-7 q-mt-sm">
                Carne, pepperoni, jamón,
                tocineta y queso mozzarella.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $27.500
              </div>

              <q-badge color="brown">
                Especial
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

      </div>

      <!-- CHEF -->
      <q-card
        class="q-mt-xl bg-orange-1"
        flat
        bordered
      >

        <q-card-section>

          <div class="text-overline text-orange-9">
            ⭐ RECOMENDACIÓN DEL CHEF
          </div>

          <div class="text-h4 text-weight-bold">
            Pizza Carnes Especial
          </div>

          <div class="text-body1 q-mt-md">
            Nuestra pizza favorita: carne, pepperoni,
            jamón, tocineta, mozzarella y salsa especial.
          </div>

          <div class="text-h5 text-primary q-mt-md">
            $27.500
          </div>

        </q-card-section>

      </q-card>

    </div>

  </q-page>
</template>

<style scoped>
.banner {
  height: 280px;
}
</style>
