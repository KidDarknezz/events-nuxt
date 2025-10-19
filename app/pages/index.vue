<template>
  <!-- HERO -->
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
  <!-- /HERO -->

  <!-- DOWNLOAD APP BANNER -->
  <UBanner title="Descarga nuestro app para ver todos los eventos" class="bg-black py-3" />
  <!-- /DOWNLOAD APP BANNER -->

  <!-- EVENTS LIST -->
  <UContainer class="py-15">
    <div class="text-center text-2xl font-semibold mb-2">Taquilla</div>
    <div class="text-center mb-8">Compra tus entradas AQUÍ</div>
    <div class="grid grid-cols-12 gap-4">
      <div class="lg:col-span-3 md:col-span-4 col-span-6" v-for="event in allEvents">
        <NuxtImg
          :src="event.flyer"
          class="mb-4 rounded-2xl cursor-pointer"
          @click="navivateToEvent(event.id)"
        />
        <div class="font-semibold text-sm cursor-pointer" @click="navivateToEvent(event.id)">
          {{ event.name }}
        </div>
        <div class="text-xs">{{ event.dateTime }}</div>
      </div>
    </div>
  </UContainer>
  <!-- EVENTS LIST -->
</template>

<script setup lang="ts">
  import AppStoreBadge from '@/assets/images/app-store-badge.svg'
  import PlayStoreBadge from '@/assets/images/play-store-badge.svg'
  import Hero from '@/assets/images/hero.png'

  const events = useEventsStore()
  const router = useRouter()

  const navivateToEvent = (id: number) => router.push(`/event/${id}`)

  const allEvents = computed(() => events.events)

  onMounted(() => {
    events.getAllEvents()
  })
</script>
