<template>
  <div>
    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md pt-4">
        <img
          class="mx-auto h-20 w-auto"
          src="/img/icons/e-smartclinic.svg"
          alt="e-Smart Clinicy">
        <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Masuk ke akun anda
        </h2>
      </div>

      <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div class="px-6 py-12 sm:px-12">
          <VAlerts
            v-if="resErrors"
            type="danger"
            :message="resErrors!.message"
            :errors="resErrors.errors"
            @close="resErrors = undefined" />
          <form
            class="space-y-6 pt-3"
            method="POST"
            @submit.prevent="xsubmit">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900">Alamat email</label>
              <div class="mt-2">
                <input
                  id="email"
                  v-model="username"
                  type="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  placeholder="name@provider.com"
                  required>
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900">Kata sandi</label>
              <div class="mt-2">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="remember"
                  name="remember-me"
                  type="checkbox"
                  value="true"
                  class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
                <label
                  for="remember-me"
                  class="ml-3 block text-sm leading-6 text-gray-900">Ingat saya</label>
              </div>

              <div class="text-sm leading-6">
                <router-link
                  to="/auth/forgot-password"
                  class="font-semibold text-orange-600 hover:text-orange-500">
                  Lupa kata sandi?
                </router-link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                <VIcons
                  v-if="isLoading"
                  :name="'spinner-circle'" />
                <span v-else>Masuk</span>
              </button>
            </div>
          </form>

          <div>
            <div class="relative mt-10">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true">
                <div class="w-full border-t border-gray-200" />
              </div>
              <div class="relative flex justify-center text-sm font-medium leading-6">
                <span class="bg-gray-50 px-6 text-gray-900">Atau masuk dengan</span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-4">
              <button
                class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" />
                  <path
                    fill="#4285F4"
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" />
                  <path
                    fill="#FBBC05"
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" />
                  <path
                    fill="#34A853"
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" />
                </svg>
                <span class="text-sm font-semibold leading-6">Google</span>
              </button>

              <button
                class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-facebook text-blue-700"
                  viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
                <span class="text-sm font-semibold leading-6">Facebook</span>
              </button>
            </div>
          </div>
        </div>

        <p class="mt-10 text-center text-sm font-medium text-gray-500 dark:text-white">
          Diperhatikan dan diawasi oleh
        </p>
        <div class="flex gap-4 place-content-center pt-4">
          <div>
            <img
              src="/img/icons/third-part-satusehat.svg"
              class="w-full h-10"
              alt="image description">
          </div>
          <div>
            <img
              src="/img/icons/third-part-kominfo.png"
              class="w-full h-10"
              alt="image description">
          </div>
        </div>
      </div>
      <TransitionRoot
        as="template"
        :show="sessionDialog">
        <VSessionDestroy
          :session="sessionData"
          :token="reqTokens"
          @close="sessionDialog = false"
          @process="processSession" />
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useRouter } from 'vue-router'
import { TransitionRoot } from '@headlessui/vue'
import { HTTP_URI, HTTP_HEADER } from '@/http.conf'
import { useAuthStore } from '@/stores/auth'
import type { IAlert } from '@/interfaces/alerts'
import type { AuthProps, ResponseProps, SessionsProps } from '@/interfaces/auth'
import VIcons from '@/components/VIcons.vue'
import VAlerts from '@/components/VAlerts.vue'
import VSessionDestroy from './component/SessionDestroy.vue'

const username = ref<string>('')
const password = ref<string>('')
const remember = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const resErrors = ref<IAlert>()
const sessionDialog = ref<boolean>(false)
const sessionData = ref<SessionsProps[]>([])
const reqTokens = ref<string>('')

const router = useRouter()
const authState = useAuthStore()

const xsubmit = async () => {
  const url = HTTP_URI + '/legacy/auth/login'
  isLoading.value = true

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { ...HTTP_HEADER },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })

    const json : AuthProps<ResponseProps> = await response.json()

    if (!response.ok) {
      resErrors.value = {
        message:  json.message,
        type: 'warning',
        errors: json.errors
      }

      password.value = ''
      throw new Error(`Response status: ${response.status}`)
    }

    authState.signin(json.result?.id, json.result?.token)
    if (json.result!.sessions!.length) {
      sessionDialog.value = true
      sessionData.value = json.result!.sessions

      reqTokens.value = json.result!.token
    } 
    else {
      await router.push('/')
    }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.message.includes('Failed to fetch')) {
      resErrors.value = {
        message:  'Server API is down, please ask Admin Support',
        type: 'danger'
      }
    }

    console.error(err)
  } finally {
    isLoading.value = false
  }
}

const processSession = async () => {
  await router.push('/')
}

useHead({
  title: 'Authorization | e-Smart Clinic',
  bodyAttrs: {
    class: 'h-full'
  },
  htmlAttrs: {
    lang: 'id_ID',
    class: 'h-full bg-gray-50'
  }
})
</script>

<style></style>
