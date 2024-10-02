<template>
  <div>
    <div class="w-full">
      <div class="mx-auto w-full rounded-2xl bg-white">
        <Disclosure
          v-for="(row, index) in menus"
          :key="index"
          v-slot="{ open }"
          as="div"
          class="mt-2">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg border px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500/75">
            <span>{{ row.name }}</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-slate-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            <div>
              <div
                v-if="row.privilage.create"
                class="flex items-center mb-2">
                <input
                  :id="`default-checkbox-create-${row.name}`"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  :for="`default-checkbox-create-${row.name}`"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Creates</label>
              </div>
              <div
                v-if="row.privilage.read"
                class="flex items-center mb-2">
                <input
                  :id="`default-checkbox-read-${row.name}`"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  :for="`default-checkbox-read-${row.name}`"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reads</label>
              </div>
              <div
                v-if="row.privilage.update"
                class="flex items-center mb-2">
                <input
                  :id="`default-checkbox-update-${row.name}`"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  :for="`default-checkbox-update-${row.name}`"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Updates</label>
              </div>
              <div
                v-if="row.privilage.delete"
                class="flex items-center mb-2">
                <input
                  :id="`default-checkbox-delete-${row.name}`"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  :for="`default-checkbox-delete-${row.name}`"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Deletes</label>
              </div>
              <div
                v-if="row.privilage.import"
                class="flex items-center mb-2">
                <input
                  :id="`default-checkbox-import-${row.name}`"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  :for="`default-checkbox-import-${row.name}`"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Import</label>
              </div>
              <div
                v-if="row.privilage.export"
                class="flex items-center mb-2">
                <input
                  :id="`default-checkbox-export-${row.name}`"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label
                  :for="`default-checkbox-export-${row.name}`"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Export</label>
              </div>
            </div>
            <div class="pt-4">
              <div
                v-for="(child, idx) in row.children"
                :key="idx"
                class="mb-5 grow">
                <label class="block mb-2 text-sm font-bold text-gray-900 dark:text-white ] ">{{ child.name }}</label>
                <hr class="py-1">
                <div
                  v-if="row.privilage.create"
                  class="flex items-center mb-2">
                  <input
                    :id="`default-checkbox-create-child-${row.name}`"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label
                    :for="`default-checkbox-create-child-${row.name}`"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Creates</label>
                </div>
                <div
                  v-if="row.privilage.read"
                  class="flex items-center mb-2">
                  <input
                    :id="`default-checkbox-read-child-${row.name}`"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label
                    :for="`default-checkbox-read-child-${row.name}`"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reads</label>
                </div>
                <div
                  v-if="row.privilage.update"
                  class="flex items-center mb-2">
                  <input
                    :id="`default-checkbox-update-child-${row.name}`"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label
                    :for="`default-checkbox-update-child-${row.name}`"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Updates</label>
                </div>
                <div
                  v-if="row.privilage.delete"
                  class="flex items-center mb-2">
                  <input
                    :id="`default-checkbox-delete-child-${row.name}`"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label
                    :for="`default-checkbox-delete-child-${row.name}`"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Deletes</label>
                </div>
                <div
                  v-if="row.privilage.import"
                  class="flex items-center mb-2">
                  <input
                    :id="`default-checkbox-import-child-${row.name}`"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label
                    :for="`default-checkbox-import-child-${row.name}`"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Import</label>
                </div>
                <div
                  v-if="row.privilage.export"
                  class="flex items-center mb-2">
                  <input
                    :id="`default-checkbox-export-child-${row.name}`"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label
                    :for="`default-checkbox-export-child-${row.name}`"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Export</label>
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import { LIST_MENU } from '@/menu'
import type { MenuProps } from '@/interfaces/menu'

const menus = ref<MenuProps[]>(LIST_MENU)

</script>

<style></style>
