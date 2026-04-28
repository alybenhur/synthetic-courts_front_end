<template>
  <v-app theme="dark" class="dash-app">

    <!-- ═══════════════════════════════════════════════════════
         SIDEBAR
    ═══════════════════════════════════════════════════════ -->
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      class="dash-drawer"
    >
      <!-- Logo -->
      <div class="dash-logo" :class="{ 'dash-logo--rail': rail }">
        <div class="dash-logo__icon">
          <v-icon color="#00d632" :size="rail ? 22 : 24">mdi-soccer-field</v-icon>
        </div>
        <transition name="fade">
          <div v-if="!rail" class="dash-logo__text">
            <span class="dash-logo__name">CANCHAS<span class="dash-logo__accent">SIN.</span></span>
            <span class="dash-logo__role">{{ authStore.roleLabel }}</span>
          </div>
        </transition>
        <v-btn
          :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
          variant="text"
          size="small"
          class="dash-rail-btn ml-auto"
          @click="rail = !rail"
        />
      </div>

      <div class="dash-drawer__divider" />

      <!-- Navigation Items -->
      <v-list density="compact" nav class="dash-nav mt-1 px-2">
        <template v-for="item in navItems" :key="item.to">

          <!-- Grupo con hijos -->
          <v-list-group v-if="item.children" :value="item.title">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="item.icon"
                :title="item.title"
                rounded="lg"
                class="dash-nav-item"
              />
            </template>
            <v-list-item
              v-for="child in item.children"
              :key="child.to"
              :to="child.to"
              :prepend-icon="child.icon"
              :title="child.title"
              rounded="lg"
              active-color="primary"
              class="dash-nav-item dash-nav-item--child"
            />
          </v-list-group>

          <!-- Item simple -->
          <v-list-item
            v-else
            :to="item.to"
            :prepend-icon="item.icon"
            :title="item.title"
            rounded="lg"
            active-color="primary"
            class="dash-nav-item"
          />
        </template>
      </v-list>

      <!-- Footer del drawer -->
      <template #append>
        <div class="dash-drawer__divider" />
        <v-list density="compact" nav class="px-2 py-2">
          <v-list-item
            to="/profile"
            prepend-icon="mdi-account-circle-outline"
            title="Mi Perfil"
            rounded="lg"
            active-color="primary"
            class="dash-nav-item"
          />
          <v-list-item
            prepend-icon="mdi-logout"
            title="Cerrar Sesión"
            rounded="lg"
            class="dash-nav-item dash-nav-item--logout"
            @click="handleLogout"
          />
        </v-list>
      </template>
    </v-navigation-drawer>

    <!-- ═══════════════════════════════════════════════════════
         APP BAR
    ═══════════════════════════════════════════════════════ -->
    <v-app-bar elevation="0" class="dash-appbar">
      <!-- Botón hamburguesa en mobile -->
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click="drawer = !drawer"
      />

      <!-- Breadcrumb / título -->
      <div class="dash-appbar__title">
        <v-icon size="16" color="rgba(255,255,255,.3)" class="mr-1">mdi-chevron-right</v-icon>
        <span>{{ currentPageTitle }}</span>
      </div>

      <template #append>
        <!-- Badge de notificaciones (placeholder) -->
        <v-btn icon variant="text" class="mr-1" size="small">
          <v-icon color="rgba(255,255,255,.5)">mdi-bell-outline</v-icon>
        </v-btn>

        <!-- Menú de usuario -->
        <v-menu location="bottom end" :offset="8">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="tonal"
              color="primary"
              rounded="lg"
              class="dash-user-btn mr-3"
              size="small"
            >
              <v-avatar size="24" color="primary" class="mr-0 mr-sm-2">
                <span class="text-caption font-weight-bold" style="color:#000">{{ initials }}</span>
              </v-avatar>
              <span class="d-none d-sm-inline text-body-2">{{ authStore.fullName }}</span>
              <v-icon end size="16">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list
            density="compact"
            rounded="lg"
            min-width="200"
            class="dash-user-menu"
          >
            <v-list-item class="px-4 py-3">
              <template #prepend>
                <v-avatar size="36" color="primary" class="mr-3">
                  <span class="text-body-2 font-weight-bold" style="color:#000">{{ initials }}</span>
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-bold text-body-2">{{ authStore.fullName }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption">{{ authStore.roleLabel }}</v-list-item-subtitle>
            </v-list-item>
            <v-divider />
            <v-list-item
              to="/profile"
              prepend-icon="mdi-account-outline"
              title="Mi Perfil"
              density="compact"
            />
            <v-divider />
            <v-list-item
              prepend-icon="mdi-logout"
              title="Cerrar Sesión"
              density="compact"
              @click="handleLogout"
            />
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <!-- ═══════════════════════════════════════════════════════
         MAIN CONTENT
    ═══════════════════════════════════════════════════════ -->
    <v-main class="dash-main">
      <!-- Grid de fondo sutil -->
      <div class="dash-bg-grid" />
      <v-container fluid class="pa-5 pa-md-7 dash-content">
        <slot />
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const route = useRoute()

const drawer = ref(true)
const rail = ref(false)

