import type { EventData } from '~/types/EventData.type'
import { defineStore } from 'pinia'

const api = useApi()

interface EventsState {
  events: EventData[]
  loading: boolean
}

export const useEventsStore = defineStore('events', {
  state: (): EventsState => ({
    events: [],
    loading: false
  }),
  actions: {
    async getAllEvents() {
      this.loading = true
      const resp = await api.getAllEvents()
      this.events = resp
      this.loading = false
    },
    async getSingleEvent(id: string) {
      this.loading = true
      const resp = await api.getSingleEvent(id)
      this.loading = false
      return resp
    }
  }
})
