import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('__auth', () => {
  const auth = useStorage('__auth', {
    ID: '',
    TOKEN: '',
    AUTH: {},
  }, localStorage, { mergeDefaults: true })

  return { auth }
})
