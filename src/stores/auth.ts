import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('__auth', () => {
  const auth = useStorage('__auth', {
    ID: 0,
    TOKEN: '',
  }, localStorage, { mergeDefaults: true })

  const signin = (id : number | undefined, token : string | undefined) => {
    auth.value.ID = id ?? 0
    auth.value.TOKEN = token ?? ''
  }

  const signout = () => {
    auth.value.ID = 0
    auth.value.TOKEN = ''
  }

  const online = () => {
    
  }

  return { auth, signin, signout, online }
})
