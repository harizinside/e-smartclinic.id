<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div
        v-if="alert"
        class="py-4">
        <VAlerts
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
        @on-additional="onAdditional"
        @on-filter="setFilters"
        @on-search="onSearch"
        @on-sort="sortTable"
        @on-check="setCheckedAll">
        <VTableColumn
          v-for="(row, index) in tableInfo.data"
          :key="index">
          <td class="px-6 py-4">
            {{ index + tableInfo.from }}
          </td>
          <td
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img
              class="h-10"
              :src="row.img"
              :alt="row.name">
            <div class="ps-3">
              <div class="font-normal">
                {{ row.name }}
              </div>
              <div class="font-normal text-gray-500" />
            </div>
          </td>
          <td class="px-6 py-4 capitalize">
            {{ row.type ?? '-' }}
          </td>
          <td class="px-6 py-4">
            <VBadge
              :type="(row.status) ? 'success' : 'danger'"
              :message="(row.status) ? 'Active' : 'Disable'" />
          </td>
          <td class="px-6 py-4">
            <VHumanDate :datetime="row.type" />
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
          :dialog="deleted"
          @close="dialogDelete=false"
          @process="processDelete" />
      </TransitionRoot>
      <TransitionRoot
        as="template"
        :show="dialogAdditional">
        <VDrawers
          title="Additional"
          @close="dialogAdditional=false">
          <VInsuranceGuarantee />
        </VDrawers>
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
import VBadge from '@/components/VBadge.vue'
import VAlerts from '@/components/VAlerts.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import VHumanDate from '@/components/VHumanDate.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'
import VDrawers from '@/components/VDrawers.vue'
import VInsuranceGuarantee from './component/VInsuranceGuarantee.vue'
import JsonData from '@/utils/insurance-guarantee.json'

interface IData {
  id: number
  name: string
  img: string
  type: string | null
  status: boolean
  createdAt: string
  updatedAt: string
}

const dialogAdditional = ref<boolean>(false)
const dialogDelete = ref<boolean>(false)
const deleted = ref<IDialog>({
  title: 'AXA Mandiri'
})
const alert = ref<IAlert>()

const columnHeader = ref<IColumnHeader[]>([
  { name: '#' },
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'Tipe', type: 'label' },
  { name: 'Status', type: 'label' },
  { name: 'Tgl Dibuat', type: 'label' },
  { name: 'Aksi', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)

const navs = ref<INavigation[]>([
  { name: 'Add On', link: '/add-on', active: false },
  { name: 'Insurance Guarantee', link: '/add-on/insurance-guarantee', active: true }
])

const processDelete = () => {
  dialogDelete.value = false
  alert.value = {
    message: 'Data berhasil dihapus',
    type: 'danger'
  }
}

const sortTable = (args: IColumnHeader) => {
  console.error('asas', args)
}

const setCheckedAll = () => {
  console.error('checked all nih boss')
}

const setLimit = (args: number) => {
  console.error(args)
}

const setFilters = () => {
  console.error('Filter nih bos')
}

const onSearch = (args: string) => {
  console.error(args)
}

const onAdditional = () => {
  dialogAdditional.value = true
}


useHead({
  title: 'Insurance Guarantee | e-Smart Clinic'
})
</script>

<style></style>
