<template>
  <AdminLayouts>
    <VBreadcrumbNavigation :navs="navs" />
    Approval
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
  { name: 'Approval', link: '/inventory/approval', active: true }
])

useHead({
  title: 'Approval | e-Smart Clinic'
})
</script>
