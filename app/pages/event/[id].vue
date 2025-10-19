<template>
  <UContainer class="mt-[63px]">
    <div class="flex flex-row gap-7 pt-10">
      <div class="flex-1">
        <NuxtImg :src="event?.flyer" class="rounded-2xl mb-3" />
        <UButton
          class="w-full bg-rose-500 hover:bg-rose-600 active:bg-rose-400 disabled:bg-rose-300 text-white mb-1"
          size="xl"
        >
          <div class="flex flex-row items-center justify-center w-full gap-3">
            <UIcon name="i-lucide-tickets" class="size-5" />
            <div class="font-semibold">One Spot Tickets</div>
          </div>
        </UButton>
      </div>
      <div class="flex-2">
        <div class="flex flex-row gap-4 mb-3">
          <div class="text-center border-rose-500 border-3 py-2 px-3 rounded-xl">
            <div class="text-2xl font-semibold">18</div>
            <div class="text-sm font-light">oct.</div>
          </div>
          <div>
            <div class="text-2xl font-semibold">
              {{ event?.name }}
            </div>
            <div class="text-sm font-light">
              {{ event?.dateTime }}
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-2 mb-4">
          <UBadge icon="i-lucide-users" size="md" color="neutral" variant="soft">Edades +18</UBadge>
          <UBadge icon="i-lucide-calendar-days" size="md" color="neutral" variant="soft">
            En 10 días
          </UBadge>
        </div>
        <div class="text-md font-light mb-4">
          {{ event?.description }}
        </div>
        <iframe
          :src="`https://www.google.com/maps?q=${event?.lat},${event?.lng}&z=${15}&output=embed`"
          width="100%"
          height="100%"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="pb-10"
        ></iframe>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
  import type { EventData } from '~/types/EventData.type'

  const events = useEventsStore()
  const route = useRoute()

  const event = ref<EventData>()

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
