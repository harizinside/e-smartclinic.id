<template>
  <tbody>
    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="w-4 p-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-search-3"
            type="checkbox"
            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label
            for="checkbox-table-search-3"
            class="sr-only">checkbox</label>
        </div>
      </td>
      <td class="w-4 p-4">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </td>
      <td
        scope="row"
        class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <img
          class="w-10 h-10 rounded-full"
          src="https://avatar.iran.liara.run/public/girl?username=dr.+Viva+Vinandi"
          alt="Jese image">
        <div class="ps-3">
          <div class="text-base font-semibold">
            dr. Viva Vinandi, M, Biomed (AAM)
          </div>
          <div class="font-normal text-gray-500">
            ayiemulyabakti@***.id
          </div>
        </div>
      </td>
      <td class="px-6 py-4">
        Dokter Estetika
      </td>
      <td class="px-6 py-4">
        Dokter
      </td>
      <td class="px-6 py-4">
        <div class="flex items-center">
          <a
            href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          <button
            class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
            Remove
          </button>
        </div>
      </td>
    </tr>
    <Disclosure
      v-slot="{ open }">
      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input
              id="checkbox-table-search-3"
              type="checkbox"
              class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label
              for="checkbox-table-search-3"
              class="sr-only">checkbox</label>
          </div>
        </td>
        <td class="w-4 p-4">
          <DisclosureButton
            as="button"
            :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </DisclosureButton>
        </td>
        <td
          scope="row"
          class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img
            class="w-10 h-10 rounded-full"
            src="https://avatar.iran.liara.run/public/girl?username=Tesya+Aulya"
            alt="Jese image">
          <div class="ps-3">
            <div class="text-base font-semibold">
              Tesya Aulya
            </div>
            <div class="font-normal text-gray-500">
              testaulia@***.id
            </div>
          </div>
        </td>
        <td class="px-6 py-4">
          Casheer
        </td>
        <td class="px-6 py-4">
          Casheer
        </td>
        <td class="px-6 py-4">
          <div class="flex items-center">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            <button
              class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
              Remove
            </button>
          </div>
        </td>
      </tr>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95">
        <DisclosurePanel
          as="tr"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td
            colspan="6"
            class="p-2">
            Yes! You can purchase a license that you can share with your entire team.
          </td>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </tbody>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/vue'
</script>

<style></style>
