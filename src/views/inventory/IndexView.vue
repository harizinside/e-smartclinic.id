<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <VTable
        :show-limit="true"
        :show-additional="false"
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
          <td class="px-6 py-4 font-semibold">
            {{ row.name }}
          </td>
          <td class="px-6 py-4">
            {{ row.sku }}
          </td>
          <td class="px-6 py-4 font-medium">
            {{ $n(row.price, 'currency') }}
          </td>
          <td class="px-6 py-4">
            <button :class="[row.stock < 10 ? 'text-red-700' : 'hover:underline text-blue-700']">
              {{ row.stock }}
            </button>
          </td>
          <td class="px-6 py-4">
            {{ $d(Date.parse(row.updatedAt), 'medium') }}
          </td>
        </VTableColumn>
      </VTable>
    </AdminLayouts>
  </div>
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
import JsonData from '@/utils/inventorys.json'

interface IData {
  id: number
  img: string
  name: string
  sku: string
  price: number
  stock: number
  createdAt: string
  updatedAt: string
}

const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'SKU', type: 'label', order: 'normal' },
  { name: 'Harga', type: 'label', order: 'normal' },
  { name: 'Persediaan', type: 'label', order: 'normal' },
  { name: 'Update Time', type: 'label' }
])
const tableInfo = ref<IPagination<IData[]>>(JsonData)
const navs = ref<INavigation[]>([
  { name: 'Inventorys', link: '/inventory', active: true }
])

useHead({
  title: 'Inventorys | e-Smart Clinic'
})
</script>

<style></style>
