<template>
  <div>
    <div class="border-gray-900/10 pb-2">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Jam Operational
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Opsi ini di buat apabila klinik menggunakan pengiriman online
      </p>
    </div>
    <form>
      <fieldset class="pt-5">
        <div
          v-for="(row, index) in operationalHours"
          :key="index"
          class="flex flex-row gap-3">
          <div class="mb-5">
            <div class="text-sm leading-6 pt-1">
              <input
                :checked="row.checked"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
            </div>
          </div>
          <div class="mb-5 grow">
            <input
              type="text"
              :value="row.name"
              readonly
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
          </div>
          <div class="mb-5 flex gap-2">
            <input
              type="time"
              :value="row.dateStart"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
            <input
              type="time"
              :value="row.dateEnd"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IOperationalHours {
  checked: boolean
  name: string
  dateStart: string
  dateEnd: string
}

const operationalHours = ref<IOperationalHours[]>([
  {
    checked: true,
    name: 'Senin',
    dateStart: '09:00',
    dateEnd: '17:00'
  }, {
    checked: true,
    name: 'Selasa',
    dateStart: '09:00',
    dateEnd: '17:00'
  }, {
    checked: true,
    name: 'Rabu',
    dateStart: '09:00',
    dateEnd: '17:00'
  }, {
    checked: true,
    name: 'Kamis',
    dateStart: '09:00',
    dateEnd: '17:00'
  }, {
    checked: true,
    name: 'Jumat',
    dateStart: '09:00',
    dateEnd: '17:00'
  }, {
    checked: true,
    name: 'Sabtu',
    dateStart: '09:00',
    dateEnd: '17:00'
  }, {
    checked: true,
    name: 'Minggu',
    dateStart: '09:00',
    dateEnd: '17:00'
  }
])
</script>
