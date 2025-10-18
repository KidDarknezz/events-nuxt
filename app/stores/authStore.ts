// stores/counter.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    reset() {
      this.count = 0
    }
  }
})
