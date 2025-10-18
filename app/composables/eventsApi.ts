import axios, { type AxiosResponse } from 'axios'

const url = 'http://localhost:3001'

export function useApi<T = any>() {
  const getAllEvents = async (): Promise<T | null> => {
    try {
      const endpoint = '/events'
      const response: AxiosResponse<T> = await axios(url + endpoint)
      return response.data
    } catch (err: any) {
      return null
    }
  }

  return { getAllEvents }
}
