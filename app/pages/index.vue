<template>
  <div class="bg-warning-300 mt-[63px] text-black pt-15">
    <UContainer class="h-full flex items-end">
      <div class="flex flex-row w-full items-center">
        <div class="flex-1">
          <h1 class="text-4xl font-bold mb-6">La tecnología para eventos más avanzada de Panamá</h1>
          <h2 class="text-base mb-6">
            Publica gratis tus eventos sin importar tu boletería de elección.
          </h2>
          <div class="flex gap-2">
            <img :src="AppStoreBadge" width="150px" />
            <img :src="PlayStoreBadge" width="150px" />
          </div>
        </div>
        <div class="flex-1">
          <img :src="Hero" class="w-100 mx-auto" />
        </div>
      </div>
    </UContainer>
  </div>
  <UBanner title="Descarga nuestro app para ver todos los eventos" class="bg-black py-3" />
</template>

<script setup lang="ts">
  import AppStoreBadge from '~/assets/images/app-store-badge.svg'
  import PlayStoreBadge from '~/assets/images/play-store-badge.svg'
  import Hero from '~/assets/images/hero.png'

  const events = useEventsStore()

  onMounted(() => {
    events.getAllEvents()
  })
</script>
