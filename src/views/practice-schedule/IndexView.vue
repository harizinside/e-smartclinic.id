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
      <div class="pt-2 w-full overflow-x-auto overflow-y-auto">
        <div class="grid grid-cols-7 min-w-[1920px]">
          <!-- <div class="flex flex-nowrap w-full overflow-x-auto"> -->
          <div
            v-for="(row, index) in tableInfo.data"
            :key="index"
            class="aspect-square w-full">
            <div :class="[row.today ? 'bg-orange-400 text-white' : 'bg-white', 'text-center text-sm border-t']">
              {{ $d(Date.parse(row.date), 'long') }}
            </div>
            <div
              :class="[panelClass(index), ' overflow-y-auto whitespace-normal py-2 pl-4 pr-3 text-xs font-medium text-gray-90 sm:pl-2 h-60']">
              <LabelComponent
                v-for="(user, i) in row.user"
                :id="user.id" 
                :key="i"
                :description="user.description"
                :end-time="user.endTime"
                :start-time="user.startTime"
                :img="user.img"
                :location="user.location"
                :color="user.color"
                :name="user.name"
                :sip="user.sip"
              />
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
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { TransitionRoot } from '@headlessui/vue'
import type { IPagination } from '@/interfaces/paginations'
import type { INavigation } from '@/interfaces/navs'
import { MagnifyingGlassIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VDrawers from '@/components/VDrawers.vue'
import VModifView from './ModifView.vue'
import LabelComponent from './LabelComponent.vue'
import JsonData from '@/utils/practice-schedule.json'

interface IData {
  date: string
  today: boolean
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
  } else if (index >= 8 && index <= 12) {
    return 'border-b border-t border-r'
  } else if (index === 13 ) {
    return 'bg-red-50 border-t border-r border-b border-red-200'
  } else {
    return 'border-t border-r'
  }
}

useHead({
  title: 'Practice Schedule | e-Smart Clinic'
})
</script>
