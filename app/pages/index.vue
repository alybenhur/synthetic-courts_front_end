<template>
  <div class="landing">

    <!-- ═══════════════════════════════════════════════════════════════
         NAVBAR
    ═══════════════════════════════════════════════════════════════ -->
    <header class="lp-nav" :class="{ 'lp-nav--scrolled': scrolled }">
      <div class="lp-nav__inner">
        <!-- Logo -->
        <div class="lp-logo">
          <v-icon color="#00d632" size="28">mdi-soccer-field</v-icon>
          <span class="lp-logo__text">CANCHAS<span class="lp-logo__accent">SINTÉTICAS</span></span>
        </div>

        <!-- Links (desktop) -->
        <nav class="lp-nav__links d-none d-md-flex">
          <a href="#features">Características</a>
          <a href="#how">¿Cómo funciona?</a>
          <a href="#courts">Canchas</a>
          <a href="#contact">Contacto</a>
        </nav>

        <!-- Auth buttons -->
        <div class="lp-nav__actions">
          <v-btn variant="text" color="white" size="small" class="mr-1" to="/auth/login">
            Iniciar Sesión
          </v-btn>
          <v-btn
            color="#00d632"
            size="small"
            rounded="lg"
            class="font-weight-bold"
            style="color:#000"
            to="/auth/register"
          >
            Registrarse
          </v-btn>
        </div>
      </div>
    </header>

    <!-- ═══════════════════════════════════════════════════════════════
         HERO
    ═══════════════════════════════════════════════════════════════ -->
    <section class="lp-hero">
      <!-- Animated background grid -->
      <div class="lp-hero__grid" />

      <!-- Green glow blobs -->
      <div class="lp-blob lp-blob--1" />
      <div class="lp-blob lp-blob--2" />

      <div class="lp-hero__content">
        <div class="lp-hero__badge">
          <v-icon size="14" color="#00d632">mdi-circle</v-icon>
          <span>Plataforma #1 de reservas en Colombia</span>
        </div>

        <h1 class="lp-hero__title">
          Tu cancha favorita,<br>
          <span class="lp-hero__title--green">a un click</span>
        </h1>

        <p class="lp-hero__subtitle">
          Reserva canchas sintéticas de fútbol en segundos. Sin llamadas,
          sin filas. Elige tu horario, paga y juega.
        </p>

        <div class="lp-hero__ctas">
          <v-btn
            color="#00d632"
            size="large"
            rounded="lg"
            class="font-weight-bold lp-btn-glow"
            style="color:#000; min-width:180px"
            to="/auth/register"
          >
            <v-icon start>mdi-soccer</v-icon>
            Reservar ahora
          </v-btn>
          <v-btn
            variant="outlined"
            color="white"
            size="large"
            rounded="lg"
            to="/auth/login"
            style="min-width:160px; border-color:rgba(255,255,255,.35)"
          >
            Iniciar sesión
          </v-btn>
        </div>

        <!-- Trust badges -->
        <div class="lp-hero__trust">
          <div v-for="t in trust" :key="t.label" class="lp-trust-item">
            <v-icon size="16" color="#00d632">{{ t.icon }}</v-icon>
            <span>{{ t.label }}</span>
          </div>
        </div>
      </div>

      <!-- Hero visual -->
      <div class="lp-hero__visual">
        <div class="lp-field-card">
          <div class="lp-field-card__screen">
            <div class="lp-field-lines">
              <div class="lp-field-circle" />
              <div class="lp-field-midline" />
              <div class="lp-field-penalty lp-field-penalty--left" />
              <div class="lp-field-penalty lp-field-penalty--right" />
              <div class="lp-field-goal lp-field-goal--left" />
              <div class="lp-field-goal lp-field-goal--right" />
            </div>
          </div>
          <!-- Floating info cards -->
          <div class="lp-float-card lp-float-card--top">
            <v-icon size="14" color="#00d632">mdi-clock-outline</v-icon>
            <span>Disponible ahora</span>
            <strong>08:00 – 22:00</strong>
          </div>
          <div class="lp-float-card lp-float-card--bottom">
            <v-icon size="14" color="#ffd700">mdi-soccer</v-icon>
            <span>Fútbol 5 · Fútbol 7 · Futsal</span>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="lp-scroll-hint">
        <v-icon size="20" color="rgba(255,255,255,.4)">mdi-chevron-double-down</v-icon>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         STATS BAR
    ═══════════════════════════════════════════════════════════════ -->
    <section class="lp-stats">
      <div class="lp-stats__inner">
        <div v-for="s in stats" :key="s.label" class="lp-stat">
          <span class="lp-stat__num">{{ s.value }}</span>
          <span class="lp-stat__label">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         FEATURES
    ═══════════════════════════════════════════════════════════════ -->
    <section id="features" class="lp-section">
      <div class="lp-container">
        <div class="lp-section__header">
          <span class="lp-tag">¿Por qué elegirnos?</span>
          <h2 class="lp-section__title">Todo lo que necesitas para jugar</h2>
          <p class="lp-section__sub">Reserva en segundos, cancela cuando quieras y paga de forma segura.</p>
        </div>

        <div class="lp-features-grid">
          <div v-for="f in features" :key="f.title" class="lp-feature-card">
            <div class="lp-feature-card__icon">
              <v-icon :color="f.color" size="28">{{ f.icon }}</v-icon>
            </div>
            <h3 class="lp-feature-card__title">{{ f.title }}</h3>
            <p class="lp-feature-card__desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         HOW IT WORKS
    ═══════════════════════════════════════════════════════════════ -->
    <section id="how" class="lp-section lp-section--dark">
      <div class="lp-container">
        <div class="lp-section__header">
          <span class="lp-tag">Simple y rápido</span>
          <h2 class="lp-section__title">¿Cómo funciona?</h2>
          <p class="lp-section__sub">Reserva tu cancha en 3 pasos. Sin complicaciones.</p>
        </div>

        <div class="lp-steps">
          <div v-for="(step, i) in steps" :key="step.title" class="lp-step">
            <div class="lp-step__num">{{ i + 1 }}</div>
            <div class="lp-step__icon">
              <v-icon color="#00d632" size="32">{{ step.icon }}</v-icon>
            </div>
            <h3 class="lp-step__title">{{ step.title }}</h3>
            <p class="lp-step__desc">{{ step.desc }}</p>
          </div>
          <!-- Connectors -->
          <div class="lp-step-connector lp-step-connector--1" />
          <div class="lp-step-connector lp-step-connector--2" />
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         COURT TYPES
    ═══════════════════════════════════════════════════════════════ -->
    <section id="courts" class="lp-section">
      <div class="lp-container">
        <div class="lp-section__header">
          <span class="lp-tag">Modalidades</span>
          <h2 class="lp-section__title">Canchas para todos los gustos</h2>
        </div>

        <div class="lp-courts-grid">
          <div v-for="ct in courtTypes" :key="ct.name" class="lp-court-card">
            <div class="lp-court-card__icon">
              <v-icon color="#00d632" size="36">{{ ct.icon }}</v-icon>
            </div>
            <div class="lp-court-card__info">
              <h3>{{ ct.name }}</h3>
              <p>{{ ct.desc }}</p>
            </div>
            <v-chip size="x-small" color="#00d632" class="font-weight-bold" style="color:#000">
              {{ ct.players }}
            </v-chip>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         CTA BANNER
    ═══════════════════════════════════════════════════════════════ -->
    <section class="lp-cta-banner">
      <div class="lp-blob lp-blob--cta-1" />
      <div class="lp-blob lp-blob--cta-2" />
      <div class="lp-cta-banner__inner">
        <v-icon color="#00d632" size="48" class="mb-4">mdi-soccer-field</v-icon>
        <h2 class="lp-cta-banner__title">¿Listo para jugar?</h2>
        <p class="lp-cta-banner__sub">
          Únete a miles de jugadores que ya reservan con nosotros.
          Registro gratuito en menos de 1 minuto.
        </p>
        <div class="d-flex gap-3 justify-center flex-wrap mt-6">
          <v-btn
            color="#00d632"
            size="x-large"
            rounded="lg"
            class="font-weight-bold lp-btn-glow"
            style="color:#000; min-width:200px"
            to="/auth/register"
          >
            <v-icon start>mdi-account-plus</v-icon>
            Crear cuenta gratis
          </v-btn>
          <v-btn
            variant="outlined"
            color="white"
            size="x-large"
            rounded="lg"
            to="/auth/login"
            style="border-color:rgba(255,255,255,.3); min-width:180px"
          >
            Ya tengo cuenta
          </v-btn>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════════════════════ -->
    <footer id="contact" class="lp-footer">
      <div class="lp-container">
        <div class="lp-footer__grid">
          <div class="lp-footer__brand">
            <div class="lp-logo mb-3">
              <v-icon color="#00d632" size="24">mdi-soccer-field</v-icon>
              <span class="lp-logo__text" style="font-size:.95rem">
                CANCHAS<span class="lp-logo__accent">SINTÉTICAS</span>
              </span>
            </div>
            <p class="lp-footer__tagline">
              La plataforma líder de reservas de canchas sintéticas en Colombia.
            </p>
            <div class="d-flex gap-2 mt-3">
              <v-btn icon size="small" variant="tonal" color="#00d632">
                <v-icon size="16">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon size="small" variant="tonal" color="#00d632">
                <v-icon size="16">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon size="small" variant="tonal" color="#00d632">
                <v-icon size="16">mdi-whatsapp</v-icon>
              </v-btn>
            </div>
          </div>

          <div>
            <h4 class="lp-footer__heading">Plataforma</h4>
            <ul class="lp-footer__links">
              <li><a href="#features">Características</a></li>
              <li><a href="#how">¿Cómo funciona?</a></li>
              <li><a href="#courts">Tipos de canchas</a></li>
              <li><a to="/auth/register">Crear cuenta</a></li>
            </ul>
          </div>

          <div>
            <h4 class="lp-footer__heading">Acceso</h4>
            <ul class="lp-footer__links">
              <li><a href="/auth/login">Iniciar sesión</a></li>
              <li><a href="/auth/register">Registrarse</a></li>
              <li><a href="/auth/register">Registrar negocio</a></li>
            </ul>
          </div>

          <div>
            <h4 class="lp-footer__heading">Contacto</h4>
            <ul class="lp-footer__links">
              <li>
                <v-icon size="13" color="#00d632">mdi-email</v-icon>
                info@canchassinteticas.co
              </li>
              <li>
                <v-icon size="13" color="#00d632">mdi-phone</v-icon>
                +57 300 000 0000
              </li>
              <li>
                <v-icon size="13" color="#00d632">mdi-map-marker</v-icon>
                Colombia
              </li>
            </ul>
          </div>
        </div>

        <div class="lp-footer__bottom">
          <span>© {{ new Date().getFullYear() }} Canchas Sintéticas · Todos los derechos reservados</span>
          <span>Hecho con <v-icon size="12" color="#00d632">mdi-heart</v-icon> en Colombia</span>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const authStore = useAuthStore()
