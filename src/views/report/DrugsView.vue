<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <section>
        <div class="pb-4">
          <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
              class="relative overflow-hidden rounded-lg bg-white px-4 border pb-5 pt-5 sm:px-6 sm:pt-6">
              <dt>
                <div class="absolute rounded-md bg-orange-500 p-3">
                  <ArrowTrendingUpIcon
                    class="h-6 w-6 text-white"
                    aria-hidden="true" />
                </div>
                <p class="ml-16 truncate text-sm font-medium text-gray-500">
                  Obatan Terlaris
                </p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-base font-semibold text-gray-800">
                  Damuvit C-1000 30 Kapsul
                </p>
              </dd>
            </div>
            <div
              class="relative overflow-hidden rounded-lg bg-white px-4 border pb-5 pt-5 sm:px-6 sm:pt-6">
              <dt>
                <div class="absolute rounded-md bg-orange-500 p-3">
                  <ArrowTrendingDownIcon
                    class="h-6 w-6 text-white"
                    aria-hidden="true" />
                </div>
                <p class="ml-16 truncate text-sm font-medium text-gray-500">
                  Obatan Kurang Laris
                </p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-base font-semibold text-gray-800">
                  Nature Plus Vitamin C 500 Mg 90 Tablet
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <VTable
        :show-limit="true"
        :show-additional="false"
        :show-export="true"
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
            {{ row.name }}
          </td>
          <td class="px-6 py-4">
            {{ $n(row.price, 'currency') }}
          </td>
          <td class="px-6 py-4">
            {{ row.kuantiti }}
          </td>
          <td class="px-6 py-4">
            {{ $n(row.totalPrice, 'currency') }}
          </td>
          <td class="px-6 py-4">
            {{ $d(Date.parse(row.createdAt), 'medium') }}
          </td>
          <td class="px-6 py-4">
            {{ $d(Date.parse(row.createdAt), 'medium') }}
          </td>
        </VTableColumn>
      </VTable>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/vue/24/outline'
import type { INavigation } from '@/interfaces/navs'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IPagination } from '@/interfaces/paginations'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import JsonData from '@/utils/report-drugs.json'

interface IData {
  id: number
  code: string
  name: string
  price: number
  kuantiti: number
  totalPrice: number
  createdAt: string
  updatedAt: string
}

const navs = ref<INavigation[]>([
  { name: 'Reports', link: '/reports', active: false },
  { name: 'Drugs', link: '/reports/drugs', active: true }
])
const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Kode', type: 'label', order: 'normal'  },
  { name: 'Nama', type: 'label', order: 'normal' },
  { name: 'Harga', type: 'label', order: 'normal' },
  { name: 'Kuantiti', type: 'label' },
  { name: 'Harga Total', type: 'label' },
  { name: 'Tgl Dibuat', type: 'label' },
  { name: 'Tgl Diubah', type: 'label' }
])
const tableInfo = ref<IPagination<IData[]>>(JsonData)

useHead({
  title: 'Drugs (Report) | e-Smart Clinic'
})
</script>
