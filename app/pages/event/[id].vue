<template>
  <UContainer class="mt-[63px]">
    <div class="flex flex-row gap-7 pt-10">
      <div class="flex-1">
        <NuxtImg :src="event?.flyer" class="rounded-2xl mb-3" />
        <UButton
          class="w-full bg-rose-500 hover:bg-rose-600 active:bg-rose-400 disabled:bg-rose-300 text-white mb-1"
          size="xl"
          v-if="showing === 'info'"
          @click="setShowing('purchase')"
        >
          <div class="flex flex-row items-center justify-center w-full gap-3">
            <UIcon name="i-lucide-tickets" class="size-5" />
            <div class="font-semibold">One Spot Tickets</div>
          </div>
        </UButton>
        <UButton
          v-if="showing === 'purchase'"
          @click="setShowing('info')"
          class="w-full"
          size="xl"
          color="secondary"
        >
          <div class="flex flex-row items-center justify-center w-full gap-3">
            <UIcon name="i-lucide-arrow-left" class="size-5" />
            <div class="font-semibold">Volver</div>
          </div>
        </UButton>
      </div>
      <div class="flex-2">
        <EventInfo :event="event" v-if="showing === 'info'" />
        <EventTickets v-if="showing === 'purchase'" />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
  import type { EventData } from '~/types/EventData.type'

  const events = useEventsStore()
  const route = useRoute()

  const event = ref<EventData>()
  const showing = ref<'info' | 'purchase'>('info')

  const setShowing = (show: 'info' | 'purchase') => (showing.value = show)

  onMounted(async () => {
    const eventId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
    const evFound = events.events.find((ev) => ev.id.toString() === eventId)
    if (evFound) {
      event.value = evFound
      return
    }
    const evResp = await events.getSingleEvent(`${eventId}`)
    event.value = evResp || undefined
  })
</script>