authStore.hydrate()

if (authStore.isAuthenticated) {
  navigateTo('/dashboard')
}

// Navbar scroll effect
const scrolled = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 60
  })
})

const trust = [
  { icon: 'mdi-shield-check', label: 'Pagos seguros' },
  { icon: 'mdi-clock-fast', label: 'Reserva en segundos' },
  { icon: 'mdi-calendar-check', label: 'Cancela cuando quieras' },
]

const stats = [
  { value: '500+', label: 'Canchas registradas' },
  { value: '15K+', label: 'Usuarios activos' },
  { value: '50K+', label: 'Reservas completadas' },
  { value: '20+', label: 'Ciudades' },
]

const features = [
  {
    icon: 'mdi-calendar-clock',
    color: '#00d632',
    title: 'Reserva en tiempo real',
    desc: 'Consulta disponibilidad y reserva al instante, las 24 horas del día.',
  },
  {
    icon: 'mdi-cellphone-check',
    color: '#00a8ff',
    title: 'Desde tu celular',
    desc: 'Interfaz optimizada para móvil. Reserva desde cualquier lugar en segundos.',
  },
  {
    icon: 'mdi-shield-lock',
    color: '#ffd700',
    title: 'Pagos seguros',
    desc: 'Nequi, transferencia bancaria y más métodos de pago respaldados.',
  },
  {
    icon: 'mdi-storefront',
    color: '#ff5c5c',
    title: 'Para dueños de negocios',
    desc: 'Gestiona tus canchas, horarios y reservas desde un solo panel.',
  },
  {
    icon: 'mdi-chart-bar',
    color: '#b967ff',
    title: 'Estadísticas en tiempo real',
    desc: 'Dashboard completo con reservas, ingresos y métricas de tu negocio.',
  },
  {
    icon: 'mdi-headset',
    color: '#00d632',
    title: 'Soporte dedicado',
    desc: 'Equipo de soporte disponible para resolver dudas de negocios y clientes.',
  },
]

