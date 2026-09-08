<template>
  <q-page class="bg-grey-2">

    <q-img
      src="https://images.unsplash.com/photo-1544145945-f90425340c7e"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h3 text-weight-bold">
          🥤 Bebidas
        </div>
      </div>
    </q-img>

    <div class="q-pa-lg">

      <div class="text-h4 text-weight-bold">
        Bebidas
      </div>

      <div class="text-subtitle1 q-mt-sm q-mb-lg">
        Bebidas refrescantes para acompañar tus comidas
        y disfrutar cada momento.
      </div>

      <div class="row q-col-gutter-lg">

        <!-- BEBIDA 1 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1629203849820-fdd70d49c38e"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Gaseosa
              </div>

              <div class="text-grey-7 q-mt-sm">
                Gaseosa fría de tu sabor favorito.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $5.000
              </div>

              <q-badge color="orange">
                Más pedido
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- BEBIDA 2 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1497534446932-c925b458314e"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Limonada
              </div>

              <div class="text-grey-7 q-mt-sm">
                Limonada natural preparada al momento.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $7.000
              </div>

              <q-badge color="green">
                Natural
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- BEBIDA 3 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1577805947697-89e18249d767"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Malteada de Chocolate
              </div>

              <div class="text-grey-7 q-mt-sm">
                Leche, helado de chocolate,
                chocolate y crema.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $10.500
              </div>

              <q-badge color="brown">
                Favorita
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

        <!-- BEBIDA 4 -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87"
              height="200px"
            />

            <q-card-section>
              <div class="text-h6">
                Jugo Natural
              </div>

              <div class="text-grey-7 q-mt-sm">
                Jugo natural preparado con fruta fresca.
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-primary">
                $8.000
              </div>

              <q-badge color="green">
                Natural
              </q-badge>
            </q-card-section>

          </q-card>
        </div>

      </div>

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
            Malteada de Chocolate
          </div>

          <div class="text-body1 q-mt-md">
            Cremosa malteada preparada con helado,
            chocolate y crema batida.
          </div>

          <div class="text-h5 text-primary q-mt-md">
            $10.500
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
