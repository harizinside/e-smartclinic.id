<template>
  <AdminLayouts>
    <VBreadcrumbNavigation :navs="navs" />
    Purchase Order
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
  { name: 'Purchase Order', link: '/inventory/purchase-order', active: true }
])

useHead({
  title: 'Purchase Order | e-Smart Clinic'
})
</script>
