<template>
  <q-page class="bg-grey-2">

    <!-- BANNER -->
    <q-img
      src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
      class="banner"
    >
      <div class="absolute-full flex flex-center">
        <div class="text-h3 text-weight-bold">
          ❤️ Nosotros
        </div>
      </div>
    </q-img>


    <div class="q-pa-lg">

      <!-- HISTORIA -->
      <q-card class="q-mb-lg">

        <q-card-section>

          <div class="text-h4 text-weight-bold">
            Nuestra historia
          </div>

          <p class="text-body1 q-mt-md">
            Nuestro restaurante nació con la idea de ofrecer
            comidas rápidas deliciosas, preparadas con
            ingredientes frescos y mucho cariño.
          </p>

          <p class="text-body1">
            Desde nuestros comienzos hemos trabajado para
            brindar un servicio cercano y productos de
            excelente calidad. Hoy seguimos creciendo gracias
            a nuestros clientes y a nuestro equipo.
          </p>

        </q-card-section>

      </q-card>


      <!-- INFORMACIÓN -->
      <div class="row q-col-gutter-lg q-mb-lg">

        <!-- DIRECCIÓN -->
        <div class="col-12 col-md-4">

          <q-card class="full-height">

            <q-card-section>

              <q-icon
                name="location_on"
                size="40px"
                color="red"
              />

              <div class="text-h6 q-mt-md">
                Dirección
              </div>

              <div class="text-body1">
                Cra 7 #20-04
                <br>
                San Gil, Santander
              </div>

            </q-card-section>

          </q-card>

        </div>


        <!-- HORARIOS -->
        <div class="col-12 col-md-4">

          <q-card class="full-height">

            <q-card-section>

              <q-icon
                name="schedule"
                size="40px"
                color="orange"
              />

              <div class="text-h6 q-mt-md">
                Horarios
              </div>

              <div class="text-body1">
                Lunes a jueves: 11:00 AM - 9:00 PM
                <br>
                Viernes y sábado: 11:00 AM - 11:00 PM
                <br>
                Domingo: 12:00 PM - 8:00 PM
              </div>

            </q-card-section>

          </q-card>

        </div>


        <!-- CONTACTO -->
        <div class="col-12 col-md-4">

          <q-card class="full-height">

            <q-card-section>

              <q-icon
                name="phone"
                size="40px"
                color="green"
              />

              <div class="text-h6 q-mt-md">
                Pedidos
              </div>

              <div class="text-body1">
                Teléfono: 300 123 4567
                <br>
                WhatsApp: 300 123 4567
              </div>

              <q-btn
                color="green"
                icon="chat"
                label="Pedir por WhatsApp"
                class="q-mt-md"
              />

            </q-card-section>

          </q-card>

        </div>

      </div>


      <!-- EQUIPO -->
      <div class="text-h4 text-weight-bold q-mb-lg">
        Nuestro equipo
      </div>


      <div class="row q-col-gutter-lg">

        <!-- CHEF -->
        <div class="col-12 col-md-4">

          <q-card>

            <q-img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
              height="300px"
            />

            <q-card-section class="text-center">

              <div class="text-h6">
                Sergio Sarmiento
              </div>

              <div class="text-grey-7">
                Chef principal
              </div>

            </q-card-section>

          </q-card>

        </div>


        <!-- CAJERO -->
        <div class="col-12 col-md-4">

          <q-card>

            <q-img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              height="300px"
            />

            <q-card-section class="text-center">

              <div class="text-h6">
                Juan Diego Gomez
              </div>

              <div class="text-grey-7">
                Cajero
              </div>

            </q-card-section>

          </q-card>

        </div>


        <!-- DOMICILIARIO -->
        <div class="col-12 col-md-4">

          <q-card>

            <q-img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              height="300px"
            />

            <q-card-section class="text-center">

              <div class="text-h6">
                Camilo Aguirre
              </div>

              <div class="text-grey-7">
                Domiciliario
              </div>

            </q-card-section>

          </q-card>

        </div>

      </div>

    </div>

  </q-page>
</template>


<style scoped>

.banner {
  height: 280px;
}

</style>
