<template>
  <div>
    <form>
      <fieldset>
        <div class="border-gray-900/10 pb-4">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Alamat klinik
          </h2>
        </div>  
        <div class="mb-5 grow">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('forms.region') }}</label>
          <input
            type="text"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required>
        </div>
        <div class="mb-5 grow">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          <textarea
            type="text"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required />
        </div>
        <div class="flex flex-row gap-3">
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RT</label>
            <input
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RW</label>
            <input
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">POS Code</label>
            <input
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
        </div>
        <div class="flex flex-row gap-3">
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Longitude</label>
            <input
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Latitude</label>
            <input
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
        </div>
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700">
        <div class="border-gray-900/10 pb-2 pt-5">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Kurir
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Opsi ini di buat apabila klinik menggunakan pengiriman online
          </p>
        </div> 
        <div class="mb-5">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status <span class="text-red-600">**</span></label>
          <Switch
            v-model="enabled"
            :class="[enabled ? 'bg-orange-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2']">
            <span class="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
          </Switch>
        </div>
        <div class="grid grid-cols-2 gap-x-5">
          <div
            v-for="(row, index) in couriers"
            :key="index"
            class="grid grid-cols-2 item-between border-b border-gray-200">
            <div class="flex">
              <div class="flex items-center">
                <input
                  :id="`comments-${index}`"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
              </div>
              <div class="item-center pt-1 pl-4 font-medium text-sm">
                <label
                  :for="`comments-${index}`"
                  class="font-medium text-gray-900">{{ row.name }}</label>
                <p class="text-gray-400 text-xs">
                  {{ row.category }}
                </p>
              </div>
            </div>
            <div class="ml-3 text-sm">
              <img
                class="h-12 rounded-full"
                :src="row.img"
                alt="Anteraja">
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

interface ICouriers {
  name: string
  img: string
  category: string
  status: boolean
}

const enabled = ref<boolean>(true)
const couriers = ref<ICouriers[]>([
  {
    name: 'Anteraja',
    img: '/img/couriers/anteraja.png',
    category: 'Instant',
    status: true
  },
  {
    name: 'Gosend',
    img: '/img/couriers/gosend.png',
    category: 'Instant',
    status: true
  },
  {
    name: 'Grab Express',
    img: '/img/couriers/grab_express.png',
    category: 'Instant',
    status: true
  },
  {
    name: 'Borzo',
    img: '/img/couriers/borzo.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'ID Express',
    img: '/img/couriers/idx.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'JNE',
    img: '/img/couriers/jne.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'JNT Express',
    img: '/img/couriers/jnt.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'JNT Cargo',
    img: '/img/couriers/jtcargo.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'Lion Parcel',
    img: '/img/couriers/lion.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'NCS',
    img: '/img/couriers/ncs.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'Ninja Express',
    img: '/img/couriers/ninja.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'Paxel',
    img: '/img/couriers/paxel.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'POS Indonesia',
    img: '/img/couriers/posindonesia.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'RPX',
    img: '/img/couriers/rpx.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'SAP Express',
    img: '/img/couriers/sap.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'Sentral Cargo',
    img: '/img/couriers/sentral.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'Sicepat Express',
    img: '/img/couriers/sicepat.png',
    category: 'Same day',
    status: true
  },
  {
    name: 'Tiki',
    img: '/img/couriers/tiki.png',
    category: 'Same day',
    status: true
  }
])
</script>
