<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      Rawat Jalan View
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import type { IAlert } from '@/interfaces/alerts'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IDialog } from '@/interfaces/dialogs'
import type { IPagination } from '@/interfaces/paginations'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VDialogFindUsers from '@/components/VDialogFindUsers.vue'
import VDialogSetRole from '@/components/VDialogSetRole.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'
import VAlerts from '@/components/VAlerts.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import JsonData from '@/utils/outpatients.json'

interface IData {
  id: number
  poli: string
  category: string
  schedule: {
    id: number
    name: string
    startTime: string
    endTime: string
  }
  patients: {
    id: number,
    regCode: string
    name: string
    type: string
  }
  status: boolean
  createdAt: string
  updatedAt: string
}

const dialogTransfer = ref<boolean>(false)
const dialogSetRole = ref<boolean>(false)
const dialogDelete = ref<boolean>(false)
const deleted = ref<IDialog>({
  img: 'https://avatar.iran.liara.run/public/girl?usearname=dr.Niken+Anggraeni',
  description: 'nikeng***@***.com',
  title: 'dr. Sista Sandhi Prawista'
})
const alert = ref<IAlert>()

const columnHeader = ref<IColumnHeader[]>([
  { type: 'checkbox' },
  { name: 'Pasien', type: 'label', order: 'normal' },
  { name: 'Waktu Konsultasi', type: 'label' },
  { name: 'Antrian', type: 'label', order: 'normal'  },
  { name: 'Poli', type: 'label' },
  { name: 'Dokter', type: 'label' },
  { name: 'Status', type: 'label' },
  { name: 'Aksi', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)

const navs = ref<INavigation[]>([
  { name: 'Outpatients', link: '/clinic-info', active: true }
])

useHead({
  title: 'Out Patients | e-Smart Clinic'
})
</script>

<style></style>
