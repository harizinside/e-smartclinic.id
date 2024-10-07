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
          {{ row.code }}
        </td>
        <td class="px-6 py-4">
          {{ row.dateTime }}
        </td>
        <td class="px-6 py-4">
          {{ row.due }}
        </td>
        <td class="px-6 py-4">
          <span class="font-semibold">{{ row.vendor.name }}</span>
        </td>
        <td class="px-6 py-4">
          <span class="font-semibold">{{ $n(row.summary.grandTotal, 'currency') }}</span>
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
import JsonData from '@/utils/purchase-order.json'

interface IData {
  id: number
  code: string
  dateTime: string
  due: number
  vendor: {
    id: number
    name: string
  }
  items: {
    id: number
    name: string
    discounts?: {
      id: number
      name: string
      kind: 'FIXED' | 'PERCENTAGE'
      value: number
    }[]
    price: number
    stock: number
  }[],
  note: string
  summary: {
    total: number
    ppn: number
    grandTotal: number
  },
  approval: {
    value: boolean
    date: string
  }
}

const navs = ref<INavigation[]>([
  { name: 'Inventory', link: '/inventory', active: true },
  { name: 'Purchase Order', link: '/inventory/purchase-order', active: true }
])

const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Code.', type: 'label', order: 'normal' },
  { name: 'Date', type: 'label', order: 'normal' },
  { name: 'Due', type: 'label' },
  { name: 'Vendor', type: 'label' },
  { name: 'Total', type: 'label' },
  { name: 'Aksi', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>({
  "from": 1,
  "to": 10,
  "total": 3,
  "per_page": 10,
  "current_page": 1,
  "last_page": 1,
  "first_page_url": "page=1&limit=10",
  "last_page_url": "page=2&limit=10",
  "next_page_url": "page=2&limit=10",
  "prev_page_url": "page=1&limit=10",
  "path": "http://192.168.3.221:8001/rheinmedika/medical-check/accounts",
  "data": [
    {
      "id": 1,
      "code": "RB-PO24090001",
      "dateTime": "2023-08-23T12:34:56",
      "due": 2,
      "vendor": {
        "id": 1,
        "name": "PT Mahakam Beta Farma"
      },
      "items": [
        {
          "id": 1,
          "name": "Provit-C 605 Mg 6 Kaplet",
          "discounts": [
            {
              "id": 1,
              "name": "Discount Pembelian",
              "kind": "FIXED",
              "value": 5000000
            }
          ],
          "price": 171554,
          "stock": 10
        },
        {
          "id": 2,
          "name": "Collastin Beauty",
          "price": 171554,
          "stock": 10
        },
        {
          "id": 3,
          "name": "Octenilin",
          "price": 171554,
          "stock": 10
        }
      ],
      "note": "",
      "summary": {
        "total": 5000,
        "ppn": 10,
        "grandTotal": 50000
      },
      "approval": {
        "value": true,
        "date": "2023-08-23T12:34:56"
      }
    }
  ]
})

useHead({
  title: 'Purchase Order | e-Smart Clinic'
})
</script>
