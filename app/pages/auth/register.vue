<template>
  <v-card elevation="2" class="pa-2">
    <v-card-title class="text-h6 font-weight-bold pt-4 pb-0 px-6">
      Crear Cuenta
    </v-card-title>
    <v-card-subtitle class="px-6 pb-4">Completa tu información</v-card-subtitle>

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

      <v-form ref="formRef" @submit.prevent="handleRegister">
        <v-row>
          <v-col cols="6" class="pb-0">
            <v-text-field
              v-model="form.firstName"
              label="Nombre"
              prepend-inner-icon="mdi-account-outline"
              :rules="[rules.required]"
            />
          </v-col>
          <v-col cols="6" class="pb-0">
            <v-text-field
              v-model="form.lastName"
              label="Apellido"
              :rules="[rules.required]"
            />
          </v-col>
        </v-row>

        <v-text-field
          v-model="form.email"
          label="Correo electrónico"
          type="email"
          prepend-inner-icon="mdi-email-outline"
          :rules="[rules.required, rules.email]"
          class="mb-2"
        />

        <v-text-field
          v-model="form.phone"
          label="Teléfono (opcional)"
          prepend-inner-icon="mdi-phone-outline"
          class="mb-2"
        />

        <v-select
          v-model="form.role"
          label="Tipo de cuenta"
          :items="roleOptions"
          prepend-inner-icon="mdi-account-key-outline"
          :rules="[rules.required]"
          class="mb-2"
        />

        <v-text-field
          v-model="form.password"
          label="Contraseña"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :rules="[rules.required, rules.minLength]"
          @click:append-inner="showPassword = !showPassword"
          class="mb-2"
        />

        <v-text-field
          v-model="form.confirmPassword"
          label="Confirmar contraseña"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-check-outline"
          :rules="[rules.required, rules.passwordMatch]"
          class="mb-4"
        />

        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          :loading="loading"
        >
          Registrarse
        </v-btn>
      </v-form>
    </v-card-text>

    <v-card-text class="text-center pb-6">
      <span class="text-body-2 text-medium-emphasis">¿Ya tienes cuenta? </span>
      <NuxtLink to="/auth/login" class="text-primary text-body-2 font-weight-medium">
        Inicia sesión
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
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  role: 'client',
  password: '',
  confirmPassword: '',
})

const roleOptions = [
  { title: 'Cliente', value: 'client' },
  { title: 'Propietario de Negocio', value: 'bussines' },
]

const rules = {
  required: (v: string) => !!v || 'Este campo es requerido',
  email: (v: string) => /.+@.+\..+/.test(v) || 'Email inválido',
  minLength: (v: string) => v.length >= 6 || 'Mínimo 6 caracteres',
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
      lastName: form.lastName,
      email: form.email,
      phone: form.phone || undefined,
      role: form.role,
      password: form.password,
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
