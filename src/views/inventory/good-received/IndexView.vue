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
          <span class="font-semibold">{{ row.code }}</span>
        </td>
        <td class="px-6 py-4">
          {{ $d(Date.parse(row.dateTime), 'long') }}
        </td>
        <td class="px-6 py-4">
          {{ row.vendor.name }}
        </td>
        <td class="px-6 py-4">
          {{ row.summary.grandTotal }}
        </td>
        <td class="px-6 py-4">
          <button class="text-blue-600 hover:underline">+{{ row.received.length }}&nbsp;Attachment</button>
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
import JsonData from '@/utils/po-good-received.json'

interface IData {
  id: number
  code: string
  poCode: string
  dateTime: string
  vendor: {
    id: number
    name: string
  },
  summary: {
    total: number
    ppn: number
    grandTotal: number
  },
  received: {
    id: number
    code: string
    value: string
    createId: number
    createdAt: string
  }[],
  createdAt: string
  updatedAt: string
}

const navs = ref<INavigation[]>([
  { name: 'Inventory', link: '/inventory', active: true },
  { name: 'Good Received', link: '/inventory/good-received', active: true }
])

const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Kode', type: 'label', order: 'normal' },
  { name: 'Tanggal', type: 'label', order: 'normal' },
  { name: 'Vendor', type: 'label' },
  { name: 'Total', type: 'label' },
  { name: 'Lampiran', type: 'label' },
  { name: 'Aksi', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)

useHead({
  title: 'Good Received | e-Smart Clinic'
})
</script>
