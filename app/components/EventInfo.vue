<template>
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
  />
</template>

<script lang="ts" setup>
  import type { EventData } from '~/types/EventData.type'

  defineProps<{
    event?: EventData
  }>()
</script>
