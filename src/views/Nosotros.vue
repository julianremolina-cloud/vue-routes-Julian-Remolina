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
      <div class="text-h4 text-weight-bold q-mb-md">
        Nuestro equipo
      </div>
      <div class="text-subtitle1 text-grey-8 q-mb-lg">
        Conoce a las personas dedicadas que hacen posible cada experiencia y sabor en nuestro restaurante.
      </div>


      <div class="row q-col-gutter-lg">

        <!-- CHEF -->
        <div class="col-12 col-md-4">

          <q-card class="team-card shadow-2 full-height bg-white">

            <div class="team-img-container">
              <q-img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
                fit="contain"
                class="team-img"
              />
            </div>

            <q-card-section class="text-center">

              <q-badge color="red-9" class="q-mb-sm text-caption">
                Cocina & Parrilla
              </q-badge>

              <div class="text-h6 text-weight-bold">
                Sergio Sarmiento
              </div>

              <div class="text-grey-7 text-subtitle2">
                Chef principal
              </div>

            </q-card-section>

          </q-card>

        </div>


        <!-- CAJERO -->
        <div class="col-12 col-md-4">

          <q-card class="team-card shadow-2 full-height bg-white">

            <div class="team-img-container">
              <q-img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                fit="contain"
                class="team-img"
              />
            </div>

            <q-card-section class="text-center">

              <q-badge color="orange-9" class="q-mb-sm text-caption">
                Atención al Cliente
              </q-badge>

              <div class="text-h6 text-weight-bold">
                Juan Diego Gomez
              </div>

              <div class="text-grey-7 text-subtitle2">
                Cajero
              </div>

            </q-card-section>

          </q-card>

        </div>


        <!-- DOMICILIARIO -->
        <div class="col-12 col-md-4">

          <q-card class="team-card shadow-2 full-height bg-white">

            <div class="team-img-container">
              <q-img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                fit="contain"
                class="team-img"
              />
            </div>

            <q-card-section class="text-center">

              <q-badge color="positive" class="q-mb-sm text-caption">
                Logística & Envíos
              </q-badge>

              <div class="text-h6 text-weight-bold">
                Camilo Aguirre
              </div>

              <div class="text-grey-7 text-subtitle2">
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

.team-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

.team-img-container {
  background: linear-gradient(180deg, #f5f6f8 0%, #eaedf1 100%);
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.team-img {
  max-height: 100%;
  width: 100%;
  object-fit: contain;
}

</style>
