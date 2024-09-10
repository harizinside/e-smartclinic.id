<template>
  <div>
    <div class="border-gray-900/10 pb-2">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Accounting
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Opsi ini di buat apabila klinik menggunakan pengiriman online
      </p>
    </div>
    <div class="grid grid-cols-2 gap-x-5">
      <div
        v-for="(row, index) in couriers"
        :key="index"
        class="grid grid-cols-2 item-between border-b border-gray-200 py-2">
        <div class="flex">
          <div class="flex items-center">
            <input
              :id="`comments-${index}`"
              name="comments"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
          </div>
          <div class="item-center pl-4 font-medium text-sm">
            <label
              :for="`comments-${index}`"
              class="font-medium text-gray-900">{{ row.name }}</label>
          </div>
        </div>
      </div>
    </div>
    <form>
      <fieldset class="pt-5">
        <div class="mb-5 grow">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Account</label>
          <input
            type="text"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required>
        </div>
        <div class="flex flex-row gap-3">
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Provider</label>
            <input
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Account</label>
            <input
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ICouriers {
  name: string
  status: boolean
}

const couriers = ref<ICouriers[]>([
  {
    name: 'Cash',
    status: true
  },
  {
    name: 'QRIS',
    status: true
  },
  {
    name: 'Debit Card',
    status: true
  },
  {
    name: 'Credit Card',
    status: true
  },
  {
    name: 'e-Money',
    status: true
  },
  {
    name: 'e-Wallet',
    status: true
  },
  {
    name: 'Paylater',
    status: true
  }
])
</script>