const steps = [
  {
    icon: 'mdi-account-plus',
    title: 'Crea tu cuenta',
    desc: 'Regístrate gratis en menos de un minuto con tu email o número de teléfono.',
  },
  {
    icon: 'mdi-soccer-field',
    title: 'Elige tu cancha',
    desc: 'Explora canchas disponibles, filtra por tipo, precio y horario.',
  },
  {
    icon: 'mdi-check-circle',
    title: '¡Reserva y juega!',
    desc: 'Confirma tu reserva, envía el comprobante de pago y ve a jugar.',
  },
]

const courtTypes = [
  { icon: 'mdi-soccer-field', name: 'Fútbol 5', desc: 'Canchas compactas para partidos rápidos y emocionantes', players: '5 vs 5' },
  { icon: 'mdi-soccer-field', name: 'Fútbol 7', desc: 'El formato más popular. Máxima intensidad en cancha mediana', players: '7 vs 7' },
  { icon: 'mdi-soccer-field', name: 'Fútbol 11', desc: 'Cancha completa para vivir la experiencia profesional', players: '11 vs 11' },
  { icon: 'mdi-run-fast', name: 'Futsal', desc: 'Fútbol sala de alta intensidad y control técnico', players: '5 vs 5' },
  { icon: 'mdi-waves', name: 'Fútbol Playa', desc: 'Diversión en arena con amigos en canchas especiales', players: '5 vs 5' },
  { icon: 'mdi-soccer', name: 'Mini Fútbol', desc: 'Ideal para niños y grupos pequeños, divertido y seguro', players: '3 vs 3' },
]
</script>

