<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div
        v-if="alert"
        class="pt-8">
        <VAlerts
          :message="alert!.message"
          :type="alert?.type"
          @close="alert = undefined" />
      </div>
      <VTable
        :show-limit="true"
        :show-additional="true"
        :show-filter="true"
        :show-search="true"
        :show-pagination="true"
        :set-column-header="columnHeader"
        :set-table-info="tableInfo"
        @set-limit="setLimit"
        @on-additional="$router.push('/contacts/create')"
        @on-filter="dialogFilter = true"
        @on-search="onSearch"
        @on-sort="sortTable"
        @on-check="setCheckedAll">
        <VTableColumn
          v-for="(row, index) in tableInfo.data"
          :key="index">
          <td class="px-6 py-4">
            {{ tableInfo.from + index }}
          </td>
          <td class="px-6 py-4 text-sm max-w-full">
            {{ row.regCode }}
          </td>
          <td
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img
              class="w-10 h-10 rounded-full"
              :src="row.img"
              :alt="row.name">
            <div class="ps-3">
              <div class="text-base font-semibold">
                {{ row.name }}
              </div>
              <div class="font-normal text-gray-500">
                {{ row.regCode }}
              </div>
            </div>
          </td>
          <td class="px-6 py-4 text-sm">
            {{ row.nik }}
          </td>
          <td
            scope="row"
            class="px-6 py-4">
            <span>
              <div class="ps-3 text-sm">
                <div class="font-semibold">
                  {{ row.type }}
                </div>
                <div class="font-normal text-gray-500">
                  {{ row.BPJS ?? '-' }}
                </div>
              </div>
            </span>
          </td>
          <td class="px-6 py-4">
            <VHumanDate :datetime="row.createAt" />
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </button>
              <button
                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                @click="dialogDelete = true">
                Remove
              </button>
            </div>
          </td>
        </VTableColumn>
      </VTable>
      <TransitionRoot
        as="template"
        :show="dialogDelete">
        <VDialogDelete
          :dialog="deleted"
          @close="dialogDelete = false"
          @process="processDelete" />
      </TransitionRoot>
      <TransitionRoot
        as="template"
        :show="dialogFilter">
        <VDialogFilter @close="dialogFilter = false">
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Large input
            </label>
            <input
              id="large-input"
              type="text"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
        </VDialogFilter>
      </TransitionRoot>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { TransitionRoot } from '@headlessui/vue'
import type { IAlert } from '@/interfaces/alerts'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IDialog } from '@/interfaces/dialogs'
import type { IPagination } from '@/interfaces/paginations'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VAlerts from '@/components/VAlerts.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import VHumanDate from '@/components/VHumanDate.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'
import VDialogFilter from '@/components/VDialogFilter.vue'
import JsonData from '@/utils/contacts.json'

interface IData {
  id: number
  img: string
  regCode: string
  name: string
  nik: string
  type: string
  BPJS?: string
  createAt: string
}

const navs = ref<INavigation[]>([
  { name: 'Contacts', link: '/contacts', active: true }
])

const alert = ref<IAlert>()
const dialogDelete = ref<boolean>(false)
const dialogFilter = ref<boolean>(false)
const deleted = ref<IDialog>({
  img: 'https://avatar.iran.liara.run/public/girl?usearname=dr.Niken+Anggraeni',
  description: 'nikeng***@***.com',
  title: 'dr. Sista Sandhi Prawista'
})

const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Kode Pend.', type: 'label', order: 'normal' },
  { name: 'Nama', type: 'label', order: 'normal' },
  { name: 'NIK', type: 'label' },
  { name: 'Type', type: 'label', order: 'normal' },
  { name: 'Tgl Daftar', type: 'label', order: 'desc' },
  { name: 'Aksi', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)

const setLimit = (args: number) => {
  console.error(args)
}

const onSearch = (args: string) => {
  console.error(args)
}

const sortTable = (args: IColumnHeader) => {
  console.error(args)
}

const setCheckedAll = () => {
  console.error('Check')
}

const processDelete = () => {
  console.error('Delete')
}

useHead({
  title: 'Contacts | e-Smart Clinic'
})
</script>

<style></style>
