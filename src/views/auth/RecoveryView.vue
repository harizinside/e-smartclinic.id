<template>
  <div>
    <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md pt-4">
        <img
          class="mx-auto h-20 w-auto"
          src="/img/icons/e-smartclinic.svg"
          alt="e-Smart Clinicy">
        <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Buat kata sandi baru
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
              <p
                class="block text-sm font-medium text-gray-700">
                Halo, <span class="font-bold">muhamadharissetiawan@e-smartclinic.id</span>. Silakan ubah kata sandi anda.
              </p>
            </div>
            <div>
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900">Kata sandi baru</label>
              <div class="">
                <input
                  id="password"
                  v-model="username"
                  type="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
            </div>

            <div>
              <label
                for="re-password"
                class="block text-sm font-medium leading-6 text-gray-900">Konfirmasi kata sandi</label>
              <div class="mt-2">
                <input
                  id="re-password"
                  v-model="password"
                  type="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                <VIcons
                  v-if="isLoading"
                  :name="'spinner-circle'" />
                <span v-else>Ubah kata sandi</span>
              </button>
            </div>
          </form>
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
  title: 'Recovery | e-Smart Clinic',
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
