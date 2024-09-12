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
      <div class="overflow-x-auto pt-2">
        <table
          class="min-w-full">
          <thead class="text-center border-t border-slate-300">
            <tr>
              <th
                v-for="(row, index) in tableInfo.data?.slice(0, 7)"
                :key="index"
                scope="col"
                class="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900">
                {{ $d(Date.parse(row.date), 'long') }} 
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white align-text-top">
            <tr>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-2 border-t border-slate-300 pb-60">
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
                  <span>08.00  dr. Natalli Mawardi, dipl.CIBTAC</span>
                </div>
              </td>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-2 border-l border-t border-slate-300 pb-60">
                <div class="flex flex-row gap-2 items-center">
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
                  <span>08.00  dr. Natalli Mawardi, dipl.CIBTAC</span>
                </div>
              </td>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-2 border-l border-t border-slate-300 pb-60">
                <div class="flex flex-row gap-2 items-center">
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
                  <span>08.00  dr. Natalli Mawardi, dipl.CIBTAC</span>
                </div>
              </td>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-2 border-l border-t border-slate-300 pb-60">
                <div class="flex flex-row gap-2 items-center">
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
                  <span>08.00  dr. Natalli Mawardi, dipl.CIBTAC</span>
                </div>
              </td>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-2 border-l border-t border-slate-300 pb-60">
                <Popover class="relative">
                  <PopoverButton
                    as="div"
                    class="flex flex-row gap-2 items-center cursor-pointer mb-1.5">
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
                    <span>08.00  dr. Natalli Mawardi, dipl.CIBTAC</span>
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
                      <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 bg-red-500 pt-1">
                        <div class="bg-white p-7 lg:grid-cols-2">
                          <div
                            class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                            <div
                              class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <img
                                class="w-10 h-10 rounded-full"
                                src="https://avatar.iran.liara.run/public/girl?usearname=dr.Natalli+Mawardi"
                                alt="dr. Damar Sajiwo, MARS">
                            </div>
                            <div class="">
                              <p class="text-sm font-medium text-gray-900 mb-0.5">
                                dr. Natalli Mawardi, dipl.CIBTAC
                              </p>
                              <p class="text-xs font-medium text-gray-400">
                                446.1//3776/01-DPMPTSP/OL/2019
                              </p>
                            </div>
                          </div>
                          <div class="pt-4">
                            <div class="flex flex-row items-center gap-2 mb-1.5">
                              <MapPinIcon
                                class="h-3"
                                aria-hidden="true" />
                              <span class="text-xs">NMW Klinik Petogogan</span>
                            </div>
                            <div class="flex flex-row items-center gap-2 mb-1.5">
                              <ClockIcon
                                class="h-3"
                                aria-hidden="true" />
                              <span class="text-xs">09:00 - 17:00 WIB</span>
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
                              <span class="text-xs">Konsultasi Umum (Rawat Jalan)</span>
                            </div>
                          </div>
                        </div>
                        <div class="bg-gray-50 p-1.5 flex flex-row justify-between gap-2 text-sm">
                          <div class="grid grid-cols-2">
                            <button
                              class="font-medium text-blue-600 dark:text-blue-500n p-2">
                              Edit
                            </button>
                            <button
                              class="font-medium text-red-600 dark:text-red-500 ms-3 p-2">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
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
                                src="https://avatar.iran.liara.run/public/boy?usearname=dr.Damar+Sajiwo"
                                alt="dr. Damar Sajiwo, MARS">
                            </div>
                            <div class="">
                              <p class="text-sm font-medium text-gray-900 mb-0.5">
                                dr. Damar Sajiwo, MARS
                              </p>
                              <p class="text-xs font-medium text-gray-400">
                                446.1//3776/01-DPMPTSP/OL/2019
                              </p>
                            </div>
                          </div>
                          <div class="pt-4">
                            <div class="flex flex-row items-center gap-2 mb-1.5">
                              <MapPinIcon
                                class="h-3"
                                aria-hidden="true" />
                              <span class="text-xs">NMW Klinik Petogogan</span>
                            </div>
                            <div class="flex flex-row items-center gap-2 mb-1.5">
                              <ClockIcon
                                class="h-3"
                                aria-hidden="true" />
                              <span class="text-xs">09:00 - 17:00 WIB</span>
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
                              <span class="text-xs">Konsultasi Umum (Rawat Jalan)</span>
                            </div>
                          </div>
                        </div>
                        <div class="bg-gray-50 p-1.5 flex flex-row justify-between gap-2 text-sm">
                          <div class="grid grid-cols-2">
                            <button
                              class="font-medium text-blue-600 dark:text-blue-500n p-2">
                              Edit
                            </button>
                            <button
                              class="font-medium text-red-600 dark:text-red-500 ms-3 p-2">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </td>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-2 border-l border-t border-slate-300 pb-60">
                <div class="flex flex-row gap-2 items-center">
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
                  <span>08.00  dr. Natalli Mawardi, dipl.CIBTAC</span>
                </div>
              </td>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-gray-900  bg-red-50 sm:pl-2 border-l border-t border-red-300 pb-60">
                <div class="flex flex-row gap-2 items-center">
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
                  <span>08.00  dr. Natalli Mawardi, dipl.CIBTAC</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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

useHead({
  title: 'Practice Schedule | e-Smart Clinic'
})
</script>