<style>
/* ═══════════════════════════════════════════════════════════
   GLOBAL RESET & BASE
═══════════════════════════════════════════════════════════ */
.landing {
  background: #080c14;
  color: #e8eaf0;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  overflow-x: hidden;
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════ */
.lp-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background .3s, backdrop-filter .3s, border-color .3s;
  border-bottom: 1px solid transparent;
}

.lp-nav--scrolled {
  background: rgba(8, 12, 20, .92);
  backdrop-filter: blur(12px);
  border-bottom-color: rgba(0, 214, 50, .15);
}

.lp-nav__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.lp-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.lp-logo__text {
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: .08em;
  color: white;
}

.lp-logo__accent {
  color: #00d632;
  margin-left: 4px;
}

.lp-nav__links {
  display: flex;
  gap: 28px;
  margin-left: auto;
}

.lp-nav__links a {
  color: rgba(255,255,255,.7);
  text-decoration: none;
  font-size: .875rem;
  font-weight: 500;
  transition: color .2s;
}

.lp-nav__links a:hover { color: #00d632; }

.lp-nav__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

/* ═══════════════════════════════════════════════════════════
   BLOBS
═══════════════════════════════════════════════════════════ */
.lp-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.lp-blob--1 {
  width: 500px; height: 500px;
  background: rgba(0, 214, 50, .12);
  top: -100px; left: -100px;
}

.lp-blob--2 {
  width: 400px; height: 400px;
  background: rgba(0, 168, 255, .08);
  top: 200px; right: -80px;
}

.lp-blob--cta-1 {
  width: 400px; height: 400px;
  background: rgba(0, 214, 50, .15);
  top: -60px; left: 5%;
}

.lp-blob--cta-2 {
  width: 300px; height: 300px;
  background: rgba(0, 168, 255, .08);
  bottom: -40px; right: 10%;
}

/* ═══════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════ */
.lp-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 100px 24px 60px;
}

