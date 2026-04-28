<template>
  <v-app>
    <div class="auth-page">

      <!-- ── Grid de fondo ── -->
      <div class="auth-grid" />

      <!-- ── Blobs de luz ── -->
      <div class="auth-blob auth-blob--1" />
      <div class="auth-blob auth-blob--2" />

      <!-- ── Navbar ── -->
      <header class="auth-nav">
        <div class="auth-nav__inner">
          <NuxtLink to="/" class="auth-logo">
            <v-icon color="#00d632" size="26">mdi-soccer-field</v-icon>
            <span class="auth-logo__text">CANCHAS<span class="auth-logo__accent">SINTÉTICAS</span></span>
          </NuxtLink>
          <div class="auth-nav__back">
            <v-btn
              variant="text"
              color="rgba(255,255,255,.6)"
              size="small"
              prepend-icon="mdi-arrow-left"
              to="/"
              class="text-none"
            >
              Volver al inicio
            </v-btn>
          </div>
        </div>
      </header>

      <!-- ── Contenido (slot) ── -->
      <main class="auth-main">
        <slot />
      </main>

      <!-- ── Footer mínimo ── -->
      <footer class="auth-footer">
        <span>© {{ new Date().getFullYear() }} Canchas Sintéticas · Todos los derechos reservados</span>
      </footer>

    </div>
  </v-app>
</template>

<style>
/* ──────────────────────────────────────────
   BASE
────────────────────────────────────────── */
.auth-page {
  min-height: 100vh;
  background: #080c14;
  color: #e8eaf0;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

/* ──────────────────────────────────────────
   GRID DE FONDO
────────────────────────────────────────── */
.auth-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,214,50,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,214,50,.05) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%);
  pointer-events: none;
  z-index: 0;
}

/* ──────────────────────────────────────────
   BLOBS
────────────────────────────────────────── */
.auth-blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
}
.auth-blob--1 {
  width: 480px; height: 480px;
  background: rgba(0,214,50,.1);
  top: -120px; left: -120px;
}
.auth-blob--2 {
  width: 360px; height: 360px;
  background: rgba(0,168,255,.07);
  bottom: 0; right: -80px;
}

/* ──────────────────────────────────────────
   NAVBAR
────────────────────────────────────────── */
.auth-nav {
  position: relative;
  z-index: 10;
  border-bottom: 1px solid rgba(0,214,50,.1);
  background: rgba(8,12,20,.6);
  backdrop-filter: blur(10px);
}
.auth-nav__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.auth-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
.auth-logo__text {
  font-size: .95rem;
  font-weight: 800;
  letter-spacing: .08em;
  color: #fff;
}
.auth-logo__accent {
  color: #00d632;
  margin-left: 4px;
}

/* ──────────────────────────────────────────
   MAIN SLOT
────────────────────────────────────────── */
.auth-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  position: relative;
  z-index: 1;
}

/* ──────────────────────────────────────────
   FOOTER
────────────────────────────────────────── */
.auth-footer {
  text-align: center;
  padding: 16px;
  font-size: .75rem;
  color: rgba(255,255,255,.25);
  position: relative;
  z-index: 1;
}
</style>
