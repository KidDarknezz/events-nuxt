import axios, { type AxiosResponse } from 'axios'
import type { EventData } from '~/types/EventData.type'

let url = ''
const route = '/events'

if (import.meta.env.DEV) url = 'http://localhost:3001'

export function useApi<T = any>() {
  const getAllEvents = async (): Promise<EventData[]> => {
    try {
      const endpoint = route
      const response: AxiosResponse<T> = await axios.get(url + endpoint)
      return response.data as EventData[]
    } catch (err: any) {
      return []
    }
  }

  const getSingleEvent = async (id: string): Promise<EventData | null> => {
    try {
      const endpoint = `${route}/${id}`
      const response: AxiosResponse<T> = await axios.get(url + endpoint)
      return response.data as EventData
    } catch (err: any) {
      return null
    }
  }

  return { getAllEvents, getSingleEvent }
}
