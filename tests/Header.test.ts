import { describe, expect, it, vi } from 'vitest'

import Header from '@/components/Header.vue'
import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'

describe('Header.vue', () => {
  it('calls login action when handleLogin is triggered', async () => {
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: {
              auth: { user: null, loading: false, error: null }
            }
          })
        ]
      }
    })

    const pinia = wrapper.vm.$pinia
    const auth = pinia._s.get('auth')
    auth.signIn = vi.fn().mockResolvedValue(true)
    await wrapper.vm.handleLogin()
    expect(auth.signIn).toHaveBeenCalledWith('amillan29', 'Jr2774185!')
  })

  it('calls login action with error when handleLogin is triggered', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: {
              auth: { user: null, loading: false, error: null }
            }
          })
        ]
      }
    })
    const auth = wrapper.vm.$pinia._s.get('auth') // get the Pinia auth store
    auth.signIn = vi.fn().mockRejectedValue(new Error('Invalid credentials')) // force error
    await wrapper.vm.handleLogin()
    expect(auth.signIn).toHaveBeenCalled()
    expect(consoleErrorSpy).toHaveBeenCalledWith('Login failed:', auth.error)
    consoleErrorSpy.mockRestore()
  })

  it('calls logout action when handleLogout is triggered', async () => {
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: {
              auth: { user: 'Alejandro', loading: false, error: null }
            }
          })
        ]
      }
    })
    const pinia = wrapper.vm.$pinia
    const auth = pinia._s.get('auth')
    auth.signOut = vi.fn().mockResolvedValue(true)
    await wrapper.vm.handleLogout()
    expect(auth.signOut).toHaveBeenCalled()
  })

  it('returns "Iniciar sesión" when user is null', () => {
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: {
              auth: { user: null }
            }
          })
        ]
      }
    })
    expect(wrapper.vm.authBtnLabel).toBe('Iniciar sesión')
  })

  it('returns "Mi cuenta" when user exists', () => {
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: {
              auth: { user: 'Alejandro' }
            }
          })
        ]
      }
    })
    expect(wrapper.vm.authBtnLabel).toBe('Mi cuenta')
  })
})
