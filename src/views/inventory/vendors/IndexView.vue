<template>
  <AdminLayouts>
    <VBreadcrumbNavigation :navs="navs" />
    <VTable
      :show-limit="true"
      :show-additional="true"
      :show-filter="true"
      :show-search="true"
      :show-pagination="true"
      :set-column-header="columnHeader"
      :set-table-info="tableInfo">
      <VTableColumn
        v-for="(row, index) in tableInfo.data"
        :key="index">
        <td class="px-6 py-4">
          {{ index + tableInfo.from }}
        </td>
        <td class="px-6 py-4">
          <span class="font-semibold">{{ row.name }}</span>
        </td>
        <td class="px-6 py-4">
          <a :href="`mailto:${row.email}`" class="text-blue-800 hover:underline">{{ row.email }}</a>
        </td>
        <td class="px-6 py-4">
          <a :href="`tel:+${row.phone}`" class="text-blue-800 hover:underline">+{{ row.phone }}</a>
        </td>
        <td class="px-6 py-4">
          {{ row.bank?.name }}
        </td>
        <td class="px-6 py-4">
          <div class="flex items-center">
            <button
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Edit
            </button>
            <button
              class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
              Remove
            </button>
          </div>
        </td>
      </VTableColumn>
    </VTable>
  </AdminLayouts>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IPagination } from '@/interfaces/paginations'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import JsonData from '@/utils/vendors.json'

interface IData {
  id: number
  img: string
  name: string
  phone: string
  email: string
  bank?: {
    name: string
    account: string
  }
  createdAt: string
  updatedAt: string
}

const navs = ref<INavigation[]>([
  { name: 'Inventory', link: '/inventory', active: true },
  { name: 'Vendors', link: '/inventory/vendors', active: true }
])
const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Name.', type: 'label', order: 'normal' },
  { name: 'Phone', type: 'label', order: 'normal' },
  { name: 'Email', type: 'label' },
  { name: 'Bank', type: 'label' },
  { name: 'Aksi', type: 'label' }
])
const tableInfo = ref<IPagination<IData[]>>(JsonData)

useHead({
  title: 'Vendors | e-Smart Clinic'
})
</script>
