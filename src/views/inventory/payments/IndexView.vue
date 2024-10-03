<template>
  <AdminLayouts>
    <VBreadcrumbNavigation :navs="navs" />
    Payments
  </AdminLayouts>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'

const navs = ref<INavigation[]>([
  { name: 'Inventory', link: '/inventory', active: true },
  { name: 'Payments', link: '/inventory/payments', active: true }
])

useHead({
  title: 'Payments | e-Smart Clinic'
})
</script>