.lp-hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,214,50,.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,214,50,.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
}

.lp-hero__content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .lp-hero__content { grid-template-columns: 1fr; text-align: center; }
  .lp-hero__visual { display: none; }
  .lp-hero__trust { justify-content: center; }
  .lp-hero__ctas { justify-content: center; }
}

.lp-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(0,214,50,.1);
  border: 1px solid rgba(0,214,50,.25);
  color: #00d632;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .06em;
  padding: 5px 12px;
  border-radius: 20px;
  margin-bottom: 20px;
  width: fit-content;
}

.lp-hero__title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -.02em;
  color: white;
  margin-bottom: 20px;
}

.lp-hero__title--green {
  color: #00d632;
  text-shadow: 0 0 40px rgba(0,214,50,.5);
}

.lp-hero__subtitle {
  font-size: 1.05rem;
  color: rgba(255,255,255,.6);
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 480px;
}

.lp-hero__ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.lp-btn-glow {
  box-shadow: 0 0 30px rgba(0, 214, 50, .4), 0 4px 15px rgba(0, 214, 50, .2) !important;
  transition: box-shadow .2s !important;
}

.lp-btn-glow:hover {
  box-shadow: 0 0 50px rgba(0, 214, 50, .6), 0 8px 25px rgba(0, 214, 50, .3) !important;
}

.lp-hero__trust {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.lp-trust-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: .8rem;
  color: rgba(255,255,255,.55);
}

