<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="flex flex-row justify-between items-center">
        <div class="py-2 flex flex-row gap-2">
          <button
            type="button"
            class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            <ChevronLeftIcon
              class="h-4 flex-shrink-0"
              aria-hidden="true" />
          </button>
          <button
            type="button"
            class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            <ChevronRightIcon
              class="h-4 flex-shrink-0"
              aria-hidden="true" />
          </button>
          <input
            id="find-date"
            type="date"
            name="find-date"
            class="block w-56 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6">
          <button
            type="button"
            class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            <MagnifyingGlassIcon
              class="h-4 flex-shrink-0"
              aria-hidden="true" />
          </button>
        </div>
        <div>
          <button
            type="button"
            class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            @click="dialogAdditional=true">
            Tambah data
          </button>
        </div>
      </div>
      <div class="pt-2 w-full overflow-x-auto">
        <div class="grid grid-cols-7 min-w-[1920px]">
          <!-- <div class="flex flex-nowrap w-full overflow-x-auto"> -->
          <div
            v-for="(row, index) in tableInfo.data"
            :key="index"
            class="aspect-square w-full">
            <div class="text-center border-t border-black">
              title
            </div>
            <div
              :class="[panelClass(index), 'border-black whitespace-normal py-2 pl-4 pr-3 text-xs font-medium text-gray-90 sm:pl-2 pb-60']">
              <div class="flex flex-row gap-2 items-center mb-1">
                <svg
                  class="h-1.5 w-1.5 fill-red-500"
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
                <span class="">08.00  dr. Bambino Bismara Mamuaya, BMedSc(Hons)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransitionRoot
        as="template"
        :show="dialogAdditional">
        <VDrawers
          title="Additional"
          @close="dialogAdditional=false">
          <VModifView />
        </VDrawers>
      </TransitionRoot>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import { TransitionRoot } from '@headlessui/vue'
import type { IPagination } from '@/interfaces/paginations'
import type { INavigation } from '@/interfaces/navs'
import { MagnifyingGlassIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { UserIcon, MapPinIcon, ClockIcon } from '@heroicons/vue/24/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VDrawers from '@/components/VDrawers.vue'
import VModifView from './ModifView.vue'
import LabelComponent from './LabelComponent.vue'
import JsonData from '@/utils/practice-schedule.json'

interface IData {
  date: string
  user: {
    id: number
    img: string
    name: string
    sip: string
    location: string
    startTime: string
    endTime: string
    description: string
    color: string
  }[]
}

const navs = ref<INavigation[]>([
  { name: 'Practice Schedule', link: '/contacts', active: true }
])

const dialogAdditional = ref<boolean>(false)
const tableInfo = ref<IPagination<IData[]>>(JsonData)

const panelClass = (index: number): string => {
  if (index === 0) {
    return 'border-l border-t border-r'
  } else if (index === 6) {
    return 'border-t border-r border-red-200 bg-red-50'
  } else if (index === 7) {
    return 'border-l border-t border-r border-b '
  } else if (index >= 8 && index <= 13) {
    return 'border-b border-t border-r '
  } else {
    return 'border-t border-r'
  }
}

useHead({
  title: 'Practice Schedule | e-Smart Clinic'
})
</script>
