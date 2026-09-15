<template>
  <q-page class="bg-grey-2">

    <!-- HERO BANNER -->
    <div class="hero-container relative-position text-white">
      <q-img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
        class="hero-bg"
        fit="cover"
      >
        <div class="hero-overlay absolute-full flex flex-center">
          <div class="text-center q-pa-md hero-content">
            <q-badge color="orange-9" text-color="white" class="q-px-md q-py-xs text-subtitle2 q-mb-md">
              🔥 ¡El mejor sabor de la ciudad!
            </q-badge>
            <h1 class="text-h2 text-weight-bolder q-my-none hero-title">
              Menú Digital
            </h1>
            <p class="text-h6 q-mt-md text-weight-regular hero-subtitle">
              Hamburguesas artesanales, pizzas crujientes, deliciosos perros calientes, bebidas y postres preparados con ingredientes de la más alta calidad.
            </p>
            <div class="q-mt-lg row justify-center q-gutter-md">
              <q-btn
                unelevated
                rounded
                color="red-9"
                size="lg"
                label="Explorar Menú"
                icon="restaurant_menu"
                to="/hamburguesas"
                class="q-px-lg shadow-3"
              />
              <q-btn
                outline
                rounded
                color="white"
                size="lg"
                label="Ver Promociones"
                icon="local_offer"
                to="/promociones"
                class="q-px-lg"
              />
            </div>
          </div>
        </div>
      </q-img>
    </div>

    <!-- CARACTERÍSTICAS / VALOR AGREGADO -->
    <div class="q-pa-lg">
      <div class="row q-col-gutter-md justify-center -q-mt-xl relative-position" style="z-index: 2; margin-top: -40px;">
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="feature-card text-center q-pa-md shadow-2">
            <q-icon name="local_shipping" size="48px" color="red-9" />
            <div class="text-h6 text-weight-bold q-mt-sm">Entrega Rápida</div>
            <div class="text-caption text-grey-7">Llevamos tu pedido caliente directo a tu puerta</div>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="feature-card text-center q-pa-md shadow-2">
            <q-icon name="verified" size="48px" color="orange-9" />
            <div class="text-h6 text-weight-bold q-mt-sm">100% Fresco</div>
            <div class="text-caption text-grey-7">Ingredientes seleccionados cada día para ti</div>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="feature-card text-center q-pa-md shadow-2">
            <q-icon name="restaurant" size="48px" color="positive" />
            <div class="text-h6 text-weight-bold q-mt-sm">Chefs Expertos</div>
            <div class="text-caption text-grey-7">Recetas exclusivas y preparación profesional</div>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="feature-card text-center q-pa-md shadow-2">
            <q-icon name="support_agent" size="48px" color="primary" />
            <div class="text-h6 text-weight-bold q-mt-sm">Atención 24/7</div>
            <div class="text-caption text-grey-7">Listos para atender tus pedidos y antojos</div>
          </q-card>
        </div>
      </div>

      <!-- SECCIÓN: CATEGORÍAS PRINCIPALES -->
      <div class="q-mt-xl text-center">
        <div class="text-overline text-red-9 text-weight-bold letter-spacing-1">¿QUÉ SE TE ANTOJA HOY?</div>
        <div class="text-h4 text-weight-bolder q-mt-xs">Nuestras Categorías</div>
        <div class="text-subtitle1 text-grey-8 q-mt-xs">
          Selecciona una categoría para explorar todos los deliciosos productos que tenemos para ti.
        </div>
      </div>

      <div class="row q-col-gutter-lg q-mt-md">
        <!-- CATEGORÍA: HAMBURGUESAS -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="category-card cursor-pointer shadow-2" @click="$router.push('/hamburguesas')">
            <q-img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              height="200px"
              fit="cover"
            >
              <div class="absolute-bottom text-h6 text-weight-bold flex justify-between items-center bg-dark-trans">
                <span>🍔 Hamburguesas</span>
                <q-btn flat round dense icon="arrow_forward" color="white" />
              </div>
            </q-img>
            <q-card-section>
              <div class="text-body2 text-grey-7">
                Carne 100% de res, queso fundido, tocineta crujiente y pan recién horneado.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- CATEGORÍA: PERROS CALIENTES -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="category-card cursor-pointer shadow-2" @click="$router.push('/perros')">
            <q-img
              src="https://images.unsplash.com/photo-1612392062631-94dd858cba88"
              height="200px"
              fit="cover"
            >
              <div class="absolute-bottom text-h6 text-weight-bold flex justify-between items-center bg-dark-trans">
                <span>🌭 Perros Calientes</span>
                <q-btn flat round dense icon="arrow_forward" color="white" />
              </div>
            </q-img>
            <q-card-section>
              <div class="text-body2 text-grey-7">
                Salchichas premium americanas, queso fundido, tocineta y ripio crocante.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- CATEGORÍA: PIZZAS -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="category-card cursor-pointer shadow-2" @click="$router.push('/pizzas')">
            <q-img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
              height="200px"
              fit="cover"
            >
              <div class="absolute-bottom text-h6 text-weight-bold flex justify-between items-center bg-dark-trans">
                <span>🍕 Pizzas</span>
                <q-btn flat round dense icon="arrow_forward" color="white" />
              </div>
            </q-img>
            <q-card-section>
              <div class="text-body2 text-grey-7">
                Masa artesanal horneada a la piedra con abundante queso mozzarella e ingredientes frescos.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- CATEGORÍA: BEBIDAS -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="category-card cursor-pointer shadow-2" @click="$router.push('/bebidas')">
            <q-img
              src="https://images.unsplash.com/photo-1544145945-f90425340c7e"
              height="200px"
              fit="cover"
            >
              <div class="absolute-bottom text-h6 text-weight-bold flex justify-between items-center bg-dark-trans">
                <span>🥤 Bebidas</span>
                <q-btn flat round dense icon="arrow_forward" color="white" />
              </div>
            </q-img>
            <q-card-section>
              <div class="text-body2 text-grey-7">
                Gaseosas heladas, limonadas naturales, jugos de fruta y malteadas cremosas.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- CATEGORÍA: POSTRES -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="category-card cursor-pointer shadow-2" @click="$router.push('/postres')">
            <q-img
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307"
              height="200px"
              fit="cover"
            >
              <div class="absolute-bottom text-h6 text-weight-bold flex justify-between items-center bg-dark-trans">
                <span>🍰 Postres</span>
                <q-btn flat round dense icon="arrow_forward" color="white" />
              </div>
            </q-img>
            <q-card-section>
              <div class="text-body2 text-grey-7">
                Cheesecakes, brownies de chocolate con helado, tortas y donas artesanales.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- CATEGORÍA: PROMOCIONES -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="category-card cursor-pointer shadow-2" @click="$router.push('/promociones')">
            <q-img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              height="200px"
              fit="cover"
            >
              <div class="absolute-bottom text-h6 text-weight-bold flex justify-between items-center bg-dark-trans">
                <span>🔥 Promociones & Combos</span>
                <q-btn flat round dense icon="arrow_forward" color="white" />
              </div>
            </q-img>
            <q-card-section>
              <div class="text-body2 text-grey-7">
                Combos familiares e individuales con hasta el 20% de descuento para ahorrar.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- SECCIÓN: PLATOS DESTACADOS / FAVORITOS -->
      <div class="q-mt-xl">
        <div class="row items-center justify-between q-mb-md">
          <div>
            <div class="text-overline text-red-9 text-weight-bold">LOS FAVORITOS</div>
            <div class="text-h4 text-weight-bolder">Platos Más Pedidos</div>
          </div>
          <q-btn flat color="red-9" label="Ver todo el menú" icon-right="chevron_right" to="/hamburguesas" />
        </div>

        <div class="row q-col-gutter-lg">
          <!-- DESTACADO 1 -->
          <div class="col-12 col-sm-6 col-md-3">
            <q-card class="full-height shadow-2">
              <q-img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                height="180px"
                fit="cover"
              >
                <q-badge color="orange" floating class="q-ma-sm">⭐ Top 1</q-badge>
              </q-img>
              <q-card-section>
                <div class="text-h6 text-weight-bold">Burger Clásica</div>
                <div class="text-caption text-grey-7 q-mt-xs">Carne 100% de res, queso cheddar y salsa especial.</div>
              </q-card-section>
              <q-card-section class="row items-center justify-between q-pt-none">
                <div class="text-h6 text-primary text-weight-bolder">$18.500</div>
                <q-btn round dense color="red-9" icon="add_shopping_cart" to="/hamburguesas" />
              </q-card-section>
            </q-card>
          </div>

          <!-- DESTACADO 2 -->
          <div class="col-12 col-sm-6 col-md-3">
            <q-card class="full-height shadow-2">
              <q-img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
                height="180px"
                fit="cover"
              >
                <q-badge color="red" floating class="q-ma-sm">🔥 Popular</q-badge>
              </q-img>
              <q-card-section>
                <div class="text-h6 text-weight-bold">Pizza Especial</div>
                <div class="text-caption text-grey-7 q-mt-xs">Queso mozzarella, pepperoni y albahaca fresca.</div>
              </q-card-section>
              <q-card-section class="row items-center justify-between q-pt-none">
                <div class="text-h6 text-primary text-weight-bolder">$27.500</div>
                <q-btn round dense color="red-9" icon="add_shopping_cart" to="/pizzas" />
              </q-card-section>
            </q-card>
          </div>

          <!-- DESTACADO 3 -->
          <div class="col-12 col-sm-6 col-md-3">
            <q-card class="full-height shadow-2">
              <q-img
                src="https://images.unsplash.com/photo-1612392062631-94dd858cba88"
                height="180px"
                fit="cover"
              >
                <q-badge color="green" floating class="q-ma-sm">👍 Recomendado</q-badge>
              </q-img>
              <q-card-section>
                <div class="text-h6 text-weight-bold">Perro Clásico</div>
                <div class="text-caption text-grey-7 q-mt-xs">Salchicha americana, ripio crujiente y salsa tártara.</div>
              </q-card-section>
              <q-card-section class="row items-center justify-between q-pt-none">
                <div class="text-h6 text-primary text-weight-bolder">$12.500</div>
                <q-btn round dense color="red-9" icon="add_shopping_cart" to="/perros" />
              </q-card-section>
            </q-card>
          </div>

          <!-- DESTACADO 4 -->
          <div class="col-12 col-sm-6 col-md-3">
            <q-card class="full-height shadow-2">
              <q-img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187"
                height="180px"
                fit="cover"
              >
                <q-badge color="pink" floating class="q-ma-sm">🍰 Dulce</q-badge>
              </q-img>
              <q-card-section>
                <div class="text-h6 text-weight-bold">Cheesecake Frutos Rojos</div>
                <div class="text-caption text-grey-7 q-mt-xs">Cremoso con salsa artesanal de mora y frambuesa.</div>
              </q-card-section>
              <q-card-section class="row items-center justify-between q-pt-none">
                <div class="text-h6 text-primary text-weight-bolder">$11.000</div>
                <q-btn round dense color="red-9" icon="add_shopping_cart" to="/postres" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <!-- SECCIÓN: NUESTROS CHEFS Y EQUIPO CULINARIO (SIN RECORTAR IMÁGENES) -->
      <div class="q-mt-xl" id="chefs">
        <div class="text-center q-mb-lg">
          <div class="text-overline text-red-9 text-weight-bold">TALENTO EN LA COCINA</div>
          <div class="text-h4 text-weight-bolder">Conoce a Nuestros Chefs</div>
          <div class="text-subtitle1 text-grey-8 q-mt-xs">
            Los expertos culinarios detrás de cada sabor, receta y experiencia en nuestro restaurante.
          </div>
        </div>

        <div class="row q-col-gutter-lg justify-center">
          <!-- CHEF 1: Sergio Sarmiento -->
          <div class="col-12 col-sm-6 col-md-4">
            <q-card class="chef-card shadow-3 full-height bg-white">
              <div class="chef-img-wrapper">
                <q-img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
                  fit="contain"
                  class="chef-img"
                  spinner-color="red-9"
                />
              </div>
              <q-card-section class="text-center">
                <q-badge color="red-9" class="q-mb-sm text-subtitle2">Chef Ejecutivo</q-badge>
                <div class="text-h5 text-weight-bold">Sergio Sarmiento</div>
                <div class="text-grey-7 text-subtitle2">Especialista en Parrilla & Carnes</div>
                <p class="text-body2 text-grey-8 q-mt-sm">
                  Con más de 10 años de trayectoria perfeccionando la cocción a la parrilla y las salsas de autor.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <!-- CHEF 2: Juan Diego Gomez -->
          <div class="col-12 col-sm-6 col-md-4">
            <q-card class="chef-card shadow-3 full-height bg-white">
              <div class="chef-img-wrapper">
                <q-img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548"
                  fit="contain"
                  class="chef-img"
                  spinner-color="orange-9"
                />
              </div>
              <q-card-section class="text-center">
                <q-badge color="orange-9" class="q-mb-sm text-subtitle2">Chef Pizzero</q-badge>
                <div class="text-h5 text-weight-bold">Juan Diego Gómez</div>
                <div class="text-grey-7 text-subtitle2">Maestro Pizzero Artesanal</div>
                <p class="text-body2 text-grey-8 q-mt-sm">
                  Especialista en masa de fermentación lenta y técnicas tradicionales de horneado a la piedra.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <!-- CHEF 3: Camilo Aguirre -->
          <div class="col-12 col-sm-6 col-md-4">
            <q-card class="chef-card shadow-3 full-height bg-white">
              <div class="chef-img-wrapper">
                <q-img
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16"
                  fit="contain"
                  class="chef-img"
                  spinner-color="purple-9"
                />
              </div>
              <q-card-section class="text-center">
                <q-badge color="purple-9" class="q-mb-sm text-subtitle2">Chef Pastelero</q-badge>
                <div class="text-h5 text-weight-bold">Camilo Aguirre</div>
                <div class="text-grey-7 text-subtitle2">Postres de Autor & Repostería</div>
                <p class="text-body2 text-grey-8 q-mt-sm">
                  Encargado de crear los cheesecakes, brownies y dulces que conquistan a todos los paladares.
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <!-- BANNER DE PEDIDO / CONTACTO -->
      <q-card class="q-mt-xl bg-gradient-red text-white shadow-3">
        <q-card-section class="row items-center q-pa-xl">
          <div class="col-12 col-md-8">
            <div class="text-h4 text-weight-bolder">¿Listo para ordenar?</div>
            <div class="text-subtitle1 q-mt-sm opacity-90">
              Pide en línea o escríbenos a nuestro WhatsApp para entrega a domicilio inmediata en San Gil.
            </div>
            <div class="text-body2 q-mt-xs">
              📍 Cra 7 #20-04, San Gil, Santander | 📞 Teléfono / WhatsApp: 300 123 4567
            </div>
          </div>
          <div class="col-12 col-md-4 text-center text-md-right q-mt-md q-mt-md-none">
            <q-btn
              color="positive"
              icon="chat"
              size="lg"
              rounded
              label="Pedir por WhatsApp"
              href="https://wa.me/573001234567"
              target="_blank"
              class="q-px-lg shadow-4"
            />
          </div>
        </q-card-section>
      </q-card>

    </div>

  </q-page>
</template>

<script setup>
</script>

<style scoped>
.hero-container {
  min-height: 480px;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  height: 480px;
  width: 100%;
}

.hero-overlay {
  background: linear-gradient(135deg, rgba(183, 28, 28, 0.88) 0%, rgba(30, 30, 30, 0.85) 100%);
}

.hero-content {
  max-width: 780px;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 1.15;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.5;
  opacity: 0.95;
}

.feature-card {
  border-radius: 12px;
  background: white;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12);
}

.category-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.15);
}

.bg-dark-trans {
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 100%);
  padding: 12px 16px;
}

/* CONTENEDOR Y ESTILOS PARA IMÁGENES DE CHEFS SIN RECORTAR */
.chef-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.chef-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.15);
}

.chef-img-wrapper {
  background: linear-gradient(180deg, #f0f2f5 0%, #e4e7eb 100%);
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.chef-img {
  max-height: 100%;
  width: 100%;
  object-fit: contain;
}

.bg-gradient-red {
  background: linear-gradient(135deg, #c62828 0%, #8e0000 100%);
  border-radius: 16px;
}

.letter-spacing-1 {
  letter-spacing: 1px;
}

.opacity-90 {
  opacity: 0.9;
}
</style>
