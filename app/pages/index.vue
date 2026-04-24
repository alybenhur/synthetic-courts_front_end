<template>
  <div />
</template>

<script setup lang="ts">
const authStore = useAuthStore()
authStore.hydrate()

if (authStore.isAuthenticated) {
  navigateTo('/dashboard')
} else {
  navigateTo('/auth/login')
}
</script>