/* ── Hero visual / field ─────────────────────────────────────── */
.lp-hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lp-field-card {
  position: relative;
  width: 360px;
  height: 420px;
  border-radius: 20px;
  background: linear-gradient(135deg, #0d2015 0%, #0a1a0f 100%);
  border: 1px solid rgba(0,214,50,.25);
  box-shadow: 0 0 60px rgba(0,214,50,.15), inset 0 0 40px rgba(0,214,50,.04);
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.lp-field-card__screen {
  width: 300px;
  height: 340px;
  border: 2px solid rgba(255,255,255,.2);
  border-radius: 8px;
  position: relative;
  background: linear-gradient(180deg, #1a4028 0%, #143320 50%, #1a4028 100%);
}

/* Field markings */
.lp-field-lines { position: absolute; inset: 0; }

.lp-field-circle {
  position: absolute;
  width: 80px; height: 80px;
  border: 2px solid rgba(255,255,255,.35);
  border-radius: 50%;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

.lp-field-midline {
  position: absolute;
  left: 0; right: 0;
  top: 50%;
  height: 2px;
  background: rgba(255,255,255,.25);
}

.lp-field-penalty {
  position: absolute;
  width: 80px; height: 56px;
  border: 2px solid rgba(255,255,255,.25);
  left: 50%; transform: translateX(-50%);
}

.lp-field-penalty--left {
  top: 0;
  border-top: none;
  border-radius: 0 0 6px 6px;
}

.lp-field-penalty--right {
  bottom: 0;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
}

.lp-field-goal {
  position: absolute;
  width: 40px; height: 14px;
  border: 2px solid rgba(255,255,255,.4);
  left: 50%; transform: translateX(-50%);
  background: rgba(255,255,255,.05);
}

.lp-field-goal--left { top: 0; border-top: none; }
.lp-field-goal--right { bottom: 0; border-bottom: none; }

/* Floating cards */
.lp-float-card {
  position: absolute;
  background: rgba(8,12,20,.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0,214,50,.2);
  border-radius: 10px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: .78rem;
  color: rgba(255,255,255,.8);
  white-space: nowrap;
  box-shadow: 0 8px 32px rgba(0,0,0,.4);
}

.lp-float-card strong { color: #00d632; font-weight: 700; }

.lp-float-card--top {
  top: -16px;
  right: -24px;
}

.lp-float-card--bottom {
  bottom: -16px;
  left: -24px;
}

.lp-scroll-hint {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

/* ═══════════════════════════════════════════════════════════
   STATS BAR
═══════════════════════════════════════════════════════════ */
.lp-stats {
  background: rgba(0,214,50,.07);
  border-top: 1px solid rgba(0,214,50,.12);
  border-bottom: 1px solid rgba(0,214,50,.12);
  padding: 32px 24px;
}

.lp-stats__inner {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
}

@media (max-width: 600px) {
  .lp-stats__inner { grid-template-columns: repeat(2, 1fr); }
}

.lp-stat__num {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: #00d632;
  line-height: 1;
  margin-bottom: 4px;
  text-shadow: 0 0 20px rgba(0,214,50,.4);
}

.lp-stat__label {
  font-size: .8rem;
  color: rgba(255,255,255,.5);
  font-weight: 500;
}

/* ═══════════════════════════════════════════════════════════
   SECTIONS COMMON
═══════════════════════════════════════════════════════════ */
.lp-section {
  padding: 80px 24px;
}

.lp-section--dark {
  background: rgba(255,255,255,.02);
  border-top: 1px solid rgba(255,255,255,.05);
  border-bottom: 1px solid rgba(255,255,255,.05);
}

.lp-container {
  max-width: 1200px;
  margin: 0 auto;
}

.lp-section__header {
  text-align: center;
  margin-bottom: 56px;
}

.lp-tag {
  display: inline-block;
  background: rgba(0,214,50,.1);
  border: 1px solid rgba(0,214,50,.2);
  color: #00d632;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 14px;
}

.lp-section__title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 12px;
}

.lp-section__sub {
  font-size: 1rem;
  color: rgba(255,255,255,.5);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ═══════════════════════════════════════════════════════════
   FEATURES GRID
═══════════════════════════════════════════════════════════ */
.lp-features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 900px) {
  .lp-features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 560px) {
  .lp-features-grid { grid-template-columns: 1fr; }
}

.lp-feature-card {
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.07);
  border-radius: 14px;
  padding: 28px 24px;
  transition: border-color .2s, background .2s, transform .2s;
}

.lp-feature-card:hover {
  border-color: rgba(0,214,50,.3);
  background: rgba(0,214,50,.04);
  transform: translateY(-4px);
}

.lp-feature-card__icon {
  width: 52px; height: 52px;
  background: rgba(255,255,255,.05);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 16px;
}

.lp-feature-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
}

.lp-feature-card__desc {
  font-size: .85rem;
  color: rgba(255,255,255,.5);
  line-height: 1.6;
}

/* ═══════════════════════════════════════════════════════════
   HOW IT WORKS / STEPS
═══════════════════════════════════════════════════════════ */
.lp-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;
}

@media (max-width: 768px) {
  .lp-steps { grid-template-columns: 1fr; }
  .lp-step-connector { display: none; }
}

.lp-step {
  text-align: center;
  position: relative;
}

.lp-step__num {
  position: absolute;
  top: -12px; right: -8px;
  width: 28px; height: 28px;
  background: #00d632;
  color: #000;
  font-weight: 800;
  font-size: .8rem;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  z-index: 2;
}

.lp-step__icon {
  width: 80px; height: 80px;
  background: rgba(0,214,50,.08);
  border: 2px solid rgba(0,214,50,.2);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  transition: background .2s, border-color .2s;
}

.lp-step:hover .lp-step__icon {
  background: rgba(0,214,50,.15);
  border-color: rgba(0,214,50,.5);
}

.lp-step__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
}

.lp-step__desc {
  font-size: .875rem;
  color: rgba(255,255,255,.5);
  line-height: 1.6;
}

.lp-step-connector {
  position: absolute;
  top: 38px;
  height: 2px;
  background: linear-gradient(90deg, rgba(0,214,50,.3), rgba(0,214,50,.1));
  border-top: 1px dashed rgba(0,214,50,.2);
}

.lp-step-connector--1 { left: calc(16.6% + 20px); width: calc(33.3% - 40px); }
.lp-step-connector--2 { left: calc(50% + 20px);    width: calc(33.3% - 40px); }

/* ═══════════════════════════════════════════════════════════
   COURT TYPES
═══════════════════════════════════════════════════════════ */
.lp-courts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 900px) { .lp-courts-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .lp-courts-grid { grid-template-columns: 1fr; } }

