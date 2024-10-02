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
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="pt-2">
                  <DialogTitle>
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
                          v-for="(row, index) in tabs"
                          :key="index"
                          :selected="(row.state === tabState) ? true : false">
                          {{ row.name }}
                        </option>
                      </select>
                    </div>
                    <div class="hidden sm:block">
                      <nav
                        class="flex space-x-4"
                        aria-label="Tabs">
                        <button
                          v-for="(row, index) in tabs"
                          :key="index"
                          :class="[row.state === tabState ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:text-gray-700', 'rounded-md px-3 py-2 text-sm font-medium']"
                          :aria-current="row.state === tabState ? 'page' : undefined"
                          @click="switchTabs(row.state)">
                          {{ row.name }}
                        </button>
                      </nav>
                    </div>
                  </DialogTitle>
                </div>
                <Disclosure>
                  <div class="flex flex-row gap-2 pt-4">
                    <DisclosureButton
                      as="button"
                      type="button"
                      class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="bi bi-filter size-5"
                        viewBox="0 0 16 16">
                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                      </svg>
                    </DisclosureButton>
                    <input
                      id="table-search-users"
                      type="text"
                      class="block text-sm text-gray-900 border border-gray-300 rounded-lg w-full py-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                      placeholder="Cari">
                    <button
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto">
                      Cari
                    </button>
                  </div>
                  <DisclosurePanel class="text-gray-500 pt-4 border-b">
                    <fieldset>
                      <legend class="text-sm font-semibold leading-6 text-gray-900">
                        Cari berdasarkan
                      </legend>
                      <div class="mt-2 space-y-0.5">
                        <div class="relative flex gap-x-3">
                          <div class="flex h-6 items-center">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
                          </div>
                          <div class="text-sm leading-6">
                            <label
                              for="comments"
                              class="font-normal text-gray-900">Nama</label>
                          </div>
                        </div>
                        <div class="relative flex gap-x-3">
                          <div class="flex h-6 items-center">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
                          </div>
                          <div class="text-sm leading-6">
                            <label
                              for="candidates"
                              class="font-normal text-gray-900">Manufacturing</label>
                          </div>
                        </div>
                        <div class="relative flex gap-x-3">
                          <div class="flex h-6 items-center">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
                          </div>
                          <div class="text-sm leading-6">
                            <label
                              for="offers"
                              class="font-normal text-gray-900">SKU</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <div class="mb-3 pt-2">
                        <label
                          for="base-input"
                          class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Kategori</label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 w-full sm:text-sm sm:leading-6">
                          <option>BPOM</option>
                          <option>Racikan</option>
                        </select>
                      </div>
                    </fieldset>
                    <fieldset class="pb-2">
                      <legend class="text-sm font-semibold leading-6 text-gray-900">
                        Status
                      </legend>
                      <div class="mt-2 space-y-0.5">
                        <div class="relative flex gap-x-3">
                          <div class="flex h-6 items-center">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
                          </div>
                          <div class="text-sm leading-6">
                            <label
                              for="offers"
                              class="font-normal text-gray-900">Aktif</label>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 space-y-0.5">
                        <div class="relative flex gap-x-3">
                          <div class="flex h-6 items-center">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
                          </div>
                          <div class="text-sm leading-6">
                            <label
                              for="offers"
                              class="font-normal text-gray-900">Tidak aktif</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </DisclosurePanel>
                </Disclosure>
                <div v-if="tabState === ListTabs.PRODUCTS">
                  <div class="pt-2">
                    <ul
                      role="list"
                      class="divide-y divide-gray-100">
                      <li
                        v-for="(prod, index) in products"
                        :key="index"
                        class="relative flex justify-between py-5 ">
                        <div class="flex min-w-0 gap-x-4">
                          <img
                            class="h-12 w-12 flex-none rounded-lg bg-gray-50"
                            :src="prod.img"
                            alt="">
                          <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">
                              <a href="/">
                                <span class="absolute inset-x-0 -top-px bottom-0" />
                                {{ prod.name }}
                              </a>
                            </p>
                            <p class="mt-1 flex text-xs leading-5 text-gray-500">
                              <span class="relative">Stock: {{ prod.stock }}</span>
                            </p>
                          </div>
                        </div>
                        <div class="flex shrink-0 items-center gap-x-4">
                          <div class="hidden sm:flex sm:flex-col sm:items-end">
                            <p class="text-sm leading-6 text-gray-900 font-semibold">
                              {{ $n(prod.price, 'currency') }}
                            </p>
                            <p
                              class="mt-1 text-xs leading-5 text-gray-500">
                              {{ prod.packaging }}
                            </p>
                          </div>
                          <ChevronRightIcon
                            class="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="tabState === ListTabs.TREATMENTS">
                  <div class="pt-2">
                    <ul
                      role="list"
                      class="divide-y divide-gray-100">
                      <li
                        v-for="(treat, index) in treatments"
                        :key="index"
                        class="relative flex justify-between py-5 ">
                        <div class="flex min-w-0 gap-x-4">
                          <img
                            class="h-12 flex-none rounded-lg bg-gray-50"
                            :src="treat.img"
                            alt="">
                          <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">
                              <a href="/">
                                <span class="absolute inset-x-0 -top-px bottom-0" />
                                {{ treat.name }}
                              </a>
                            </p>
                            <p class="mt-1 flex text-xs leading-5 text-gray-500">
                              <span class="relative">{{ treat.category }}</span>
                            </p>
                          </div>
                        </div>
                        <div class="flex shrink-0 items-center gap-x-4">
                          <div class="hidden sm:flex sm:flex-col sm:items-end">
                            <p class="text-sm leading-6 text-gray-900 font-semibold">
                              {{ $n(treat.price, 'currency') }}
                            </p>
                          </div>
                          <ChevronRightIcon
                            class="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  @click="$emit('close')">
                  Deactivate
                </button>
                <button
                  ref="cancelButtonRef"
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild
} from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import JsonDataProduct from '@/utils/drugs.json'
import JsonDataTreatment from '@/utils/treatments.json'

interface ITabs {
  name: string
  state: ListTabs
}

interface IDataProduct {
  id: number
  img: string
  name: string
  sku: string
  price: number
  dose: string
  packaging: string
  stock: number
  manufacturing: string
  createdAt: string
  updatedAt: string
}

interface IDataTreatment {
  id: number
  img: string
  name: string
  category: string
  price: number
  createdAt: string
  updatedAt: string
}

enum ListTabs {
  PRODUCTS,
  TREATMENTS
}

defineEmits([ 'close', 'submit' ])

const tabState = ref<ListTabs>(ListTabs.PRODUCTS)
const tabs = ref<ITabs[]>([
  { name: 'Products', state: ListTabs.PRODUCTS },
  { name: 'Treatments', state: ListTabs.TREATMENTS }
])
const products = ref<IDataProduct[]>(JsonDataProduct.data)
const treatments = ref<IDataTreatment[]>(JsonDataTreatment.data)

const switchTabs = (args: ListTabs) => {
  tabState.value = args
}

</script>

<style></style>
