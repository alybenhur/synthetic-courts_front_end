<template>
  <div class="auth-card auth-card--register">

    <!-- Cabecera -->
    <div class="auth-card__header">
      <div class="auth-card__icon">
        <v-icon color="#00d632" size="32">mdi-account-plus</v-icon>
      </div>
      <h1 class="auth-card__title">Crea tu cuenta</h1>
      <p class="auth-card__subtitle">Únete y empieza a reservar canchas hoy</p>
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
    <v-form ref="formRef" @submit.prevent="handleRegister">

      <!-- Nombre / Apellido -->
      <v-row dense class="mb-1">
        <v-col cols="6">
          <v-text-field
            v-model="form.firstName"
            label="Nombre"
            prepend-inner-icon="mdi-account-outline"
            :rules="[rules.required]"
            variant="outlined"
            color="#00d632"
            bg-color="rgba(255,255,255,.04)"
            class="auth-field"
            hide-details="auto"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="form.lastName"
            label="Apellido"
            :rules="[rules.required]"
            variant="outlined"
            color="#00d632"
            bg-color="rgba(255,255,255,.04)"
            class="auth-field"
            hide-details="auto"
          />
        </v-col>
      </v-row>

      <v-text-field
        v-model="form.email"
        label="Correo electrónico"
        type="email"
        prepend-inner-icon="mdi-email-outline"
        :rules="[rules.required, rules.email]"
        variant="outlined"
        color="#00d632"
        bg-color="rgba(255,255,255,.04)"
        class="mb-3 auth-field"
        hide-details="auto"
      />

      <v-text-field
        v-model="form.phone"
        label="Teléfono (opcional)"
        prepend-inner-icon="mdi-phone-outline"
        variant="outlined"
        color="#00d632"
        bg-color="rgba(255,255,255,.04)"
        class="mb-3 auth-field"
        hide-details="auto"
      />

      <!-- Tipo de cuenta con chips estilo toggle -->
      <div class="auth-role-toggle mb-4">
        <span class="auth-role-toggle__label">Tipo de cuenta</span>
        <div class="auth-role-toggle__options">
          <button
            type="button"
            class="auth-role-btn"
            :class="{ 'auth-role-btn--active': form.role === 'client' }"
            @click="form.role = 'client'"
          >
            <v-icon size="18">mdi-account-outline</v-icon>
            Cliente
          </button>
          <button
            type="button"
            class="auth-role-btn"
            :class="{ 'auth-role-btn--active': form.role === 'bussines' }"
            @click="form.role = 'bussines'"
          >
            <v-icon size="18">mdi-store-outline</v-icon>
            Negocio
          </button>
        </div>
      </div>

      <v-text-field
        v-model="form.password"
        label="Contraseña"
        :type="showPassword ? 'text' : 'password'"
        prepend-inner-icon="mdi-lock-outline"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        :rules="[rules.required, rules.minLength]"
        @click:append-inner="showPassword = !showPassword"
        variant="outlined"
        color="#00d632"
        bg-color="rgba(255,255,255,.04)"
        class="mb-3 auth-field"
        hide-details="auto"
      />

      <v-text-field
        v-model="form.confirmPassword"
        label="Confirmar contraseña"
        :type="showPassword ? 'text' : 'password'"
        prepend-inner-icon="mdi-lock-check-outline"
        :rules="[rules.required, rules.passwordMatch]"
        variant="outlined"
        color="#00d632"
        bg-color="rgba(255,255,255,.04)"
        class="mb-5 auth-field"
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
        <v-icon start>mdi-check-circle</v-icon>
        Crear cuenta
      </v-btn>
    </v-form>

    <!-- Divisor -->
    <div class="auth-divider">
      <span>¿Ya tienes cuenta?</span>
    </div>

    <v-btn
      variant="outlined"
      block
      size="large"
      rounded="lg"
      to="/auth/login"
      class="auth-btn-secondary"
    >
      Iniciar sesión
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
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  role: 'client',
  password: '',
  confirmPassword: '',
})

const rules = {
  required:      (v: string) => !!v || 'Este campo es requerido',
  email:         (v: string) => /.+@.+\..+/.test(v) || 'Email inválido',
  minLength:     (v: string) => v.length >= 6 || 'Mínimo 6 caracteres',
  passwordMatch: (v: string) => v === form.password || 'Las contraseñas no coinciden',
}

const handleRegister = async () => {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  loading.value = true
  errorMsg.value = ''

  try {
    await authStore.register({
      firstName: form.firstName,
      lastName:  form.lastName,
      email:     form.email,
      phone:     form.phone || undefined,
      role:      form.role,
      password:  form.password,
    })
    router.push('/dashboard')
  } catch (err: any) {
    errorMsg.value = err?.data?.message || 'Error al registrarse'
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
   TARJETA REGISTRO (max-width mayor)
────────────────────────────────────────── */
.auth-card--register {
  max-width: 500px;
}

/* ──────────────────────────────────────────
   TOGGLE DE ROL
────────────────────────────────────────── */
.auth-role-toggle__label {
  display: block;
  font-size: .75rem;
  color: rgba(255,255,255,.45);
  margin-bottom: 8px;
  letter-spacing: .04em;
  text-transform: uppercase;
}
.auth-role-toggle__options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.auth-role-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.03);
  color: rgba(255,255,255,.5);
  font-size: .875rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color .2s, background .2s, color .2s;
  font-family: inherit;
}
.auth-role-btn:hover {
  border-color: rgba(0,214,50,.35);
  color: rgba(255,255,255,.8);
}
.auth-role-btn--active {
  border-color: #00d632 !important;
  background: rgba(0,214,50,.1) !important;
  color: #00d632 !important;
}
</style>
