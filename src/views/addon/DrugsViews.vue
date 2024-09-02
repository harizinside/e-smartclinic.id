<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      Area View
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
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VAlerts from '@/components/VAlerts.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import VHumanDate from '@/components/VHumanDate.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'
import JsonData from '@/utils/contacts.json'

interface IData {
  id: number
  name: string
  nik: string
  type: string
  BPJS?: string
  createAt: string
}

const navs = ref<INavigation[]>([
  { name: 'Add On', link: '/add-on', active: false },
  { name: 'Drugs', link: '/add-on/drugs', active: true }
])

useHead({
  title: 'Drugs Area | e-Smart Clinic'
})
</script>

<style></style>
