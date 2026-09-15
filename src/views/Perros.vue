<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1612392062631-94dd858cba88"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h3 text-weight-bold">
          🌭 Perros Calientes
        </div>
      </div>
    </q-img>

    <div class="q-pa-lg">

      <div class="text-h4 text-weight-bold">
        Perros Calientes
      </div>

      <div class="text-subtitle1 q-mt-sm q-mb-lg">
        Perros calientes preparados con salchichas de calidad,
        ingredientes frescos y nuestras salsas especiales.
      </div>

      <!-- PRODUCTOS -->
      <div class="row q-col-gutter-lg">

        <!-- PRODUCTO 1 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1612392062631-94dd858cba88"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Perro Clásico
              </div>

              <div class="text-grey-7 q-mt-sm">
                Salchicha, queso, papa ripio,
                cebolla y salsas de la casa.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $12.500
              </div>

              <q-badge color="orange">
                Más pedido
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- PRODUCTO 2 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1627059312946-b6339097ce1d"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Perro BBQ
              </div>

              <div class="text-grey-7 q-mt-sm">
                Salchicha, queso cheddar, tocineta,
                cebolla caramelizada y salsa BBQ.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $16.500
              </div>

              <q-badge color="brown">
                Favorito
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- PRODUCTO 3 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1541214113241-21578d2d9b62"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Perro Picante
              </div>

              <div class="text-grey-7 q-mt-sm">
                Salchicha, queso, jalapeños,
                cebolla y salsa picante.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $15.500
              </div>

              <q-badge color="red">
                Picante
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- PRODUCTO 4 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1619740455993-9e612b1af08a"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Perro Especial
              </div>

              <div class="text-grey-7 q-mt-sm">
                Doble salchicha, queso, tocineta,
                papa ripio y salsa especial.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $19.500
              </div>

              <q-badge color="green">
                Nuevo
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

      </div>

      <!-- RECOMENDACIÓN DEL CHEF -->
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
            Perro Especial de la Casa
          </div>

          <div class="text-body1 q-mt-md">
            Doble salchicha, queso cheddar,
            tocineta crujiente, papa ripio y
            nuestra salsa especial.
          </div>

          <div class="text-h5 text-primary q-mt-md">
            $19.500
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
