<template>
  <v-app>
    <v-main class="auth-bg">

      <!-- Banner superior a todo el ancho -->
      <div class="banner-container">
        <v-img
          src="~/assets/banner.png"
          alt="Banner"
          cover
          class="banner-image"
        />
      </div>

      <v-container
        fluid
        class="d-flex align-center justify-center"
        style="min-height: calc(100vh - 160px)"
      >
        <div class="auth-wrapper">
          <!-- Logo / Brand -->
          
          <slot />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.auth-bg {
  background: linear-gradient(135deg, #e3f0ff 0%, #f0f7ff 50%, #e8f5e9 100%);
}
.auth-wrapper {
  width: 100%;
  max-width: 440px;
}
.banner-container {
  width: 100%;
  overflow: hidden;
}
.banner-image {
  width: 100%;
  height: 160px;
}
</style>