.lp-court-card {
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.07);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  transition: border-color .2s, background .2s;
}

.lp-court-card:hover {
  border-color: rgba(0,214,50,.3);
  background: rgba(0,214,50,.04);
}

.lp-court-card__icon {
  width: 52px; height: 52px;
  flex-shrink: 0;
  background: rgba(0,214,50,.08);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
}

.lp-court-card__info h3 {
  font-size: .95rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
}

.lp-court-card__info p {
  font-size: .8rem;
  color: rgba(255,255,255,.45);
  line-height: 1.5;
  margin-bottom: 8px;
}

/* ═══════════════════════════════════════════════════════════
   CTA BANNER
═══════════════════════════════════════════════════════════ */
.lp-cta-banner {
  background: radial-gradient(ellipse at center, rgba(0,214,50,.12) 0%, transparent 70%),
              rgba(255,255,255,.02);
  border-top: 1px solid rgba(0,214,50,.15);
  border-bottom: 1px solid rgba(0,214,50,.15);
  padding: 80px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.lp-cta-banner__inner {
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
}

.lp-cta-banner__title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 900;
  color: white;
  margin-bottom: 12px;
}

.lp-cta-banner__sub {
  font-size: 1rem;
  color: rgba(255,255,255,.55);
  line-height: 1.7;
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════ */
.lp-footer {
  background: rgba(0,0,0,.4);
  border-top: 1px solid rgba(255,255,255,.06);
  padding: 60px 24px 24px;
}

.lp-footer__grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .lp-footer__grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .lp-footer__grid { grid-template-columns: 1fr; }
}

.lp-footer__tagline {
  font-size: .85rem;
  color: rgba(255,255,255,.4);
  line-height: 1.6;
  max-width: 260px;
}

.lp-footer__heading {
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.5);
  margin-bottom: 16px;
}

.lp-footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lp-footer__links li,
.lp-footer__links a {
  font-size: .85rem;
  color: rgba(255,255,255,.45);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color .2s;
}

.lp-footer__links a:hover { color: #00d632; }

.lp-footer__bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: .8rem;
  color: rgba(255,255,255,.3);
}
</style>
