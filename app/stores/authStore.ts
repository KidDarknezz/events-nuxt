import { defineStore } from 'pinia'

interface AuthState {
  user: any
  username: string
  loading: boolean
  error: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    username: '',
    loading: false,
    error: ''
  }),
  actions: {
    async signIn(uname: string, password: string) {
      this.loading = true
      this.error = null
      try {
        const { signIn: amplifySignIn } = await import('aws-amplify/auth')
        const res = await amplifySignIn({ username: uname, password })
        this.user = res
        this.username = uname
        if (res.nextStep.signInStep === 'DONE') this.fetchCurrentUser()
        return res
      } catch (err: any) {
        this.error = err.message || 'Login failed'
        throw err
      } finally {
        this.loading = false
      }
    },

    async signOut() {
      this.loading = true
      try {
        const { signOut: amplifySignOut } = await import('aws-amplify/auth')
        await amplifySignOut()
        this.user = null
      } catch (err: any) {
        this.error = err.message || 'Logout failed'
        throw err
      } finally {
        this.loading = false
      }
    },

    async fetchCurrentUser() {
      try {
        const { getCurrentUser: getCurrentUser } = await import('aws-amplify/auth')
        const res = await getCurrentUser()
        this.user = res
        return res
      } catch {
        this.user = null
      }
    }
  }
})