const initials = computed(() => {
  if (!authStore.user) return '?'
  return `${authStore.user.firstName[0]}${authStore.user.lastName[0]}`.toUpperCase()
})

// ── Navegación por rol ──────────────────────────────────
const adminNav = [
  { to: '/dashboard',        icon: 'mdi-view-dashboard',  title: 'Dashboard' },
  { to: '/admin/users',      icon: 'mdi-account-group',   title: 'Usuarios' },
  { to: '/admin/businesses', icon: 'mdi-store',            title: 'Negocios' },
  { to: '/admin/courts',     icon: 'mdi-soccer-field',     title: 'Canchas' },
  { to: '/admin/bookings',   icon: 'mdi-calendar-check',  title: 'Reservas' },
  { to: '/admin/software',   icon: 'mdi-application',     title: 'Software' },
]

const businessNav = [
  { to: '/dashboard',         icon: 'mdi-view-dashboard', title: 'Dashboard' },
  { to: '/business',          icon: 'mdi-store-outline',   title: 'Mis Negocios' },
  { to: '/business/courts',   icon: 'mdi-soccer-field',    title: 'Mis Canchas' },
  { to: '/business/bookings', icon: 'mdi-calendar-check', title: 'Reservas' },
]

const clientNav = [
  { to: '/dashboard',        icon: 'mdi-view-dashboard',    title: 'Dashboard' },
  { to: '/client/courts',    icon: 'mdi-soccer-field',       title: 'Explorar Canchas' },
  { to: '/client/bookings',  icon: 'mdi-calendar-account',  title: 'Mis Reservas' },
]

const navItems = computed(() => {
  if (authStore.isAdmin)    return adminNav
  if (authStore.isBusiness) return businessNav
  return clientNav
})

const currentPageTitle = computed(() => {
  const all = [...adminNav, ...businessNav, ...clientNav]
  const found = all.find(item => item.to === route.path)
  return found?.title ?? 'Dashboard'
})

const handleLogout = () => authStore.logout()
</script>

<style>
/* ──────────────────────────────────────────
   APP WRAPPER
────────────────────────────────────────── */
.dash-app {
  font-family: 'Inter', 'Segoe UI', sans-serif !important;
}

/* ──────────────────────────────────────────
   SIDEBAR / DRAWER
────────────────────────────────────────── */
.dash-drawer.v-navigation-drawer {
  background: #0d1120 !important;
  border-right: 1px solid rgba(0,214,50,.1) !important;
}

.dash-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 14px 14px;
  min-height: 64px;
}
.dash-logo--rail {
  justify-content: center;
  padding: 16px 0;
}
.dash-logo__icon {
  width: 36px;
  height: 36px;
  background: rgba(0,214,50,.12);
  border: 1px solid rgba(0,214,50,.25);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.dash-logo__text {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.dash-logo__name {
  font-size: .85rem;
  font-weight: 800;
  letter-spacing: .07em;
  color: #fff;
  line-height: 1.2;
}
.dash-logo__accent {
  color: #00d632;
}
.dash-logo__role {
  font-size: .7rem;
  color: rgba(255,255,255,.4);
  letter-spacing: .03em;
  margin-top: 1px;
}
.dash-rail-btn {
  opacity: .5;
  transition: opacity .2s;
}
.dash-rail-btn:hover { opacity: 1; }

.dash-drawer__divider {
  height: 1px;
  background: rgba(255,255,255,.06);
  margin: 0 12px;
}

/* Nav items */
.dash-nav .v-list-item {
  color: rgba(255,255,255,.55) !important;
  margin-bottom: 2px;
  transition: background .15s, color .15s;
}
.dash-nav .v-list-item:hover {
  background: rgba(255,255,255,.05) !important;
  color: rgba(255,255,255,.9) !important;
}
.dash-nav .v-list-item--active {
  background: rgba(0,214,50,.12) !important;
  color: #00d632 !important;
}
.dash-nav .v-list-item--active .v-icon {
  color: #00d632 !important;
}
.dash-nav-item--child {
  margin-left: 8px !important;
}
.dash-nav-item--logout:hover {
  background: rgba(255,82,82,.08) !important;
  color: #FF5252 !important;
}

/* Transition del logo */
.fade-enter-active,
.fade-leave-active { transition: opacity .15s; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

/* ──────────────────────────────────────────
   APP BAR
────────────────────────────────────────── */
.dash-appbar.v-app-bar {
  background: rgba(8,12,20,.85) !important;
  backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(0,214,50,.1) !important;
}
.dash-appbar__title {
  display: flex;
  align-items: center;
  font-size: .875rem;
  font-weight: 600;
  color: rgba(255,255,255,.7);
  margin-left: 4px;
}
.dash-user-btn {
  letter-spacing: 0 !important;
}
.dash-user-menu.v-list {
  background: #0d1120 !important;
  border: 1px solid rgba(0,214,50,.15) !important;
}

/* ──────────────────────────────────────────
   MAIN / CONTENT
────────────────────────────────────────── */
.dash-main {
  background: #080c14 !important;
  position: relative;
}
.dash-bg-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,214,50,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,214,50,.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 60% 20%, black 20%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}
.dash-content {
  position: relative;
  z-index: 1;
}
</style>
