<template>
  <Dialog
    class="relative z-50">
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
            <DialogTitle class="text-center py-4 bg-orange-700">
              <span class="font-semibold text-base text-slate-50">Pembayaran Berhasil</span>
            </DialogTitle>
            <div class="px-4 pb-4 sm:p-3 sm:pb-4 ">
              <div class="text-center ">
                <p class="text-sm font-bold text-slate-600">
                  Kembali
                </p>
                <p class="mb-0.5 font-bold text-3xl text-slate-600">
                  {{ $n(73500, 'currency') }} ,-
                </p>
                <p class="text-[10px]">
                  Order ID #sample-store-17279987654
                </p>
              </div>
              <div class="pt-2">
                sas
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                @click="$emit('close')">
                Selesai Transaksi
              </button>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/vue'

defineEmits([ 'close', 'submit' ])
</script>
