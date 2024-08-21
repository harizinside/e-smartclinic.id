import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { UserProps } from '@/interfaces/auth'

interface IUser {
  id: number
  avatar: string
  name: string
  role: {
    id: number
    value: string
  }
}

export const useAuthStore = defineStore('__auth', () => {
  const auth = useStorage('__auth', {
    ID: <number>0,
    TOKEN: <string>'',
    USER: <IUser>{}
  }, localStorage, { mergeDefaults: true })

  const signin = (id : number | undefined, token : string | undefined) => {
    auth.value.ID = id ?? 0
    auth.value.TOKEN = token ?? ''
  }

  const signout = () => {
    auth.value.ID = 0
    auth.value.TOKEN = ''
  }

  const setuser = (args: UserProps) => {
    auth.value.USER = {
      id: args.id,
      avatar: args.avatar,
      name: args.fullname,
      role: {
        id: args.roleId,
        value: args.role
      }
    }
  }

  return { auth, signin, signout, setuser }
})
