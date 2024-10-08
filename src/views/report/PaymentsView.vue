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
                  <CalendarIcon
                    class="h-6 w-6 text-white"
                    aria-hidden="true" />
                </div>
                <p class="ml-16 truncate text-sm font-medium text-gray-500">
                  Pendapatan Harian
                </p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-xl font-semibold text-gray-800">
                  {{ $n(sumValues(tableInfo.data!), 'currency') }}
                </p>
              </dd>
            </div>
            <div
              class="relative overflow-hidden rounded-lg bg-white px-4 border pb-5 pt-5 sm:px-6 sm:pt-6">
              <dt>
                <div class="absolute rounded-md bg-orange-500 p-3">
                  <CalendarDaysIcon
                    class="h-6 w-6 text-white"
                    aria-hidden="true" />
                </div>
                <p class="ml-16 truncate text-sm font-medium text-gray-500">
                  Pendapatan Bulanan
                </p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-xl font-semibold text-gray-800">
                  {{ $n(sumValues(tableInfo.data!), 'currency') }}
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
        :set-table-info="tableInfo"
        @on-export="onExport">
        <VTableColumn
          v-for="(row, index) in tableInfo.data"
          :key="index">
          <td class="px-6 py-4">
            {{ index + tableInfo.from }}
          </td>
          <td class="px-6 py-4">
            {{ $d(Date.parse(row.date), 'medium') }}
          </td>
          <td class="px-6 py-4">
            {{ row.code }}
          </td>
          <td class="px-6 py-4">
            {{ row.patients.name }}
          </td>
          <td class="px-6 py-4">
            {{ row.branch }}
          </td>
          <td class="px-6 py-4">
            {{ $n(row.total, 'currency') }}
          </td>
        </VTableColumn>
      </VTable>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { CalendarIcon, CalendarDaysIcon } from '@heroicons/vue/24/outline'
import type { INavigation } from '@/interfaces/navs'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IPagination } from '@/interfaces/paginations'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import JsonData from '@/utils/report-payments.json'

interface IData {
  id: number
  date: string
  code: string
  patients: {
    id: number
    url: string
    code: string
    name: string
  }
  branch: string
  total: number
}

const navs = ref<INavigation[]>([
  { name: 'Reports', link: '/reports', active: false },
  { name: 'Payments', link: '/reports/payments', active: true }
])
const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Tanggal', type: 'label', order: 'normal'  },
  { name: 'Kode', type: 'label', order: 'normal' },
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'Cabang', type: 'label', order: 'normal'  },
  { name: 'Total', type: 'label' }
])
const tableInfo = ref<IPagination<IData[]>>(JsonData)

const onExport = async (args: string) => {
  console.info(args)
}

const sumValues = (data: IData[]): number => {
  return data.reduce((acc, obj) => acc + obj.total, 0)
}

useHead({
  title: 'Payments (Report) | e-Smart Clinic'
})
</script>
