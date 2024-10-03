<template>
  <div>
    <Menu
      as="div"
      class="relative inline-block text-left pt-3.5">
      <MenuButton class="inline-flex items-center text-white bg-orange-600 border focus:outline-none hover:bg-orange-500 font-medium rounded-lg text-sm px-3 py-2 dark:bg-orange-800 dark:text-white dark:hover:bg-orange-700">
        <span class="font-medium">Exports</span>
        <svg
          class="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4" />
        </svg>
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0">
        <MenuItems class="absolute z-10 left-0 mt-2 w-20 origin-top-right divide-y p-1 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-orange-500 ' : ' dark:text-gray-200',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
              ]"
              @click="$emit('setExport', 'xlxs')">
              XLXS
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-orange-500 ' : ' dark:text-gray-200',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
              ]"
              @click="$emit('setExport', 'csv')">
              CSV
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-orange-500 ' : ' dark:text-gray-200',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
              ]"
              @click="$emit('setExport', 'pdf')">
              PDF
            </button>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem
} from '@headlessui/vue'

defineEmits<{
  setExport: [string]
}>()
</script>

<style></style>
