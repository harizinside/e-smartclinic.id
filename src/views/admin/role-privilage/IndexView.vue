<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="pt-8">
        <VAlerts
          v-if="alert"
          :message="alert!.message"
          :type="alert?.type"
          @close="alert=undefined" />
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
        @on-additional="$router.push('/admin/role-privilages/create')"
        @on-filter="onFilters"
        @on-search="onSearch"
        @on-sort="sortTable"
        @on-check="setCheckedAll">
        <VTableColumn
          v-for="(row, index) in tableInfo.data"
          :key="index">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                :id="`checkbox-${index}`"
                type="checkbox"
                class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label
                for="checkbox-table-search-1"
                class="sr-only">checkbox</label>
            </div>
          </td>
          <th class="px-6 py-4">
            {{ row.name }}
          </th>
          <td class="px-6 py-4">
            <VHumanDate :datetime="row.createAt" />
          </td>
          <td class="px-6 py-4">
            <VHumanDate :datetime="row.updateAt" />
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <button
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </button>
              <button
                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                @click="dialogDelete=true">
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
          panel="label"
          @close="dialogDelete=false"
          @process="processDelete" />
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
import type { IPagination } from '@/interfaces/pagination'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'
import VAlerts from '@/components/VAlerts.vue'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import VHumanDate from '@/components/VHumanDate.vue'
import jsonData from '@/utils/role-privilages.json'

interface IData {
  id: number
  name: string
  createAt: string
  updateAt: string
}

const dialogDelete = ref<boolean>(false)
const alert = ref<IAlert>()

const navs = ref([
  { name: 'Dashboard', link: '/', active: false },
  { name: 'Otoritasi', link: '/admin', active: false },
  { name: 'Hak Akses', link: '/admin/role-privilages', active: true }
])

const columnHeader = ref<IColumnHeader[]>([
  { type: 'checkbox' },
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'Dibuat Pada', type: 'label' },
  { name: 'Diubah Pada', type: 'label' },
  { name: 'Aksi', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(jsonData)

const setLimit = (args: number) => {
  console.error(args)
}

const onFilters = () => {
  console.error('Filter')
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
  title: 'Role & Privilages | e-Smart Clinic'
})
</script>

<style></style>
