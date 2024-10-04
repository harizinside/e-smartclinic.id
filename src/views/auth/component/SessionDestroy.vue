<template>
  <div>
    <Dialog
      class="relative z-10"
      @click="$emit('close')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-question h-6 w-6 text-orange-600"
                    viewBox="0 0 16 16">
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                  </svg>
                </div>
                <div class="mt-3 sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="mb-4 text-center">
                    <p class="text-base font-semibold leading-6 text-gray-900">
                      Delete Sessions
                    </p>
                    <p class="text-xs text-gray-600">
                      Silakan hapus salah satu session yang ada
                    </p>
                  </DialogTitle>
                  <div class="mt-2">
                    <fieldset aria-label="Privacy setting">
                      <RadioGroup
                        v-model="selected"
                        class="-space-y-px rounded-md bg-white">
                        <RadioGroupOption
                          v-for="(sess, index) in props.session"
                          :key="index"
                          v-slot="{ checked }"
                          as="template"
                          :value="sess.id"
                          :aria-label="sess.browser.name"
                          :aria-description="sess.browser.name">
                          <div :class="[index === 0 ? 'rounded-tl-md rounded-tr-md' : '', index === props.session.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'z-10 border-orange-200 bg-orange-50' : 'border-gray-200', 'relative flex cursor-pointer border p-4 focus:outline-none']">
                            <span class="ml-3 flex flex-row gap-4 items-center">
                              <ComputerDesktopIcon
                                class="h-10 w-10 text-orange-600"
                                aria-hidden="true" />
                              <div>
                                <span :class="[checked ? 'text-orange-900' : 'text-gray-900', 'block text-sm font-medium']">{{ sess.browser.name }}</span>
                                <span :class="[checked ? 'text-orange-700' : 'text-gray-500', 'block text-sm mt-1']">{{ sess.device.vendor }}, {{ sess.os.name }} {{ sess.os.version }}</span>
                                <span :class="[checked ? 'text-orange-700' : 'text-gray-500', 'block text-xs mt-1']">{{ sess.site }}</span>
                              </div>
                            </span>
                          </div>
                        </RadioGroupOption>
                      </RadioGroup>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="button"
                  :class="[loading ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-600' , 'inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:col-start-2']"
                  @click="submit">
                  <span
                    v-if="loading"
                    class="flex flex-row"><VIcons name="spinner-circle" />&nbsp;Loading...</span>
                  <span v-else>Deactivate</span>
                </button>
                <button
                  ref="cancelButtonRef"
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                  @click="$emit('close')">
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Dialog, 
  DialogPanel, 
  DialogTitle,
  RadioGroup,
  RadioGroupOption,
  TransitionChild 
} from '@headlessui/vue'
import { ComputerDesktopIcon } from '@heroicons/vue/24/outline'
import type { SessionsProps } from '@/interfaces/auth'
import { HTTP_HEADER, HTTP_URI } from '@/http.conf'
import VIcons from '@/components/VIcons.vue'

const emit = defineEmits([ 'close', 'process' ])
const props = defineProps<{
  session: SessionsProps[]
  token: string
}>()
const selected = ref(props.session[0])
const loading = ref<boolean>(false)

const submit = async () => {
  loading.value = true

  const response = await fetch(`${HTTP_URI}/legacy/auth/remove-session/${selected.value}`, {
    method: 'DELETE',
    headers: {
      ...HTTP_HEADER,
      Authorization: `Bearer ${props.token}`
    }
  })

  const json = await response.json()
  loading.value = false

  emit('process', json)
}
</script>
