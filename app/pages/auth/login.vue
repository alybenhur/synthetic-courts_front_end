<template>
  <div class="auth-card">

    <!-- Cabecera -->
    <div class="auth-card__header">
      <div class="auth-card__icon">
        <v-icon color="#00d632" size="32">mdi-soccer</v-icon>
      </div>
      <h1 class="auth-card__title">Bienvenido de nuevo</h1>
      <p class="auth-card__subtitle">Ingresa tus credenciales para continuar</p>
    </div>

    <!-- Alerta de error -->
    <v-alert
      v-if="errorMsg"
      type="error"
      variant="tonal"
      rounded="lg"
      class="mb-5"
      closable
      @click:close="errorMsg = ''"
    >
      {{ errorMsg }}
    </v-alert>

    <!-- Formulario -->
    <v-form ref="formRef" @submit.prevent="handleLogin">
      <v-text-field
        v-model="form.email"
        label="Correo electrónico"
        type="email"
        prepend-inner-icon="mdi-email-outline"
        :rules="[rules.required, rules.email]"
        class="mb-3 auth-field"
        variant="outlined"
        color="#00d632"
        bg-color="rgba(255,255,255,.04)"
        hide-details="auto"
      />

      <v-text-field
        v-model="form.password"
        label="Contraseña"
        :type="showPassword ? 'text' : 'password'"
        prepend-inner-icon="mdi-lock-outline"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        :rules="[rules.required]"
        @click:append-inner="showPassword = !showPassword"
        class="mb-5 auth-field"
        variant="outlined"
        color="#00d632"
        bg-color="rgba(255,255,255,.04)"
        hide-details="auto"
      />

      <v-btn
        type="submit"
        block
        size="large"
        rounded="lg"
        :loading="loading"
        class="auth-submit font-weight-bold"
        style="color:#000"
      >
        <v-icon start>mdi-login</v-icon>
        Iniciar Sesión
      </v-btn>
    </v-form>

    <!-- Divisor -->
    <div class="auth-divider">
      <span>¿No tienes cuenta?</span>
    </div>

    <!-- Ir a registro -->
    <v-btn
      variant="outlined"
      block
      size="large"
      rounded="lg"
      to="/auth/register"
      class="auth-btn-secondary"
    >
      Crear cuenta gratis
    </v-btn>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const authStore = useAuthStore()
const router = useRouter()

const formRef = ref()
const loading = ref(false)
const errorMsg = ref('')
const showPassword = ref(false)

const form = reactive({
  email: '',
  password: '',
})

const rules = {
  required: (v: string) => !!v || 'Este campo es requerido',
  email:    (v: string) => /.+@.+\..+/.test(v) || 'Email inválido',
}

const handleLogin = async () => {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  loading.value = true
  errorMsg.value = ''

  try {
    await authStore.login(form.email, form.password)
    router.push('/dashboard')
  } catch (err: any) {
    errorMsg.value = err?.data?.message || 'Credenciales inválidas'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  authStore.hydrate()
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  }
})
</script>

<style>
/* ──────────────────────────────────────────
   TARJETA GLASS
────────────────────────────────────────── */
.auth-card {
  width: 100%;
  max-width: 440px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(0,214,50,.15);
  border-radius: 20px;
  padding: 40px 36px;
  backdrop-filter: blur(16px);
  box-shadow:
    0 0 0 1px rgba(0,214,50,.08),
    0 24px 64px rgba(0,0,0,.5);
}

.auth-card__header {
  text-align: center;
  margin-bottom: 32px;
}
.auth-card__icon {
  width: 64px; height: 64px;
  background: rgba(0,214,50,.12);
  border: 1px solid rgba(0,214,50,.25);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.auth-card__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 6px;
  letter-spacing: -.01em;
}
.auth-card__subtitle {
  font-size: .875rem;
  color: rgba(255,255,255,.5);
  margin: 0;
}

/* Inputs en modo oscuro */
.auth-field .v-field__outline { border-color: rgba(255,255,255,.15) !important; }
.auth-field .v-label { color: rgba(255,255,255,.5) !important; }
.auth-field input { color: #e8eaf0 !important; }
.auth-field .v-icon { color: rgba(255,255,255,.4) !important; }

/* Botón primario verde */
.auth-submit {
  background: #00d632 !important;
  box-shadow: 0 4px 24px rgba(0,214,50,.35) !important;
  transition: box-shadow .2s, transform .15s !important;
}
.auth-submit:hover {
  box-shadow: 0 6px 32px rgba(0,214,50,.55) !important;
  transform: translateY(-1px);
}

/* Botón secundario outlined */
.auth-btn-secondary {
  border-color: rgba(255,255,255,.2) !important;
  color: rgba(255,255,255,.7) !important;
}
.auth-btn-secondary:hover {
  border-color: #00d632 !important;
  color: #00d632 !important;
}

/* Divisor */
.auth-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 0 16px;
}
.auth-divider::before,
.auth-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(255,255,255,.1);
}
.auth-divider span {
  font-size: .8rem;
  color: rgba(255,255,255,.35);
  white-space: nowrap;
}

@media (max-width: 480px) {
  .auth-card { padding: 28px 20px; }
}
</style>
