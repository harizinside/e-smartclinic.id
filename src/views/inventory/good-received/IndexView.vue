<template>
  <AdminLayouts>
    <VBreadcrumbNavigation :navs="navs" />
    Good Received
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
  { name: 'Good Received', link: '/inventory/good-received', active: true }
])

useHead({
  title: 'Good Received | e-Smart Clinic'
})
</script>
