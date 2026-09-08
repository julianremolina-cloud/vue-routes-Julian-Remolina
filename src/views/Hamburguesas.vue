<template>

  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h3 text-weight-bold">
          🍔 Hamburguesas
        </div>
      </div>
    </q-img>


    <!-- CONTENIDO -->
    <div class="q-pa-lg">

      <div class="text-h4 text-weight-bold">
        Hamburguesas
      </div>

      <div class="text-subtitle1 q-mt-sm q-mb-lg">
        Hamburguesas preparadas con carne 100% de res,
        ingredientes frescos y nuestras salsas especiales.
      </div>


      <!-- PRODUCTOS -->
      <div class="row q-col-gutter-lg">


        <!-- PRODUCTO 1 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6">
                Hamburguesa Clásica
              </div>

              <div class="text-grey-7 q-mt-sm">
                Carne de res, queso cheddar,
                lechuga, tomate y salsa de la casa.
              </div>

            </q-card-section>

            <q-card-section>

              <div class="text-h6 text-primary">
                $18.500
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
              src="https://images.unsplash.com/photo-1553979459-d2229ba7433b"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6">
                Hamburguesa BBQ
              </div>

              <div class="text-grey-7 q-mt-sm">
                Carne de res, queso, tocineta,
                cebolla caramelizada y salsa BBQ.
              </div>

            </q-card-section>

            <q-card-section>

              <div class="text-h6 text-primary">
                $22.500
              </div>

              <q-badge color="brown">
                Favorita
              </q-badge>

            </q-card-section>

          </q-card>

        </div>


        <!-- PRODUCTO 3 -->
        <div class="col-12 col-sm-6 col-md-3">

          <q-card class="full-height">

            <q-img
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6">
                Burger Picante
              </div>

              <div class="text-grey-7 q-mt-sm">
                Carne de res, queso, jalapeños,
                cebolla y salsa picante.
              </div>

            </q-card-section>

            <q-card-section>

              <div class="text-h6 text-primary">
                $21.500
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
              src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9"
              height="200px"
            />

            <q-card-section>

              <div class="text-h6">
                Burger Doble
              </div>

              <div class="text-grey-7 q-mt-sm">
                Doble carne de res, doble queso,
                tocineta y salsa especial.
              </div>

            </q-card-section>

            <q-card-section>

              <div class="text-h6 text-primary">
                $27.500
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
            Burger Especial de la Casa
          </div>

          <div class="text-body1 q-mt-md">
            Doble carne de res, queso cheddar,
            tocineta crujiente, cebolla caramelizada
            y nuestra salsa secreta.
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
