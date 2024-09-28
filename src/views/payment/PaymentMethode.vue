<template>
  <div>
    <Dialog
      class="relative z-10"
      @close="$emit('close')">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-base font-semibold leading-6 text-gray-900">
                        Payment Gatewaty
                      </DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          @click="$emit('close')">
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon
                            class="h-6 w-6"
                            aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="pt-4">
                    <div class="w-full bg-gray-100">
                      <div class="px-6 py-3 text-slate-600">
                        <p class="font-bold text-xl mb-0.5">
                          {{ $n(1426500, 'currency') }}
                        </p>
                        <p class="text-[10px]">
                          Order ID #sample-store-17279987654
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-3 flex-1 px-4 sm:px-6">
                    <div class="gap-2 border w-full rounded-lg p-2 text-xs font-medium">
                      <div class="flex justify-between">
                        <div class="flex gap-2">
                          <PercentBadgeIcon
                            class="h-4 w-4 flex-none text-orange-400"
                            aria-hidden="true" /> 
                          Remainder Promo
                        </div>
                        <button class="flex text-blue-500 font-medium">
                          Lihat 
                          <ChevronRightIcon
                            class="h-4 w-4 flex-none text-blue-500"
                            aria-hidden="true" /> 
                        </button>
                      </div>
                    </div>
                    <Disclosure>
                      <DisclosureButton class="py-2">
                        Is team pricing available?
                      </DisclosureButton>
                      <DisclosurePanel class="text-gray-500">
                        Yes! You can purchase a license that you can share with your entire team.
                      </DisclosurePanel>
                    </Disclosure>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { 
  Dialog, 
  DialogPanel, 
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild
 } from '@headlessui/vue'
import { XMarkIcon, PercentBadgeIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

defineEmits([ 'close', 'submit' ])
</script>
