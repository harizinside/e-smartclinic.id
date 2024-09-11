<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="pt-2 flex flex-row gap-2">
        <button
          type="button"
          class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
          <ArrowPathIcon
            class="h-5 flex-shrink-0"
            aria-hidden="true" />
        </button>
        <button
          type="button"
          class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
          <ChevronLeftIcon
            class="h-5 flex-shrink-0"
            aria-hidden="true" />
        </button>
        <button
          type="button"
          class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
          <ChevronRightIcon
            class="h-5 flex-shrink-0"
            aria-hidden="true" />
        </button>
      </div>
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
import { ArrowPathIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import VAlerts from '@/components/VAlerts.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import VHumanDate from '@/components/VHumanDate.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'
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
  { name: 'Practice Schedule', link: '/contacts', active: true }
])

const alert = ref<IAlert>()
const dialogDelete = ref<boolean>(false)
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
  title: 'Practice Schedule | e-Smart Clinic'
})
</script>
