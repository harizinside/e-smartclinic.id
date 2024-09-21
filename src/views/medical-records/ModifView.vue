<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <h1>This medical record create</h1>
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
import VDialogFindUsers from '@/components/VDialogFindUsers.vue'
import VDialogSetRole from '@/components/VDialogSetRole.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'
import VAlerts from '@/components/VAlerts.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import JsonData from '@/utils/users.json'

interface IData {
  id: number
  img: string
  name: string
  email: string
  position: string
  privilage: string
}

const navs = ref<INavigation[]>([
  { name: 'Medical Record', link: '/admin', active: false },
  { name: 'Create', link: '/admin/users', active: true }
])

useHead({
  title: 'Home | e-Smart Clinic'
})
</script>
