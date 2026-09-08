<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h3 text-weight-bold">
          🔥 Promociones
        </div>
      </div>
    </q-img>

    <div class="q-pa-lg">

      <div class="text-h4 text-weight-bold">
        Promociones
      </div>

      <div class="text-subtitle1 q-mt-sm q-mb-lg">
        Combos especiales y descuentos para que disfrutes
        tus comidas favoritas por menos.
      </div>

      <div class="row q-col-gutter-lg">

        <!-- PROMOCIÓN 1 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6">
                Combo Hamburguesa
              </div>

              <div class="text-grey-7 q-mt-sm">
                Hamburguesa clásica, papas fritas
                y gaseosa.
              </div>

            </q-card-section>

            <q-card-section>

              <div class="text-h6 text-primary">
                $25.000
              </div>

              <q-badge color="red">
                20% OFF
              </q-badge>

            </q-card-section>

          </q-card>
        </div>

        <!-- PROMOCIÓN 2 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6">
                Combo Pizza
              </div>

              <div class="text-grey-7 q-mt-sm">
                Pizza mediana, bebida y postre
                para compartir.
              </div>

            </q-card-section>

            <q-card-section>

              <div class="text-h6 text-primary">
                $32.000
              </div>

              <q-badge color="orange">
                Oferta
              </q-badge>

            </q-card-section>

          </q-card>
        </div>

        <!-- PROMOCIÓN 3 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1612392062631-94dd858cba88"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6">
                Combo Perro
              </div>

              <div class="text-grey-7 q-mt-sm">
                Perro especial, papas fritas
                y gaseosa.
              </div>

            </q-card-section>

            <q-card-section>

              <div class="text-h6 text-primary">
                $24.000
              </div>

              <q-badge color="green">
                Favorito
              </q-badge>

            </q-card-section>

          </q-card>
        </div>

        <!-- PROMOCIÓN 4 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6">
                Combo Familiar
              </div>

              <div class="text-grey-7 q-mt-sm">
                Pizza grande, 4 bebidas y
                postre para compartir.
              </div>

            </q-card-section>

            <q-card-section>

              <div class="text-h6 text-primary">
                $48.000
              </div>

              <q-badge color="red">
                Mejor precio
              </q-badge>

            </q-card-section>

          </q-card>
        </div>

      </div>

      <!-- RECOMENDACIÓN -->
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
            Combo Familiar
          </div>

          <div class="text-body1 q-mt-md">
            La opción perfecta para compartir:
            pizza grande, cuatro bebidas y postre.
          </div>

          <div class="text-h5 text-primary q-mt-md">
            $48.000
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
