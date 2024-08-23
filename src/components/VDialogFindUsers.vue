<template>
  <div>
    <Dialog
      :initial-focus="completeButtonRef"
      class="relative z-10"
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
                <div class="pt-2">
                  <div class="sm:hidden">
                    <label
                      for="tabs"
                      class="sr-only">Select a tab</label>
                    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                    <select
                      id="tabs"
                      name="tabs"
                      class="block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                      <option
                        v-for="tab in tabs"
                        :key="tab.name"
                        :selected="tab.current">
                        {{ tab.name }}
                      </option>
                    </select>
                  </div>
                  <div class="hidden sm:block">
                    <nav
                      class="flex space-x-4"
                      aria-label="Tabs">
                      <a
                        v-for="tab in tabs"
                        :key="tab.name"
                        :href="tab.href"
                        :class="[tab.current ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:text-gray-700', 'rounded-md px-3 py-2 text-sm font-medium']"
                        :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
                    </nav>
                  </div>
                </div>
                <div class="flex flex-wrap gap-1 pt-3">
                  <button
                    type="button"
                    class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-filter size-5"
                      viewBox="0 0 16 16">
                      <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                    </svg>
                  </button>
                  <input
                    id="table-search-users"
                    type="text"
                    class="block text-sm text-gray-900 border border-gray-300 rounded-lg w-80 py-2 bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    placeholder="Cari">
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                    Cari
                  </button>
                </div>
                <ul
                  role="list"
                  class="divide-y divide-gray-100">
                  <li
                    v-for="person in people"
                    :key="person.email"
                    class="relative flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                      <img
                        class="h-12 w-12 flex-none rounded-full bg-gray-50"
                        :src="person.imageUrl"
                        alt="">
                      <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-900">
                          <button @click="transferUser">
                            <span class="absolute inset-x-0 -top-px bottom-0" />
                            {{ person.name }}
                          </button>
                        </p>
                        <p class="mt-1 flex text-xs leading-5 text-gray-500">
                          <a
                            :href="`mailto:${person.email}`"
                            class="relative truncate hover:underline">{{ person.email }}</a>
                        </p>
                      </div>
                    </div>
                    <div class="flex shrink-0 items-center gap-x-4">
                      <div class="hidden sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">
                          {{ person.role }}
                        </p>
                        <p
                          class="mt-1 text-xs leading-5 text-gray-500">
                          {{ person.lastSeen }}
                        </p>
                      </div>
                      <ChevronRightIcon
                        class="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true" />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  ref="cancelButtonRef"
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="$emit('close')">
                  Close
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
import { Dialog, DialogPanel, TransitionChild } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const completeButtonRef = ref(null)
const emit = defineEmits([ 'close', 'isset' ])

const transferUser = () => {
  emit('isset', 'goes')
}

const tabs = ref([
  { name: 'Full pasien', href: '#', current: true },
  { name: 'Antrian', href: '#', current: false }
])

const people = ref([
  {
    name: 'Feronika Agnesia',
    email: 'NMW-PP04501 -',
    role: '31750423058*****',
    imageUrl:
      'https://avatar.iran.liara.run/public/girl?usearname=Feronika+Agnesia',
    href: '#',
    lastSeen: 'Umum'
  },
  {
    name: 'Zesisca Unathary',
    email: 'NMW-PG04827 -',
    role: '53010657020*****',
    imageUrl:
      'https://avatar.iran.liara.run/public/girl?usearname=Zesisca+Unathary',
    href: '#',
    lastSeen: 'BPJS Kesehatan'
  },
  {
    name: 'Robiatul Putri Caharani',
    email: 'NMW-NH04706 -',
    role: '31740256029*****',
    imageUrl:
      'https://avatar.iran.liara.run/public/girl?usearname=Robiatul+Putri+Caharani',
    href: '#',
    lastSeen: 'BPJS Kesehatan'
  },
  {
    name: 'Annisa Halimah Imron',
    email: 'NMW-PP04499 -',
    role: '31730855048*****',
    imageUrl:
      'https://avatar.iran.liara.run/public/girl?usearname=Annisa+Halimah+Imron',
    href: '#',
    lastSeen: 'BPJS Kesehatan'
  },
  {
    name: 'Dewi Feronika',
    email: 'NMW-TB04467 -',
    role: '36033049049*****',
    imageUrl:
      'https://avatar.iran.liara.run/public/girl?usearname=Dewi+Feronika',
    href: '#',
    lastSeen: 'Umum'
  },
  {
    name: 'Inggrita Wisnuwardani',
    email: 'NMW-TB04463 -',
    role: '36711128050*****',
    imageUrl:
      'https://avatar.iran.liara.run/public/girl?usearname=Inggrita+Wisnuwardani',
    href: '#',
    lastSeen: 'AXA Mandiri'
  }
])
</script>

<style></style>
