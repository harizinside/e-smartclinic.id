<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <h1>This is an about page</h1>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'

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

useHead({
  title: 'Payments (Report) | e-Smart Clinic'
})
</script>
