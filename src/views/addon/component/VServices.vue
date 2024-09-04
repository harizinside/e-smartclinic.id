<template>
  <div>
    <div class="mb-5 grow">
      <label
        for="base-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama <span class="text-red-600">**</span></label>
      <input
        id="base-input"
        type="text"
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
    </div>
    <div class="mb-5 grow">
      <label
        for="base-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category <span class="text-red-600">**</span></label>
      <input
        id="base-input"
        type="text"
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
    </div>
    <div class="mb-5 grow">
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
    <div class="mb-5 grow">
      <label
        for="base-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price <span class="text-red-600">**</span></label>
      <input
        id="base-input"
        type="number"
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)
</script>
