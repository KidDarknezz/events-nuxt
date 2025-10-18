import { defineStore } from 'pinia'

const api = useApi()

interface EventsState {
  events: any[]
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
    }
  }
})
