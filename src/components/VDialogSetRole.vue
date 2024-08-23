<template>
  <div>
    <Dialog
      class="relative z-10"
      :initial-focus="cancelButtonRef"
      @close="$emit('close')">
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
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                    <LockClosedIcon
                      class="h-6 w-6 text-orange-600"
                      aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-base font-semibold leading-6 text-gray-900">
                      Tambahkan sebagai pengguna
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Pasien yang di transfer sebagai pengguna, akan mampu masuk ke sistem administrator dengan hak akses yang diberikan.
                      </p>
                      <div class="flex items-center py-4 pl-2 my-4 text-gray-900 whitespace-nowrap dark:text-white border rounded-xl">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://avatar.iran.liara.run/public/girl?username=dr.+Margaret+Mauren"
                          alt="Jese image">
                        <div class="ps-3">
                          <div class="text-sm font-semibold">
                            dr. Margaret Mauren Hanang, dipl.CIBTAC
                          </div>
                          <div class="text-xs text-gray-500">
                            margaretmauren@***.id
                          </div>
                        </div>
                      </div>
                      <div class="mb-5 grow">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Hak akses <span class="text-red-600">**</span></label>
                        <VFormSelect />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  @click="anoan">
                  Simpan
                </button>
                <button
                  ref="cancelButtonRef"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="$emit('close')">
                  Batalkan
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/vue'
import { LockClosedIcon } from '@heroicons/vue/24/outline'
import VFormSelect from './VFormSelect.vue'

const cancelButtonRef = ref(null)
const emit = defineEmits([ 'close', 'submit' ])

const anoan = () => {
  emit('submit', 'Berhasil menambahkan user')
}
</script>

<style></style>
