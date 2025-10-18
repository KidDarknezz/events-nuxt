<template>
  <UHeader>
    <template #title>
      <OSLogo class="h-8 w-auto" />
    </template>
    <template #right>
      <UPopover arrow>
        <UButton :label="authBtnLabel" variant="ghost" color="neutral" icon="i-lucide-user" />
        <template #content>
          <div class="px-4 py-4 flex flex-col w-60" v-if="!auth.user">
            <UInput
              color="neutral"
              variant="soft"
              placeholder="Usuario"
              class="mb-2"
              size="lg"
              v-model="username"
            />
            <UInput
              color="neutral"
              variant="soft"
              placeholder="Contraseña"
              class="mb-3"
              size="lg"
              v-model="password"
            />
            <UButton
              class="bg-rose-500 hover:bg-rose-600 active:bg-rose-400 disabled:bg-rose-300 text-white mb-1"
              @click="handleLogin"
              :disabled="!username.trim() || !password.trim()"
              :loading="auth.loading"
            >
              <div class="w-full">Iniciar sesión</div>
            </UButton>
            <UButton color="neutral" variant="subtle" class="mb-4">
              <div class="flex items-center justify-center w-full gap-2">
                <img :src="Google" width="15px" />
                <div>Google</div>
              </div>
            </UButton>
            <USeparator />
            <UButton
              class="mt-4 text-blue-500 hover:text-blue-600 active:text-blue-400 mb-3"
              variant="link"
              size="xs"
            >
              <div class="w-full text-center">Regístrate</div>
            </UButton>
            <div class="text-xs text-center">
              <span class="text-rose-500 underline">Términos y condiciones</span>
              para registro de usuario
            </div>
          </div>
          <div class="px-4 py-4 flex flex-col w-60" v-else>
            <div class="mb-4">
              {{ auth.user }}
            </div>
            <UButton
              color="neutral"
              variant="subtle"
              class="mb-4"
              @click="handleLogout"
              :loading="auth.loading"
            >
              <div class="w-full">Cerrar sesión</div>
            </UButton>
          </div>
        </template>
      </UPopover>
    </template>
  </UHeader>
  <div class="bg-blue-500 py-4 text-white fixed w-full">
    <UContainer>
      <div class="flex justify-between items-center">
        <div>Instala nuestra app.</div>
        <div class="flex gap-2">
          <img :src="AppStoreBadge" width="100px" />
          <img :src="PlayStoreBadge" width="100px" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
  import AppStoreBadge from '@/assets/images/app-store-badge.svg'
  import PlayStoreBadge from '@/assets/images/play-store-badge.svg'
  import Google from '@/assets/images/google.svg'

  const auth = useAuthStore()

  const username = ref('amillan29')
  const password = ref('Jr2774185!')

  const handleLogin = async () => {
    try {
      await auth.signIn(username.value, password.value)
      console.log('Logged in user:', auth.user)
    } catch (err) {
      console.error('Login failed:', auth.error)
    }
  }

  const handleLogout = async () => auth.signOut()

  const authBtnLabel = computed(() => (auth.user ? 'Mi cuenta' : 'Iniciar sesión'))
</script>
