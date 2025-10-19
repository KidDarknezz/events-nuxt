<template>
  <UContainer>
    <div class="mt-[63px]">{{ event }}</div>
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
