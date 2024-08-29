<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AdminLayouts from '@view/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'

const navs = [
  { name: 'Dashboard', link: '/', active: false },
  { name: 'Clinic Info', link: '/clinic-info', active: true }
]

useHead({
  title: 'Contacts Info | e-Smart Clinic'
})
</script>

<style></style>
