<template>
  <div>
    <Popover class="relative">
      <PopoverButton
        as="div"
        class="flex flex-row gap-2 items-center cursor-pointer">
        <svg
          class="h-1.5 w-1.5 fill-blue-500"
          viewBox="0 0 6 6"
          aria-hidden="true">
          <circle
            cx="3"
            cy="3"
            r="3" />
        </svg>
        <UserIcon
          class="h-3"
          aria-hidden="true" />
        <span>08.00  dr. Damar Sajiwo, MARS</span>
      </PopoverButton>
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0">
        <PopoverPanel
          class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-sm">
          <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 bg-blue-500 pt-1">
            <div class="bg-white p-7 lg:grid-cols-2">
              <div
                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                  <img
                    class="w-10 h-10 rounded-full"
                    :src="props.img"
                    :alt="props.name">
                </div>
                <div class="">
                  <p class="text-sm font-medium text-gray-900 mb-0.5">
                    {{ props.name }}
                  </p>
                  <p class="text-xs font-medium text-gray-400">
                    {{ props.sip }}
                  </p>
                </div>
              </div>
              <div class="pt-4">
                <div class="flex flex-row items-center gap-2 mb-1.5">
                  <MapPinIcon
                    class="h-3"
                    aria-hidden="true" />
                  <span class="text-xs">{{ props.location }}</span>
                </div>
                <div class="flex flex-row items-center gap-2 mb-1.5">
                  <ClockIcon
                    class="h-3"
                    aria-hidden="true" />
                  <span class="text-xs">{{ props.startTime }} - {{ props.endTime }}</span>
                </div>
                <div class="flex flex-row items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-heart-pulse-fill h-3"
                    viewBox="0 0 16 16">
                    <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                    <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                  </svg>
                  <span class="text-xs">{{ props.description }}</span>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 p-1.5 flex flex-row justify-between gap-2 text-sm">
              <div class="grid grid-cols-2">
                <button
                  class="font-medium text-blue-600 dark:text-blue-500n p-2"
                  @click="$emit('edit', props.id)">
                  Edit
                </button>
                <button
                  class="font-medium text-red-600 dark:text-red-500 ms-3 p-2"
                  @click="$emit('close')">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { UserIcon, MapPinIcon, ClockIcon } from '@heroicons/vue/24/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const props = defineProps<{
  id: number
  img: string
  name: string
  sip: string
  location: string
  startTime: string
  endTime: string
  description: string
  color: string
}>()

defineEmits([ 'edit', 'close' ])
</script>
