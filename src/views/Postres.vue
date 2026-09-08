<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1551024506-0bccd828d307"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h3 text-weight-bold">
          🍰 Postres
        </div>
      </div>
    </q-img>

    <div class="q-pa-lg">

      <div class="text-h4 text-weight-bold">
        Postres
      </div>

      <div class="text-subtitle1 q-mt-sm q-mb-lg">
        El toque dulce perfecto para terminar tu comida
        con mucho sabor.
      </div>

      <div class="row q-col-gutter-lg">

        <!-- PRODUCTO 1 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Donas
              </div>

              <div class="text-grey-7 q-mt-sm">
                Donas suaves cubiertas con chocolate
                y decoración dulce.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $7.500
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
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Cheesecake
              </div>

              <div class="text-grey-7 q-mt-sm">
                Cheesecake cremoso con base de galleta
                y salsa de frutos rojos.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $11.000
              </div>

              <q-badge color="pink">
                Favorito
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- PRODUCTO 3 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Brownie
              </div>

              <div class="text-grey-7 q-mt-sm">
                Brownie de chocolate con nueces
                y salsa de chocolate.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $9.000
              </div>

              <q-badge color="brown">
                Chocolate
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- PRODUCTO 4 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Torta de Chocolate
              </div>

              <div class="text-grey-7 q-mt-sm">
                Torta húmeda de chocolate con crema
                y cobertura de chocolate.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $10.500
              </div>

              <q-badge color="red">
                Nuevo
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
            Cheesecake de Frutos Rojos
          </div>

          <div class="text-body1 q-mt-md">
            Nuestro cheesecake cremoso con base de
            galleta y una deliciosa salsa de frutos rojos.
          </div>

          <div class="text-h5 text-primary q-mt-md">
            $11.000
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
