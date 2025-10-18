<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <UHeader>
      <template #title>
        <OSLogo class="h-8 w-auto" />
      </template>
      <template #right>
        <!-- <UColorModeButton /> -->

        <UPopover arrow>
          <UButton
            label="Iniciar sesión"
            variant="ghost"
            color="neutral"
            icon="i-lucide-user"
          />
          <template #content>
            <div class="px-4 py-4 flex flex-col w-60">
              <UInput
                color="neutral"
                variant="soft"
                placeholder="Correo electrónico"
                class="mb-2"
                size="lg"
              />
              <UInput
                color="neutral"
                variant="soft"
                placeholder="Contraseña"
                class="mb-3"
                size="lg"
              />
              <UButton
                class="bg-rose-500 hover:bg-rose-600 active:bg-rose-400 text-white mb-1"
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
                <span class="text-rose-500 underline"
                  >Términos y condiciones</span
                >
                para registro de usuario
              </div>
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
    <div class="bg-warning-300 mt-[63px] text-black pt-15">
      <UContainer class="h-full flex items-end">
        <div class="flex flex-row w-full items-center">
          <div class="flex-1">
            <h1 class="text-4xl font-bold mb-6">
              La tecnología para eventos más avanzada de Panamá
            </h1>
            <h2 class="text-base mb-6">
              Publica gratis tus eventos sin importar tu boletería de elección.
            </h2>
            <div class="flex gap-2">
              <img :src="AppStoreBadge" width="150px" />
              <img :src="PlayStoreBadge" width="150px" />
            </div>
          </div>
          <div class="flex-1">
            <img :src="Hero" class="h-165 w-auto mx-auto" />
          </div>
        </div>
      </UContainer>
    </div>

    <!-- <UContainer>
      <div class="min-h-screen grid place-items-center text-center">
        <div class="grid grid-cols-12 gap-4 w-full">
          <UCard class="lg:col-span-2 md:col-span-6 col-span-12">One</UCard>
          <UCard class="lg:col-span-2 md:col-span-6 col-span-12">Two</UCard>
          <UCard class="lg:col-span-2 md:col-span-6 col-span-12">Three</UCard>
          <UCard class="lg:col-span-2 md:col-span-6 col-span-12">Four</UCard>
          <UCard class="lg:col-span-2 md:col-span-6 col-span-12">Five</UCard>
          <UCard class="lg:col-span-2 md:col-span-6 col-span-12">Six</UCard>
        </div>
      </div>
    </UContainer> -->
  </div>
</template>

<script setup lang="ts">
// import OSLogo from "./components/OSLogo.vue";
import AppStoreBadge from "@/assets/images/app-store-badge.svg";
import PlayStoreBadge from "@/assets/images/play-store-badge.svg";
import Hero from "@/assets/images/hero.png";
import Google from "@/assets/images/google.svg";
</script>
