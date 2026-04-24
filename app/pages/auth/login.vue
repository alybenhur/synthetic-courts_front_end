<template>
  <v-card elevation="2" class="pa-2">

    <!-- Banner superior -->
    

    <v-card-title class="text-h6 font-weight-bold pt-4 pb-0 px-6">
      Iniciar Sesión
    </v-card-title>
    <v-card-subtitle class="px-6 pb-4">Ingresa tus credenciales</v-card-subtitle>

    <v-card-text class="px-6">
      <v-alert
        v-if="errorMsg"
        type="error"
        variant="tonal"
        class="mb-4"
        closable
        @click:close="errorMsg = ''"
      >
        {{ errorMsg }}
      </v-alert>

      <v-form ref="formRef" @submit.prevent="handleLogin">
        <v-text-field
          v-model="form.email"
          label="Correo electrónico"
          type="email"
          prepend-inner-icon="mdi-email-outline"
          :rules="[rules.required, rules.email]"
          class="mb-2"
        />

        <v-text-field
          v-model="form.password"
          label="Contraseña"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :rules="[rules.required]"
          @click:append-inner="showPassword = !showPassword"
          class="mb-4"
        />

        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          :loading="loading"
        >
          Iniciar Sesión
        </v-btn>
      </v-form>
    </v-card-text>

    <v-card-text class="text-center pb-6">
      <span class="text-body-2 text-medium-emphasis">¿No tienes cuenta? </span>
      <NuxtLink to="/auth/register" class="text-primary text-body-2 font-weight-medium">
        Regístrate aquí
      </NuxtLink>
    </v-card-text>
  </v-card>
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
  email: (v: string) => /.+@.+\..+/.test(v) || 'Email inválido',
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

// Redirect if already authenticated
onMounted(() => {
  authStore.hydrate()
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  }
})
</script>

<style scoped>
.banner-container {
  width: 100%;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}

.banner-image {
  width: 100%;
  height: 160px;
}
</style>