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
          <td class="px-6 py-4">
            {{ row.name }}
          </td>
          <td class="px-6 py-4">
            {{ row.category }}
          </td>
          <td class="px-6 py-4">
            <VBadge
              :type="(row.status) ? 'success': 'danger'"
              :message="(row.status) ? 'Active': 'Disable'" />
          </td>
          <td class="px-6 py-4">
            Rp.{{ new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(row.price) }}
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
          <ServicesComponent />
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
import VDialogDelete from '@/components/VDialogDelete.vue'
import VDrawers from '@/components/VDrawers.vue'
import ServicesComponent from './component/VServices.vue'
import JsonData from '@/utils/services.json'

interface IData {
  id: number
  name: string
  category: string
  status: boolean
  price: number
  createdAt: string
  updatedAt: string
}

const dialogAdditional = ref<boolean>(false)
const dialogDelete = ref<boolean>(false)
const deleted = ref<IDialog>({
  description: 'Rawat Jalan',
  title: 'Konsultasi Sp.DV'
})
const alert = ref<IAlert>()

const columnHeader = ref<IColumnHeader[]>([
  { name: '#' },
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'Category', type: 'label' },
  { name: 'Status', type: 'label' },
  { name: 'Price', type: 'label' },
  { name: 'Aksi', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)

const navs = ref<INavigation[]>([
  { name: 'Add On', link: '/add-on', active: false },
  { name: 'Services', link: '/contacts', active: true }
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
  title: 'Services | e-Smart Clinic'
})
</script>

<style></style>
